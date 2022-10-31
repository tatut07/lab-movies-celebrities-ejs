// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

const Movie = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model");

// all your routes here
router.get("/create", async (req, res, next) => {
  const allCelebrities = await Celebrity.find();
  res.render("movies/new-movie", { allCelebrities });
});

router.post("/create", async (req, res, next) => {
  try {
    const { title, genre, plot, cast } = req.body;
    const newMovie = await Movie.create({ title, genre, plot, cast });
    res.redirect("/movies");
  } catch (error) {
    console.log("Error while creating a new movie:", error);
    res.render("movies/new-movie");
  }
});

router.get("/", async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.render("movies/movies", { movies });
  } catch (error) {
    console.log("Error getting the movies from the DB:", error);
  }
});

module.exports = router;
