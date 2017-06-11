fasecoldaApp.factory('FasecoldaService', ['$q', '$http', function ($q, $http) {
    return {
          'getAutoFasecolda' : function(option){
			var defer = $q.defer();
			$http.post('/fasecolda/findby',option).then(function(resp){
				console.log("Service resp",resp)
				defer.resolve(resp);
			},function(err){
				defer.reject(err)
			});
			return defer.promise;
		}
    };
}]);