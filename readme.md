#angular SPA wrapping the omdb API

- minimal CSS/styling 
- uses angular.js and angular-route.js
- uses `$routeProvider` in an `app.config` function
- controllers use:
	- `$scope` for getting/setting data to/from the API to the app
	- `$http` to make AJAX get requests omdbapi.com
	- `$routeParams` to build the get requests address strings
	- `$location` to set the path upon search button click (data from the `ng-model` input field)
