angular.module('example').controller('ExampleController', ['$cope', 'Authentication',
	function ($scope, Authentication) {
		$scope.authentication = Authentication;
	}
]);