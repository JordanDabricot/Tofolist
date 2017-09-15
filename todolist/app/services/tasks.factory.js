app.factory('TaskFactory', function($http){
  var factory = {
    tasks : [],

    addTask: function(taskName){
      var pushTask = {
        "task": taskName,
        "subTask": [],
        "favourite": false
      }
        this.tasks.push(pushTask);
    },

    deleteTask: function(index){
      this.tasks.splice(index, 1);
    },

    addSubTask: function(index, subTaskName){
      if(this.tasks[index].subTask.length < 3)
        this.tasks[index].subTask.push(subTaskName);
      else {
        alert('Ta race reste à trois');
      }
    },

    deleteSubTask: function(index, parentIndex){
        this.tasks[parentIndex].subTask.splice(index,1);
    },

    deleteAll: function(){
        this.tasks = [];
    },

    isFavorite: function(index){
      this.tasks[index].favourite = !this.tasks[index].favourite;
    },

    setTask: function(){
      var that = this;
      $http.get('http://demo2298213.mockable.io/tasks').
      then(function(respond) {
        respond.data.tasks.map(function(task){
          that.tasks.push(task);
        })

      },
      function(respond){
        console.error(respond);
      });
    }
  }
  return factory;
});
