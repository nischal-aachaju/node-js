// function dataLoading(){
//     setTimeout(()=>{
//         console.log("data loaded");

//     },Math.floor(Math.random()*10)*1000)

// }

// let data=async()=>{
//     await dataLoading()
// }
// data()


function profileLoading(username,cb){
    setTimeout(() => {
        console.log(`Profile fetched of ${username}`);
        cb({name:"Nischal Shrestha",age:19})
        
    }, 2000);
}
profileLoading("Nischal",function(data){
    console.log(data);
    
})