

/**
 * @author Shihab PM ( UI Developer )
 * this file is intended to write only the business logic for the app ..
 */

//defining a controller as module for the app ( following layering by feature structure )
angular.module('timezoneApp.controllers', ['timezoneApp.factory']);

//attaching the main controller to the controller module 
angular.module('timezoneApp.controllers').controller('mainController', function ($rootScope, $scope, $interval, $timeout, $filter, getAllCountryList) {

	// declaring variables ...
	$scope.hideCurTime = true; // show a default blank time div block intially
	$scope.countryNameCardHead = "Please select a country"; // default text on the result card header
	$scope.searchResBoxFlag = true; //intially hiding the search result option box
	$scope.v_timezone = "UTC+05:30"; // setting default time to IST
	$scope.cur_flag = "default-flag.png"; //setting default flag icon
	$scope.cur_flag1 = "default-flag.png"; //setting default flag icon
	$scope.loaderVisiblity = true; //hidding the loader intially 
	$scope.mainTriggerBtnFlag = "true"; // disabling the CTA button 
	$scope.curTime = new Date(); //getting the current local machine time

	//using factory object to call a property getlist (fun)
	$scope.getMainPromiseObj = getAllCountryList.getList();


	/** @getMainPromiseObj.then function 
	 *  intended to get the return one more promise object "then" whixh takes a callback as a parmeter to get the response 
	 */
	$scope.getMainPromiseObj.then(function (response) {
		$scope.continents = response.data;
	});


	/** @openSelect function 
	 *  intended to toggle the search result box  
	 */
	$scope.openSelect = function (current) { // passing the searchedtext for future manipulation as a parameter
		$scope.searchText = ""; //setting the searchbox to value NULL
		$scope.searchResBoxFlag = !$scope.searchResBoxFlag; //toggling the search result box
	};


	/** @selectCountry function 
	 *  intended to do operation after user selects a country 
	 */
	$scope.selectCountry = function (country, state, v_timezone1, cur_flag) {
		$scope.mainTriggerBtnFlag = false; // enabling the get time button
		$scope.searchedCountry = country; //extracting the country name
		$scope.searchedState = state; // extracting state name 
		$scope.searchText = $scope.searchedCountry + "-" + $scope.searchedState; // concating country + state name to append ito input field
		$scope.searchResBoxFlag = true; // enabling the get time btn
		$scope.v_timezone1 = v_timezone1; // extarcting the timezone of selected country
		$scope.cur_flag = cur_flag; // extracting the falg image name
	};


	/** @selectCountry function 
	 *  intended to do operation after user triggers get time button
	 */
	$scope.triggerSearchBtn = function () {

		$scope.mainTriggerBtnFlag = true; // enabling the get time button
		$scope.searchResBoxFlag = true; //hiding the serach result box
		$scope.loaderVisiblity = false; // hiding the loader intially

		/** @selectCountry- timeout function 
		 *  intended to do operation on the result showing card
		 */
		$timeout(function () {
			$scope.loaderVisiblity = "true"; //delaying the result by showing a loader
			$scope.v_timezone = $scope.v_timezone1; //
			$scope.stateNameCardhead = $scope.searchedState; //setting card header value
			$scope.countryNameCardHead = $scope.searchedCountry; //appending searched country name 
			$scope.curTime = new Date(); //setting the current time 
			$scope.extractHours = $filter('date')($scope.curTime, 'HH', $scope.v_timezone); //extracting the hour based on the timezone of the corresponding country choosen
			$scope.cur_flag1 = $scope.cur_flag; // updating the falg on the card of selected country
			$scope.mainTriggerBtnFlag = false;
			$scope.hideIntialTime = "true"; // hiding the initial time
			$scope.hideCurTime = false; //showing the current time
		}, 2000);

	};


	/** @interval function 
	 *   intended to do display time ticker on the result card
	 */
	$interval(function () {
		$scope.curTime = new Date();
	}, 1000); //call this function each secound 

});