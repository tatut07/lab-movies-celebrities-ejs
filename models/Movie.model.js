const { Schema, model } = require("mongoose");

const MovieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  plot: {
    type: String,
    required: true,
  },
  cast: [{ type: Schema.Types.ObjectId, ref: "Celebrity" }],
});

const Movie = model("Movie", MovieSchema);

module.exports = Movie;
