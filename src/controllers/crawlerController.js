import furniture from "../models/fur";

export const sopa=async (req,res)=>{
    const {
        params:{id},
    }=req;
    const fur=await furniture.findById(id);
    console.log(fur);
    return res.render("sopa",{pageTitle:"sopa",fur}); 

};