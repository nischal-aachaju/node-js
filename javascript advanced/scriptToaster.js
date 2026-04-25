function createToaster(config){
    return function(str){
        let div=document.createElement("div")
        div.textContent=str;
        div.className=`inline-block ${config.theme==="dark"?"bg-gray-700 text-gray-100":"bg-gray-100 text-gray-700"} py-2 px-5 rounded `;
        document.querySelector(".parent").appendChild(div)
        setTimeout(()=>{
            document.querySelector(".parent").removeChild(div)
        },config.duration*1000)
      };
}

let toaster=createToaster({
    positionX:"right",
    positionY:"top",
    theme:"dark",
    duration:3,

});

toaster("Downloading...")
setTimeout(()=>{
    toaster("Download Done")
},2000)