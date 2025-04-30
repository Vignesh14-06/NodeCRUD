import movie from "../models/movie.model.js";

export const movieIndex = async (req, res) => {
  try {
    const movies = await movie.find();
    res.json(movies);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const movieById = async (req, res) => {
  try {
    const movies = await movie.findById(req.params.id);
    if (!movies) {
      return res.status(404).json({ message: "Movie not found" });
    } else {
      res.json(movies);
    }
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const movieCreate = async (req, res) => {
  const newMovie = new movie({
    title: req.body.title,
    desc: req.body.desc,
  });
  try {
    const movie = await newMovie.save();
    return res.status(202).json(movie);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const movieUpdate = async (req, res) => {
  try {
    const result = await movie.findByIdAndUpdate(
      { _id: req.params.id },
      {
        title: req.body.title,
        desc: req.body.desc,
      },
      {
        new: true,
      }
    );
    res.status(200).json(result);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};


export const movieDelete = async (req, res) => {
  const movieId = req.params.id;
  try {
    // Check if the movie exists
    const movies = await movie.findById(movieId);
    if (!movies) {
      return res.status(404).json({ message: "Id not found please check the Id" });
    }

    // Delete the movie
    await movie.deleteOne({ _id: movieId });
    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (err) {
    console.error("Error deleting movie:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

