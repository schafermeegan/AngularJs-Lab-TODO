"use strict";
function TodoController($scope) {  
		$scope.todos = [{
      title:'Go to the bank',
      completed: false
    },
    {
      title:'Workout',
      completed: false
    },
    {
      title:'Pay the babysitter',
      completed: false
    },
    {
      title:'Mow the lawn',
      completed: false
    }];

 
		$scope.addtask = function() {
			$scope.todos.push({'title': $scope.newtodo, 'completed':false})
			$scope.newtodo = ''
    }
    
		$scope.removeTask = function(index) {	
			$scope.todos.splice(index, 1);
    }

    $scope.completedTask = function() {
      $scope.todos.pop('completeButton');
    }
    
	}






angular
  .module("todoApp")
  .controller("TodoController", TodoController);


