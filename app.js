(function (){
	'use strict';
	angular.module("LunchApp", [])

	.controller('LunchController', LunchController);
	LunchController.$inject = ['$scope'];

	function LunchController ($scope) {
		$scope.message = "";
		$scope.dishes = "";
		$scope.colorOk = null;

		$scope.showMessage = function () {
			if($scope.dishes.length > 0) {
				var dishArray = $scope.dishes.split(",");

			$scope.message = checkDishesCount(dishArray);
			$scope.colorOk = true;
			}
			else
			{
			$scope.message = "Please enter data first";	
			$scope.colorOk = false;
			}	
		};
		
	};

	function checkDishesCount(dishes) {
		var dishCount = dishes.length;
		if(dishCount < 4)
			return "Enjoy!"
		else
			return "Too much!"
	}
	

}) ();