var angular = require('angular');
require('./design.css');
var angularDirective = require('./directive/angularDirective.js');

var angularApp = angular.module('sampleApp',[]);

angularDirective(angularApp);

angularApp.controller('sampleController',['$scope','$http',function($scope,$http){
	$scope.component = "diode";
	$scope.newComp = "dummyValue";
	getComponents();

	$scope.getTreeData = function(){
		console.log('ctrl');
		$scope.component = "resistor"
		var request  = $http({
			method : 'get',
			url: 'public/dummy.json',
			data:{
				name: "pradeep"
			}
		});

		request.then(
		function(res){
			$scope.components = res.data.components;
			
		},
		function(err){
			debugger;
		});
	}



function getComponents(){
		
		var request  = $http({
			method : 'get',
			url: 'public/dummy.json',
			data:{
				name: "pradeep"
			}
		});

		request.then(
		function(res){
			$scope.newComp =  res.data.components;
			
		},
		function(err){
			debugger;
		});

	}

}]);


