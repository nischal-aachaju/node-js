//------------ local storage-------------------
// 1) localStorage.setItem() for adding and updating
// 2) localstorage.getItem() for getting
// 3) localStorage.removeItem() for removing
// 4) localStorage.clear() to clear all the date 
// localStorage.setItem("name","Nischal");
// localStorage.clear();
// localStorage.setItem("age",19);
// let name=localStorage.getItem("name");
// // console.log(name);
// localStorage.removeItem("name")

//-------------session Storage-------------
 // same as local storage but it save data until we close the tab
// sessionStorage.setItem("name","Nischal");
// sessionStorage.getItem()
// sessionStorage.removeItem()
// sessionStorage.clear()

//-----------cookies--------------
//same as local storage but it store only ~4kb data where other store ~5mb
// and the main thing is when we reload the page then it send the saved cookies data to the server

// local storage string

let data={
    "name":"Nischal Shrestha",
    "age":19,
    "Student":true
}

localStorage.setItem("user",JSON.stringify(data))

let getData=JSON.parse(localStorage.getItem("user"))

console.log(getData["name"]);


// localStorage.clear()
