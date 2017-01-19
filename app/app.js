
angular
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
.factory("mushroomFactory", ($http)=>{
  return {
    getMushrooms : () => {
      return $http
      .get("mushrooms.json")
      .then((response)=>{


        var newArray = []

        for(var i=0; i< response.data.mushrooms.length; i++) {
          for (key in response.data.mushrooms[i]) {
            response.data.mushrooms[i][key].name = key
            newArray.push(response.data.mushrooms[i][key])
          }
        }
        // console.log("newArray in mushroomFactory", newArray)
        return newArray
      })
      //end of then
    }
    //end of function
  }
  //end of object
})
//end of factory
.factory("poisonFilterFactory", (mushroomFactory)=>{
  return {
    filterPoison : (boolean) => {
      return new Promise(function(res, rej){
        var filteredArray = []
      mushroomFactory.getMushrooms()
      .then((response)=> {
        var mushroomArray = response;
        console.log("mushroomArray in poison filter factory", mushroomArray)

        for(var i=0; i< mushroomArray.length; i++) {
          // for(key in mushroomArray[i]) {
          // console.log("mushroomArray[i].ebible in poison filter factory loop", mushroomArray[i].edible
            if(mushroomArray[i].edible === boolean) {
              filteredArray.push(mushroomArray[i])
            } //end of iff
          //} // end of for in
        }// end of for

      }) //end of .then
      res(filteredArray)
      console.log("filtered Array", filteredArray)
       }) //end of promise
    }
  } //end of object

})
//end of factory
