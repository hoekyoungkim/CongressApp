package com.hw9.assignment.baymax.congress;

import android.os.AsyncTask;
import android.os.Build;
import android.os.Bundle;
import android.support.annotation.RequiresApi;
import android.support.v4.app.Fragment;
import android.view.DragEvent;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.animation.AlphaAnimation;
import android.view.animation.Animation;
import android.widget.AdapterView;
import android.widget.LinearLayout;
import android.widget.ListView;
import android.widget.TextView;

import com.hw9.assignment.baymax.congress.items.ClickableItem;
import com.hw9.assignment.baymax.congress.items.LegislatorItem;

import org.json.JSONArray;
import org.json.JSONObject;
import org.w3c.dom.Text;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.lang.reflect.Constructor;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by Hoee on 11/20/2016.
 */

public class TabContentFragment extends Fragment {

    Constants.TabType mTabType;
    ListView mListView;
    CustomListAdapter mAdapter;
    Map<Character, Integer> mapIndex;
    LinearLayout indexLayout;

    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        Bundle args = getArguments();
        if(args != null) {
            mTabType = Constants.TabType.valueOf(args.getString(Constants.BundleKeys.TabType));
        }
        
        
        //1. setup/inflate view & setup listview and its adapter
        View resultView = null;
        View inflatedView = mTabType.getItemType() == Constants.ItemType.Legislators ?
                inflater.inflate(R.layout.fragment_tabcontent, container, false)
                : mTabType == Constants.TabType.FavoriteLegislators ?
                inflater.inflate(R.layout.fragment_tabcontent, container, false)
                : mListView;
                
        mListView = mTabType.getItemType() == Constants.ItemType.Legislators ?
                (ListView)inflatedView.findViewById(R.id.indexedlist)
                : mTabType == Constants.TabType.FavoriteLegislators ?
                (ListView)inflatedView.findViewById(R.id.indexedlist)
                : new ListView(getActivity());

        mAdapter = new CustomListAdapter(getActivity(), mListView.getId());
        mListView.setAdapter(mAdapter);
        mListView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                Animation blinkAnimation = new AlphaAnimation(0.1f, 1.0f);
                blinkAnimation.setDuration(250);
                view.startAnimation(blinkAnimation);
                ((ClickableItem) parent.getItemAtPosition(position)).clicked(parent.getContext());
            }
        });
        
        resultView = mTabType.getItemType() == Constants.ItemType.Legislators ?
                inflatedView
                : mTabType == Constants.TabType.FavoriteLegislators ? inflatedView : mListView;

        //3. other tab-specific initialization logic
        switch(mTabType.getItemType()) {
            case Legislators:
                indexLayout = (LinearLayout)resultView.findViewById(R.id.indexbar);
                indexLayout.setGravity(Gravity.TOP);
              
                //query JSON
                (new TabContentFragment.AsyncRequestJsons()).execute("");
                break;
            case Committees:
            case Bills:
                //query JSON
                (new TabContentFragment.AsyncRequestJsons()).execute("");
                break;
            case Favorites:
                //fetch favorites from data file.

                FavoriteDB fdb = FavoriteDB.loadFromFile(getActivity());
                mAdapter.addAll(fdb.getFavorites(mTabType));
                mAdapter.notifyDataSetChanged();
                if(mTabType == Constants.TabType.FavoriteLegislators) {
                    indexLayout = (LinearLayout) resultView.findViewById(R.id.indexbar);
                    indexLayout.setGravity(Gravity.TOP);
                    createFavoriteIndexBar(resultView);

                }
                break;
        }

        //5. return view
        return resultView;
    }

    // AsyncTask<Params, Progress, Result>.
    //    Params – the type (Object/primitive) you pass to the AsyncTask from .execute()
    //    Progress – the type that gets passed to onProgressUpdate()
    //    Result – the type returns from doInBackground()
    // Any of them can be String, Integer, Void, etc.
    private class AsyncRequestJsons extends AsyncTask<String, Void, List<ClickableItem>> {
        private String server_response;
        @Override
        protected void onPreExecute() {
            super.onPreExecute();
        }
        @RequiresApi(api = Build.VERSION_CODES.KITKAT)
        @Override
        protected List<ClickableItem> doInBackground(String... params) {
            List<ClickableItem> result = new ArrayList<ClickableItem>();
            try {
                URL url = new URL(mTabType.getJsonRequestUrl());
                HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
                urlConnection.setRequestMethod("GET");
                int responseCode = urlConnection.getResponseCode();
                if (responseCode == HttpURLConnection.HTTP_OK) {
                    //read stream
                    StringBuffer response = new StringBuffer();
                    BufferedReader reader = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));
                    String line = "";
                    while ((line = reader.readLine()) != null) {
                        response.append(line);
                    }
                    reader.close();
                    server_response = response.toString();
                    JSONObject obj = new JSONObject(server_response);
                    //System.out.println(obj.getJSONArray("results"));
                    JSONArray arr = new JSONArray (obj.getJSONArray("results").toString());
                    Class<?> clazz = Class.forName(mTabType.getItemType().getFullItemClassName());
                    Constructor<?> ctor = clazz.getConstructor(JSONObject.class);
                    for(int i=0; i<arr.length(); i++){
                        result.add((ClickableItem) (ctor.newInstance(new Object[] { arr.getJSONObject(i) })));
                    }

                    return result;
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
            return null;
        }
        @Override
        protected void onPostExecute(List<ClickableItem> result) {
            super.onPostExecute(result);

            if(mTabType.getItemType() == Constants.ItemType.Legislators) {
                String current = "";
                int currentIndex = 0;
                mapIndex = new LinkedHashMap<Character, Integer>();
                if(mTabType == Constants.TabType.LegislatorByState) {
                    for (int i = 0; i < result.size(); i++) {
                        if (current.equals("")) {
                            current = ((LegislatorItem) result.get(i)).getState().substring(0, 1).toUpperCase();
                            mapIndex.put(current.charAt(0), currentIndex);
                            currentIndex++;
                        } else {
                            //비교후에 put
                            if (!current.equals(((LegislatorItem) result.get(i)).getState().substring(0, 1).toUpperCase())) {
                                current = ((LegislatorItem) result.get(i)).getState().substring(0, 1).toUpperCase();
                                mapIndex.put(current.charAt(0), currentIndex);
                                currentIndex++;
                            }
                        }
                    }
                }else {
                    for (int i = 0; i < result.size(); i++) {
                        if (current.equals("")) {
                            current = ((LegislatorItem) result.get(i)).getLast_name().substring(0, 1).toUpperCase();
                            mapIndex.put(current.charAt(0), currentIndex);
                            currentIndex++;
                        } else {
                            //비교후에 put
                            if (!current.equals(((LegislatorItem) result.get(i)).getLast_name().substring(0, 1).toUpperCase())) {
                                current = ((LegislatorItem) result.get(i)).getLast_name().substring(0, 1).toUpperCase();
                                mapIndex.put(current.charAt(0), currentIndex);
                                currentIndex++;
                            }
                        }
                    }
                }
                /*
                for (char c = 'A'; c <= 'Z'; c++) {
                    //To Do : fill here
                    mapIndex.put(c, -1);
                }*/
                //LinearLayout indexLayout = (LinearLayout)resultView.findViewById(R.id.indexbar);
                for (final char index : mapIndex.keySet()) {
                    TextView oneIndexTextView = new TextView(getContext());
                    oneIndexTextView.setText(Character.toString(index));
                    oneIndexTextView.setOnClickListener(new View.OnClickListener() {
                        @Override
                        public void onClick(View v) {
                            System.out.println(Character.toString(index) + " clicked. go to " + mapIndex.get(index));
                            mListView.setSelection(mapIndex.get(index));
                        }
                    });
                    oneIndexTextView.setTextAlignment(View.TEXT_ALIGNMENT_CENTER);
                    indexLayout.addView(oneIndexTextView);
                }

                for (char index = 'A'; index < 'Z'; index++) {
                    for (int position = 0; position < result.size(); position++) {
                        String indexBase = mTabType == Constants.TabType.LegislatorByState ?
                                        ((LegislatorItem) result.get(position)).getState() : ((LegislatorItem) result.get(position)).getLast_name();
                        if (indexBase.startsWith(Character.toString(index))) {
                            mapIndex.put(index, position);
                            break;
                        }
                    }
                }
                /*
                if (mapIndex.get('Z') < 0)
                    mapIndex.put('Z', result.size() - 1);  //set the last index to end of the list
                //fill not found index's mapIndex
                for (char index : mapIndex.keySet()) {
                    if (mapIndex.get(index) < 0) {
                        for (char i = (char) (index + 1); mapIndex.containsKey(i); i++) {
                            if (mapIndex.get(i) >= 0) {
                                mapIndex.put(index, mapIndex.get(i));
                                break;
                            }
                        }
                    }
                }*/
            }
            mAdapter.addAll(result);
            mAdapter.notifyDataSetChanged();
        }
    }

    @Override
    public void onResume() {
        super.onResume();
        //System.out.println("resumed");
        if(mTabType.getItemType() == Constants.ItemType.Favorites) {
            //if favorite, refresh
            mAdapter.clear();
            FavoriteDB fdb = FavoriteDB.loadFromFile(getActivity());
            mAdapter.addAll(fdb.getFavorites(mTabType));
            mAdapter.notifyDataSetChanged();
            createFavoriteIndexBar(getView());
        }
    }
    public void createFavoriteIndexBar(View resultView){
        if(mTabType == Constants.TabType.FavoriteLegislators){
            FavoriteDB fdb = FavoriteDB.loadFromFile(getActivity());
            String current = "";
            int currentIndex = 0;
            //creating index layout
            mapIndex = new LinkedHashMap<Character, Integer>();
            for(int i=0 ; i< fdb.mLegislators.size(); i++){

                if (current.equals("")) {
                    current = ((LegislatorItem) fdb.mLegislators.get(i)).getLast_name().substring(0, 1).toUpperCase();
                    mapIndex.put(current.charAt(0), currentIndex);
                    currentIndex++;
                } else {
                    //비교후에 put
                    if (!current.equals(((LegislatorItem) fdb.mLegislators.get(i)).getLast_name().substring(0, 1).toUpperCase())) {
                        current = ((LegislatorItem) fdb.mLegislators.get(i)).getLast_name().substring(0, 1).toUpperCase();
                        mapIndex.put(current.charAt(0), currentIndex);
                        currentIndex++;
                    }
                }

            }
            indexLayout.removeAllViews();
            for (final char index : mapIndex.keySet()) {
                indexLayout = (LinearLayout)resultView.findViewById(R.id.indexbar);
                TextView oneIndexTextView = new TextView(getContext());
                oneIndexTextView.setText(Character.toString(index));
                oneIndexTextView.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        System.out.println(Character.toString(index) + " clicked. go to " + mapIndex.get(index));
                        mListView.setSelection(mapIndex.get(index));
                    }
                });
                oneIndexTextView.setTextAlignment(View.TEXT_ALIGNMENT_CENTER);

                indexLayout.addView(oneIndexTextView);
            }


        }
    }

}
