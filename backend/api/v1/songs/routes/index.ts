import express from "express";
import SongController from "../../../../controllers/songs";

const songsRoutes = express.Router();

songsRoutes.get("/", SongController.getAllSongs);
songsRoutes.post("/", SongController.createNewSong);
songsRoutes.put("/:songId", SongController.updateOneSong);
songsRoutes.delete("/:songId", SongController.deleteOneSong);

export default songsRoutes;
