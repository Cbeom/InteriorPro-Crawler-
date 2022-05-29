import "./db";
import "./crawler";
import "./models/notice";
// import "./models/furniture"
import express from "express";
import morgan from "morgan";
import globalRouter from "./Router/globalRouter";
import noticeRouter from "./Router/noticeRouter";
import crawlerRouter from "./Router/crawlerRouter";

const app=express();
const logger=morgan('dev');
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);

app.use("/uploads",express.static("uploads"));
app.use("/",globalRouter);
app.use("/notice", noticeRouter);
app.use("/crawler",crawlerRouter);

const handleListen = () => console.log(`http://localhost:${PORT}`);
app.listen(PORT, handleListen);