/* ==========================================
   GORILLA TAG HUB SCRIPT
========================================== */



/* ==========================================
   COLOR DECODER
========================================== */


function decodeColor(){


    let red =
    Number(document.getElementById("red").value);


    let green =
    Number(document.getElementById("green").value);


    let blue =
    Number(document.getElementById("blue").value);



    if(
        isNaN(red) ||
        isNaN(green) ||
        isNaN(blue)
    ){

        document.getElementById("result").innerHTML =
        "⚠️ Please enter all RGB values!";

        return;

    }



    red =
    Math.max(0,Math.min(255,red));


    green =
    Math.max(0,Math.min(255,green));


    blue =
    Math.max(0,Math.min(255,blue));





    let hex =

    "#" +

    red.toString(16).padStart(2,"0") +

    green.toString(16).padStart(2,"0") +

    blue.toString(16).padStart(2,"0");






    document.getElementById("result").innerHTML =

    `

    <h3>🎨 Color Result</h3>

    <br>

    HEX:

    ${hex}


    <br><br>


    Blender RGB:

    <br>

    ${(red/255).toFixed(3)},

    ${(green/255).toFixed(3)},

    ${(blue/255).toFixed(3)}

    `;



}







/* ==========================================
   NEWS DROPDOWN
========================================== */


function toggleUpdate(){


    let update =

    document.getElementById("updateInfo");



    if(update){


        update.classList.toggle("open");


    }


}









/* ==========================================
   PAGE LOAD EFFECT
========================================== */


window.addEventListener("load",()=>{


    document.body.style.opacity="0";


    setTimeout(()=>{


        document.body.style.transition=".8s";


        document.body.style.opacity="1";


    },100);



});








/* ==========================================
   BLUE MOUSE GLOW
========================================== */


const glow = document.createElement("div");



glow.style.position="fixed";

glow.style.width="200px";

glow.style.height="200px";


glow.style.borderRadius="50%";


glow.style.background=

"radial-gradient(circle,rgba(0,183,255,.25),transparent 70%)";


glow.style.pointerEvents="none";


glow.style.zIndex="-1";


document.body.appendChild(glow);




document.addEventListener("mousemove",(event)=>{


    glow.style.left =

    event.clientX - 100 + "px";



    glow.style.top =

    event.clientY - 100 + "px";



});







/* ==========================================
   BUTTON CLICK EFFECT
========================================== */


document.addEventListener("click",(event)=>{


    if(event.target.tagName==="BUTTON"){


        event.target.style.transform="scale(0.95)";


        setTimeout(()=>{


            event.target.style.transform="";


        },150);


    }


});
