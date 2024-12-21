import express from "express";

const songsRoutes = express.Router();

songsRoutes.get("/", (req, res) => {
  res.status(200).json({
    songs: "Songs",
  });
});

export default songsRoutes;
