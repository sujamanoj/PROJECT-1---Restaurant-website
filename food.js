var searchbtn = document.getElementById("search-btn");
function searchbrewries(location) {
  var request = new XMLHttpRequest();
  request.open(
    "GET",
    `https://api.openbrewerydb.org/breweries?by_state=california&by_city=${location}`
  );

  request.onload = function () {
    var response = request.response;
    var parsedData = JSON.parse(response);
    console.log(parsedData);

    for (var i = 0; i < parsedData.length; i++) {
      var name = parsedData[i].name;
      var breweries = document.createElement("li");
      breweries.innerHTML = name;

      breweries.addEventListener("click", function () {
        console.log("click");
      });
      document.getElementById("breweries").appendChild(breweries);
      var website_url = parsedData[i].website_url;

      var website = document.createElement("a");
      website.setAttribute("href", website_url);
      website.textContent = "website";
      document.getElementById("breweries").appendChild(website);
    }
  };

  request.send();
}
searchbtn.addEventListener("click", function () {
  var inputEl = document.getElementById("location");
  console.log(inputEl.value);
  searchbrewries(inputEl.value);
});
