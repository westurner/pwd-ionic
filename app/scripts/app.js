// pwd // an Ionic application

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'pwd' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'pwd.controllers' is found in controllers.js
'use strict';

angular.module('pwd', ['ionic', 'pwd.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '',
    abstract: true,
    templateUrl: 'templates/_menu.html',
    controller: 'AppCtrl'
  })

  .state('app.pwd', {
    url: '/',
    views: {
      'menuContent': {
        templateUrl: 'templates/pwd.html',
        controller: 'PwdCtrl'
      }
    }
  })

  .state('app.about', {
    url: '/about',
    views: {
      'menuContent': {
          templateUrl: 'templates/about.html',
          controller: 'AboutCtrl'
      }
    }
  })

  ;

  console.log($stateProvider);
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
});
