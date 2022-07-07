const express = require("express");
const mongoose = require ("mongoose");
const busRouter=require("./../SERVER/Route/UserRouter")
const app = express();

const connection = mongoose.connect("mongodb://localhost:27017/BusReserve");
connection.then(() => console.log("connection to database success"));

app.use('/api',busRouter);

app.listen(5000, ()=>{
   console.log('server running on port 5000');
});