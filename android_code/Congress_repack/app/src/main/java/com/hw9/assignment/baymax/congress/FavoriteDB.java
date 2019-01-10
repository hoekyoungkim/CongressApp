package com.hw9.assignment.baymax.congress;

import android.content.Context;

import com.hw9.assignment.baymax.congress.items.BillItem;
import com.hw9.assignment.baymax.congress.items.ClickableItem;
import com.hw9.assignment.baymax.congress.items.CommitteeItem;
import com.hw9.assignment.baymax.congress.items.LegislatorItem;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InvalidClassException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

/**
 * Created by Hoee on 11/20/2016.
 */

public class FavoriteDB implements Serializable{
    private static final long serialVersionUID = 1L;



    public static enum ItemType{ Legislator, Bill, Committee }
    public final static String FILE_NAME = "favorite";

    List<ClickableItem> mLegislators = new ArrayList<ClickableItem>();
    List<ClickableItem> mBills = new ArrayList<ClickableItem>();
    List<ClickableItem> mCommittees = new ArrayList<ClickableItem>();

    public List<ClickableItem> getFavorites(Constants.TabType tabType) {
        switch (tabType) {
            case FavoriteLegislators:
                return getFavorites(ItemType.Legislator);
            case FavoriteBills:
                return getFavorites(ItemType.Bill);
            case FavoriteCommittees:
                return getFavorites(ItemType.Committee);
            default:
                return null;
        }
    }

    public List<ClickableItem> getFavorites(ItemType type) {
        switch (type) {
            case Legislator:
                return mLegislators;
            case Bill:
                return mBills;
            case Committee:
                return mCommittees;
            default:
                System.err.println("unknown type has been fetched from favoriteDB :" + type);
                return null;
        }
    }
    public void addFavorite(ItemType type, ClickableItem item) {
        if (item != null && !contains(type, item.getKey())) getFavorites(type).add(item);
        if(type == ItemType.Legislator){
            Collections.sort(mLegislators, new CustomComparatorLegi());
        }else if(type == ItemType.Bill){
            Collections.sort(mBills, new CustomComparatorBill());
        }else if(type == ItemType.Committee){
            Collections.sort(mCommittees, new CustomComparatorCommi());
        }
    }
    public void delFavorite(ItemType type, String key) {
        getFavorites(type).remove(linearSearch(type, key));
    }
    public boolean contains(ItemType type, String key) {
        return linearSearch(type, key) != null;
    }
    public boolean contains(ItemType type, ClickableItem item) { return contains(type, item.getKey()); }
    private ClickableItem linearSearch(ItemType type, String key) {
        List<ClickableItem> itemList = getFavorites(type);
        for (ClickableItem item : itemList) {
            if(item.getKey().equals(key)) return item;
        }
        return null;
    }

    //File IO
    public static FavoriteDB loadFromFile(Context context) {
        FavoriteDB loaded = null;
        try {
            FileInputStream fis = context.openFileInput(FILE_NAME);
            ObjectInputStream ois = new ObjectInputStream(fis);
            loaded = (FavoriteDB) (ois.readObject());
            ois.close();
            fis.close();
        } catch (FileNotFoundException fnfe) {
            return new FavoriteDB();    //if there's no data file, return new one.
        } catch (InvalidClassException ice) {
            return new FavoriteDB();    //if data is corrupted or unsyced, return new one.
        } catch (Exception e) { //all other exceptions (ClassNotFoundException, IOException)
            e.printStackTrace();
        }
        return loaded;
    }
    public void saveToFile(Context context) {
        try {
            FileOutputStream fos = context.openFileOutput(FILE_NAME, Context.MODE_PRIVATE);
            ObjectOutputStream oos = new ObjectOutputStream(fos);
            oos.writeObject(this);
            oos.close();
            fos.close();
        } catch (IOException ioe) {
            ioe.printStackTrace();
        }
    }
    public class CustomComparatorLegi implements Comparator<ClickableItem> {
        @Override
        public int compare(ClickableItem item1, ClickableItem item2) {
            return (((LegislatorItem)item1).getLast_name().substring(0,1).toUpperCase()).compareTo(((LegislatorItem)item2).getLast_name().substring(0,1).toUpperCase());
        }
    }
    public class CustomComparatorBill implements Comparator<ClickableItem> {
        @Override
        public int compare(ClickableItem item1, ClickableItem item2) {
            return (((BillItem)item2).getIntroduced_on()).compareTo(((BillItem)item1).getIntroduced_on());
        }
    }
    public class CustomComparatorCommi implements Comparator<ClickableItem> {
        @Override
        public int compare(ClickableItem item1, ClickableItem item2) {
            return (((CommitteeItem)item1).getName().toUpperCase()).compareTo(((CommitteeItem)item2).getName().toUpperCase());
        }
    }
}
