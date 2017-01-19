app.factory("mushroomFactory", ($http)=>{
  return {
    getMushrooms : () => {
      return $http
      .get("https://mushroommaniaskb.firebaseio.com/.json")
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
