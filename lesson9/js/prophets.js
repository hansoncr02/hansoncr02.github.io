async function getprophet() {
    const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

    const response = await fetch(requestURL)
        .then(function (response) {
            if (response.status == 200) {
                return response.json();

            } else {
                throw new Error("No prophet found: " + response.status)
            }
        })
    for (let i = 0; i < response.prophets.length; i++) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let img = document.createElement('img');

        h2.textContent = response.prophets[i].name + ' ' + response.prophets[i].lastname;
        p1.textContent = "Date of Birth: " + response["prophets"][i]["birthdate"];
        p2.textContent = "Place of Birth:" + response['prophets'][i]['birthplace'];
        img.setAttribute('src', response['prophets'][i]['imageurl']);
        img.setAttribute('alt', response['prophets'][i]['name']+' '+response['prophets'][i]['name']+" - "+ (i+1))

        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(img);

        document.querySelector('div.cards').appendChild(card);
    }
}

window.addEventListener('load', (event) => {
    getprophet();
})