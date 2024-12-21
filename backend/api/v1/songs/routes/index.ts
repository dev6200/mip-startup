import express from "express";
import SongController from "../../../../songs/controllers";

const songsRoutes = express.Router();

songsRoutes.get("/", SongController.getAllSongs);
songsRoutes.get("/:songId", SongController.getSong);
songsRoutes.post("/", SongController.createNewSong);
songsRoutes.put("/:songId", SongController.updateOneSong);
songsRoutes.delete("/:songId", SongController.deleteOneSong);

export default songsRoutes;
