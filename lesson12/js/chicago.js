window.addEventListener('load', (event)=>{
    const requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=4887398&units=imperial&APPID=386332280c32fb912ec75c2da387743e';
    let curtemp;
    fetch(requestURL)
        .then((response) => response.json())
        .then((jsObject) => {console.log(jsObject);
            curtemp=jsObject.main.temp; 
            document.querySelector('#curtemp').textContent = curtemp;
            console.log(curtemp);
    });
});        

window.addEventListener('load', (event)=>{
const requestURL = 'https://hansoncr02.github.io/lesson12/js/temples.json';
let phase, baptism, initiatory, endowment, sealing, cafeteria, clothes, housing, distribution, address, phone, email, templepic;
    fetch(requestURL)
        .then((response) => response.json())
        .then((jsObject) => {console.log(jsObject);
            phase=jsObject[0].name.Chicago.covid;
            document.querySelector('#phase').innerHTML=phase;
            baptism=jsObject[0].name.Chicago.ordinance.baptism;
            document.querySelector('#baptism').innerHTML=baptism;
            initiatory=jsObject[0].name.Chicago.ordinance.initiatories;
            document.querySelector('#initiatory').innerHTML=initiatory;
            endowment=jsObject[0].name.Chicago.ordinance.endowment;
            document.querySelector('#endowment').innerHTML=endowment;
            sealing=jsObject[0].name.Chicago.ordinance.sealings;
            document.querySelector('#sealing').innerHTML=sealing;
            cafeteria=jsObject[0].name.Chicago.services.cafeteria;
            document.querySelector('#cafeteria').innerHTML=cafeteria;
            clothes=jsObject[0].name.Chicago.services.clothes;
            document.querySelector('#clothes').innerHTML=clothes;
            housing=jsObject[0].name.Chicago.services.housing;
            document.querySelector('#housing').innerHTML=housing;
            distribution=jsObject[0].name.Chicago.services.distribution;
            document.querySelector('#distribution').innerHTML=distribution;
            address=jsObject[0].name.Chicago.address+" "+jsObject[0].name.Chicago.city+", "+jsObject[0].name.Chicago.state;
            document.querySelector('#address').innerHTML=address;
            phone=jsObject[0].name.Chicago.telephone;
            document.querySelector('#phone').innerHTML=phone;
            email=jsObject[0].name.Chicago.email;
            document.querySelector('#email').innerHTML=email;
    });
    
});