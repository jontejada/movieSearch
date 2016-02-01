var app = angular.module('movieApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		// .when('/#/', {
		// 	controller: "MainController"
		// })
		.when('/movie/:imdb', {
			templateUrl: 'templates/movie.html',
			controller: "MovieController"
		})
		.when('/:search', {
			templateUrl: 'templates/results.html',
			controller: "ResultsController"
		})
		.otherwise({
			redirectTo: '/'
		});
});

app.controller('MovieController', function($scope,$http,$routeParams) {
	$http.get('http://www.omdbapi.com/?i=' + $routeParams.imdb).then(function(data){
		console.log('MC get success', data);
		$scope.movieData = data.data;
	}, function(err){
		console.log('MC get error', err);
	});
});

app.controller('ResultsController', function($scope,$http,$routeParams){
	console.log('rp', $routeParams);
	$http.get('http://www.omdbapi.com/?s=' + $routeParams.search).then(function(data){
		console.log('RC get success', data.data.Search);
		$scope.movieData = data.data.Search;
	}, function(err){
		console.log('RC get error', err);
	});
});

app.controller('BodyController', function($scope, $location) {
	console.log('bc');
	$scope.title = "";
	$scope.search = function(title) {
		console.log('sea');
		$location.path(title);
		};
});