angular.module('App')
.component('homeComp', {
  templateUrl: 'app/containers/home/home.html',
  controller: HomeCompCtrl,
  controllerAs: 'homeComp'
});

function HomeCompCtrl($http) {
  var homeComp = this;

  // homeComp.searchWord = function(word) {
  //   console.log("search term: ", homeComp.wordSearchTerm)
  //   if (homeComp.wordSearchTerm !== undefined && homeComp.wordSearchTerm !== "") {
  //     var serviceWord = homeComp.wordSearchTerm;
  //     WordSearch().then(function(response) {
  //       console.log(response)
  //     })
  //   }
  // }

  homeComp.searchWord = function(word) {
    console.log("search term: ", homeComp.wordSearchTerm)
    if (homeComp.wordSearchTerm !== undefined && homeComp.wordSearchTerm !== "") {
      var serviceWord = homeComp.wordSearchTerm;
      // $http.defaults.headers.common['X-Mashape-Key'] = '2Io5M1agBJmshkIdUw0kotDZYTWQp1aL0GajsnzOU6V7tiejJ1';
      var req = {
        method: "GET",
        url: 'https://mashape-community-urban-dictionary.p.mashape.com/define?term=wat',
        headers: {
        'X-Mashape-Key': '2Io5M1agBJmshkIdUw0kotDZYTWQp1aL0GajsnzOU6V7tiejJ1',
        'Accept': "application/json"
        }
      };
        $http(req)
        .then(function(response) {
            console.log(response);
            return response;
        });
    }
  }

}
HomeCompCtrl.$inject = ['$http'];
