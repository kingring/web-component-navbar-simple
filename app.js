(function () {

 	var app = angular.module("main",['wcNbSimple']);

	app.component("app", {
		template: '<nav-simple left-nav-items="leftNavItems" right-nav-items="rightNavItems" left-nav-select="leftNavSelect(item)" right-nav-select="rightNavSelect(item,ditem)"></nav-simple>',
		controllerAs: "cntl",
		bindings: {
			
		},
		controller: "AppController"
	});

	app.controller("AppController", AppControllerFn);

	AppControllerFn.$inject = ["$scope"];

	function AppControllerFn($scope) {

		$scope.leftNavSelect = function(item) {
			
		};

		$scope.rightNavSelect = function(item, ditem) {
			
		};
		
		$scope.leftNavItems = [{
			title: 'Home',
			active: true,
			disabled: false
		},{
			title: 'Features',
			active: false,
			disabled: false
		},{
			title: 'Pricing',
			active: false,
			disabled: false
		},{
			title: 'Disabled',
			active: false,
			disabled: true
		}];

		$scope.rightNavItems = [{
			title: 'Right Features',
			link: true
		},{
			title: 'Dropdown',
			dropdown: true,
			dropdownItems: [{
				title: 'Action'
			},{
				title: 'Another action'
			},{
				title: 'Something else here'
			}]
		}];
		
	}

})();
