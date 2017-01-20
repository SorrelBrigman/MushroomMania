app.factory("mushroomFactory", ($http)=>{
  return {
    getMushrooms : () => {
      return $http
      //gets the array of objects from the firebase json file
      .get("https://mushroommaniaskb.firebaseio.com/.json")
      .then((response)=>{


        var newArray = []
        //creates a new, more accessible array of objects
        for(var i=0; i< response.data.mushrooms.length; i++) {
          //utilizing a for in loop to access objects with unknown keys
          for (key in response.data.mushrooms[i]) {
            // creates a new object key value pair which stores the name of the object under a key "name"
            response.data.mushrooms[i][key].name = key
            //pushes the newly modified object to it's own array
            newArray.push(response.data.mushrooms[i][key])
          }
        }
        // returns modified array
        return newArray
      })
      //end of then
    }
    //end of function
  }
  //end of object
})
//end of factory
