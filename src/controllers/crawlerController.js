import Furniture from "../models/fur";

export const getSopa=async (req,res)=>{
    const fur=await Furniture.find();
    return res.render("sopa",{pageTitle:"sopa",fur}); 
};
