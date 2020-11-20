window.addEventListener('load', (event)=>{
    const requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=rexburg&units=imperial&appid=386332280c32fb912ec75c2da387743e';
    let hightemp, currently, humidity, windspeed, windchill;
        fetch(requestURL)
            .then((response) => response.json())
            .then((jsObject) => {console.log(jsObject);
                currently= jsObject.weather[0].description.toUpperCase();
                document.querySelector('#currently').textContent=currently;
                hightemp=Math.round(jsObject.main.temp_max, 0); 
                document.querySelector('.hightemp').textContent = hightemp;
            
        });
        const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=rexburg&units=imperial&appid=386332280c32fb912ec75c2da387743e"

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
                        document.querySelector('#high'+x).textContent= Math.round(jsObject.list[i].main.temp_max, 0);
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