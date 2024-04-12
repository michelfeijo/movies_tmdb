import express from "express";
import cors from "cors";
import "dotenv/config";

import { router } from "./controller/index.js";

const app = express();
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: "GET, POST, PUT, DELETE, PATCH",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export { app };