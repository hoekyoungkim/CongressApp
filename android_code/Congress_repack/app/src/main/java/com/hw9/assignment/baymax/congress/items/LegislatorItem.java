package com.hw9.assignment.baymax.congress.items;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import com.hw9.assignment.baymax.congress.LegislatorDetailActivity;
import com.hw9.assignment.baymax.congress.R;
import com.squareup.picasso.Picasso;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.Serializable;

/**
 * Created by Hoee on 11/17/2016.
 */

public class LegislatorItem extends ClickableItem implements Serializable{
    private String bioguide_id;
    private String last_name;
    private String first_name;
    private String party;
    private String chamber;
    private String state;
    private String district;
    private String profile_url;

    public LegislatorItem(JSONObject obj) throws JSONException {
        super(obj.getString("bioguide_id"));
        bioguide_id = obj.getString("bioguide_id");
        chamber = obj.getString("chamber");
        first_name = obj.getString("first_name");
        last_name = obj.getString("last_name");
        party = obj.getString("party");
        state = obj.getString("state_name");
        district = obj.getString("district");
        profile_url = "https://theunitedstates.io/images/congress/original/"+this.bioguide_id+".jpg";
    }
    public String getLast_name(){
        return last_name;
    }
    public String getBioguide_id(){
        return bioguide_id;
    }
    public String getFirst_name(){
        return first_name;
    }
    public String getParty(){
        return party;
    }
    public String getChamber() {
        return chamber;
    }
    public String getState(){
        return state;
    }
    public String getDistrict(){
        return district;
    }
    public String getProfile_url() {
        return profile_url;
    }
    public String getFirstLine(){
        return last_name+", "+first_name;
    }
    public String getSecondLine(){
        if(this.district.equals("null")){
            return "("+party.toUpperCase()+")"+state+"- District N.A.";
        }else{
            return "("+party.toUpperCase()+")"+state+"- District "+district;
        }
    }

    @Override
    public View getView(Context context, ViewGroup parent) {    
        //inflate viewgroup
        LayoutInflater inflater = LayoutInflater.from(context);
        View inflatedView = inflater.inflate(R.layout.item_legislator, parent, false);

        TextView textView1 = (TextView) inflatedView.findViewById(R.id.legi_textview1);
        TextView textView2 = (TextView) inflatedView.findViewById(R.id.legi_textview2);

        textView1.setText(getFirstLine());
        textView2.setText(getSecondLine());

        //Initialize ImageView
        ImageView imageView = (ImageView) inflatedView.findViewById(R.id.legi_profile);
        
        //Loading image from below url into imageView
        Picasso.with(context)
                .load(this.profile_url)
                .resize(300, 400)
                .into(imageView);
        return inflatedView;
    }
    @Override
    public void clicked(Context context) {
        Intent intentLegiDetl = new Intent(context, LegislatorDetailActivity.class);
        intentLegiDetl.putExtra("bioguide_id", getBioguide_id());
        context.startActivity(intentLegiDetl);
    }
}
