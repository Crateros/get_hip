angular.module('App', ['ui.router'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  '$httpProvider',
  function(
    $stateProvider,
    $urlRouterProvider,
    $locationProvider,
    $httpProvider)
    {

    //Setup states (routes)
    $stateProvider
    .state('homeState', {
      url: '/',
      component: 'homeComp'
    });

    //Removes # symbol for our routes
    $locationProvider.html5Mode(true);
  }
]);
