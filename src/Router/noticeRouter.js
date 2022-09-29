import express from "express";
import multer from "multer";
const noticeupload=multer({dest:"uploads/"});
import {
  search,
  getUpload,
  postUpload,
  see,
  getEdit,
  postEdit,
  deleteNotice,
  //신고기능
  getReport,
  postReport,
  //댓글기능
  getComment,
  postComment,
} from "../controllers/noticeController";
const noticeRouter = express.Router();

noticeRouter.get("/search", search);
noticeRouter.route("/upload").get(getUpload).post(noticeupload.single("avatar"),postUpload);
noticeRouter.get("/:id([a-z\\d+]{24})", see);
noticeRouter.route("/:id([a-z\\d+]{24})/edit").get(getEdit).post(noticeupload.single("avatar"),postEdit);
noticeRouter.get("/:id([a-z\\d+]{24})/delete", deleteNotice);
noticeRouter.route("/:id([a-z\\d+]{24})/report").get(getReport).post(postReport);
noticeRouter.route("/:id([a-z\\d+]{24})").get(getComment).post(postComment);

export default noticeRouter;