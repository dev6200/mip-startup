import express from "express";

const songsRoutes = express.Router();

songsRoutes.get("/", (req, res) => {
  res.status(200).json({
    songs: "Songs",
  });
});

songsRoutes.post("/", (req, res) => {
  const {
    title,
    composer: { firstName, lastName },
    albumCoverUrl,
    songUrl,
    sheetUrl,
    notes,
  } = req.body;

  console.log(req.body);

  res.status(200).json({
    songs: "Songs",
  });
});

songsRoutes.put("/:songId", (req, res) => {
  const songId = req.params.songId;
  const {
    title,
    composer: { firstName, lastName },
    albumCoverUrl,
    songUrl,
    sheetUrl,
    notes,
  } = req.body;

  res.status(200).json({
    songs: "Songs",
  });
});

songsRoutes.delete("/:songId", (req, res) => {
  const songId = req.params.songId;

  res.status(200).json({
    songs: "Songs",
  });
});

export default songsRoutes;
