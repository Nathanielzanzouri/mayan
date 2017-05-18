var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope,$http) {

    $scope.showMe = false;
    $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;

      $http.get('/api').success(function(response){
      $scope.myData = response;
    });

}});
   