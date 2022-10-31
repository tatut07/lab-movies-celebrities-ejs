const router = require("express").Router();
// all your routes here
const Celebrity = require("../models/Celebrity.model");

router.get("/", async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find();
    res.render("celebrities/celebrities", { celebrities });
  } catch (error) {
    console.log("Error while getting the celebrities from the DB:", error);
    next(error);
  }
});

router.get("/create", (req, res, next) => {
  res.render("celebrities/new-celebrity");
});

router.post("/create", async (req, res, next) => {
  try {
    const { name, occupation, catchPhrase } = req.body;
    const newCeleb = await Celebrity.create({ name, occupation, catchPhrase });
    res.redirect("/celebrities");
  } catch (error) {
    console.log("Error while creating a new celebrity:", error);
    res.render("celebrities/new-celebrity");
  }
});

module.exports = router;
