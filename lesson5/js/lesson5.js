window.addEventListener('load', (event)=>{
    var d = new Date();
    var n = d.getDay();
    console.log(n);
    if (n==6) {
        document.getElementById("alert").classList.add("hide");
    } 
    else {
        document.getElementById("alert").classList.remove("hide");
    };
    const lu = document.querySelector('#lastupdated');
    lu.textContent=document.lastModified;

    const copyrightyear =document.querySelector('#copyrightyear');
    copyrightyear.textContent=new Date().getFullYear();
    
} )

function togglemenu(){
   document.getElementById("navigation").classList.toggle("responsive");

}