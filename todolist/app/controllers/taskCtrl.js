app.controller('TaskCtrl', function ($scope, TaskFactory) {

  TaskFactory.setTask();

  $scope.tasks = TaskFactory.tasks;

  $scope.addTask = function(){
   TaskFactory.addTask($scope.task);
  }

  $scope.deleteTask = function(){
   TaskFactory.deleteTask($scope.deleteTask);
  }

  $scope.addSubTask = function(index, subTaskName){
   TaskFactory.addSubTask(index, subTaskName);
  }

  $scope.deleteSubTask = function(index, parentIndex){
   TaskFactory.deleteSubTask(index, parentIndex);
  }

  $scope.deleteAll = function(){
   TaskFactory.deleteAll();
    $scope.tasks = TaskFactory.tasks;
  }

  $scope.isFavorite = function(favourite){
   TaskFactory.isFavorite(favourite);
  }
});
