package com.hw9.assignment.baymax.congress;

import android.content.Intent;
import android.os.AsyncTask;
import android.os.Build;
import android.support.annotation.RequiresApi;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.MenuItem;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;

import com.hw9.assignment.baymax.congress.items.BillItem;
import com.hw9.assignment.baymax.congress.items.ClickableItem;
import com.hw9.assignment.baymax.congress.items.CommitteeItem;
import com.hw9.assignment.baymax.congress.items.LegislatorItem;

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
import java.util.List;

public class CommitteeDetailActivity extends AppCompatActivity {
    String committee_id;
    private CommitteeItem mItem = null;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.committee_detl);

        Intent intent = getIntent();
        committee_id = intent.getStringExtra("committee_id");

        FavoriteDB fdb = FavoriteDB.loadFromFile(this);
        ImageView imageView = (ImageView) findViewById(R.id.commidetl_star);
        if(fdb.contains(FavoriteDB.ItemType.Committee, committee_id)){
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
        private String m_committeeID;
        private String m_name;
        private String m_chamber;
        private String m_parent_committee;
        private String m_contact;
        private String m_office;

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
            	
            	// emergency test server address
                //url = new URL("http://104.198.0.197:8080/committees?order=committee_id__asc&committee_id="+committee_id+"&fields=chamber,committee_id,name,parent_committee_id,phone,office");

            	// AWS server address
            	url = new URL("http://baymax.qfa5vcpxdw.us-west-2.elasticbeanstalk.com/?reqType=app_commi_detail&committee_id="+committee_id);

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
                        mItem = new CommitteeItem(arr.getJSONObject(0));
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

            TextView textView = (TextView) findViewById(R.id.commidetl_committeeId);
            textView.setText(m_committeeID.toUpperCase());

            textView = (TextView) findViewById(R.id.commidetl_name);
            textView.setText(m_name);


            textView = (TextView) findViewById(R.id.commidetl_chamber);
            textView.setText(m_chamber.substring(0, 1).toUpperCase() + m_chamber.substring(1));

            //Initialize ImageView
            ImageView imageView = (ImageView) findViewById(R.id.commidetl_chamberImg);
            if(m_chamber.equals("senate")|| m_chamber.equals("joint")) {
                imageView.setBackground(getBaseContext().getDrawable(R.mipmap.ic_s));
            }else if(m_chamber.equals("house")){
                imageView.setBackground(getBaseContext().getDrawable(R.mipmap.ic_h));
            }

            textView = (TextView) findViewById(R.id.commidetl_parentCommittee);
            textView.setText(m_parent_committee);

            textView = (TextView) findViewById(R.id.commidetl_contact);
            textView.setText(m_contact);

            textView = (TextView) findViewById(R.id.commidetl_office);
            textView.setText(m_office);
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

        private void convertDetl (JSONObject obj){

            m_committeeID = formatText(obj, "committee_id");
            m_name = formatText(obj, "name");
            m_chamber = formatText(obj, "chamber");
            m_parent_committee = formatText(obj, "parent_committee_id");
            m_contact = formatText(obj, "phone");
            m_office = formatText(obj, "office");
            return;
        }
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

    public void starClick(View view){

    	FavoriteDB fdb = FavoriteDB.loadFromFile(this);
        ImageView imageView =  (ImageView) findViewById(R.id.commidetl_star);
        if(fdb.contains(FavoriteDB.ItemType.Committee, committee_id)) {
            System.out.println(mItem.getKey() + "deleted");
            fdb.delFavorite(FavoriteDB.ItemType.Committee, mItem.getKey());
            imageView.setBackground(getBaseContext().getDrawable(R.mipmap.ic_star));
        } else {
            System.out.println(mItem.getKey() + "added");
            fdb.addFavorite(FavoriteDB.ItemType.Committee, mItem);
            imageView.setBackground(getBaseContext().getDrawable(R.mipmap.ic_yellowstar));
        }

        fdb.saveToFile(this);
    }
}
