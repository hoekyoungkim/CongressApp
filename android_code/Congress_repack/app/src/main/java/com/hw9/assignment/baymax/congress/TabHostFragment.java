package com.hw9.assignment.baymax.congress;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentTabHost;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

/**
 * Created by Hoee on 11/20/2016.
 */

public class TabHostFragment extends Fragment {
    Constants.ItemType mType;
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        Bundle args = getArguments();
        if(args != null) {
            mType = Constants.ItemType.valueOf(args.getString(Constants.BundleKeys.ItemType));
        }
        // R.layout.fragment_tabs_pager contains the layout as specified in your question
        View rootView = inflater.inflate(R.layout.fragment_tabhost, container, false);

        // Initialise the tab-host
        FragmentTabHost mTabHost = (FragmentTabHost) rootView.findViewById(R.id.tabHost);
        mTabHost.setup(getActivity(), getChildFragmentManager(), R.id.realtabcontent);

        // Initialise this list somewhere with the content that should be displayed
        for (Constants.TabType tab : Constants.TabType.values()) {
            if(tab.getItemType() == mType) {
                Bundle b = new Bundle();
                b.putString(Constants.BundleKeys.TabType, tab.name());
                mTabHost.addTab(mTabHost.newTabSpec(tab.name()).setIndicator(tab.getIndicatorName()), TabContentFragment.class, b);
            }
        }
        return rootView;
    }
}
