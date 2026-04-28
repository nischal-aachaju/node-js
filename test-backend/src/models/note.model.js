const mongoose=require("mongoose");

const noteSchema=new mongoose.Schema({
    title:String,
    desc:String ,
    isCompleted:Boolean
})

const noteModel=mongoose.model("Note",noteSchema)

module.exports=noteModel