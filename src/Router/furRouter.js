import express from "express";
import multer from "multer";
const furupload=multer({dest:"uploads/"});
import {
  getSopa,
} from "../controllers/crawlerController";
const furRouter = express.Router();

furRouter.route("/fur").get(getSopa);

export default furRouter;