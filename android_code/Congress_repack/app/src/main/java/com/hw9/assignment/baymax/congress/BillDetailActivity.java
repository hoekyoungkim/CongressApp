package com.hw9.assignment.baymax.congress;

import android.content.Intent;
import android.icu.text.SimpleDateFormat;
import android.net.Uri;
import android.os.AsyncTask;
import android.os.Build;
import android.support.annotation.RequiresApi;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.MenuItem;
import android.view.View;
import android.view.Window;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.hw9.assignment.baymax.congress.items.BillItem;
import com.hw9.assignment.baymax.congress.items.ClickableItem;
import com.hw9.assignment.baymax.congress.items.CommitteeItem;

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
import java.util.List;
import java.util.Locale;

public class BillDetailActivity extends AppCompatActivity {
    private String bill_id;
    private String congressUrl;
    private String billUrl;
    private BillItem mItem = null;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.bill_detl);

        Intent intent = getIntent();
        bill_id = intent.getStringExtra("bill_id").toLowerCase();
        FavoriteDB fdb = FavoriteDB.loadFromFile(this);
        ImageView imageView = (ImageView) findViewById(R.id.billdetl_star);
        if(fdb.contains(FavoriteDB.ItemType.Bill, bill_id)){
            //true
            System.out.println("star true");
            imageView.setBackground(getBaseContext().getDrawable(R.mipmap.ic_yellowstar));
        }else{
            System.out.println("star false");
            imageView.setBackground(getBaseContext().getDrawable(R.mipmap.ic_star));
        }

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
    private class AsyncRequestJsons extends AsyncTask<String, Void, List<ClickableItem>> {
        private String server_response;
        private String m_bill_id;
        private String m_bill_type;
        private String m_sponsor_title;
        private String m_sponsor_last_name;
        private String m_sponsor_first_name;
        private String m_introduced_on;
        private String m_chamber;
        private String m_status;
        private String m_congress_url;
        private String m_official_title;
        private String m_short_title;
        private String m_version_status;
        private String m_url;

        @Override
        protected void onPreExecute() {
            super.onPreExecute();

        }

        @RequiresApi(api = Build.VERSION_CODES.KITKAT)
        @Override
        protected List<ClickableItem> doInBackground(String... params) {
            URL url;
            HttpURLConnection urlConnection = null;
            try {
            	//emergency test server address
                //url = new URL("http://104.198.0.197:8080/bills?bill_id="+bill_id+"&fields=bill_id,bill_type,chamber,committee_ids,history.active,history.enacted,introduced_on,last_version.urls.pdf,last_version.version_name,official_title,short_title,urls.congress,sponsor.first_name,sponsor.last_name,sponsor.title");

            	//AWS server address
            	url = new URL("http://baymax.qfa5vcpxdw.us-west-2.elasticbeanstalk.com/?reqType=app_bill_detail&bill_id="+bill_id);

                urlConnection = (HttpURLConnection) url.openConnection();
                urlConnection.setRequestMethod("GET");

                int responseCode = urlConnection.getResponseCode();

                if (responseCode == HttpURLConnection.HTTP_OK) {
                    server_response = readStream(urlConnection.getInputStream());
                    JSONObject obj = new JSONObject(server_response);
                    try{
                        System.out.println(obj.getJSONArray("results"));
                        JSONArray arr = new JSONArray (obj.getJSONArray("results").toString());
                        convertDetl(arr.getJSONObject(0));
                        mItem = new BillItem(arr.getJSONObject(0));
                    }catch(JSONException e){
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

            return null;
        }

        @Override
        protected void onPostExecute(List<ClickableItem> result) {
            super.onPostExecute(result);

            TextView textView = (TextView) findViewById(R.id.billdetl_billId);
            textView.setText(m_bill_id.toUpperCase());

            textView = (TextView) findViewById(R.id.billdetl_title);
            if(m_short_title == null){
                textView.setText(m_short_title);
            }else{
                textView.setText(m_official_title);
            }

            textView = (TextView) findViewById(R.id.billdetl_billType);
            textView.setText(m_bill_type.toUpperCase());

            textView = (TextView) findViewById(R.id.billdetl_chamber);
            textView.setText(m_chamber.substring(0, 1).toUpperCase() + m_chamber.substring(1));

            textView = (TextView) findViewById(R.id.billdetl_sponsor);
            textView.setText(m_sponsor_title+", "+m_sponsor_last_name+", "+m_sponsor_first_name);

            textView = (TextView) findViewById(R.id.billdetl_status);
            if(m_status.equals("true")){
                textView.setText("Active");
            }else{
                textView.setText("New");
            }

            textView = (TextView) findViewById(R.id.billdetl_introducedOn);
            textView.setText(formatDate(m_introduced_on));

            textView = (TextView) findViewById(R.id.billdetl_congressUrl);
            textView.setText(m_congress_url);

            textView = (TextView) findViewById(R.id.billdetl_versionStatus);
            textView.setText(m_version_status);

            textView = (TextView) findViewById(R.id.billdetl_billUrl);
            textView.setText(m_url);


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

        private void convertDetl (JSONObject obj) throws JSONException{

            JSONObject sponsor = new JSONObject( obj.getString("sponsor"));
            JSONObject history = new JSONObject( obj.getString("history"));
            JSONObject urls = new JSONObject( obj.getString("urls"));
            JSONObject last_version = new JSONObject(obj.getString("last_version"));
            JSONObject last_version_urls = new JSONObject(last_version.getString("urls"));

            m_bill_id = formatText(obj, "bill_id");
            m_bill_type = formatText(obj, "bill_type");
            m_sponsor_title = formatText(sponsor, "title");
            m_sponsor_last_name = formatText(sponsor, "last_name");
            m_sponsor_first_name = formatText(sponsor, "first_name");
            m_introduced_on = formatText(obj, "introduced_on");
            m_chamber = formatText(obj, "chamber");
            m_status = formatText(history, "active");
            m_congress_url = formatText(urls, "congress");
            m_official_title = formatText(obj, "official_title");
            m_short_title = formatText(obj, "short_title");
            m_version_status = formatText(last_version, "version_name");
            m_url = formatText(last_version_urls, "pdf");

            congressUrl = m_congress_url;
            billUrl = m_url;


            return;

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
    }

    public void congressUrlClick(View view){
        System.out.println("congressUrl clikced");
        System.out.println(congressUrl);

        if(congressUrl == null){
            showToast("This bill does not have congress url.");
        }else{
            Intent i = new Intent(Intent.ACTION_VIEW);
            Uri u = Uri.parse(congressUrl);
            i.setData(u);
            startActivity(i);
        }
    }
    public void billUrlClick(View view){
        System.out.println("billUrl clikced");
        System.out.println(billUrl);

        if(billUrl == null){
            showToast("This bill does not have pdf url.");
        }else{
            Intent i = new Intent(Intent.ACTION_VIEW);
            Uri u = Uri.parse(billUrl);
            i.setData(u);
            startActivity(i);
        }
    }
    public void showToast(String text){
        Toast toast = Toast.makeText(this, "message", Toast.LENGTH_SHORT);
        toast.setText(text);
        toast.show();
    }
    public void starClick(View view){
        //System.out.println("star clikced");
        FavoriteDB fdb = FavoriteDB.loadFromFile(this);
        ImageView imageView =  (ImageView) findViewById(R.id.billdetl_star);

        if(fdb.contains(FavoriteDB.ItemType.Bill, bill_id)) {
            System.out.println(mItem.getKey() + "deleted");
            fdb.delFavorite(FavoriteDB.ItemType.Bill, bill_id);
            imageView.setBackground(getBaseContext().getDrawable(R.mipmap.ic_star));
        } else {
            System.out.println(mItem.getKey() + "added");
            fdb.addFavorite(FavoriteDB.ItemType.Bill, mItem);
            imageView.setBackground(getBaseContext().getDrawable(R.mipmap.ic_yellowstar));
        }


        fdb.saveToFile(this);
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
}
