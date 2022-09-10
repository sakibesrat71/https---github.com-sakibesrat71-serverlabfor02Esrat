const fs = require("fs");

const getCV = (req, res) => {
  educations = fs.readFileSync("data/education", { encoding: "utf-8" });
  educations = JSON.parse(String(educations));

  edus = [];

  for (let key in educations) {
    edus.push(educations[key]);
  }


  experiences = fs.readFileSync("data/experience", { encoding: "utf-8" });
  experiences = JSON.parse(String(experiences));

  exps = [];

  for (let key in experiences) {
    exps.push(experiences[key]);
  }


  // projects = fs.readFileSync("data/project", { encoding: "utf-8" });
  // projects = JSON.parse(String(projects));

  // projs = [];

  // for (let key in projects) {
  //   projs.push(projects[key]);
  // }


  skills = fs.readFileSync("data/skill", { encoding: "utf-8" });
  skills = JSON.parse(String(skills));

  sks = [];

  for (let key in skills) {
    sks.push(skills[key]);
  }

  res.render("cv", {
    name: "Tasnim Ahmed",
    educations: edus,
    experiences: exps,
    // projects: projs,
    skills: sks,
  });
};

  // res.render("cv", { name: "Tasnim Ahmed", educations: edus });

module.exports = { getCV: getCV };
