package com.hw9.assignment.baymax.congress;

/**
 * Created by Hoee on 11/20/2016.
 */

public final class Constants {
    public static final String DefaultPackageString = "com.hw9.assignment.baymax.congress";
    public static enum ItemType {
        Legislators("LegislatorItem"),
        Bills("BillItem"),
        Committees("CommitteeItem"),
        Favorites(null);

        ItemType(String icn) { itemClassName = icn; }
        private String itemClassName;
        public String getItemClassName() { return itemClassName; }
        public String getFullItemClassName() { return DefaultPackageString + ".items." + itemClassName; }
    }
    public static enum TabType {
        LegislatorByState(ItemType.Legislators, "By State", "?reqType=app_d_legis"),
        LegislatorHouse(ItemType.Legislators, "House", "?reqType=app_h_legis"),
        LegislatorSenate(ItemType.Legislators, "Senate", "?reqType=app_s_legis"),

        Active(ItemType.Bills, "Active Bills", "?reqType=app_a_bill"),
        New(ItemType.Bills, "New Bills", "?reqType=app_n_bill"),

        CommitteeHouse(ItemType.Committees, "House", "?reqType=app_h_commit"),
        CommitteeSenate(ItemType.Committees, "Senate", "?reqType=app_s_commit"),
        CommitteeJoint(ItemType.Committees, "Joint", "?reqType=app_j_commit"),

        FavoriteLegislators(ItemType.Favorites, "Legislators", null),
        FavoriteBills(ItemType.Favorites, "Bills", null),
        FavoriteCommittees(ItemType.Favorites, "Committees", null);

        TabType(ItemType t, String ind, String url) { type = t; indicatorName = ind; jsonRequestUrl = "http://baymax.qfa5vcpxdw.us-west-2.elasticbeanstalk.com/" + url; }

        private ItemType type;
        private String indicatorName;
        private String jsonRequestUrl;
        public ItemType getItemType() { return type; }
        public String getIndicatorName() { return indicatorName; }
        public String getJsonRequestUrl() { return jsonRequestUrl; }
    }

    public final class BundleKeys {
        public static final String ItemType = "itemtype";
        public static final String TabType = "tabtype";
    }

}
