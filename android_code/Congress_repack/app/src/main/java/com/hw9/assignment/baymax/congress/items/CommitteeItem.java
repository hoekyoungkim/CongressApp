package com.hw9.assignment.baymax.congress.items;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.hw9.assignment.baymax.congress.CommitteeDetailActivity;
import com.hw9.assignment.baymax.congress.R;

import org.json.JSONException;
import org.json.JSONObject;


public class CommitteeItem extends ClickableItem {

    private String committee_id;
    private String name;
    private String chamber;

    public CommitteeItem(JSONObject obj) throws JSONException {
        super(obj.getString("committee_id"));
        committee_id = obj.getString("committee_id");
        name = obj.getString("name");
        chamber = obj.getString("chamber");
    }

    public String getCommittee_id(){
        return this.committee_id;
    }
    public String getName(){
        return this.name;
    }
    public String getChamber(){

        return this.chamber.substring(0,1).toUpperCase()+this.chamber.substring(1);
    }


    @Override
    public View getView(Context context, ViewGroup parent) { 
    	//make to one line form
        //inflate viewgroup
        LayoutInflater inflater = LayoutInflater.from(context);
        View inflatedView = inflater.inflate(R.layout.item_committee, parent, false);

        TextView textView1 = (TextView) inflatedView.findViewById(R.id.commi_textview1);
        TextView textView2 = (TextView) inflatedView.findViewById(R.id.commi_textView2);
        TextView textView3 = (TextView) inflatedView.findViewById(R.id.commi_textView3);
        textView1.setText(getCommittee_id().toUpperCase());
        textView2.setText(getName());
        textView3.setText(getChamber());

        return inflatedView;
    }
    @Override
    public void clicked(Context context) {
        Intent intentCommiDetl = new Intent(context, CommitteeDetailActivity.class);
        intentCommiDetl.putExtra("committee_id", getCommittee_id());
        context.startActivity(intentCommiDetl);
    }
}
