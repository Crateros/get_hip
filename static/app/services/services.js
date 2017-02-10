angular.module('App')

  .factory('WordSearch', ['$http', function($http) {
    return {
      search: function(serviceWord) {
        var URL = '/api/searchword/' + serviceWord;
        var req = {

        }
      }
    }
  }])
