app.factory("poisonFilterFactory", (mushroomFactory)=>{
  return {
    //function passing the value it was given in the controller
    filterPoison : (boolean) => {
      //returns a new promise
      return new Promise(function(res, rej){
        //creates an empty array we will fill with our sorted mushrooms
        var filteredArray = []
        //gets the modified array of mushrooms from Mushroom factory
      mushroomFactory.getMushrooms()
      //assigns that response to a variable
      .then((response)=> {
        var mushroomArray = response;
        //for each mushroom in the returned array
        for(var i=0; i< mushroomArray.length; i++) {
            //test to see if it is edibility matches the supplied boolean
            if(mushroomArray[i].edible === boolean) {
              //if so, add it to the new array of filtered mushrooms
              filteredArray.push(mushroomArray[i])
            } //end of iff
          //} // end of for in
        }// end of for

      }) //end of .then
      //return the newly created array of filtered mushrooms to the resolve of the promise
      res(filteredArray)

       }) //end of promise
    }
  } //end of object

})
//end of factory
