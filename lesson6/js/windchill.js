    
window.addEventListener('load', (event)=>{
    var high=document.querySelector('#hightemp');
    var windspeed=document.querySelector('#wind');
    console.log(high)
    var windchill= Math.round(35.74+0.6215*high-35.75*Math.pow(windspeed,0.16)+0.4275*high*Math.pow(windspeed,0.16));
    const wc = document.querySelector('#windchill');
    wc.textContent="Windchill: " + windchill + " \u00B0 F";
})

    









    