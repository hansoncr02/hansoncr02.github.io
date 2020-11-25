window.addEventListener('load', (event) => {
    const lu = document.querySelector('#lastupdated');
    lu.textContent = document.lastModified;

    const copyrightyear = document.querySelector('#copyrightyear');
    copyrightyear.textContent = new Date().getFullYear();

    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = document.querySelector(".today");
    var d = new Date();
    today.textContent = days[d.getDay()] + ", " + d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear();

})

function togglemenu() {
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
    let smallgrid = document.createElement('section');

    let townsection2 = document.createElement('section');
    let h22 = document.createElement('h2');
    let h32 = document.createElement('h3');
    let p12 = document.createElement('p');
    let p22 = document.createElement('p');
    let p32 = document.createElement('p');
    let p42 = document.createElement('p');
    let img2 = document.createElement('img');
    let smallgrid2 = document.createElement('section');

    let townsection3 = document.createElement('section');
    let h23 = document.createElement('h2');
    let h33 = document.createElement('h3');
    let p13 = document.createElement('p');
    let p23 = document.createElement('p');
    let p33 = document.createElement('p');
    let p43 = document.createElement('p');
    let img3 = document.createElement('img');
    let smallgrid3 = document.createElement('section');


    for (let i = 0; i < response.towns.length; i++) {
        if(response.towns[i].name=="Preston"){
        h2.textContent = response.towns[i].name;
        h3.textContent = response['towns'][i]['motto'];
        p1.textContent = "Year Founded: " + response["towns"][i]["yearFounded"];
        p2.textContent = "Population: " + response['towns'][i]['currentPopulation'];
        p3.textContent = "Annual Rain Fall: " + response['towns'][i]['averageRainfall'];
        img.setAttribute('src', "images/" + response['towns'][i]['photo']);
        img.setAttribute('alt', response['towns'][i]['name']);

        townsection.appendChild(h2);
        townsection.appendChild(h3)
        townsection.appendChild(p1);
        townsection.appendChild(p2);
        townsection.appendChild(p3);
        townsection.appendChild(p4);

        } else if (response.towns[i].name=="Soda Springs"){

        h22.textContent = response.towns[i].name;
        h32.textContent = response['towns'][i]['motto'];
        p12.textContent = "Year Founded: " + response["towns"][i]["yearFounded"];
        p22.textContent = "Population: " + response['towns'][i]['currentPopulation'];
        p32.textContent = "Annual Rain Fall: " + response['towns'][i]['averageRainfall'];
        img2.setAttribute('src', "images/" + response['towns'][i]['photo']);
        img2.setAttribute('alt', response['towns'][i]['name']);

        townsection2.appendChild(h22);
        townsection2.appendChild(h32)
        townsection2.appendChild(p12);
        townsection2.appendChild(p22);
        townsection2.appendChild(p32);
        townsection2.appendChild(p42);

        } else if (response.towns[i].name=="Fish Haven"){

        h23.textContent = response.towns[i].name;
        h33.textContent = response['towns'][i]['motto'];
        p13.textContent = "Year Founded: " + response["towns"][i]["yearFounded"];
        p23.textContent = "Population: " + response['towns'][i]['currentPopulation'];
        p33.textContent = "Annual Rain Fall: " + response['towns'][i]['averageRainfall'];
        img3.setAttribute('src', "images/" + response['towns'][i]['photo']);
        img3.setAttribute('alt', response['towns'][i]['name']);

        townsection3.appendChild(h23);
        townsection3.appendChild(h33)
        townsection3.appendChild(p13);
        townsection3.appendChild(p23);
        townsection3.appendChild(p33);
        townsection3.appendChild(p43);
        }

        }
    smallgrid.appendChild(townsection);
    smallgrid.appendChild(img);
    smallgrid2.appendChild(townsection2);
    smallgrid2.appendChild(img2);
    smallgrid3.appendChild(townsection3);
    smallgrid3.appendChild(img3);
    
    document.querySelector('div.div1').appendChild(smallgrid);
    document.querySelector('div.div2').appendChild(smallgrid2);
    document.querySelector('div.div3').appendChild(smallgrid3);
}

window.addEventListener('load', (event) => {
    gettown();
})