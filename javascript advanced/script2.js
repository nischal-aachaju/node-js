//-----by button and local storage-----------

// let mode=document.querySelector("button");

// let themeDark=false;

// themeDark=JSON.parse(localStorage.getItem("ThemeDark"));
// if (themeDark){
//         mode.textContent="Light"
//         document.body.style.backgroundColor="black";
//         localStorage.setItem("ThemeDark",JSON.stringify(themeDark));
//         document.body.style.color="white"
//     }
// mode.addEventListener("click",()=>{
//     themeDark=!themeDark;
//     if (themeDark){
//         mode.textContent="Light"
//         document.body.style.backgroundColor="black";
//         localStorage.setItem("ThemeDark",JSON.stringify(themeDark));
//         document.body.style.color="white"
//     }
//     else{
//         mode.textContent="Dark"
//         document.body.style.backgroundColor="white";
//         localStorage.setItem("ThemeDark",JSON.stringify(themeDark));
//         document.body.style.color="black"
//     }

// })

// // if (setmode.matches==true){
// // if (themeDark==true){
// //     document.body.style.backgroundColor="black";
// //     document.body.style.color="white"
// // }


//--------------by browser setting----------------

let setmode=window.matchMedia('(prefers-color-scheme: dark)')
let mode=document.querySelector("button");
mode.style.display="none";
mode.addEventListener("change",theme())


function theme(){
    if (setmode.matches){
    document.body.style.backgroundColor="black";
    document.body.style.color="white"
}
else{
        document.body.style.backgroundColor="white";
        document.body.style.color="black"
}
}
