import express from "express";
// import multer from "multer";
// const upload=multer({dest:"uploads/"});
import {
  sopa,
} from "../controllers/crawlerController";
const crawlerRouter = express.Router();

crawlerRouter.get("/fur", sopa);

export default crawlerRouter;