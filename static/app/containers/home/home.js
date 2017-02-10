angular.module('App')
.component('homeComp', {
  templateUrl: 'app/containers/home/home.html',
  controller: HomeCompCtrl,
  controllerAs: 'homeComp'
});

function HomeCompCtrl($http) {

  // $sceProvider.enabled(false)

  new Clipboard('#copy-btn');
  var homeComp = this;
  homeComp.editArray = [];
  homeComp.wordChoices = [];
  homeComp.currentEditIndex = {};
  homeComp.showModal = false;
  homeComp.searched = undefined;

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
    homeComp.searched = true;
    console.log("User input: ", homeComp.userInputArea);
    homeComp.originalInput = homeComp.userInputArea;
    homeComp.editArray = homeComp.userInputArea.split(/[ ,.]+/).filter(Boolean);
    console.log("Edited Array: ", homeComp.editArray);
  }

  homeComp.searchInput = function($index) {
    homeComp.currentEditIndex = {value: $index}
    // console.log("$index: ", $index)
    console.log("search input: ", homeComp.editArray[$index])
      homeComp.showModal = true;
      console.log(homeComp.showModal)
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
        console.log("Word choices:", homeComp.wordChoices);
        console.log(homeComp.editArray[$index]);
        homeComp.currentEditIndex = homeComp.editArray.indexOf(homeComp.editArray[$index]);
        // homeComp.untrustedArr = homeComp.specificWordInfo.data.sounds[0].split(":");
        // homeComp.untrustedArr[0] = "https:";
        // homeComp.trustedUrl = homeComp.untrustedArr[0] + homeComp.untrustedArr[1];
        return response;
      });
  }

  homeComp.replaceWord = function($index) {
    console.log("Current edit index:", homeComp.currentEditIndex);
    console.log("selectedWord:", homeComp.selectedWord);
    console.log("wordChoices: ", homeComp.wordChoices);
    homeComp.editArray[homeComp.currentEditIndex] = homeComp.specificWordInfo.data.tags[$index];
  }

  homeComp.copyClipboard = function() {
    homeComp.editArrayJoined = homeComp.editArray.join(' ');
  }

  homeComp.clearResults = function() {
    homeComp.originalInput = "";
    homeComp.editArray = [];
    $("#user-input-area").val("");
  }

}
HomeCompCtrl.$inject = ['$http'];
