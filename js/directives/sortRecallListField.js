/*
* Directive for a column that can be sorted in ascending and descending order.
*/
(function() {
	var recallListingsApp = angular.module('RecallListingsApp');

	recallListingsApp.directive('sortRecallListField', function() {

		return {
		  restrict: 'E',
		  scope: {
		    upsort: "&",
		    downsort: "&",
		    title: "@"
		  },
		  templateUrl: 'templates/directives/sortRecallListField.html'
		};

	});
}());