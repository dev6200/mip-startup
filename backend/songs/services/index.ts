import { eq } from "drizzle-orm";
import db from "../../db";
import { songs } from "../../db/schema";

const getAllSongs = async () => {
  return db.select().from(songs);
};

const getSongById = async (songId: number) => {
  const [song] = await db
    .select()
    .from(songs)
    .where(eq(songs.id, songId))
    .limit(1);

  return song;
};

export default {
  getAllSongs,
  getSongById,
};
