window.addEventListener('load', (event)=>{
    const lu = document.querySelector('#lastupdated');
    lu.textContent=document.lastModified;

    const copyrightyear =document.querySelector('#copyrightyear');
    copyrightyear.textContent=new Date().getFullYear();
    
} )

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation');


hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);