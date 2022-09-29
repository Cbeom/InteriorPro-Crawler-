import express from "express";
import { notice, search } from "../controllers/noticeController";
import { home} from "../controllers/rankController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/notice", notice);
// globalRouter.get("/search", search);

export default globalRouter;
