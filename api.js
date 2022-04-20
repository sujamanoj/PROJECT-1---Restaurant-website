const request = new XMLHttpRequest();
request.open('get',"https://api.openbrewerydb.org/breweries?by_city=san_diego");
request.send();
request.onload = ()=>{
    console.log(request);
    if(request.status=== 200){
        console.log(JSON.parse(request.response));
    }else{
        console.log('error ${request.status}')
    }
}