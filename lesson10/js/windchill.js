    
window.addEventListener('load', (event)=>{
    var high=document.querySelector('#hightemp').innerHTML;
    var windspeed=document.querySelector('#wind').innerHTML;
    console.log(high);
    var windchill= Math.round(35.74+0.6215*high-35.75*Math.pow(windspeed,0.16)+0.4275*high*Math.pow(windspeed,0.16));
    const wc = document.querySelector('#windchill');
    if (high<50 && windspeed>3.0) {
        wc.textContent="Windchill: " + windchill + " \u00B0 F";
    }
    else {
        wc.textContent="Windchill: N/A"
    }
})

    









    