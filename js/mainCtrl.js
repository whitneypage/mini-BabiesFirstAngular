var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope){
  $scope.friends = ['Macy Garner', 'Kendra Smith', 'Chuck Grotte', 'Jerod Garner'];
  $scope.addFriend = function() {
  	$scope.friends.push($scope.name);
  	$scope.name = " ";
  }
});