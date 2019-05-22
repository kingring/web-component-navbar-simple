(function () {

 	var app = angular.module("wcNbSimple",["wcNavBarSimpleTemplates"]);

	app.component("navSimple", {
		templateUrl: "navbar-simple.html",
		bindings: {
			leftNavItems: "<",
			rightNavItems: "<",
			leftNavSelect: '&',
			rightNavSelect: '&'
		},
		controller: "NavSimpleController"
	});

	app.controller("NavSimpleController", NavSimpleControllerFn);

	NavSimpleControllerFn.$inject = ["$scope"];

	function NavSimpleControllerFn($scope) {

		var vm = $scope.$ctrl;

		vm.onSelectLeftNav = function(item) {
			vm.leftNavSelect({
				'item': item
			});
		};

		vm.onSelectRightNav = function(item, ditem) {
			vm.rightNavSelect({
				'item': item,
				'ditem': ditem
			});
		};
	}

})();
