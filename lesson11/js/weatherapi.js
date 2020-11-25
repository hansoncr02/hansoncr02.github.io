async function getweather() {
    const requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=386332280c32fb912ec75c2da387743e';

    const response = await fetch(requestURL)
        .then(function (response) {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error("No weather information found: " + response.status)
            }
        })
        .then((jsObject) => {
            console.log(jsObject);
          });
}

window.addEventListener('load', (event) => {
    getweather();
})