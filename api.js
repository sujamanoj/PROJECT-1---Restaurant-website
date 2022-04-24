var requestUrl ='https://api.openbrewerydb.org/breweries?by_city=los_angeles'
var listEl = document.getElementById('brew-container');


fetch(requestUrl)
.then(function(response){
  return response.json()
  .then(function(data){
        console.log(data);
        var docArray = data.length;
       for(var i = 0;i< data.length; i++){
        var listItem = document.createElement( 'li');   
        listItem.textContent = data[i].name ;

        listEl.appendChild(listItem);
       } 
    })   
  
    });
    
