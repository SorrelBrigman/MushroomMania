app.factory("poisonFilterFactory", (mushroomFactory)=>{
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
