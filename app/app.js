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
.controller("RootCtrl", function ($scope, mushroomFactory, poisonFilterFactory) {
  console.log('ROOT')
  mushroomFactory
  .getMushrooms().
  then((mushrooms)=>{
    $scope.mushroomList = mushrooms;
  })
  $scope.poison = () => {

      poisonFilterFactory.filterPoison(false)
      .then((response) => {
        $scope.mushroomList = response;
        console.log("response from poison filter", $scope.mushroomList)
      })
    }
    $scope.unPoison = () => {

      poisonFilterFactory.filterPoison(true)
      .then((response) => {
        $scope.mushroomList = response;
        console.log("response from UNpoison filter", $scope.mushroomList)
      })
    }
    $scope.allmushrooms = () => {

      mushroomFactory
      .getMushrooms().
      then((mushrooms)=>{
      $scope.mushroomList = mushrooms;
      })
    }

})
// end of controller
