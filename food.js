//var requestUrl ='https://foodish-api.herokuapp.com/'

fetch('https://foodish-api.herokuapp.com/')
.then(function(response){
  response.text().then(function(data){
        console.log(data);
    })   
  
    });
