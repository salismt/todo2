var appName = 'todo2copy';

var app = angular.module(appName, ['ngResource', 'ngRoute', 'example', 'users', 'todos']);

// Hashbang location scheme
app.config(['$locationProvider', function ($locationProvider) {
	$locationProvider.hashPrefix('!');
}]);

// Facebook redirect bug
if (window.location.hash === '#_=_') {
	window.location.hash = '#!';
}

// document.ready
angular.element(document).ready(function () {
	angular.bootstrap(document, [appName]);
});