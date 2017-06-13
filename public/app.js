var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope,$http) {

  // in order to use the json datas
  
   var url = "http://localhost:8000/portfolioshist";
            $http.get(url).success(function (response) {
                $scope.records = response;
            });

   var url = "http://localhost:8000/pnla1";
            $http.get(url).success(function (response) {
                $scope.pnla1 = response;
            });

   var url = "http://localhost:8000/pnla2";
            $http.get(url).success(function (response) {
                $scope.pnla2 = response;
            });         

 var url = "http://localhost:8000/pnldi";
            $http.get(url).success(function (response) {
                $scope.pnldi = response;
            });

 var url = "http://localhost:8000/pnldiavg";
            $http.get(url).success(function (response) {
                $scope.pnldiavg = response;
            });

 var url = "http://localhost:8000/ms1";
            $http.get(url).success(function (response) {
                $scope.ms1 = response;
            });

var url = "http://localhost:8000/ms2";
            $http.get(url).success(function (response) {
                $scope.ms2 = response;
            });

var url = "http://localhost:8000/anl";
            $http.get(url).success(function (response) {
                $scope.anl = response;
            });

var url = "http://localhost:8000/sd1";
            $http.get(url).success(function (response) {
                $scope.sd1 = response;
            });

var url = "http://localhost:8000/sd2";
            $http.get(url).success(function (response) {
                $scope.sd2 = response;
            });

var url = "http://localhost:8000/tvtpi";
            $http.get(url).success(function (response) {
                $scope.tvtpi = response;
            });

var url = "http://localhost:8000/hdpnld";
            $http.get(url).success(function (response) {
                $scope.hdpnld = response;
            });

// show report when its clicked

    $scope.showMe = false;
    $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;


}});
   