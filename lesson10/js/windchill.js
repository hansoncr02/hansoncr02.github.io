    window.addEventListener('load', (event)=>{
    const requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=386332280c32fb912ec75c2da387743e';
    let hightemp, currently, humidity, windspeed, windchill;
        fetch(requestURL)
            .then((response) => response.json())
            .then((jsObject) => {console.log(jsObject);
                currently=jsObject.weather[0].description;
                document.querySelector('#currently').textContent=currently;
                hightemp=jsObject.main.temp_max; 
                document.querySelector('#hightemp').textContent = hightemp;
                humidity=jsObject.main.humidity;
                document.querySelector('#humidity').textContent=humidity;
                windspeed=jsObject.wind.speed;
                document.querySelector('#wind').textContent=windspeed;
                windchill= Math.round(35.74+0.6215*hightemp-35.75*Math.pow(windspeed,0.16)+0.4275*hightemp*Math.pow(windspeed,0.16));
                const wc = document.querySelector('#windchill');
                if (hightemp<50 && windspeed>3.0) {
                   wc.textContent="Windchill: " + windchill + " \u00B0 F";
                }
                else {
                   wc.textContent="Windchill: N/A"
                }
        });
        const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=386332280c32fb912ec75c2da387743e"

        fetch(forecastURL)
            .then((response)=> response.json())
            .then((jsObject)=> {console.log(jsObject);
                let x=0
                for (i=0;i<jsObject.list.length;i++){
                    if (jsObject.list[i].dt_txt.includes("18:00:00")){
                        let y= new Date().getFullYear();
                        let m= new Date().getMonth();
                        m=m+1;
                        let d= new Date().getDate();
                        let date= y+"-"+m+"-"+d;
                        console.log(jsObject.list[i].dt_txt.includes(date));
                    if (jsObject.list[i].dt_txt.includes(date)){
                            console.log("don't use me");
                        }
                    else{
                        document.querySelector('#high'+x).textContent=jsObject.list[i].main.temp_max;
                        document.querySelector('#low'+x).textContent=jsObject.list[i].main.temp_min;
                        document.querySelector('#img'+x).src="http://openweathermap.org/img/wn/"+jsObject.list[i].weather[0].icon +"@2x.png"
                        x=x+1;
                        }
                    }
                }
                x=1;
                for (i=1;i<6;i++){
                
                    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    let d= new Date().getDay();
                    console.log(d);
                    let futureday=d+x
                    if (futureday>6){
                        futureday=futureday-7;
                    }
                    document.querySelector("#day"+i).textContent=days[futureday];
                    x=x+1;
                }
        });
})