var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope,$http) {
  
   var url = "http://localhost:8000/portfolioshist";
            $http.get(url).success(function (response) {
                $scope.records = response;
            });


    $scope.showMe = false;
    $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;


}});
   