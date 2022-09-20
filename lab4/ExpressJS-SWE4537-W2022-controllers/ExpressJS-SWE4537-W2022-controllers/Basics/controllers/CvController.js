const { info } = require("console");
const fs = require("fs");

const getCV = (req, res) => {
  educations = fs.readFileSync("data/education", { encoding: "utf-8" });
  educations = JSON.parse(String(educations));

  info2 = fs.readFileSync("data/form", { encoding: "utf-8" });
  info2 = JSON.parse(String(info2));
  console.log(info2);

  edus = [];

  for (let key in educations) {
    edus.push(educations[key]);
  }

  res.render("cv", { name: info2.message, educations: edus, email: info2.email });
};

module.exports = { getCV: getCV };
