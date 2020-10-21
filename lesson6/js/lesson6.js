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

    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = document.querySelector(".today");
    var d= new Date();
    today.textContent=days[d.getDay()]+", "+d.getDate()+" "+month[d.getMonth()]+" "+d.getFullYear();
    
} )

function togglemenu(){
   document.getElementById("navigation").classList.toggle("responsive");

}