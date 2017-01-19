//configures the angular app "app", and sets up the root controller

const app = angular
.module("mushroomMania", ["ngRoute"])
.config(($routeProvider)=>{
  $routeProvider
    .when('/', {
      controller : 'RootCtrl',
      templateUrl : "partials/root.html"
    })
})
// end of config
