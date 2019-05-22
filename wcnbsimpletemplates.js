angular.module('wcNavBarSimpleTemplates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('navbar-simple.html',
    "<nav class=\"navbar navbar-light bg-primary navbar-expand-lg\">\r" +
    "\n" +
    "	<a class=\"navbar-brand\" href=\"#\">Navbar</a>	\r" +
    "\n" +
    "	<div class=\"d-flex flex-row-reverse d-lg-none\">\r" +
    "\n" +
    "		<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r" +
    "\n" +
    "	    	<span class=\"navbar-toggler-icon\"></span>\r" +
    "\n" +
    "	  	</button>\r" +
    "\n" +
    "  		<ul class=\"nav\">\r" +
    "\n" +
    "  			<li ng-repeat=\"item in $ctrl.rightNavItems\" class=\"nav-item\" ng-class=\"{dropdown: item.dropdown}\">\r" +
    "\n" +
    "  				<a ng-if=\"item.link\" class=\"nav-link\" href=\"#\" ng-click=\"$ctrl.onSelectRightNav(item)\">{{item.title}}</a>\r" +
    "\n" +
    "  				<a ng-if=\"item.dropdown\" class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown_{{item.title}}\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{item.title}}</a>\r" +
    "\n" +
    "  				<div ng-if=\"item.dropdown\" class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown_{{item.title}}\">\r" +
    "\n" +
    "  					<a ng-repeat=\"ditem in item.dropdownItems\" class=\"dropdown-item\" href=\"#\" ng-click=\"$ctrl.onSelectRightNav(item,ditem)\">{{ditem.title}}</a>\r" +
    "\n" +
    "  				</div>\r" +
    "\n" +
    "  			</li>\r" +
    "\n" +
    "	    </ul>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "	<div class=\"collapse navbar-collapse\" id=\"navbarNav\">	  	\r" +
    "\n" +
    "	    <ul class=\"navbar-nav\">\r" +
    "\n" +
    "	      <li ng-repeat=\"item in $ctrl.leftNavItems\" class=\"nav-item\">\r" +
    "\n" +
    "	      	<a class=\"nav-link\" href=\"#\" ng-class={active:item.active,disabled:item.disabled} aria-disabled=\"item.disabled\" ng-click=\"$ctrl.onSelectLeftNav(item)\">{{item.title}}</a>\r" +
    "\n" +
    "	      </li>\r" +
    "\n" +
    "	    </ul>\r" +
    "\n" +
    "	</div>	\r" +
    "\n" +
    "	<div class=\"d-lg-flex d-none flex-row-reverse\">\r" +
    "\n" +
    "		<ul class=\"nav\">\r" +
    "\n" +
    "			<li ng-repeat=\"item in $ctrl.rightNavItems\" class=\"nav-item\" ng-class=\"{dropdown: item.dropdown}\">\r" +
    "\n" +
    "  				<a ng-if=\"item.link\" class=\"nav-link\" href=\"#\" ng-click=\"$ctrl.onSelectRightNav(item)\">{{item.title}}</a>\r" +
    "\n" +
    "  				<a ng-if=\"item.dropdown\" class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown_{{item.title}}\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{item.title}}</a>\r" +
    "\n" +
    "  				<div ng-if=\"item.dropdown\" class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown_{{item.title}}\">\r" +
    "\n" +
    "  					<a ng-repeat=\"ditem in item.dropdownItems\" class=\"dropdown-item\" href=\"#\" ng-click=\"$ctrl.onSelectRightNav(item,ditem)\">{{ditem.title}}</a>\r" +
    "\n" +
    "  				</div>\r" +
    "\n" +
    "  			</li>\r" +
    "\n" +
    "	    </ul>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "</nav>"
  );

}]);
