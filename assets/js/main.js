var fasecoldaApp = angular.module('fasecoldaApp', []);

fasecoldaApp.controller('FasecoldaCtrl',['$scope', '$rootScope', 'FasecoldaService', function($scope, $rootScope, FasecoldaService){
	$scope.inputData = {};
	$scope.autos = [];
	$scope.hola = "Hola";

	$scope.getAuto = function (e) {
		console.log($scope.inputData.value);
		FasecoldaService.getAutoFasecolda($scope.inputData).then(function(respObj){
			console.log(respObj);
			$scope.autos = respObj.data;
		});
	}
}])