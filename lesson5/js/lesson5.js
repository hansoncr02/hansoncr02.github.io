window.addEventListener('load', (event)=>{
    var d = new Date();
    var n = d.getDay();
    console.log(n);
    if (n==5) {
        document.getElementById("alert").classList.toggle("hide");
    } 
    const lu = document.querySelector('#lastupdated');
    lu.textContent=document.lastModified;

    const copyrightyear =document.querySelector('#copyrightyear');
    copyrightyear.textContent=new Date().getFullYear();
    
} )

function togglemenu(){
   document.getElementById("navigation").classList.toggle("responsive");

}