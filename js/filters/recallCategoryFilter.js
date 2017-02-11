/*
* Filter for converting categories from the Canadian Recalls and Safety Alerts API
* from numeric codes to easily understandable categories.
*/
(function() {
	var recallListingsApp = angular.module('RecallListingsApp');

	recallListingsApp.filter('recallCategory', function() {

		var categoryMap = {
			1: "Food",
			2: "Vehicles",
			3: "Health Products",
			4: "Consumer Products"
		}

		return function(input) {

			if(!Array.isArray(input)) {
				return input;
			} else {
				var category = [];

				for(var i = 0; i < input.length; i++) {
					category.push(categoryMap[input[i]]);
				};
				
				return category.join(",");
			}
		};

	});

}());