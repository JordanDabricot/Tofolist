angular.module("ToDo",[])
  .controller('TaskCtrl', function ($scope){

  $scope.tasks = [];

  $scope.addTask = function () {
    var pushTask = {
      "taskName": $scope.taskName,
      "subtask": [],
      "favorit": false
    }
      $scope.tasks.push(pushTask);
  }

  $scope.deleteTask = function(index){
    $scope.tasks.splice(index, 1);
  }

  $scope.addSubTask = function(index, subTaskName){
    if($scope.tasks[index].subtask.length < 3){
      $scope.tasks[index].subtask.push(subTaskName);
    }else{
      alert('Nombre de sous-tâches dépassées');
    }
  }

  $scope.deleteSubTask = function(index, parentIndex){
    $scope.tasks[parentIndex].subtask.splice(index,1);
  }

  $scope.deleteAll = function(){
    $scope.tasks = [];
  }

  $scope.isFavorite = function(index){
    if ($scope.tasks[index].favorit === false) {
      $scope.tasks[index].favorit = true;
    } else {
      $scope.tasks[index].favorit = false;
    }
    console.log($scope.tasks[index].favorit);
  }
});
