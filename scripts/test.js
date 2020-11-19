

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=386332280c32fb912ec75c2da387743e";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });