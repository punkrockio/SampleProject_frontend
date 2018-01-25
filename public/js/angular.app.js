var myApp = angular.module('BeamApp', ['ngRoute']);





function getCurrent($location){

    var path = $location.path();
    var resource = path.split("1")[0].replace(new RegExp('/', 'g'), "")
    return resource;

}

myApp.controller("BeamController", function($scope, $route, $routeParams, $location){
    
	$scope.resource = getCurrent($location)
    console.log($scope.resource); 
    

    /*$scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;


    $scope.entity = "user";

    $scope.newUser = {};
    $scope.clickedUser = {};
    $scope.alertMassege = "";
    
    $scope.columns = [
        { name: "id"},
        { name: "name"},
        { name: "fullname"},
        { name: "email"}
    ]
    $scope.friendly = "fullname";
    $scope.models = [
      
        {id: 1, name : "Mitchy", fullname : "Mitchy Mitch", email : "rashed@mail.com"},
        {id: 2, name : "Listy", fullname : "Nazmul Hossian", email : "nazmul@mail.com"},
        {id: 3, name : "Coffey", fullname : "Sumona Sharmin", email : "lizu@mail.com"},
               
    ];
    

    
    $scope.saveUser = function(){    
        $scope.models.push($scope.newUser);
        $scope.newUser = {};
        
        $scope.alertMassege = "New item add on list successfully!!";
    };
    
    
    $scope.selectModel = function(model){
        console.log(model);
        $scope.clickedUser = model;
    };
    
    $scope.updateUser = function (){
        $scope.alertMassege = "Update Successfully!!";
    };
    
    
    $scope.deleteUser = function(){
        $scope.models.splice($scope.models.indexOf($scope.clickedUser), 1);
        $scope.alertMassege = "Deleted successfully!!";
    };
    
    $scope.clickedAlert = function(){
        $scope.alertMassege = "";
    };
    */
    
});

















myApp.controller('UserController', function($scope, $routeParams, UserService) {
     
     $scope.params = $routeParams;

    UserService.index().then((users)=>{
        console.log('users', users); 

        $scope.users = users.body.models;
    }) 

     /*$scope.users = [
     	{
     		id: 'Nick Mitchell',
     		name: 'Nick Mitchell',
     		email: 'nick@mitchell.com'
     	},
     	{
     		id: 'list Mitchell',
     		name: 'list Mitchell',
     		email: 'list@mitchell.com'
     	}
     ]*/

 })


myApp.controller('DeviceController', function($scope, $routeParams, DevicesService) {
     
     $scope.params = $routeParams;

     

     DevicesService.index().then((devices)=>{
         console.log('devices', devices); 

         $scope.devices = devices.body.models;
     }) 



 })


myApp.controller('ScenarioController', function($scope, $routeParams) {
     
     $scope.params = $routeParams;

     

     $scope.users = [
     	{
     		id: 'Nick Mitchell',
     		name: 'Nick Mitchell',
     		email: 'nick@mitchell.com'
     	},
     	{
     		id: 'list Mitchell',
     		name: 'list Mitchell',
     		email: 'list@mitchell.com'
     	}
     ]

	 })
	myApp.controller('ScenarioDayController', function($scope, $routeParams) {
	     
	     $scope.params = $routeParams;

         

	     $scope.users = [
	     	{
	     		id: 'Nick Mitchell',
	     		name: 'Nick Mitchell',
	     		email: 'nick@mitchell.com'
	     	},
	     	{
	     		id: 'list Mitchell',
	     		name: 'list Mitchell',
	     		email: 'list@mitchell.com'
	     	}
	     ]

	 })
	myApp.controller('ScenarioWeekController', function($scope, $routeParams) {
	     
	     $scope.params = $routeParams;

         

	     $scope.users = [
	     	{
	     		id: 'Nick Mitchell',
	     		name: 'Nick Mitchell',
	     		email: 'nick@mitchell.com'
	     	},
	     	{
	     		id: 'list Mitchell',
	     		name: 'list Mitchell',
	     		email: 'list@mitchell.com'
	     	}
	     ]

	 })
	myApp.controller('ScenarioMonthController', function($scope, $routeParams) {
	     
	     $scope.params = $routeParams;

         

	     $scope.users = [
	     	{
	     		id: 'Nick Mitchell',
	     		name: 'Nick Mitchell',
	     		email: 'nick@mitchell.com'
	     	},
	     	{
	     		id: 'list Mitchell',
	     		name: 'list Mitchell',
	     		email: 'list@mitchell.com'
	     	}
	     ]

	 })
	myApp.controller('ScenarioYearController', function($scope, $routeParams) {
	     
	     $scope.params = $routeParams;

         

	     $scope.users = [
	     	{
	     		id: 'Nick Mitchell',
	     		name: 'Nick Mitchell',
	     		email: 'nick@mitchell.com'
	     	},
	     	{
	     		id: 'list Mitchell',
	     		name: 'list Mitchell',
	     		email: 'list@mitchell.com'
	     	}
	     ]

	 })




myApp.controller('PredictionController', function($scope, $routeParams) {
     
     $scope.params = $routeParams;

     

     $scope.users = [
     	{
     		id: 'Nick Mitchell',
     		name: 'Nick Mitchell',
     		email: 'nick@mitchell.com'
     	},
     	{
     		id: 'list Mitchell',
     		name: 'list Mitchell',
     		email: 'list@mitchell.com'
     	}
     ]

 })


myApp.controller('DashboardController', function($scope, $routeParams) {
     
     $scope.params = $routeParams;

     

 })





myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/dashboard/', {
        templateUrl: 'partials/dashboard.html',
        controller: 'DashboardController'
    })
	.when('/user/', {
	    templateUrl: 'partials/users.html',
	    controller: 'UserController'
	})
	.when('/device/', {
	     templateUrl: 'partials/devices.html',
	     controller: 'DeviceController'
	})
	.when('/scenario/', {
	     templateUrl: 'partials/scenarios.html',
	     controller: 'ScenarioController'
	})
	.when('/scenario/day', {
	     templateUrl: 'partials/scenarios.day.html',
	     controller: 'ScenarioDayController'
	})
	.when('/scenario/week', {
         templateUrl: 'partials/scenarios.week.html',
         controller: 'ScenarioWeekController'
    })
    .when('/scenario/month', {
	     templateUrl: 'partials/scenarios.month.html',
	     controller: 'ScenarioMonthController'
	})
	.when('/scenario/year', {
	     templateUrl: 'partials/scenarios.year.html',
	     controller: 'ScenarioYearController'
	})
	.when('/prediction/', {
	     templateUrl: 'partials/predictions.html',
	     controller: 'PredictionController'
	})

  // .when('/Book/:bookId/ch/:chapterId', {
  //       template: 'here i am chapter.html',
  //       controller: 'ChapterController'
  // })
  .otherwise('/dashboard')

})