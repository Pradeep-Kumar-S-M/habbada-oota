

var invokeDirective = function(angularModule){
	angularModule.directive('tree',['$http',function($http){
		return{
			restrict : 'A',
			templateUrl : 'public/directive/sampleTemplate.html',
			link : function(scope, element, attrs){

				var request  = $http({
					method : 'get',
					url: 'public/dummy.json',
					data:{
						name: "pradeep"
					}
				});

				request.then(
				function(res){
					scope.newComp =  res.data.components;
					
				},
				function(err){
					debugger;
				});
			}
		}
	}]);
}	



module.exports = invokeDirective;

