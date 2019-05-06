(function () {

 	var app = angular.module("main",['wcNbSimple']);

	app.component("app", {
		template: '<nav-simple></nav-simple>',
		controllerAs: "cntl",
		bindings: {
			
		},
		controller: "AppController"
	});

	app.controller("AppController", AppControllerFn);

	AppControllerFn.$inject = ["$scope"];

	function AppControllerFn($scope) {
		

		
	}

})();
