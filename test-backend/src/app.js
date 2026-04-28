const express = require("express");
const note = require("./models/note.model");
const noteModel = require("./models/note.model");


const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("hello world");
})

app.post("/notes", async (req, res) => {
    const data = req.body;
    await noteModel.create({
        title: data.title,
        desc: data.desc,
        isCompleted: data.isCompleted
    });

    res.status(201).json(data);
})

app.get("/notes", async (req, res) => {

    const notes = await noteModel.find();
    res.send(notes);
})

app.delete("/notes", async (req, res) => {
    // const id = req.params.id;
    // const notes = await noteModel.deleteOne({ _id: id });
    await noteModel.deleteMany();
    res.send("deleted successfully");

})
module.exports = app;