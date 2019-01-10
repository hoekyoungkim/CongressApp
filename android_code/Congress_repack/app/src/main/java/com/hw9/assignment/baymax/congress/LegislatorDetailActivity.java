package com.hw9.assignment.baymax.congress;

import android.content.Intent;
import android.icu.text.SimpleDateFormat;
import android.net.Uri;
import android.os.AsyncTask;
import android.os.Build;
import android.os.Bundle;
import android.support.annotation.RequiresApi;
import android.support.v4.app.NavUtils;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.MenuItem;
import android.view.View;
import android.widget.ImageView;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import com.hw9.assignment.baymax.congress.items.ClickableItem;
import com.hw9.assignment.baymax.congress.items.LegislatorItem;
import com.squareup.picasso.Picasso;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.text.ParseException;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Locale;

public class LegislatorDetailActivity extends AppCompatActivity {
    private String bioguide_id;
    private String facebook_url;
    private String twitter_url;
    private String website_url;
    private LegislatorItem mItem = null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.legislator_detl);


        Intent intent = getIntent();
        bioguide_id = intent.getStringExtra("bioguide_id");

        FavoriteDB fdb = FavoriteDB.loadFromFile(this);
        ImageView imageView = (ImageView) findViewById(R.id.legidetl_star);
        if(fdb.contains(FavoriteDB.ItemType.Legislator, bioguide_id)){
            //true
            System.out.println("star true");
            imageView.setBackground(getBaseContext().getDrawable(R.mipmap.ic_yellowstar));
        }else{
            System.out.println("star false");
            imageView.setBackground(getBaseContext().getDrawable(R.mipmap.ic_star));
        }


        imageView = (ImageView) findViewById(R.id.legidetl_profile);
            //Loading image from below url into imageView
            Picasso.with(getBaseContext())
                    .load("https://theunitedstates.io/images/congress/original/"+bioguide_id+".jpg")
                    .resize(300, 400)
                    .into(imageView);

        (new AsyncRequestJsons()).execute("");

    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            // Respond to the action bar's Up/Home button
            case android.R.id.home:
                //NavUtils.navigateUpFromSameTask(this);
                //onBackPressed();
                this.finish();
                return true;
        }
        return super.onOptionsItemSelected(item);
    }

    // AsyncTask<Params, Progress, Result>.
    //    Params – the type (Object/primitive) you pass to the AsyncTask from .execute()
    //    Progress – the type that gets passed to onProgressUpdate()
    //    Result – the type returns from doInBackground()
    // Any of them can be String, Integer, Void, etc.
    private class AsyncRequestJsons extends AsyncTask<String, Void, JSONObject> {
        private String server_response;

        @Override
        protected void onPreExecute() {
            super.onPreExecute();
        }

        @RequiresApi(api = Build.VERSION_CODES.KITKAT)
        @Override
        protected JSONObject doInBackground(String... params) {
            JSONObject result = null;
            URL url;
            HttpURLConnection urlConnection = null;
            try {
            	
            	// emergency test server address
                //url = new URL("http://104.198.0.197:8080/legislators?bioguide_id="+bioguide_id+"&fields=bioguide_id,birthday,chamber,district,fax,first_name,last_name,oc_email,office,party,phone,state,state_name,term_end,term_start,title,website,facebook_id,twitter_id");

            	// AWS server address
            	url = new URL("http://baymax.qfa5vcpxdw.us-west-2.elasticbeanstalk.com/?reqType=app_bio_detail&bioguide_id="+bioguide_id);
                urlConnection = (HttpURLConnection) url.openConnection();
                urlConnection.setRequestMethod("GET");

                int responseCode = urlConnection.getResponseCode();

                if (responseCode == HttpURLConnection.HTTP_OK) {
                    server_response = readStream(urlConnection.getInputStream());
                    JSONObject obj = new JSONObject(server_response);
                    try{
                    	
                        System.out.println(obj.getJSONArray("results"));
                        JSONArray arr = new JSONArray (obj.getJSONArray("results").toString());
                        result = arr.getJSONObject(0);
                        mItem = new LegislatorItem(arr.getJSONObject(0));
                    }catch(JSONException e) {
                        e.printStackTrace();
                    }
                }
            } catch (MalformedURLException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            } catch (JSONException e) {
                e.printStackTrace();
            }
            return result;
        }

        private String formatText(JSONObject obj, String key) {
            String formatted = null;
            if (!obj.has(key) || obj.isNull(key)) return "N.A.";
            try {
                formatted = obj.getString(key);
            } catch (JSONException je) {
            }
            return formatted;
        }
        private String formatUrl(JSONObject obj, String key, String prefix) {
            String formatted = prefix;
            if (!obj.has(key) || obj.isNull(key)) return null;
            try {
                formatted += obj.getString(key);
            } catch (JSONException je) {
            }
            return formatted;
        }

        @Override
        protected void onPostExecute(JSONObject result) {
            super.onPostExecute(result);
            TextView textView = (TextView) findViewById(R.id.legidetl_name);
            textView.setText(formatText(result, "title") +", "+formatText(result, "last_name")+", "+formatText(result, "first_name"));

            textView = (TextView) findViewById(R.id.legidetl_email);
            textView.setText(formatText(result, "oc_email"));

            textView = (TextView) findViewById(R.id.legidetl_chamber);
            String chamber = formatText(result, "chamber");
            textView.setText(chamber.substring(0, 1).toUpperCase() + chamber.substring(1));

            textView = (TextView) findViewById(R.id.legidetl_contact);
            textView.setText(formatText(result, "phone"));


            String start = formatText(result, "term_start");
            String end = formatText(result, "term_end");
            textView = (TextView) findViewById(R.id.legidetl_start_term);
            textView.setText(formatDate(start));

            textView = (TextView) findViewById(R.id.legidetl_end_term);
            textView.setText(formatDate(end));

            textView = (TextView) findViewById(R.id.legidetl_office);
            textView.setText(formatText(result, "office"));

            textView = (TextView) findViewById(R.id.legidetl_state);
            textView.setText(formatText(result, "state_name"));

            textView = (TextView) findViewById(R.id.legidetl_fax);
            textView.setText(formatText(result, "fax"));

            textView = (TextView) findViewById(R.id.legidetl_birthday);
            textView.setText(formatDate(formatText(result, "birthday")));

            //Initialize ImageView
            textView = (TextView) findViewById(R.id.legidetl_party);
            ImageView imageView = (ImageView) findViewById(R.id.legidetl_partyImg);
            String party = formatText(result, "party");
            if(party.equals("R")){
                textView.setText("Republican");
                imageView.setBackground(getBaseContext().getDrawable(R.mipmap.ic_r));
            }else if(party.equals("D")){
                textView.setText("Democratic");
                imageView.setBackground(getBaseContext().getDrawable(R.mipmap.ic_d));
            }else if(party.equals("I")){
                textView.setText("Independent");
                imageView.setBackground(getBaseContext().getDrawable(R.mipmap.ic_i));
            }else {
                textView.setText("N.A.");
            }

            int percentage = getProgress(start, end);
            ProgressBar progressBar = (ProgressBar) findViewById(R.id.legidetl_progress);
            progressBar.setProgress(getProgress(start, end));
            progressBar.setScaleY(3f);

            textView = (TextView) findViewById(R.id.legidetl_progressText);
            textView.setText(percentage+"%");


            //private String facebook_url;
            facebook_url = formatUrl(result, "facebook_id", "http://www.facebook.com/");
            //private String twitter_url;
            twitter_url = formatUrl(result, "twitter_id", "http://www.twitter.com/");
            //private String website_url;
            website_url = formatUrl(result, "website", "");

        }

        private String readStream(InputStream in) {
            BufferedReader reader = null;
            StringBuffer response = new StringBuffer();
            try {
                reader = new BufferedReader(new InputStreamReader(in));
                String line = "";
                while ((line = reader.readLine()) != null) {
                    response.append(line);
                }
            } catch (IOException e) {
                e.printStackTrace();
            } finally {
                if (reader != null) {
                    try {
                        reader.close();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            }
            return response.toString();
        }

    }
    private String formatDate(String yyyy_MM_dd) {
        if (yyyy_MM_dd == null) return null;
        SimpleDateFormat inputFormat = new SimpleDateFormat("yyyy-MM-dd", Locale.ENGLISH);
        SimpleDateFormat outFormat = new SimpleDateFormat("MMM dd yyyy", Locale.ENGLISH);

        Calendar cal = Calendar.getInstance();
        try {
            cal.setTime(inputFormat.parse(yyyy_MM_dd));
        } catch (ParseException pe) {
            System.err.println("cannot parse: " + yyyy_MM_dd + "\n" + pe);
            return yyyy_MM_dd;
        }
        return outFormat.format(cal.getTime());
    }
    public int getDiff(Date startDate, Date endDate){

        //milliseconds
        long different = endDate.getTime() - startDate.getTime();

        System.out.println("startDate : " + startDate);
        System.out.println("endDate : "+ endDate);
        System.out.println("different : " + different);

        long secondsInMilli = 1000;
        long minutesInMilli = secondsInMilli * 60;
        long hoursInMilli = minutesInMilli * 60;
        long daysInMilli = hoursInMilli * 24;

        long elapsedDays = different / daysInMilli;
        System.out.println("different : " + elapsedDays);
        return (int)elapsedDays;

    }
    private int getProgress(String start_date, String end_date){
        SimpleDateFormat inputFormat = new SimpleDateFormat("yyyy-MM-dd", Locale.ENGLISH);

        try {
            Date startDate = inputFormat.parse(start_date);
            Date endDate = inputFormat.parse(end_date);
            Date today = new Date();
            int whole = getDiff(startDate, endDate);
            int part = getDiff(startDate, today );
            return (int) Math.round(((float)part/whole)*100);
        } catch (ParseException e) {
            e.printStackTrace();
            return 0;
        }
    }
    public void starClick(View view){
        //System.out.println("star clikced");
        FavoriteDB fdb = FavoriteDB.loadFromFile(this);
        ImageView imageView =  (ImageView) findViewById(R.id.legidetl_star);
        if(fdb.contains(FavoriteDB.ItemType.Legislator, mItem)) {
            System.out.println(mItem.getKey() + "deleted");
            fdb.delFavorite(FavoriteDB.ItemType.Legislator, mItem.getKey());
            imageView.setBackground(getBaseContext().getDrawable(R.mipmap.ic_star));
        } else {
            System.out.println(mItem.getKey() + "added");
            fdb.addFavorite(FavoriteDB.ItemType.Legislator, mItem);
            imageView.setBackground(getBaseContext().getDrawable(R.mipmap.ic_yellowstar));
        }


        fdb.saveToFile(this);
    }
    public void fbClick(View view){
        System.out.println("fb clikced");
        System.out.println(facebook_url);

        if(facebook_url == null){
            showToast("This Legislator does not have facebook page.");
        }else{
            Intent i = new Intent(Intent.ACTION_VIEW);
            Uri u = Uri.parse(facebook_url);
            i.setData(u);
            startActivity(i);
        }
    }
    public void twClick(View view){
        System.out.println("tw clikced");
        System.out.println(twitter_url);

        if(twitter_url == null){
            showToast("This Legislator does not have twitter page.");
        }else{
            Intent i = new Intent(Intent.ACTION_VIEW);
            Uri u = Uri.parse(twitter_url);
            i.setData(u);
            startActivity(i);
        }
    }
    public void wsClick(View view){
        System.out.println("ws clikced");
        System.out.println(website_url);

        if(website_url == null){
            showToast("This Legislator does not have website page.");
        }else{
            Intent i = new Intent(Intent.ACTION_VIEW);
            Uri u = Uri.parse(website_url);
            i.setData(u);
            startActivity(i);
        }

    }
    public void showToast(String text){
        Toast toast = Toast.makeText(this, "message", Toast.LENGTH_SHORT);
        toast.setText(text);
        toast.show();
    }
}
