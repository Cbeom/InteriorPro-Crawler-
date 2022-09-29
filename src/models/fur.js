import mongoose from "mongoose";

const furnitureSchema=new mongoose.Schema({
    title:{type:String},
    price:{type:String},
    img:{type:String},
});

const Furniture=mongoose.model("Furniture",furnitureSchema);

export default Furniture;