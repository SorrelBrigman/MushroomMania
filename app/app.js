
angular
.module("mushroomMania", ["ngRoute"])
.config(($routeProvider)=>{
  $routeProvider
    .when('/', {
      controller : 'RootCtrl',
      templateUrl : "partials/root.html"
    })
})
