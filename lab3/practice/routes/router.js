const express = require("express");
const router = express.Router();
const cvController = require("../controller/cvController");
const fs = require("fs");

router.get("/home", (req, res) => {
  res.send("Home Page");
});

router.get("/about",(req,res)=>{
    res.send("About Page");
})

router.get("/cv",cvController.getCV);

module.exports = router;
