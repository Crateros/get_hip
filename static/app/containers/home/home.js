angular.module('App')
.component('homeComp', {
  templateUrl: 'app/containers/home/home.html',
  controller: HomeCompCtrl,
  controllerAs: 'homeComp'
});

function HomeCompCtrl($http) {
  var homeComp = this;
  homeComp.editArray = [];
  homeComp.currentEditIndex = "";

  homeComp.searchWord = function(word) {
    console.log("search term: ", homeComp.wordSearchTerm)
    if (homeComp.wordSearchTerm !== undefined && homeComp.wordSearchTerm !== "") {
      var req = {
        method: "GET",
        url: 'https://mashape-community-urban-dictionary.p.mashape.com/define?term=' + homeComp.wordSearchTerm,
        headers: {
        'X-Mashape-Key': '2Io5M1agBJmshkIdUw0kotDZYTWQp1aL0GajsnzOU6V7tiejJ1',
        'Accept': "application/json"
        }
      };
      $http(req).then(function(response) {
        console.log(response);
        return response;
      });
    }
  }

  homeComp.getUserInput = function() {
    console.log("User input: ", homeComp.userInputArea);
    homeComp.originalInput = homeComp.userInputArea;
    homeComp.editArray = homeComp.userInputArea.split(/[ ,.]+/).filter(Boolean);
    console.log("Edited Array: ", homeComp.editArray);
  }

  homeComp.searchInput = function($index) {
    console.log("search input: ", homeComp.editArray[$index])
      var req = {
        method: "GET",
        url: 'https://mashape-community-urban-dictionary.p.mashape.com/define?term=' + homeComp.editArray[$index],
        headers: {
        'X-Mashape-Key': '2Io5M1agBJmshkIdUw0kotDZYTWQp1aL0GajsnzOU6V7tiejJ1',
        'Accept': "application/json"
        }
      };
      $http(req).then(function(response) {
        console.log(response);
        homeComp.specificWordInfo =  response;
        console.log("this is spec word info: ", homeComp.specificWordInfo);
        homeComp.wordChoices = response.data.tags;
        console.log(homeComp.wordChoices);
        console.log(homeComp.editArray[$index]);
        homeComp.currentEditIndex = homeComp.editArray.indexOf(homeComp.editArray[$index]);
        console.log(homeComp.specificWordInfo.data.sounds[0]);
        homeComp.untrustedArr = homeComp.specificWordInfo.data.sounds[0].split(":");
        homeComp.unstrustedArr[0] = "https";
        return response;
      });
  }

  homeComp.replaceWord = function() {
    console.log(homeComp.currentEditIndex);
    console.log("selectedWord:", homeComp.selectedWord);
    console.log("wordChoices: ", homeComp.wordChoices);
    homeComp.editArray[homeComp.currentEditIndex] = homeComp.selectedWord;

  }


}
HomeCompCtrl.$inject = ['$http'];
