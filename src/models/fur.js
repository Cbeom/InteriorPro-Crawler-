import mongoose from "mongoose";
import crawler from "../crawler"
const furnitureSchema=new mongoose.Schema({
    title:{type:String},
    price:{type:Number},
    img:{type:String},
});
// console.log(courses[0]["title"]);
console.log(crawler.$courseList);
const furniture=mongoose.model("furniture",furnitureSchema);
// const sopa=new furniture({
//     title:0,
//     price:0,
//     img:0,
// });

sopa.save().then(()=>{
    console.log("성공");
}).catch((err)=>{
    console.log(err);
});

export default furniture;