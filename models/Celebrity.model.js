//  Add your code here

const { Schema, model } = require("mongoose");

const CelebritySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  catchPhrase: {
    type: String,
    required: true,
  },
});

const Celebrity = model("Celebrity", CelebritySchema);

module.exports = Celebrity;
