const express = require("express");
const router = express.Router();

const { getCV } = require("./controllers/CvController");
const { getForm } = require("./controllers/formController");

const fs = require("fs");
const getedus=()=>{
    educations = fs.readFileSync("data/education", { encoding: "utf-8" });
    educations = JSON.parse(String(educations));
    edus = [];
    for (let key in educations) {
        edus.push(educations[key]);
    }
    return edus;
}
router.get("/", getCV);
// router.post("/",postForm);
router.get("/form", getForm);
router.post("/form", (req, res) => {
    // res.send("form submitted");
    console.log(req.body);

    res.render("cv", { name: req.body.message, email: req.body.email, educations: getedus() });
    // fs.writeFileSync("data/form", JSON.stringify(req.body));
    res.redirect("/");
});

module.exports = router;
