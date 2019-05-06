(function () {

 	var app = angular.module("wcNbSimple",[]);

	app.component("navSimple", {
		templateUrl: "navbar-simple.html",
		controllerAs: "cntl",
		bindings: {
		},
		controller: "NavSimpleController"
	});

	app.controller("NavSimpleController", NavSimpleControllerFn);

	NavSimpleControllerFn.$inject = ["$scope"];

	function NavSimpleControllerFn($scope) {

		var vm = $scope.$ctrl;

		vm.$onInit = function() {
			
		};
	}

})();
