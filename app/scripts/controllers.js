'use strict';

(function() {
var app = angular.module('pwd.controllers', []);


app.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
    console.log('appctrl', $scope);
});

app.controller('PwdCtrl', function($scope) {
    console.log('pwdctrl', $scope);
});

app.controller('AboutCtrl', function($scope) {
    console.log('aboutctrl', $scope);
});

})();
