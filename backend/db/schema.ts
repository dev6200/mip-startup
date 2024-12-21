import { int, mysqlTable, serial, text, varchar } from "drizzle-orm/mysql-core";

export const composer = mysqlTable("Composer", {
  id: int().autoincrement().primaryKey(),
  firstName: varchar({ length: 255 }).notNull(),
  lastName: varchar({ length: 255 }).notNull(),
});

export const songs = mysqlTable("Songs", {
  id: int().autoincrement().primaryKey(),
  title: varchar({ length: 255 }).notNull(),
  composerId: int().references(() => composer.id),
  albumCoverUrl: varchar({ length: 255 }), // URL to the album
  songUrl: varchar({ length: 255 }), // URL to the song
  sheetUrl: varchar({ length: 255 }), // URL to the song
  notes: text(), // Additional notes or comments about the song
});
