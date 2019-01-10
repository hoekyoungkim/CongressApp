
var statesArray = [ "All States", "Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Island", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "Puerto Rico", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virgin Island", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];


$(document).ready(function(){

    $('#content').css("width", "84%");

	makeCalls();

    angular.element($("#wrapper")).scope().updateLegiFavList();
    angular.element($("#wrapper")).scope().updateBillFavList();
    angular.element($("#wrapper")).scope().updateCommiFavList();

	$("#navToggleBtn").click(function(){
    	if($("#nav").css("display") == "none"){
    		$("#nav").css("display", "inline-block");
    		$('#content').css("width", "84%");
    	}else{
    		$("#nav").css("display", "none");
    		$('#content').css("width", "100%");	
    	}
    });
    

});	

function makeCalls(){

	$.ajax({

		url: "http://baymax.qfa5vcpxdw.us-west-2.elasticbeanstalk.com/",
		//parameter list
		data: { "reqType": "d_legis"},
		type: 'GET',
		dataType: 'json',
		success: function(data, status, xhr){
		
			//parse the output
			angular.element($("#wrapper")).scope().setData("d_legis", data);
			console.log("data loaded d_legis");
		},
		error: function(xhr, status, error){
			//parse the error
			console.log("error d_legis");
		}


	});
	$.ajax({

		url: "http://baymax.qfa5vcpxdw.us-west-2.elasticbeanstalk.com/",
		//parameter list
		data: { "reqType": "h_legis"},
		type: 'GET',
		dataType: 'json',
		success: function(data, status, xhr){
		
			//parse the output
			angular.element($("#wrapper")).scope().setData("h_legis", data);
			console.log("data loaded h_legis");
		},
		error: function(xhr, status, error){
			//parse the error

			console.log("error h_legis");			
		}


	});
	$.ajax({

		url: "http://baymax.qfa5vcpxdw.us-west-2.elasticbeanstalk.com/",
		//parameter list
		data: { "reqType": "s_legis"},
		type: 'GET',
		dataType: 'json',
		success: function(data, status, xhr){
		
			//parse the output
			angular.element($("#wrapper")).scope().setData("s_legis", data);
			console.log("data loaded s_legis");

		},
		error: function(xhr, status, error){
			//parse the error

			console.log("error s_legiss");			
		}


	});
	$.ajax({

		url: "http://baymax.qfa5vcpxdw.us-west-2.elasticbeanstalk.com/",
		//parameter list
		data: { "reqType": "a_bill"},
		type: 'GET',
		dataType: 'json',
		success: function(data, status, xhr){
		
			//parse the output
			angular.element($("#wrapper")).scope().setData("a_bill", data);
			console.log("data loaded a_bill");

		},
		error: function(xhr, status, error){
			//parse the error

			console.log("error a_bill");			
		}


	});

	$.ajax({

		url: "http://baymax.qfa5vcpxdw.us-west-2.elasticbeanstalk.com/",
		//parameter list
		data: { "reqType": "n_bill"},
		type: 'GET',
		dataType: 'json',
		success: function(data, status, xhr){
		
			//parse the output
			angular.element($("#wrapper")).scope().setData("n_bill", data);
			console.log("data loaded n_bill");

		},
		error: function(xhr, status, error){
			//parse the error

			console.log("error n_bill");			
		}


	});
	$.ajax({

		url: "http://baymax.qfa5vcpxdw.us-west-2.elasticbeanstalk.com/",
		//parameter list
		data: { "reqType": "h_commit"},
		type: 'GET',
		dataType: 'json',
		success: function(data, status, xhr){
		
			//parse the output
			angular.element($("#wrapper")).scope().setData("h_commit", data);
			console.log("data loaded h_commit");

		},
		error: function(xhr, status, error){
			//parse the error

			console.log("error h_commit");			
		}


	});
	$.ajax({

		url: "http://baymax.qfa5vcpxdw.us-west-2.elasticbeanstalk.com/",
		//parameter list
		data: { "reqType": "s_commit"},
		type: 'GET',
		dataType: 'json',
		success: function(data, status, xhr){
		
			//parse the output
			angular.element($("#wrapper")).scope().setData("s_commit" ,data);
			console.log("data loaded s_commit");

		},
		error: function(xhr, status, error){
			//parse the error

			console.log("error s_commit");			
		}


	});
	$.ajax({

		url: "http://baymax.qfa5vcpxdw.us-west-2.elasticbeanstalk.com/",
		//parameter list
		data: { "reqType": "j_commit"},
		type: 'GET',
		dataType: 'json',
		success: function(data, status, xhr){
		
			//parse the output
			angular.element($("#wrapper")).scope().setData("j_commit", data);
			console.log("data loaded j_commit");

		},
		error: function(xhr, status, error){
			//parse the error

			console.log("error j_commit");			
		}


	});
}


function loadLegisDetl(param_bioguideId, type){


		$.ajax({

		url: "http://baymax.qfa5vcpxdw.us-west-2.elasticbeanstalk.com/",
		//parameter list
		data: { "reqType": "bio_detail", "bioguide_id": param_bioguideId},
		type: 'GET',
		dataType: 'json',

		success: function(data, status, xhr){
			console.log("data loaded bioguide_detl");

			if(type == "notFavr"){				
				angular.element($("#wrapper")).scope().setData("legiDetl", data);
			}else{
				angular.element($("#wrapper")).scope().setData("legiFavrDetl", data);
			}			
		},
		error: function(xhr, status, error){
			//parse the error
			console.log("error bioguide_detl");
		}


	});
}

function loadBillDetl(param_billId, type){

		$.ajax({

		url: "http://baymax.qfa5vcpxdw.us-west-2.elasticbeanstalk.com/",
		//parameter list
		data: { "reqType": "bill_detail", "bill_id": param_billId},
		type: 'GET',
		dataType: 'json',

		success: function(data, status, xhr){
			console.log("data loaded bill_detl");
			if(type == "notFavr"){				
				angular.element($("#wrapper")).scope().setData("billDetl", data);
			}else{
				angular.element($("#wrapper")).scope().setData("billFavrDetl", data);
			}	
		},
		error: function(xhr, status, error){
			//parse the error
			console.log("error bill_detl");
		}


	});	
}

function legiStarCall(bioguide_id, party, name, chamber, state, email){

	console.log("legiStarCall "+bioguide_id+" "+party+" "+name+" "+chamber+" "+state+" "+email);
	console.log(localStorage.getItem(bioguide_id));
	if(localStorage.getItem(bioguide_id)== null){
		//add to favorite list
		localStorage.setItem(bioguide_id, "");
		var newLegi = {
				[bioguide_id]: {
					'bioguide_id': bioguide_id,
					'party': party,
					'name': name,
					'chamber': chamber,
					'state': state,
					'email': email
				}
			};

		if(localStorage.getItem("legiList")== null){ //firstItem
			console.log("firstItem");
			localStorage.setItem("legiList", JSON.stringify(newLegi));
		}else{
			//merge
			console.log("merge");

			var oldLegi = JSON.parse(localStorage.getItem("legiList"));
			localStorage.setItem("legiList", JSON.stringify(Object.assign(newLegi, oldLegi)));
		}		

	}else{
		//delete from favorite list
		console.log("delete from favorite list");

		localStorage.removeItem(bioguide_id);
		var tempList = JSON.parse(localStorage.getItem("legiList"));
		delete tempList[bioguide_id];
		localStorage.setItem("legiList", JSON.stringify(tempList));
//		console.log("temp List: "+tempList);
		

	}
	angular.element($("#wrapper")).scope().updateLegiFavList();

}

function billStarCall(bill_id, bill_type, title, chamber, introduced_on, sponsor){

	console.log("billStarCall "+bill_id+" "+bill_type+" "+title+" "+chamber+" "+introduced_on+" "+sponsor);
	console.log(localStorage.getItem(bill_id));
	if(localStorage.getItem(bill_id)== null){
		//add to favorite list
		localStorage.setItem(bill_id, "");
		var newBill = {
				[bill_id]: {
					'bill_id': bill_id,
					'bill_type': bill_type,
					'title': title,
					'chamber': chamber,
					'introduced_on': introduced_on,
					'sponsor': sponsor
				}
			};

		if(localStorage.getItem("billList")== null){ //firstItem
			console.log("firstItem");
			localStorage.setItem("billList", JSON.stringify(newBill));
		}else{
			//merge
			console.log("merge");

			var oldBill = JSON.parse(localStorage.getItem("billList"));
			localStorage.setItem("billList", JSON.stringify(Object.assign(newBill, oldBill)));
		}		

	}else{
		//delete from favorite list
		console.log("delete from favorite billList");

		localStorage.removeItem(bill_id);
		var tempList = JSON.parse(localStorage.getItem("billList"));
		delete tempList[bill_id];
		localStorage.setItem("billList", JSON.stringify(tempList));
		

	}	
	angular.element($("#wrapper")).scope().updateBillFavList();	
}

function commiStarCall(committee_id, chamber, name, parent_committee_id, subcommittee){


	console.log("commiStarCall "+committee_id+" "+chamber+" "+name+" "+parent_committee_id+" "+subcommittee);
	console.log(localStorage.getItem(committee_id));
	if(localStorage.getItem(committee_id)== null){
		//add to favorite list
		localStorage.setItem(committee_id, "");
		var newCommi = {
				[committee_id]: {
					'committee_id': committee_id,
					'chamber': chamber,
					'name': name,
					'parent_committee_id': parent_committee_id,
					'subcommittee': subcommittee
				}
			};

		if(localStorage.getItem("commiList")== null){ //firstItem
			console.log("firstItem");
			localStorage.setItem("commiList", JSON.stringify(newCommi));
		}else{
			//merge
			console.log("merge");

			var oldCommi = JSON.parse(localStorage.getItem("commiList"));
			localStorage.setItem("commiList", JSON.stringify(Object.assign(newCommi, oldCommi)));
		}		

	}else{
		//delete from favorite list
		console.log("delete from favorite commiList");

		localStorage.removeItem(committee_id);
		var tempList = JSON.parse(localStorage.getItem("commiList"));
		delete tempList[committee_id];
		localStorage.setItem("commiList", JSON.stringify(tempList));
		

	}	
	angular.element($("#wrapper")).scope().updateCommiFavList();	
}

/* ,'LocalStorageModule' */
var App = angular.module('App', ['angularUtils.directives.dirPagination','ngSanitize', 'angular-bind-html-compile']);


App.controller('mainCtrl', ['$scope','$sce' , function($scope, $sce) {

	$scope.whichPage = "legiPage";
	$scope.states = statesArray;
	$scope.str_search_legi_d = "All States";
	$scope.navFlag = 1; 

	$scope.toggleNav = function(){

		$scope.navFlag = !$scope.navFlag;

	}

	$scope.changePage = function(page){

		if(page=="legiPage"){

			console.log("it's legiPage");
			$scope.whichPage = page;

		}else if(page=="billPage"){
			console.log("it's billPage");
			$scope.whichPage = page;			
		}else if(page=="commiPage"){
			console.log("it's commiPage");
			$scope.whichPage = page;			
		}else if(page=="favrPage"){
			console.log("it's favrPage");
			$scope.whichPage = page;			
		}
		
	}

	$scope.setData = function(type, data) {

		if(type == "d_legis"){
			$scope.legislators = data; 
		}else if(type == "h_legis"){
			$scope.legislators_h = data;
		}else if(type == "s_legis"){
			$scope.legislators_s = data;
		}else if(type == "a_bill"){
			$scope.bills_a = data;
		}else if(type == "n_bill"){
			$scope.bills_n = data;
		}else if(type == "h_commit"){
			$scope.committee_h = data;
		}else if(type == "s_commit"){
			$scope.committee_s = data;
		}else if(type == "j_commit"){
			$scope.committee_j = data;
		}else if(type == "legiDetl"){

			console.log("legiDetl");
   			$scope.person = data["personal_info"]; 
  			$scope.committs = data["committs_info"];
  			$scope.bills = data["bills_info"];
  			$scope.legiDetlTable();
  			$scope.$apply();
  			$('#legCarousel').carousel('next');

		}else if(type == "billDetl"){

			console.log("billDetl");
   			$scope.billDetl = data;
  			$scope.billDetlTable();
  			$scope.$apply();
  			$('#billCarousel').carousel('next');			
		}else if(type == "legiFavrDetl"){

			console.log("legiFavrDetl");
   			$scope.favrPerson = data["personal_info"]; 
  			$scope.favrCommitts = data["committs_info"];
  			$scope.favrBills = data["bills_info"];
  			$scope.legiFavrDetlTable();
  			$scope.$apply();
  			$('#favrCarousel').carousel('next');
			
		}else if(type == "billFavrDetl"){

			console.log("billFavrDetl");
   			$scope.billFavrDetl = data;
  			$scope.billFavrDetlTable();
  			$scope.$apply();
  			$('#favrCarousel').carousel(2);			

		}

  		$scope.$apply();
  		console.log("setData: "+ type);

   }

    $scope.legisViewDetl = function(bioguide_id){

    	console.log("click legisViewDetl");
		console.log(bioguide_id);

    	loadLegisDetl(bioguide_id, "notFavr");
    }   



  	$scope.legiDetlTable = function(){
   		
  		console.log("legiDetlTable");
  		console.log(""+$scope.person[0].bioguide_id);

  		var st = moment($scope.person[0].term_start,'YYYY-MM-DD');
  		var en = moment($scope.person[0].term_end,'YYYY-MM-DD');
  		var td = moment(Date('YYYY-MM-DD'));

		var diffDays = en.diff(st, 'days');
		var untilToday  = td.diff(st, 'days');
  		var percentage = Math.round((untilToday/diffDays)*100);
  		
  		var partyStr = "";
  		var chamber = "";
  		var repImg = "http://cs-server.usc.edu:45678/hw/hw8/images/r.png";
  		var demImg = "http://cs-server.usc.edu:45678/hw/hw8/images/d.png";
  		if($scope.person[0].party == "R"){
  			partyStr = '<img class="smallImg" src='+repImg+'> Republican';
  		}else{
  			partyStr = '<img class="smallImg" src='+demImg+'> Democratic';
  		}

  		console.log(" check localstorage "+ localStorage.getItem($scope.person[0].bioguide_id));
  		if(localStorage.getItem($scope.person[0].bioguide_id) != null){

  			$scope.isFavr = 'true';  	
  		}else{
  			$scope.isFavr = 'false';  	  			
  		}

   		if($scope.person[0].chamber == "senate"){
   			chamber = "Senate";
   		}else{
   			chamber = "House";
   		}

  		console.log("isFavr "+$scope.person[0].bioguide_id+" "+$scope.isFavr);

	$scope.legiDetlhtmlContent = $sce.trustAsHtml('<div class="row"><div class="col-md-6"><div class="col-md-12"><div class="col-xs-12 col-md-6" style="display: inline;"><img class="profileImg" src="http://theunitedstates.io/images/congress/original/'+$scope.person[0].bioguide_id+'.jpg" crossorigin="anonymous"></div><div class="col-md-6 col-xs-12" style="display: inline"><table id="biopers_TableA" class="table table-hover"><tr><td>'+$scope.person[0].title+' , '+$scope.person[0].last_name+' , '+$scope.person[0].first_name+'</td></tr><tr><td><a href="mailto:{{$scope.person[0].oc_email}}" target="_top">{{person[0].oc_email}}</a></td></tr><tr><td>Chamber: '+chamber+'</td></tr><tr><td>Contact: {{person[0].phone}}</td></tr><tr><td>'+partyStr+'</td></tr></table></div></div><div class="col-md-12"><table class="table table-hover"><tr><td class="hideTd">Start Term</td><td>{{person[0].term_start| date}}</td></tr><tr><td class="hideTd">End Term</td><td>{{person[0].term_end | date}}</td></tr><tr class="hideTd"><td>Term</td><td><div class="progress"><div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="'+percentage+'" aria-valuemin="0" aria-valuemax="100" style="width:'+percentage+'%">'+percentage+'%'+'</div></div></td></tr><tr><td class="hideTd">Office</td><td>{{person[0].office}}</td></tr><tr><td class="hideTd">State</td><td>{{person[0].state_name}}</td></tr><tr><td class="hideTd">Fax</td><td>'+$scope.person[0].fax+'</td></tr><tr><td class="hideTd">Birthday</td><td>{{person[0].birthday| date}}</td></tr><tr><td class="hideTd">Social Links</td><td> <a href="http://www.facebook.com/{{person[0].facebook_id}}" target="_blank"><img class="smallImg" src="http://cs-server.usc.edu:45678/hw/hw8/images/f.png" alt="facebook"></a><a href="http://twitter.com/'+$scope.person[0].twitter_id+'" target="_blank"><img class="smallImg" src="http://cs-server.usc.edu:45678/hw/hw8/images/t.png" alt="twitter img" ></a><a href="'+$scope.person[0].website+'" target="_blank"><img class="smallImg" src="http://cs-server.usc.edu:45678/hw/hw8/images/w.png" alt="website img"></a></td></tr></table></div></div><div class="col-md-6" style="display: inline;"><div class="col-xs-12"><div>Committees</div><div class="table-responsive"><table class="table table-hover"><tr><th>Chamber</th><th>Committee ID</th><th>Name</th></tr><tr ng-repeat="c in committs"><th>{{c.chamber=="senate" ? "Senate" : "House"}}</th><th>{{c.committee_id}}</th><th>{{c.name}}</th></tr></table></div></div><div class="col-xs-12"><div>Bills</div><div class="table-responsive"><table class="table table-hover" ><tr><th>Bill ID</th><th>Title</th><th>Chamber</th><th>Bill Type</th><th>Congress</th><th>Link</th><tr><tr ng-repeat="b in bills"><td>{{b.bill_id}}</td><td>{{b.official_title}}</td><td>{{b.chamber == "senate" ? "Senate" : "House"}}</td><td>{{b.bill_type}}</td><td>{{b.congress}}</td><td><a ng-href="{{b.last_version.urls.pdf}}" target="_blank">LINK</a></td></tr></table></div></div></div></div>');

   	}	

  	$scope.legiFavrDetlTable = function(){
   		
  		console.log("legiDetlTable");
  		console.log(""+$scope.favrPerson[0].bioguide_id);

  		var st = moment($scope.favrPerson[0].term_start,'YYYY-MM-DD');
  		var en = moment($scope.favrPerson[0].term_end,'YYYY-MM-DD');
  		var td = moment(Date('YYYY-MM-DD'));

		var diffDays = en.diff(st, 'days');
		var untilToday  = td.diff(st, 'days');
  		var percentage = Math.round((untilToday/diffDays)*100);
  		
  		var partyStr = "";
  		var chamber = "";
  		var repImg = "http://cs-server.usc.edu:45678/hw/hw8/images/r.png";
  		var demImg = "http://cs-server.usc.edu:45678/hw/hw8/images/d.png";
  		if($scope.favrPerson[0].party == "R"){
  			partyStr = '<img class="smallImg" src='+repImg+'> Republican';
  		}else{
  			partyStr = '<img class="smallImg" src='+demImg+'> Democratic';
  		}

  		console.log(" check localstorage "+ localStorage.getItem($scope.favrPerson[0].bioguide_id));
  		if(localStorage.getItem($scope.favrPerson[0].bioguide_id) != null){

  			$scope.isFavrFavr = 'true';  	
  		}else{
  			$scope.isFavrFavr = 'false';  	  			
  		}

   		if($scope.favrPerson[0].chamber == "senate"){
   			chamber = "Senate";
   		}else{
   			chamber = "House";
   		}

  		console.log("isFavr "+$scope.favrPerson[0].bioguide_id+" "+$scope.isFavrFavr);
		$scope.favrlegihtmlContent = $sce.trustAsHtml('<div class="row"><div class="col-md-6"><div class="col-md-12"><div class="col-xs-12 col-md-6" style="display: inline;"><img class="profileImg" src="http://theunitedstates.io/images/congress/original/'+$scope.favrPerson[0].bioguide_id+'.jpg" crossorigin="anonymous"></div><div class="col-md-6 col-xs-12" style="display: inline"><table id="biopers_TableA" class="table table-hover"><tr><td>'+$scope.favrPerson[0].title+' , '+$scope.favrPerson[0].last_name+' , '+$scope.favrPerson[0].first_name+'</td></tr><tr><td><a href="mailto:'+$scope.favrPerson[0].oc_email+'" target="_top">'+$scope.favrPerson[0].oc_email+'</a></td></tr><tr><td>Chamber: '+chamber+'</td></tr><tr><td>Contact: '+$scope.favrPerson[0].phone+'</td></tr><tr><td>'+partyStr+'</td></tr></table></div></div><div class="col-md-12"><table class="table table-hover"><tr><td class="hideTd">Start Term</td><td>{{favrPerson[0].term_start| date}}</td></tr><tr><td class="hideTd">End Term</td><td>{{favrPerson[0].term_end|date}}</td></tr><tr class="hideTd"><td>Term</td><td><div class="progress"><div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="'+percentage+'" aria-valuemin="0" aria-valuemax="100" style="width:'+percentage+'%">'+percentage+'%'+'</div></div></td></tr><tr><td class="hideTd">Office</td><td>'+$scope.favrPerson[0].office+'</td></tr><tr><td class="hideTd">State</td><td>'+$scope.favrPerson[0].state_name+'</td></tr><tr><td class="hideTd">Fax</td><td>'+$scope.favrPerson[0].fax+'</td></tr><tr><td class="hideTd">Birthday</td><td>{{favrPerson[0].birthday|date}}</td></tr><tr><td class="hideTd">Social Links</td><td> <a href="http://www.facebook.com/'+$scope.favrPerson[0].facebook_id+'" target="_blank"><img class="smallImg" src="http://cs-server.usc.edu:45678/hw/hw8/images/f.png" alt="facebook"></a><a href="http://twitter.com/'+$scope.favrPerson[0].twitter_id+'" target="_blank"><img class="smallImg" src="http://cs-server.usc.edu:45678/hw/hw8/images/t.png" alt="twitter img" ></a><a href="'+$scope.favrPerson[0].website+'" target="_blank"><img class="smallImg" src="http://cs-server.usc.edu:45678/hw/hw8/images/w.png" alt="website img"></a></td></tr></table></div></div><div class="col-md-6" style="display: inline;"><div class="col-xs-12"><div>Committees</div><div class="table-responsive"><table class="table table-hover"><tr><th>Chamber</th><th>Committee ID</th><th>Name</th></tr><tr ng-repeat="c in favrCommitts"><th>{{c.chamber=="senate" ? "Senate" : "House"}}</th><th>{{c.committee_id}}</th><th>{{c.name}}</th></tr></table></div></div><div class="col-xs-12"><div>Bills</div><div class="table-responsive"><table class="table table-hover" ><tr><th>Bill ID</th><th>Title</th><th>Chamber</th><th>Bill Type</th><th>Congress</th><th>Link</th><tr><tr ng-repeat="b in favrBills"><td>{{b.bill_id}}</td><td>{{b.official_title}}</td><td>{{b.chamber == "senate" ? "Senate" : "House"}}</td><td>{{b.bill_type}}</td><td>{{b.congress}}</td><td><a ng-href="{{b.last_version.urls.pdf}}" target="_blank">LINK</a></td></tr></table></div></div></div></div>');


   	}	

    $scope.billViewDetl = function(bill_id){
    	console.log("click billViewDetl");
    	console.log(bill_id);
    	loadBillDetl(bill_id, "notFavr");
    }   	

  	$scope.billDetlTable = function(){
   		
  		console.log("billDetlTable");
   		var status = "";
   		var chamber = "";
  		if(localStorage.getItem($scope.billDetl[0].bill_id) != null){

  			$scope.isbillFavr = 'true';  	
  		}else{
  			$scope.isbillFavr = 'false';  	  			
  		}
  		

   		if($scope.billDetl[0].history.active == true){

   			status = "Active";
   		}else{
   			status = "New";	
   		}

   		if($scope.billDetl[0].chamber == "senate"){
   			chamber = "Senate";
   		}else{
   			chamber = "House";
   		}
 		//billDetl
  		$scope.billDetlhtmlContent = $sce.trustAsHtml('<div class="row"><div id="billTable" class="col-md-6"><div class="table-responsive"><table class="table table-hover"><tr><th style="width:150px">Bill ID</th><td>{{billDetl[0].bill_id | uppercase}}</td></tr><tr class="hideTd"><th>Title</th><td>'+$scope.billDetl[0].official_title+'</td></tr><tr><th>Bill Type</th><td class="text-capitalize">'+($scope.billDetl[0].bill_type).toUpperCase()+'</td></tr><tr><th>Sponsor</th><td>'+$scope.billDetl[0].sponsor.title+', '+$scope.billDetl[0].sponsor.last_name+', '+$scope.billDetl[0].sponsor.first_name+'</td></tr><tr><th>Chamber</th><td>'+chamber+'</td></tr><tr><th>Status</th><td>'+status+'</td></tr><tr><th>Introduced On</th><td>{{billDetl[0].introduced_on| date}}</td></tr><tr><th>Congress URL</th><td><a href="'+decodeURIComponent($scope.billDetl[0].urls.congress)+' " target="_blank">URL</a></td></tr><tr><th>Version Status</th><td>'+$scope.billDetl[0].last_version.version_name+'</td></tr><tr><th>Bill URL</th><td><a href="'+decodeURIComponent($scope.billDetl[0].last_version.urls.pdf)+'" target="_blank">LINK</a></td></tr></table></div></div><div class="col-md-6"><object data="'+decodeURIComponent($scope.billDetl[0].last_version.urls.pdf)+'" width="100%" class="pdfHeight"></object></div></div>');



   	}	

  	$scope.billFavrDetlTable = function(){
   		
  		console.log("billFavrDetlTable");
   		var status = "";
   		var chamber = "";
  		if(localStorage.getItem($scope.billFavrDetl[0].bill_id) != null){

  			$scope.isFavrbillFavr = 'true';  	
  		}else{
  			$scope.isFavrbillFavr = 'false';  	  			
  		}
  		
   		if($scope.billFavrDetl[0].history.active == true){

   			status = "Active";
   		}else{
   			status = "New";	
   		}

   		if($scope.billFavrDetl[0].chamber == "senate"){
   			chamber = "Senate";
   		}else{
   			chamber = "House";
   		}

 		//billDetl
  		$scope.favrBillhtmlContent = $sce.trustAsHtml('<div class="row"><div id="billTable" class="col-md-6"><div class="table-responsive"><table class="table table-hover"><tr><th style="width:150px">Bill ID</th><td>'+($scope.billFavrDetl[0].bill_id).toUpperCase()+'</td></tr><tr class="hideTd"><th>Title</th><td>'+$scope.billFavrDetl[0].official_title+'</td></tr><tr><th>Bill Type</th><td class="text-capitalize">'+($scope.billFavrDetl[0].bill_type).toUpperCase()+'</td></tr><tr><th>Sponsor</th><td>'+$scope.billFavrDetl[0].sponsor.title+', '+$scope.billFavrDetl[0].sponsor.last_name+', '+$scope.billFavrDetl[0].sponsor.first_name+'</td></tr><tr><th>Chamber</th><td>'+chamber+'</td></tr><tr><th>Status</th><td>'+status+'</td></tr><tr><th>Introduced On</th><td>{{billFavrDetl[0].introduced_on| date}}</td></tr><tr><th>Congress URL</th><td><a href="'+decodeURIComponent($scope.billFavrDetl[0].urls.congress)+' " target="_blank">URL</a></td></tr><tr><th>Version Status</th><td>'+$scope.billFavrDetl[0].last_version.version_name+'</td></tr><tr><th>Bill URL</th><td><a href="'+decodeURIComponent($scope.billFavrDetl[0].last_version.urls.pdf)+'" target="_blank">LINK</a></td></tr></table></div></div><div class="col-md-6 pdfHeight"><object data="'+decodeURIComponent($scope.billFavrDetl[0].last_version.urls.pdf)+'" width="100%" height="500px"></object></div></div>');



   	}	


   	$scope.legiFavCall = function(bioguide_id, party, name, chamber, state, email, calltype){
  		console.log("legiFavCall");
  		console.log(calltype);
   		if(localStorage.getItem(bioguide_id)!= null){
   			if(calltype == "notFavr"){

  				console.log("1");
	   			$scope.isFavr = 'false';  	
			}else{
 		 		console.log("2");
				$scope.isFavrFavr = 'false';
			}
   		}else{
   			if(calltype == "notFavr"){

  				console.log("3");
	   			$scope.isFavr = 'true';  	
			}else{
 		 		console.log("4");
				$scope.isFavrFavr = 'true';
			}

   		}
  		console.log("legiFavCall isFavr"+$scope.isFavr);

   		legiStarCall(bioguide_id, party, name, chamber, state, email);
   	}

   	$scope.billFavCall = function(bill_id, bill_type, title, chamber, introduced_on, sponsor, calltype){

   		if(localStorage.getItem(bill_id)!= null){
   			if(calltype == "notFavr"){

	   			$scope.isbillFavr = 'false';  	
			}else{
				$scope.isFavrbillFavr = 'false';
			}
   		}else{
   			if(calltype == "notFavr"){

	   			$scope.isbillFavr = 'true';  	
			}else{
				$scope.isFavrbillFavr = 'true';
			}

   		}

  		console.log("billFavCall isbillFavr"+$scope.isbillFavr);

  		billStarCall(bill_id, bill_type, title, chamber, introduced_on, sponsor);	
   	}

   	$scope.commiFavCall= function(committee_id, chamber, name, parent_committee_id, subcommittee){

    	commiStarCall(committee_id, chamber, name, parent_committee_id, subcommittee);	
   	}

   	$scope.isCommiFav= function(committee_id){
   		if(localStorage.getItem(committee_id)!= null){
   			console.log("isCommiFav exist");
   			return true;
   		}else{
   			console.log("isCommiFav not exist");
   			return false;
   		}
   	}

   	$scope.updateLegiFavList = function(){


   		var tempLegiList = JSON.parse(localStorage.getItem("legiList"));
   		console.log(JSON.stringify(tempLegiList));

   		$scope.favr_legi = tempLegiList;

   	}


   	$scope.updateBillFavList = function(){

   		var tempBillList = JSON.parse(localStorage.getItem("billList"));
   		$scope.favr_bill = tempBillList;

   	}

   	$scope.updateCommiFavList = function(){

  		var tempCommiList = JSON.parse(localStorage.getItem("commiList"));
   		$scope.favr_commi = tempCommiList;
   	}


    $scope.legiFavrViewDetl = function(bioguide_id){
    	console.log("click favViewDetail ");
    	console.log(bioguide_id);

    	loadLegisDetl(bioguide_id, "favr");

    }

    $scope.billFavrViewDetl = function(bill_id){

    	console.log("click billFavrViewDetl");
		console.log(bill_id);

    	loadBillDetl(bill_id, "favr");    	

    }   

    $scope.detelteLegiFav = function(bioguide_id){

		localStorage.removeItem(bioguide_id);
		var tempList = JSON.parse(localStorage.getItem("legiList"));
		delete tempList[bioguide_id];
		localStorage.setItem("legiList", JSON.stringify(tempList));
   		$scope.favr_legi = tempList;
 		$scope.apply();

    }

    $scope.detelteBillFav = function(bill_id){

		localStorage.removeItem(bill_id);
		var tempList = JSON.parse(localStorage.getItem("billList"));
		delete tempList[bill_id];
		localStorage.setItem("billList", JSON.stringify(tempList));
   		$scope.favr_bill = tempList;
 		$scope.apply();

    }
    $scope.detelteCommiFav = function(committee_id){

		localStorage.removeItem(committee_id);
		var tempList = JSON.parse(localStorage.getItem("commiList"));
		delete tempList[committee_id];
		localStorage.setItem("commiList", JSON.stringify(tempList));
   		$scope.favr_commi = tempList;
 		$scope.apply();

    }


}]);

