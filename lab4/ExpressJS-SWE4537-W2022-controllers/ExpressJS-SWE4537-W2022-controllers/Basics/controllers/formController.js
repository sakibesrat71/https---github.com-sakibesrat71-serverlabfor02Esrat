// creating a controller for form
const fs = require("fs");

// const postform = (req, res) => {
//   // educations = fs.readFileSync("data/education", { encoding: "utf-8" });
//   // educations = JSON.parse(String(educations));

//   edus = [];

//   for (let key in educations) {
//     edus.push(educations[key]);
//   }

//   res.render("cv", { name: "Tasnim Ahmed", educations: edus });
// };
//  const formRouter = express.Router();
//  formRouter.post("/form",(req,res)=>{
//     res.render("form");
//     res.send("form submitted");
//  } );

 const getForm = (req, res) => {
    res.render("form");
    };

module.exports = { getForm: getForm };