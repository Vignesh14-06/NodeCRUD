import { model, Schema } from "mongoose";

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

const movie = model("movie", movieSchema);

export default movie;
