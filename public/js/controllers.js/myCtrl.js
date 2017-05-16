var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {

    $scope.showMe = false;
    $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
};
    $scope.products = [];
    $scope.addItem = function () {
        $scope.products.push($scope.addMe);
    }    
    $scope.removeItem = function (x) {
      $scope.products.splice(x,1);
    }
});

