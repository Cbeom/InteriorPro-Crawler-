import Rank from "../models/rank";

//globalRouter 
export const home= async (req,res)=>{
  const rank=await Rank.find().sort({"meta.views":"desc"});
  return res.render("home",{pageTitle:"Home",rank});
};


//검색기능
export const ranksearch= async (req,res)=>{
  const {
      query:{ title },
  }=req;
  let rank=[];
  if(title){
      rank=await Rank.find({
          title:{
              $regex:new RegExp(`${title}`,"i")
          },
      })
  }
  return res.render("rank/search",{pageTitle:"Search Title",rank});
};

//uplod
export const rankgetUpload = async (req, res) => {
    return res.render("rank/upload", { pageTitle: "Upload Rank" });
};

export const rankpostUpload = async (req, res) => {
    const {
      body: { title, content },
      file,
    } = req;
    //이미지 파일을 업로드 할 경우
    if (file) {
      await Rank.create({
        title,
        description: content,
        image: file.path,
      });
    }
    //이미지 파일을 업로드 안할경우
    else {
      await Rank.create({
        title,
        description: content,
      });
    }
    return res.redirect("/");
};

export const ranksee = async (req, res) => {
    const {
      params: { id },
    } = req;
    try {
      const rank = await Rank.findById(id);
      await Rank.findByIdAndUpdate(id, {
        meta: {
          views: rank.meta.views + 1,
        },
      });
      return res.render("rank/see", { pageTitle: `${rank.title}`, rank });
    } catch (error) {
      console.log(error);
    }
};

export const rankgetEdit = async (req, res) => {
    const {
      params: { id },
    } = req;
    const rank = await Rank.findById(id);
    return res.render("rank/edit", {
      pageTitle: `Edit : ${rank.title}`,
      rank,
    });
};
  
export const rankpostEdit = async (req, res) => {
    const {
      body: { title, content },
      params: { id },
      file,
    } = req;
    const exists = await Rank.exists({ _id: id });
    if (!exists) {
      return res.redirect("/");
    }
    if (file) {
      await Rank.findByIdAndUpdate(
        id,
        {
          title,
          description: content,
          image: file.path,
        },
        { new: true }
      );
    } else {
      await Rank.findByIdAndUpdate(id, {
        title,
        description: content,
      });
    }
    return res.redirect("/");
};
  
export const deleteRank = async (req, res) => {
    const {
      params: { id },
    } = req;
    await Rank.findByIdAndDelete(id);
    return res.redirect("/");
};

//report 
export const getReport=async(req,res)=>{
  const{
      params:{id},
  }=req;
  const rank=await Rank.findById(id);
  return res.render("rank/report",{ pageTitle: `Report Rank`, rank });
};
//신고기능 보완 필요
export const postReport=async(req,res)=>{
  const{
      params:{id},
      body:{rtitle,rcontent},
  }=req;
  const rank=await Rank.findById(id);
  await Rank.findByIdAndUpdate(id,{
      rtitle,
      rcontent,
      report:{
          rcount:rank.report.rcount+1,
      },
  },{new:true});
  if(rank.report.rcount>0){
      await Rank.findByIdAndDelete(id);
      return res.redirect("/");
  }
  return res.redirect("/");
}

//필터기능
export const rankfilter=async(req,res) =>{
  const {
    params:{id},
    body:{selectValue},
  }=req;
  let rank=await Rank.findById(id);
  switch(selectValue){
    case "upload":
      rank=await Rank.find().sort({"createAt":"asc"});
      break;
    case "view":
      rank=await Rank.find().sort({"meta.views":"desc"});
      break;
    case "like":
      rank=await Rank.find().sort({"meta.rating":"desc"});
      break;
    };
}