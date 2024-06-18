const express = require("express")
const app = express()
app.use(express.json())
const frontend = require("./routes/frontendRoute")

const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/10amproject")


app.use("/api" , frontend)
app.use(express.static("public"))
app.listen(5000,()=>{
    console.log("server is running on port 5000")
})