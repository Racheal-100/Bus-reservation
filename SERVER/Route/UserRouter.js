const express = require("express");
const mongoose = require("mongoose");
const Usermodel = require("../Models/UserModel");

const router = express.Router();

router.post("/create_account", (req,res) =>{
    const body = req.body;
    console.log(body)
    const user = new Usermodel(body);
    user.save();
    return res.json({message:"data created successfully", data: user});
})

router.get("/login", async(req,res) =>{
  const {name, password} = req.body;
  console.log(req.body);
  const isUserFound = await Usermodel.findOne({name: name, password: password});

  res.json(
      isUserFound? {message:"user found", user: isUserFound} : {message:"user not found"}
  )
});
router.get('/allusers',async(req,res)=>{
  const all =await Usermodel.find({})
  res.send(all)
})
module.exports = router;
