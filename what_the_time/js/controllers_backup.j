angular.module('timezoneApp.controllers', []);
angular.module('timezoneApp.controllers').controller('mainController', function ($rootScope, $scope, $interval, $timeout, $filter, $http) {


	$http({
		method: 'GET',
		url: 'https://ipinfo.io'
	}).then(function successCallback(response) {

		console.log(response.data);
	}, function errorCallback(response) {

		console.log("ERROR");
	});

	/*$.get("https://ipinfo.io", function(response) {
    console.log(response.city, response.country);
}, "jsonp");*/

	$scope.flag = true;
	$scope.v_timezone = "UTC+05:30";
	$scope.extractedCountryList = [];
	$scope.cur_flag = "in.svg";
	$scope.cur_flag1 = "in.svg";
	$scope.loaderVisiblity = true;
	$scope.mainTriggerBtnFlag = "true";
	$scope.curTime = new Date();
	$scope.extractHours = $filter('date')($scope.curTime, 'HH', $scope.v_timezone);
	$scope.continents = [{
			"name": "ASIA",
			"countries": [{
				"nation": "INDIA",
				"flag": "in.svg",
				"states": [{
					"name": "Delhi",
					"tz": "UTC+05:30"
				}]

			}]
		},
		{
			"name": "Europe",
			"countries": [{
				"nation": "France",
				"flag": "fr.svg",
				"states": [{
					"name": "MarquesasIslands",
					"tz": "UTC-09:30"
				}, {
					"name": "New Caledonia",
					"tz": "+1100"
				}, {
					"name": "Clipperton Island",
					"tz": "GMT -7"
				}, {
					"name": "Réunion",
					"tz": "+0400"
				}]

			}]
		}


	];

	for (var i = 0; i < $scope.continents.length; i++) {
		for (var j = 0; j < $scope.continents[i].countries.length; j++) {
			$scope.extractedCountryList.push($scope.continents[i].countries[j]);

		}
	}

	console.log($scope.extractedCountryList);
	angular.toJson($scope.extractedCountryList);


	$scope.countryListNew = [{
		"continents": [{
				"continent": "ASIA",
				"countries": [{

					"nation": "INDIA",
					"flag": "in.svg",
					"states": [{
						"name": "Delhi",
						"tz": "UTC+05:30"
					}]


				}, {
					"nation": "France",
					"flag": "fr.svg",
					"states": [{
						"name": "MarquesasIslands",
						"tz": "UTC-09:30"
					}, {
						"name": "New Caledonia",
						"tz": "+1100"
					}, {
						"name": "Clipperton Island",
						"tz": "GMT -7"
					}, {
						"name": "Réunion",
						"tz": "+0400"
					}]
				}, {
					"nation": "USA - United States of America",
					"flag": "us.svg",
					"states": [{
						"name": "California",
						"tz": "UTC-08:00"
					}]
				}]

			}, {
				"continent": "North America"
			}, {
				"continent": "Antartica"
			}, {
				"continent": "Africa"
			}, {
				"continent": "Europe"
			}, {
				"continent": "Australia"
			}


		]

	}];

	$scope.openSelect = function (current) {
		$scope.searchText = "";
		$scope.flag = !$scope.flag;
	}
	$scope.selectCountry = function (country, state, v_timezone1, cur_flag) {
		$scope.mainTriggerBtnFlag = false;
		$scope.searchedCountry = country;
		$scope.searchedState = state
		$scope.searchText = $scope.searchedCountry + "-" + $scope.searchedState;

		$scope.flag = true;



		$scope.v_timezone1 = v_timezone1;
		$scope.cur_flag = cur_flag;


	}

	$scope.triggerSearchBtn = function () {
		$scope.mainTriggerBtnFlag = true;
		$scope.flag = true;
		$scope.loaderVisiblity = false;
		$timeout(function () {
			$scope.loaderVisiblity = "true";
			$scope.v_timezone = $scope.v_timezone1;
			$scope.stateNameCardhead = $scope.searchedState;
			$scope.countryNameCardHead = $scope.searchedCountry;


			$scope.curTime = new Date();
			$scope.extractHours = $filter('date')($scope.curTime, 'HH', $scope.v_timezone);
			console.log($scope.extractHours);

			$scope.cur_flag1 = $scope.cur_flag;
			$scope.mainTriggerBtnFlag = false;

		}, 2000);

	}


	$scope.curTime = new Date();

	$interval(function () {
		$scope.curTime = new Date();
		/*console.log($scope.curTime);*/
	}, 1000);





})