const mongoose =require("mongoose")
const express = require("express")
const userRoute = require("./Route/userRoute")
const empRoute = require("./Route/empRoute")
const categoryRoute = require("./Route/categoryroute")
const teacherRoute = require("./Route/teacherRoute")
const doctorRoute = require("./Route/doctorRoute")
const cors =require("cors")
require("dotenv/config")

const app =express()

app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
    res.send("home")
})

app.use("/api/userssss",userRoute)
app.use("/api/employeee",empRoute)
app.use("/api/cateries", categoryRoute)
app.use("/api/teacherss", teacherRoute)
app.use("/api/doctorss",doctorRoute)

app.listen(process.env.PORT)


async function db() {
    try {
        const res = await mongoose.connect(process.env.DB)
        console.log(res.STATES.connected);
        
    } catch (error) {
       console.log(error.message);
        
    }
}


db()