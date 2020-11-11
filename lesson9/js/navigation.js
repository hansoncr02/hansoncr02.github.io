window.addEventListener('load', (event)=>{
    const lu = document.querySelector('#lastupdated');
    lu.textContent=document.lastModified;

    const copyrightyear =document.querySelector('#copyrightyear');
    copyrightyear.textContent=new Date().getFullYear();

    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = document.querySelector(".today");
    var d= new Date();
    today.textContent=days[d.getDay()]+", "+d.getDate()+" "+month[d.getMonth()]+" "+d.getFullYear();
    
} )

function togglemenu(){
   document.getElementById("navigation").classList.toggle("responsive");

}

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

async function gettown() {
    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

    const response = await fetch(requestURL)
        .then(function (response) {
            if (response.status == 200) {
                return response.json();

            } else {
                throw new Error("No towns found: " + response.status)
            }
        })
        let townsection = document.createElement('section');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let img = document.createElement('img');
        let imgsection = document.createElement('section');
        let smallgrid=document.createElement('section');

        h2.textContent = response.towns[1].name;
        h3.textContent = response['towns'][1]['motto'];
        p1.textContent = "Year Founded: " + response["towns"][1]["yearFounded"];
        p2.textContent = "Population: " + response['towns'][1]['currentPopulation'];
        p3.textContent = "Annual Rain Fall: " + response['towns'][1]['averageRainfall'];
        p4.textContent = "Current Events: " + response['towns'][1]["events"];
        img.setAttribute('src', "images/"+response['towns'][1]['photo']);
        img.setAttribute('alt', response['towns'][1]['name']);

        townsection.appendChild(h2);
        townsection.appendChild(h3)
        townsection.appendChild(p1);
        townsection.appendChild(p2);
        townsection.appendChild(p3);
        townsection.appendChild(p4);
        imgsection.appendChild(img);
        smallgrid.appendChild(townsection);
        smallgrid.appendChild(img);
        

        document.querySelector('section.towninfo').appendChild(smallgrid);

        let townsection2 = document.createElement('section');
        let h22 = document.createElement('h2');
        let h32 = document.createElement('h3');
        let p12 = document.createElement('p');
        let p22 = document.createElement('p');
        let p32 = document.createElement('p');
        let p42 = document.createElement('p');
        let img2 = document.createElement('img');
        let imgsection2 = document.createElement('section');
        let smallgrid2=document.createElement('section');

        h22.textContent = response.towns[4].name;
        h32.textContent = response['towns'][4]['motto'];
        p12.textContent = "Year Founded: " + response["towns"][4]["yearFounded"];
        p22.textContent = "Population: " + response['towns'][4]['currentPopulation'];
        p32.textContent = "Annual Rain Fall: " + response['towns'][4]['averageRainfall'];
        p42.textContent = "Current Events: " + response['towns'][4]["events"];
        img2.setAttribute('src', "images/"+response['towns'][4]['photo']);
        img2.setAttribute('alt', response['towns'][4]['name']);

        townsection2.appendChild(h22);
        townsection2.appendChild(h32) 
        townsection2.appendChild(p12);
        townsection2.appendChild(p22);
        townsection2.appendChild(p32);
        townsection2.appendChild(p42);
        imgsection2.appendChild(img2);
        smallgrid2.appendChild(townsection2);
        smallgrid2.appendChild(img2);

        document.querySelector('section.towninfo').appendChild(smallgrid2);

        
        let townsection3 = document.createElement('section');
        let h23 = document.createElement('h2');
        let h33 = document.createElement('h3');
        let p13 = document.createElement('p');
        let p23 = document.createElement('p');
        let p33 = document.createElement('p');
        let p43 = document.createElement('p');
        let img3 = document.createElement('img');
        let imgsection3 = document.createElement('section');
        let smallgrid3=document.createElement('section');

        h23.textContent = response.towns[5].name;
        h33.textContent = response['towns'][5]['motto'];
        p13.textContent = "Year Founded: " + response["towns"][5]["yearFounded"];
        p23.textContent = "Population: " + response['towns'][5]['currentPopulation'];
        p33.textContent = "Annual Rain Fall: " + response['towns'][5]['averageRainfall'];
        p43.textContent = "Current Events: " + response['towns'][5]["events"];
        img3.setAttribute('src', "images/"+response['towns'][5]['photo']);
        img3.setAttribute('alt', response['towns'][5]['name']);

        townsection3.appendChild(h23);
        townsection3.appendChild(h33) 
        townsection3.appendChild(p13);
        townsection3.appendChild(p23);
        townsection3.appendChild(p33);
        townsection3.appendChild(p43);
        imgsection3.appendChild(img3);
        smallgrid3.appendChild(townsection3);
        smallgrid3.appendChild(img3);

        document.querySelector('section.towninfo').appendChild(smallgrid3);
    }

window.addEventListener('load', (event) => {
    gettown();
})