window.addEventListener('load', (event)=>{
    const requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5640350&units=imperial&APPID=386332280c32fb912ec75c2da387743e';
    let curtemp;
        fetch(requestURL)
            .then((response) => response.json())
            .then((jsObject) => {console.log(jsObject);
                curtemp=jsObject.main.temp; 
               // document.querySelector('#curtemp').textContent = curtemp;
                console.log(curtemp);
        });
        
});