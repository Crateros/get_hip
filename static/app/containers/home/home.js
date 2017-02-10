angular.module('App')
.component('homeComp', {
  templateUrl: 'app/containers/home/home.html',
  controller: HomeCompCtrl,
  controllerAs: 'homeComp'
});

function HomeCompCtrl(WordSearch) {
  var homeComp = this;

  homeComp.searchWord = function(word) {
    console.log("search term: ", homeComp.wordSearchTerm)
    if (homeComp.wordSearchTerm !== undefined && homeComp.wordSearchTerm !== "") {
      var serviceWord = homeComp.wordSearchTerm;
      WordSearch.search(serviceWord).then(function(words) {
        console.log(words)
      })
    }
  }

}
HomeCompCtrl.$inject = ['WordSearch'];
