package com.hw9.assignment.baymax.congress.items;

import android.content.Context;
import android.content.Intent;
import android.icu.text.SimpleDateFormat;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.hw9.assignment.baymax.congress.BillDetailActivity;
import com.hw9.assignment.baymax.congress.R;

import org.json.JSONException;
import org.json.JSONObject;

import java.text.ParseException;
import java.util.Calendar;
import java.util.Locale;



public class BillItem extends ClickableItem{
	
    private String bill_id;
    private String short_title;
    private String official_title;
    private String introduced_on;

    public BillItem(JSONObject obj) throws JSONException {
        super(obj.getString("bill_id"));
        bill_id = obj.getString("bill_id");
        short_title = obj.getString("short_title");
        official_title = obj.getString("official_title");
        introduced_on = obj.getString("introduced_on");
    }
    public String getBill_id(){
        return this.bill_id;
    }
    public String getShort_title(){
        return this.short_title;
    }
    public String getOfficial_title() {
        return official_title;
    }
    public String getIntroduced_on(){
        return this.introduced_on;
    }
    public String getFirstLine(){ return this.bill_id;}
    public String getSecondLine() { return short_title.equals("null") ? official_title : short_title; }
    public String getThirdLine(){
        return this.introduced_on;
    }
    private String formatDate(String yyyy_MM_dd) {
        SimpleDateFormat inputFormat = new SimpleDateFormat("yyyy-MM-dd", Locale.ENGLISH);
        SimpleDateFormat outFormat = new SimpleDateFormat("MMM dd yyyy", Locale.ENGLISH);

        Calendar cal = Calendar.getInstance();
        try {
            cal.setTime(inputFormat.parse(this.introduced_on));
        } catch (ParseException pe) {
            System.err.println("cannot parse: " + yyyy_MM_dd + "\n" + pe);
            return yyyy_MM_dd;
        }
        return outFormat.format(cal.getTime());
    }

    @Override
    public View getView(Context context, ViewGroup parent) {    
    	//make to one line form
        //inflate viewgroup
        LayoutInflater inflater = LayoutInflater.from(context);
        View inflatedView = inflater.inflate(R.layout.item_bill, parent, false);
        TextView textView1 = (TextView) inflatedView.findViewById(R.id.bill_textview1);
        TextView textView2 = (TextView) inflatedView.findViewById(R.id.bill_textView2);
        TextView textView3 = (TextView) inflatedView.findViewById(R.id.bill_textView3);
        textView1.setText(getFirstLine().toUpperCase());
        textView2.setText(getSecondLine());
        textView3.setText(formatDate(getIntroduced_on()));

        return inflatedView;
    }
    @Override
    public void clicked(Context context) {
        Intent intentBillDetl = new Intent(context, BillDetailActivity.class);
        intentBillDetl.putExtra("bill_id", getBill_id());
        context.startActivity(intentBillDetl);
    }

}
