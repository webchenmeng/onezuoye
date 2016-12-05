angular.module("myApp",[])

.controller("myController",["$scope",function($scope){
     var userInfo = [
        {"FirstName":"FANG",
				"LastName":"vane",
				"Gender":"Male",
				"Salary":"12,333.50",
				"Salary1":"¥12,333.5",
				"Birthday":new Date("2017-12-25")},
				{"FirstName":"SARA",
				"LastName":"rose",
				"Gender":"Female",
				"Salary":"23,334.23",
				"Salary1":"¥23,334.2",
				"Birthday":new Date("1335-12-25")},
				{"FirstName":"AAM",
				"LastName":"hot",
				"Gender":"Male",
				"Salary":"66,880.50",
				"Salary1":"¥68,880.5",
				"Birthday":new Date("1986-12-25")},
				{"FirstName":"MARK",
				"LastName":"bear",
				"Gender":"Male",
				"Salary":"68,000.50",
				"Salary1":"¥66,880.5",
				"Birthday":new Date("1995-12-25")}
				
     ]
     $scope.userInfo = userInfo;
     $scope.sortColumn = "name";   // 排序字段
     $scope.reverseSort = false;   // 默认的排序方式

     // 设置排序字段
     $scope.setSort = function(column){
         // 如果传递过来的排序字段和当前字段一致，则要降序，否则升序
         $scope.reverseSort = $scope.sortColumn == column?!$scope.reverseSort:false;
         $scope.sortColumn = column;
     }


     // 设置类
     $scope.getClass = function(column){
         if($scope.sortColumn == column){
             return $scope.reverseSort? "allow-down" : "allow-up";
         }
     }
}])
