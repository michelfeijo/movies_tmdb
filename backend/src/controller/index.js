import { Router } from "express";
import updateMovie from "../useCases/favoriteMovie.js";
import WatchMovie from "../useCases/watchMovie.js";

const router = Router();

router.patch("/movies/:id", updateMovie);
router.post("/movies/:id", WatchMovie);

export { router };