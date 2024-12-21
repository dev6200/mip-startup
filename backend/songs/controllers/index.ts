import { Request, Response } from "express";
import SongService from "../services";

const getAllSongs = async (req: Request, res: Response) => {
  const allSongs = await SongService.getAllSongs();

  res.status(200).json({
    songs: allSongs,
  });
};

const getSong = async (req: Request, res: Response) => {
  const songId = req.params.songId;

  const song = await SongService.getSongById(parseInt(songId, 10));

  res.status(200).json({
    song: song,
  });
};

const createNewSong = (req: Request, res: Response) => {
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
};

const updateOneSong = (req: Request, res: Response) => {
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
};

const deleteOneSong = (req: Request, res: Response) => {
  const songId = req.params.songId;

  res.status(200).json({
    songs: "Songs",
  });
};

export default {
  createNewSong,
  deleteOneSong,
  updateOneSong,
  getAllSongs,
  getSong,
};
