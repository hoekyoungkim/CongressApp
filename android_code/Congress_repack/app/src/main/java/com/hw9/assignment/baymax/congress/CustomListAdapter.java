package com.hw9.assignment.baymax.congress;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;

import com.hw9.assignment.baymax.congress.items.ClickableItem;

import java.util.List;

/**
 * Created by Hoee on 11/17/2016.
 */

public class CustomListAdapter extends ArrayAdapter<ClickableItem> {
    public CustomListAdapter(Context context, int resource) {
        super(context, resource);
    }
    public CustomListAdapter(Context context, int resource, List<ClickableItem> items) {
        super(context, resource, items);
    }
    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        ClickableItem item = getItem(position);
        return item.getView(getContext(), parent);
    }
}
