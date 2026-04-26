console.log(this); //window

function hello(){
    console.log(this); // same window
    
}
hello();

let obj={
    name:"Nischal",
    age:19,
    data:function(){
        let x=()=>{
            console.log(this);
         }
         x();
} // it give the obj data when function called
}
obj.data();

document.querySelector("h1").addEventListener("click",function(){console.log(this.style.color="green")})