/**
 * @author Shihab PM ( UI Developer )
 * this file is intended to get the Json data ( from a file countryList.json)..
 */

//defining a factory as module for the app ( following layering by feature structure )
angular.module('timezoneApp.factory',[]);

//attaching a factory to the factory module to return the promise object
angular.module('timezoneApp.factory').factory('getAllCountryList',function($http){
    return {
        url : 'db/countryList.json', // declare the file url
        getList : function(){  // intended to push the promise object as a return to the calling function
         return $http.get(this.url); 
        }
    }
});