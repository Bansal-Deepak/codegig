const router = require("express").Router();
const { Gig } = require("../models/Gig");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;

// @endpoint  GET('/gigs')
// @desc      Get all the gigs
// @access    PUBLIC
router.get("/", async (req, res) => {
  let result = await Gig.findAll();
  res.status(200).send(result);
});

//  @endpoint  POST('/gigs/add')
// @desc       Create a gig
//  @access    PUBLIC

router.post("/add", async (req, res) => {
  let { title, technologies, budget, description, contact_email } = req.body;
  let newgig = await Gig.create({
    title,
    technologies,
    budget,
    description,
    contact_email,
  });
  return res.status(200).send({ newgig });
});

// router.get("/add", async (req, res) => {
//   let data = {
//     title: "Looking for graphql developer",
//     technologies: "graphql",
//     budget: "$1000",
//     description: "Graphql backend",
//     contact_email: "user1@gmail.com",
//   };
//   let { title, technologies, budget, description, contact_email } = data;
//   await Gig.create({
//     title,
//     technologies,
//     budget,
//     description,
//     contact_email,
//   });
//   res.redirect("/gigs");
// });

// @endpoint  GET('/gigs/search')
// @desc      GET gigs wrt search parameter->term
// @access    PUBLIC

router.get("/search", async (req, res) => {
  try {
    let { term } = req.query;
    let result = await Gig.findAll({
      where: { technologies: { [Op.like]: `%${term}%` } },
    });
    return res.status(200).send(result);
  } catch (ex) {
    return res.status(500).send("Something went wrong");
  }
});
module.exports = {
  router,
};
