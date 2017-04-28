/**
 * @author Shihab PM ( UI Developer )
 * this file is intended to write only the business logic for the app ..
 */

//defining a controller as module for the app ( following layering by feature structure )
angular.module('timezoneApp.controllers', []);

//attaching the main controller to the controller module 
angular.module('timezoneApp.controllers').controller('mainController', function ($rootScope, $scope, $interval, $timeout, $filter, $http) {

	// declaring variables ...
	$scope.hideCurTime = true;
	$scope.hideIntialTime = false;
	$scope.countryNameCardHead = "Please select a country"; // default text on the result card header
	$scope.searchResBoxFlag = true;
	$scope.v_timezone = "UTC+05:30"; // setting default time to IST
	$scope.cur_flag = "default-flag.png"; //setting default flag icon
	$scope.cur_flag1 = "default-flag.png"; //setting default flag icon
	$scope.loaderVisiblity = true; //hidding the loader intially 
	$scope.mainTriggerBtnFlag = "true"; // disabling the CTA button 
	$scope.curTime = new Date(); //getting the current local machine time

	$scope.continents = [
		{
			"name":"Oceania",
			"countries": [{
					"nation": "Fiji",
					"flag": "fj.svg",
					"states": [{
						"name": "Suva",
						"tz": "UTC+12:00"
					}]

				},
				{
					"nation": "Guinea",
					"flag": "gn.svg",
					"states": [{
						"name": "Conakry",
						"tz": "UTC"
					}]
				}]
		},
		{
			"name": "ASIA",
			"countries": [{
					"nation": "INDIA",
					"flag": "in.svg",
					"states": [{
						"name": "Delhi",
						"tz": "UTC+05:30"
					}]

				},
				{
					"nation": "Afghanistan",
					"flag": "af.svg",
					"states": [{
						"name": "Kabul",
						"tz": "UTC+04:30"
					}]
				},
				{
					"nation": "Bahrain",
					"flag": "bh.svg",
					"states": [{
						"name": "Manama",
						"tz": "UTC+03:00"
					}]
				},
				{
					"nation": "Iran",
					"flag": "ir.svg",
					"states": [{
						"name": "Tehran",
						"tz": "UTC+03:30"
					}]
				},
					{
					"nation": "Iraq",
					"flag": "iq.svg",
					"states": [{
						"name": "Baghdad",
						"tz": "UTC+03:00"
					}]
				},
				
				
				{
					"nation": "Bangladesh",
					"flag": "bd.svg",
					"states": [{
						"name": "Manama",
						"tz": "UTC+06:00"
					}]
				},
				{
					"nation": "Hong Kong",
					"flag": "hk.svg",
					"states": [{
						"name": "Victoria",
						"tz": "UTC+08:00"
					}]
				},
				{
					"nation": "Bhutan",
					"flag": "bt.svg",
					"states": [{
						"name": "Manama",
						"tz": "UTC+06:00"
					}]
				},
				{
					"nation": "Brunei",
					"flag": "bn.svg",
					"states": [{
						"name": "Bandar Seri Begawan",
						"tz": "UTC+08:00"
					}]
				},

				{
					"nation": "Cambodia",
					"flag": "cb.svg",
					"states": [{
						"name": "Phnom Penh",
						"tz": "UTC+07:00"
					}]
				},
				{
					"nation": "China",
					"flag": "cn.svg",
					"states": [{
						"name": "Beijing",
						"tz": "UTC+08:00"
					}]
				},
				{
					"nation": "East Timur",
					"flag": "tl.svg",
					"states": [{
						"name": "Dili",
						"tz": "UTC+09:00"
					}]
				},
				{
					"nation": "Egypt",
					"flag": "eg.svg",
					"states": [{
						"name": "Cairo",
						"tz": "UTC+02:00"
					}]
				},

				{
					"nation": "Armenia",
					"flag": "am.svg",
					"states": [{
						"name": "Yerevan",
						"tz": "UTC+04:00"
					}]
				}
			]
		},
		{
			"name": "Europe",
			"countries": [{
					"nation": "France",
					"flag": "fr.svg",
					"states": [{
							"name": "French Polynesia",
							"tz": "UTC-10:00"
						},

						{
							"name": "MarquesasIslands",
							"tz": "UTC-09:30"
						},
						{
							"name": "New Caledonia",
							"tz": "+1100"
						},
						{
							"name": "Clipperton Island",
							"tz": "GMT -7"
						},
						{
							"name": "Réunion",
							"tz": "+0400"
						},
						{
							"name": "New Caledonia",
							"tz": "UTC+11:00"
						},
						{
							"name": "Wallis and Futuna",
							"tz": "UTC+12:00"
						},
						{
							"name": "Gambier Islands",
							"tz": "UTC-09:00"
						}
					]

				},
				{
					"nation": "Andorra",
					"flag": "ad.svg",
					"states": [{
						"name": "Andorra la Vella",
						"tz": "UTC+01:00"
					}]
				},
				{
					"nation": "Belgium ",
					"flag": "be.svg",
					"states": [{
						"name": "City of Brussels",
						"tz": "UTC+02:00"
					}]
				},
				{
					"nation": "greece",
					"flag": "gr.svg",
					"states": [{
						"name": "Athens",
						"tz": "UTC+02:00"
					}]
				},
				{
					"nation": "Belarus",
					"flag": "by.svg",
					"states": [{
						"name": "Minsk",
						"tz": "UTC+03:00(FET)"
					}]
				},
					{
					"nation": "Iceland",
					"flag": "is.svg",
					"states": [{
						"name": "Reykjavik",
						"tz": "UTC"
					}]
				},
				{
					"nation": "Hungary ",
					"flag": "hu.svg",
					"states": [{
						"name": "Budapest",
						"tz": "UTC+01:00"
					}]
				},
				{
					"nation": "ireland",
					"flag": "ie.svg",
					"states": [{
						"name": "Dublin",
						"tz": "UTC"
					}]
				},
					{
					"nation": "Bosnia and Herzegovina",
					"flag": "ba.svg",
					"states": [{
						"name": "Sarajevo",
						"tz": "UTC+01:00"
					}]
				},
					{
					"nation": "cyprus",
					"flag": "cy.svg",
					"states": [{
						"name": "Nicosia",
						"tz": "UTC+02:00"
					}]
				},
				{
					"nation": "Czech Republic",
					"flag": "cz.svg",
					"states": [{
						"name": "Prague",
						"tz": "UTC+01:00"
					}]
				},
				{
					"nation": "Austria",
					"flag": "at.svg",
					"states": [{
						"name": "Vienna",
						"tz": "UTC+01:00"
					}]
				},
					{
					"nation": "Germany",
					"flag": "ger.png",
					"states": [{
						"name": "Berlin",
						"tz": "UTC+01:00"
					}]
				},
				{
					"nation": "Azerbaijan",
					"flag": "az.svg",
					"states": [{
						"name": "Vienna",
						"tz": "UTC+04:00"
					}]
				},
				{
					"nation": "bulgaria ",
					"flag": "bg.svg",
					"states": [{
						"name": "Sofia",
						"tz": "UTC+02:00"
					}]
				},
				{
					"nation": "Georgia  ",
					"flag": "ge.svg",
					"states": [{
						"name": "Atlanta",
						"tz": "UTC+04:00"
					}]
				},
				{
					"nation": "Croatia",
					"flag": "cor.png",
					"states": [{
						"name": "Zagreb",
						"tz": "UTC+01:00"
					}]
				},
				{
					"nation": "Estonia",
					"flag": "ee.svg",
					"states": [{
						"name": "Tallinn",
						"tz": "UTC+02:00"
					}]
				},
				{
					"nation": "Ethiopia",
					"flag": "et.svg",
					"states": [{
						"name": "Addis Ababa",
						"tz": "UTC+03:00"
					}]
				},
				{
					"nation": "Finland",
					"flag": "fi.svg",
					"states": [{
						"name": "Helsinki",
						"tz": "UTC+02:00"
					}]
				},
				{

					"nation": "Russia",
					"flag": "rs.svg",
					"states": [{
							"name": "Kaliningrad Oblast",
							"tz": "UTC+02:00"
						},

						{
							"name": "Moscow",
							"tz": "UTC+03:00"
						},
						{
							"name": "Samara Oblast",
							"tz": "UTC+04:00"
						},
						{
							"name": "Bashkortostan",
							"tz": "UTC+05:00"
						},
						{
							"name": "Omsk Oblast",
							"tz": "UTC+06:00"
						},
						{
							"name": "Altai Republic",
							"tz": "UTC+07:00"
						},
						{
							"name": "Buryatia and Irkutsk Oblast",
							"tz": "UTC+08:00"
						},
						{
							"name": "Amur Oblast",
							"tz": "UTC+09:00"
						},
						{
							"name": "The Jewish Autonomous Oblast",
							"tz": "UTC+10:00"
						},
						{
							"name": "Magadan Oblast",
							"tz": "UTC+11:00"
						},
						{
							"name": "Chukotka, and Kamchatka Krai",
							"tz": "UTC+12:00"
						}
					]


				},
				{

					"nation": "Albania",
					"flag": "al.svg",
					"states": [{
						"name": "Albania",
						"tz": "UTC+01:00"
					}]

				}
			]
		},
		{
			"name": "America",
			"countries": [{
					"nation": "United States ( USA )",
					"flag": "us.svg",
					"states": [{
							"name": "Howland Island",
							"tz": "UTC-12:00"
						},

						{
							"name": "American Samoa",
							"tz": "UTC-11:00"
						},
						{
							"name": "Hawaii",
							"tz": "UTC-10:00"
						},
						{
							"name": "Alaska",
							"tz": "UTC-09:00"
						},
						{
							"name": "California",
							"tz": "UTC-08:00"
						},
						{
							"name": "Washington",
							"tz": "UTC-08:00"
						},
						{
							"name": "Arizona",
							"tz": "UTC-07:00"
						},
						{
							"name": "New Mexico",
							"tz": "UTC-07:00"
						}

					]

				},
				{
					"nation": "Antigua and Barbuda",
					"flag": "ag.svg",
					"states": [{
						"name": "St.John's",
						"tz": "UTC-04:00"
					}]

				},
				{
					"nation": "Barbados",
					"flag": "bb.svg",
					"states": [{
						"name": "Manama",
						"tz": "UTC-04:00"
					}]
				},
				{
					"nation": "Honduras ",
					"flag": "hn.svg",
					"states": [{
						"name": "Tegucigalpa",
						"tz": "UTC-06:00"
					}]
				},
				{
					"nation": "Guyana ",
					"flag": "gy.svg",
					"states": [{
						"name": "Georgetown",
						"tz": "UTC-04:00"
					}]
				},
					{
					"nation": "haiti",
					"flag": "ht.svg",
					"states": [{
						"name": "Port-au-Prince",
						"tz": "UTC-05:00"
					}]
				},
				{
					"nation": "Belize",
					"flag": "bz.svg",
					"states": [{
						"name": "Belmopan",
						"tz": "UTC-06:00"
					}]
				},
					{
					"nation": "Grenada ",
					"flag": "gd.svg",
					"states": [{
						"name": "St. George's",
						"tz": "UTC-04:00"
					}]
				},
				{
					"nation": "Bolivia ",
					"flag": "bo.svg",
					"states": [{
						"name": "Sucre",
						"tz": "UTC-04:00"
					}]
				},
				{
					"nation": "Bahamas",
					"flag": "bs.svg",
					"states": [{
						"name": "Nassau",
						"tz": "UTC-05:00"
					}]
				},
				{
					"nation": "colombia",
					"flag": "co.svg",
					"states": [{
						"name": "Bogotá",
						"tz": "UTC-05:00"
					}]
				},
				{
					"nation": "cuba",
					"flag": "cu.svg",
					"states": [{
						"name": "Havana",
						"tz": "UTC-05:00"
					}]
				},
				{
					"nation": "costa rica",
					"flag": "cr.svg",
					"states": [{
						"name": "San José",
						"tz": "UTC-06:00"
					}]
				},
					{
					"nation": "dominica",
					"flag": "dm.svg",
					"states": [{
						"name": "Roseau",
						"tz": "UTC-04:00"
					}]

				},  
					{
					"nation": "Guatemala ",
					"flag": "gt.svg",
					"states": [{
						"name": "Guatemala City",
						"tz": "UTC-06:00"
					}]

				}, 
				
					{
					"nation": "Dominican Republic",
					"flag": "do.svg",
					"states": [{
						"name": "Santo Domingo",
						"tz": "UTC-04:00"
					}]

				},

				{
					"nation": "El Salvador",
					"flag": "sv.svg",
					"states": [{
						"name": "San Salvador",
						"tz": "UTC-06:00"
					}]

				},
				
				{
					"nation": "Argentina",
					"flag": "ar.svg",
					"states": [{
						"name": "Argentina",
						"tz": "UTC-03:00"
					}]
				}
			]
		},
		{
			"name": "Africa",
			"countries": [{
					"nation": "Algeria",
					"flag": "alg.png",
					"states": [{
							"name": "Algiers",
							"tz": "UTC+01:00 (CET)"
						}

					]

				},
				{
					"nation": "Benin",
					"flag": "bj.svg",
					"states": [{
							"name": "Algiers",
							"tz": "UTC+01:00 (WAT)"
						}

					]

				},
					{
					"nation": "burkina",
					"flag": "bf.svg",
					"states": [{
						"name": "Ouagadougou",
						"tz": "UTC"
					}]
				},
					{
					"nation": "Burundi",
					"flag": "bi.svg",
					"states": [{
						"name": "Bujumbura",
						"tz": "UTC+02:00"
					}]
				},
				{

					"nation": "Angola",
					"flag": "ao.svg",
					"states": [{
						"name": "Angola",
						"tz": "UTC+01:00 (WAT)"
					}]


				},
					{

					"nation": "Ghana",
					"flag": "gh.svg",
					"states": [{
						"name": "Accra",
						"tz": "UTC"
					}]


				},
				{

					"nation": "cameroon ",
					"flag": "cm.svg",
					"states": [{
						"name": "Yaoundé",
						"tz": "UTC+01:00 (WAT)"
					}]


				},
				{

					"nation": "cape verde ",
					"flag": "ck.svg",
					"states": [{
						"name": "Praia",
						"tz": "UTC-01:00"
					}]


				},
				{

					"nation": "Gabon",
					"flag": "ga.svg",
					"states": [{
						"name": "Libreville",
						"tz": "UTC+01:00"
					}]


				},
				{

					"nation": "Gambia",
					"flag": "gm.svg",
					"states": [{
						"name": "Banjul",
						"tz": "UTC"
					}]


				},
				{

					"nation": "Equatorial Guinea ",
					"flag": "gq.svg",
					"states": [{
						"name": "Malabo",
						"tz": "UTC+01:00"
					}]


				},
				{

					"nation": "Eritrea",
					"flag": "er.svg",
					"states": [{
						"name": "Asmara",
						"tz": "UTC+03:00"
					}]


				},
				{

					"nation": "Central African Republic",
					"flag": "cf.svg",
					"states": [{
						"name": "Bangui",
						"tz": "UTC+01:00"
					}]


				},
				{

					"nation": "comoros",
					"flag": "com.png",
					"states": [{
						"name": "Moroni",
						"tz": "UTC+03:00"
					}]


				},
					{

					"nation": "djibouti ",
					"flag": "dj.svg",
					"states": [{
						"name": "Moroni",
						"tz": "UTC+03:00"
					}]


				},
			
				{
					"nation": "Botswana",
					"flag": "bw.svg",
					"states": [{
							"name": "Gaborone",
							"tz": "UTC+02:00 (CAT)"
						}

					]

				}
			]
		}



	];


	/** @openSelect function 
	 *  intended to toggle the search result box  
	 */
	$scope.openSelect = function (current) { // passing the searchedtext for future manipulation as a parameter
		$scope.searchText = ""; //setting the searchbox to value NULL
		$scope.searchResBoxFlag = !$scope.searchResBoxFlag; //toggling the search result box
	} 

	
	/** @selectCountry function 
	 *  intended to do operation after user selects a country 
	 */
	$scope.selectCountry = function (country, state, v_timezone1, cur_flag) {
		$scope.mainTriggerBtnFlag = false; // enabling the get time button
		$scope.searchedCountry = country; //extracting the country name
		$scope.searchedState = state // extracting state name 
		$scope.searchText = $scope.searchedCountry + "-" + $scope.searchedState; // concating country + state name to append ito input field
		$scope.searchResBoxFlag = true; // enabling the get time btn
		$scope.v_timezone1 = v_timezone1; // extarcting the timezone of selected country
		$scope.cur_flag = cur_flag; // extracting the falg image name
	}

	/** @selectCountry function 
	 *  intended to do operation after user triggers get time button
	 */
	$scope.triggerSearchBtn = function () {

		$scope.mainTriggerBtnFlag = true; // enabling the get time button
		$scope.searchResBoxFlag = true; //hiding the serach result box
		$scope.loaderVisiblity = false; // hiding the loader intially

		$timeout(function () {
			$scope.loaderVisiblity = "true"; //delaying the result by showing a loader
			$scope.v_timezone = $scope.v_timezone1; //
			$scope.stateNameCardhead = $scope.searchedState; //setting card header value
			$scope.countryNameCardHead = $scope.searchedCountry; //appending searched country name 
			$scope.extractHours = $filter('date')($scope.curTime, 'HH', $scope.v_timezone);
			$scope.curTime = new Date();
			$scope.extractHours = $filter('date')($scope.curTime, 'HH', $scope.v_timezone);
			console.log($scope.extractHours);
			$scope.cur_flag1 = $scope.cur_flag;
			$scope.mainTriggerBtnFlag = false;
			$scope.hideIntialTime = "true";
			$scope.hideCurTime = false;

		}, 2000);

	}


	$scope.curTime = new Date();

	$interval(function () {
		$scope.curTime = new Date();
		/*console.log($scope.curTime);*/
	}, 1000);





})