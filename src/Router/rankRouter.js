import express from "express";
import multer from "multer";
const rankupload=multer({dest:"uploads/"});
import {
  ranksearch,
  rankgetUpload,
  rankgetEdit,
  ranksee,
  rankpostEdit,
  rankpostUpload,
  deleteRank,
   //신고기능
   getReport,
   postReport,
   //필터기능
   rankfilter
} from "../controllers/rankController";

const rankRouter=express.Router();

rankRouter.get("/search", ranksearch);
rankRouter
  .route("/upload")
  .get(rankgetUpload)
  .post(rankupload.single("avatar"), rankpostUpload);
rankRouter.get("/:id([a-z\\d+]{24})", ranksee);
rankRouter
  .route("/:id([a-z\\d+]{24})/edit")
  .get(rankgetEdit)
  .post(rankupload.single("avatar"), rankpostEdit);
rankRouter.get("/:id([a-z\\d+]{24})/delete", deleteRank);
rankRouter.route("/:id([a-z\\d+]{24})/report").get(getReport).post(postReport);
rankRouter.post("/filter", rankfilter);

export default rankRouter;