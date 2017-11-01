var myApp = angular.module('myApp', []);

myApp.controller('ChuckController', function($http) {
  console.log('WoodChuckController created');
  var vm = this;


  vm.newWoodChuck = {
  "Id": 1,
  "Name": "Chuckles",
  "Height": 25,
  "Weight": 32,
  "Age": 4,
  "Active": true
};
  //put request to add a completed task.
  vm.postChuck = function(newWoodChuck) {
    console.log(newWoodChuck);
    vm.completedTask.username = newWoodChuck;
    console.log('UserController -- task -- sending to server...', newWoodChuck);
    $http.post('/api/Woodchuck/', newWoodChuck).then(function(response) {
      console.log(response);
    }).catch(function(response){
      console.log('UserController -- post task -- failure: ', response);
      vm.message = "Uh-oh, Post not updated!";
    });
  }


  //
  // //sweetalert msg
  // swal({
  //   title: 'Success!',
  //   text: 'Way to go! Your task was posted!',
  //   type: 'success',
  //   confirmButtonText: 'Awesome'
  // }) //end of sweetAlert

});
