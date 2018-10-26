var app = angular.module('alertApp', []);

app.controller('alertCtrl', function($scope) {
  	$scope.alert = function(value){
  	alert(value);
  		};
});