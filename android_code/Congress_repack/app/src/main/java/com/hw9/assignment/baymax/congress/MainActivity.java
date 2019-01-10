package com.hw9.assignment.baymax.congress;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.view.View;
import android.support.design.widget.NavigationView;
import android.support.v4.view.GravityCompat;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.MenuItem;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.ObjectOutputStream;

public class MainActivity extends AppCompatActivity
        implements NavigationView.OnNavigationItemSelectedListener {
    private DrawerLayout drawer;
    private Toolbar toolbar;
    private NavigationView nvDrawer;
    private ActionBarDrawerToggle toggle;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(
                this, drawer, toolbar, R.string.navigation_drawer_open, R.string.navigation_drawer_close);
        drawer.setDrawerListener(toggle);
        toggle.syncState();

        nvDrawer = (NavigationView) findViewById(R.id.nav_view);
        nvDrawer.setNavigationItemSelectedListener(this);

        this.selectDrawerItem(nvDrawer.getMenu().getItem(0));


    }

    @Override
    public void onBackPressed() {
        drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        if (drawer.isDrawerOpen(GravityCompat.START)) {
            drawer.closeDrawer(GravityCompat.START);
        } else {
            super.onBackPressed();
        }
    }


    @Override
    public boolean onNavigationItemSelected(MenuItem item) {
        // Handle navigation view item clicks here.
        int id = item.getItemId();
        selectDrawerItem(item);
        drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        drawer.closeDrawer(GravityCompat.START);

        return true;
    }


    public void selectDrawerItem(MenuItem menuItem) {

    	Constants.ItemType type = null;
        switch(menuItem.getItemId()) {
            case R.id.nav_legislators:
                type = Constants.ItemType.Legislators;
                break;
            case R.id.nav_bills:
                type = Constants.ItemType.Bills;
                break;
            case R.id.nav_committees:
                type = Constants.ItemType.Committees;
                break;
            case R.id.nav_favorites:
                type = Constants.ItemType.Favorites;
                break;
            case R.id.nav_aboutme:
                Intent intentAboutme = new Intent(this, AboutMeActivity.class);
                startActivity(intentAboutme);
                return;
            default:
                System.err.println("unhandled navigation menu has been selected. id:" + menuItem.getItemId());
                return;
        }

        if(type != null) {
            Bundle args = new Bundle();
            args.putString(Constants.BundleKeys.ItemType, type.name());
            Fragment fragment = new TabHostFragment();
            fragment.setArguments(args);

            FragmentManager fragmentManager = getSupportFragmentManager();
            fragmentManager.beginTransaction().replace(R.id.content_main, fragment).commit();
        }

        // Highlight the selected item has been done by NavigationView
        menuItem.setChecked(true);

        // Set action bar title
        setTitle(menuItem.getTitle());
        
        // Close the navigation drawer
        drawer.closeDrawers();
    }
}
