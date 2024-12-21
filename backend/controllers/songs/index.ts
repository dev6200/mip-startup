import { Request, Response } from "express";

const getAllSongs = (req: Request, res: Response) => {
  res.status(200).json({
    songs: "Songs",
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

  console.log(req.body);

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

export default { createNewSong, deleteOneSong, updateOneSong, getAllSongs };
