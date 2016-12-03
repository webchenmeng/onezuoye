var m=angular.module("myApp",[]);
		m.controller("app",["$scope","$filter",function($scope,$filter){
			var arr=[
				{"FirstName":"FANG",
				"LastName":"vane",
				"Gender":"Male",
				"Salary":"12,333.50",
				"Salary1":"¥12,333.5",
				"Birthday":"2017-07-11"},
				{"FirstName":"SARA",
				"LastName":"rose",
				"Gender":"Female",
				"Salary":"23,334.23",
				"Salary1":"¥23,334.2",
				"Birthday":"1997-02-03"},
				{"FirstName":"AAM",
				"LastName":"hot",
				"Gender":"Male",
				"Salary":"66,880.50",
				"Salary1":"¥68,880.5",
				"Birthday":"1986-03-04"},
				{"FirstName":"MARK",
				"LastName":"bear",
				"Gender":"Male",
				"Salary":"68,000.50",
				"Salary1":"¥66,880.5",
				"Birthday":"1968-03-22"}
				
			];
			 $scope.arr1=arr;
		
			var isopen=true;
			$scope.sort=function(str){
				$scope.arr1=$filter("orderBy")($scope.arr1,str,isopen);
				isopen=!isopen;
			};

		}]);