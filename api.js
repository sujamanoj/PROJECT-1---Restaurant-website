var requestUrl ='https://api.openbrewerydb.org/breweries?by_city=los_angeles'

fetch(requestUrl)
.then(function(response){
  response.json().then(function(data){
        console.log(data);
    })   
  
    });

    