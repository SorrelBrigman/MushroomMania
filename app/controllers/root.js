app.controller("RootCtrl", function ($scope, mushroomFactory, poisonFilterFactory) {
  //loads list of mushrooms on to page using the mushroom factory and it's funciton
  mushroomFactory
  .getMushrooms().
  then((mushrooms)=>{
    $scope.mushroomList = mushrooms;
  })
  $scope.poison = () => {
    // on click of the poisonous button, only poisonous mushrooms are displayed
      //passes the value false to the function
      poisonFilterFactory.filterPoison(false)
      .then((response) => {
        $scope.mushroomList = response;

      })
    }
    $scope.unPoison = () => {
      // on click of the non-poisonous button, only non-poisonous mushrooms are displayed
      //passes the value true to the function
      poisonFilterFactory.filterPoison(true)
      .then((response) => {
        $scope.mushroomList = response;

      })
    }
    $scope.allmushrooms = () => {
      // on click of show all, all mush rooms are display.  This recalls the first function on view load
      mushroomFactory
      .getMushrooms().
      then((mushrooms)=>{
      $scope.mushroomList = mushrooms;
      })
    }

})
// end of controller
