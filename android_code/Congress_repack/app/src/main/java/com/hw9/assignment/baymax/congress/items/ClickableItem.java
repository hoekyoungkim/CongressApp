package com.hw9.assignment.baymax.congress.items;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;

import java.io.Serializable;


public abstract class ClickableItem implements Serializable{
    String mKey = null;

    public ClickableItem(String key) {
        //setClickable(true);
        mKey = key;
    }

    public String getKey() { return mKey; }

    public abstract View getView(Context context, ViewGroup parent);
    public abstract void clicked(Context context);
}
