<?php

//	$congressAPI = "http://congress.api.sunlightfoundation.com";
	$congressAPI = "http://104.198.0.197:8080";
  $apiKey = "34237548dcbd46479e9fc1038aba5cd5";
	

  	if (isset($_GET["reqType"]) && !empty($_GET["reqType"])) { //Checks if action value exists
    		
    	$reqType = $_GET["reqType"];
		

		if($_GET["reqType"] == "d_legis"){


  		$json = array();
  			
      $url = $congressAPI.'/legislators?order=state_name__asc,last_name__asc&fields=bioguide_id,chamber,district,first_name,last_name,party,state,state_name&per_page=all';
      //&apikey='.$apiKey;

      $json = makeReq($url)["results"];

			header('Content-type: application/json');
			echo json_encode($json);

      return;
		}else if($_GET["reqType"] == "h_legis"){


  		$json = array();

      $url = $congressAPI.'/legislators?order=last_name__asc&chamber=house&fields=bioguide_id,chamber,district,first_name,last_name,party,state,state_name&per_page=all';
      //&apikey='.$apiKey;
      $json = makeReq($url)["results"];

			header('Content-type: application/json');
			echo json_encode($json);

      return;
		}else if($_GET["reqType"] == "s_legis"){

 			$json = array();
      $url = $congressAPI.'/legislators?order=last_name__asc&chamber=senate&fields=bioguide_id,chamber,district,first_name,last_name,party,state,state_name&per_page=all';
      //&apikey='.$apiKey;
      $json = makeReq($url)["results"];

			header('Content-type: application/json');
 			echo json_encode($json);

      return;
		}else if($_GET["reqType"] == "bio_detail"){

			if(isset($_GET["bioguide_id"])){
				$url = $congressAPI."/legislators?bioguide_id=".$_GET["bioguide_id"]."&fields=bioguide_id,birthday,chamber,district,fax,first_name,last_name,oc_email,office,party,phone,state,state_name,term_end,term_start,title,website,facebook_id,twitter_id";
        //&apikey=".$apiKey;
  				$json = makeReq($url);
  				$persInfo = array("personal_info" => $json["results"]);
  				$url = $congressAPI."/committees?&member_ids=".$_GET["bioguide_id"]."&fields=chamber,committee_id,name&per_page=5&page=1";
          //&apikey=".$apiKey;
  				$json = makeReq($url);
  				$commInfo = array("committs_info" => $json["results"]);
  				$url = $congressAPI."/bills?&sponsor_id=".$_GET["bioguide_id"]."&fields=bill_id,official_title,chamber,bill_type,congress,last_version.urls.pdf&per_page=5&page=1";
          //&&apikey=".$apiKey;
  				$json = makeReq($url);
  				$billInfo = array("bills_info" => $json["results"]);

				header('Content-type: application/json');
				$results = array_merge(array_merge($persInfo, $commInfo), $billInfo);
        echo json_encode($results);
        return;
			}
			
		}else if($_GET["reqType"] == "a_bill"){

			$url = $congressAPI."/bills?order=introduced_on&history.active=true&fields=bill_id,bill_type,chamber,committee_ids,history.active,history.enacted,introduced_on,last_version.urls.pdf,official_title,sponsor.first_name,sponsor.last_name,sponsor.title&last_version.urls.pdf__exists=true&per_page=50&page=1";
      //&apikey=".$apiKey;
  		$json = makeReq($url)["results"];
			header('Content-type: application/json');
			echo json_encode($json);

      return;
		}else if($_GET["reqType"] == "n_bill"){

			$url = $congressAPI."/bills?order=introduced_on&history.active=false&fields=bill_id,bill_type,chamber,committee_ids,history.active,history.enacted,introduced_on,last_version.urls.pdf,official_title,sponsor.first_name,sponsor.last_name,sponsor.title&last_version.urls.pdf__exists=true&per_page=50&page=1";
      //&apikey=".$apiKey;
  		$json = makeReq($url)["results"];
			header('Content-type: application/json');
			echo json_encode($json);

      return;
		}else if($_GET["reqType"] == "bill_detail"){

			if(isset($_GET["bill_id"])){
				$url = $congressAPI."/bills?bill_id=".$_GET["bill_id"]."&fields=bill_id,bill_type,chamber,committee_ids,history.active,history.enacted,introduced_on,last_version.urls.pdf,last_version.version_name,official_title,urls.congress,sponsor.first_name,sponsor.last_name,sponsor.title";
        //&apikey=".$apiKey;
  			$json = makeReq($url)["results"];
				header('Content-type: application/json');
				echo json_encode($json);
        return;
			}
			
		}else if($_GET["reqType"] == "h_commit"){


 			$json = array();
      $url = $congressAPI.'/committees?order=committee_id__asc&chamber=house&fields=chamber,committee_id,name,parent_committee_id,phone,subcommittee&per_page=all';
      //&apikey='.$apiKey;
      $json = makeReq($url)["results"];

			header('Content-type: application/json');
			echo json_encode($json);
      return;
		}else if($_GET["reqType"] == "s_commit"){


 			$json = array();
      $url = $congressAPI.'/committees?order=committee_id__asc&chamber=senate&fields=chamber,committee_id,name,parent_committee_id&per_page=all';
      //&apikey='.$apiKey;

      $json = makeReq($url)["results"];

			header('Content-type: application/json');
			echo json_encode($json);
      return;
		}else if($_GET["reqType"] == "j_commit"){

  			$json = array();
        $url = $congressAPI.'/committees?order=committee_id__asc&chamber=joint&fields=chamber,committee_id,name,parent_committee_id,subcommittee&per_page=all';
        //&apikey='.$apiKey;
  			$json = makeReq($url)["results"];
  			header('Content-type: application/json');
	 		  echo json_encode($json);
        return;
		}
  }

	

	function makeReq($reqUrl){
		//return array
 		$url = $reqUrl;
  		$content = file_get_contents($url);
  		$json = json_decode($content, TRUE);

  		return $json;
	}


?>