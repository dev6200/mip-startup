import express from "express";
import songsRoutes from "./songs/routes";

const apiRoutes = express.Router();

apiRoutes.get("/", (req, res) => {
  res.status(200).json({
    msg: "In Root",
  });
});
apiRoutes.use("/songs", songsRoutes);

export default apiRoutes;
