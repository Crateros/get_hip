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
    // specify custom types for $resource
    {
    //   $resourceProvider.defaults.actions = {
    //   create: {method: 'POST'},
    //   get:    {method: 'GET'},
    //   getAll: {method: 'GET', isArray:true},
    //   update: {method: 'PUT'},
    //   delete: {method: 'DELETE'}
    // };

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
