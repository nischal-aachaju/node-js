const express=require("express");
const app=express();


app.get("/",(req,res)=>{
    let code="<h1>Hello, my name is nischal</h1>"

    res.send(code);
})

// app.get("/:username",(req,res)=>{
//     let {username}=req.params;
//     res.send(`<h1>Hello, ${username}</h1>`);
// })

app.get("/search",(req,res)=>{
    // res.send("<h1>hello</h1>")
    // console.log(req.query);
    let {q}=req.query;
    if (!q){
       res.send(`<h1>nothing search</h1>`); 
    }
    res.send(`<h1>you search ${q}</h1>`);
})
app.post("/user",(req,res)=>{
    res.send("Hello World!");

    req.body.name="Nischal";
    res.send(req.body);

})


app.listen(3000,()=>{
    console.log("server is running on port 3000");
})