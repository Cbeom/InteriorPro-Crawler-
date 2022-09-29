import axios from "axios";
import cheerio from "cheerio";
import Furniture from "./models/fur";

let url="http://www.remod.co.kr/product/search.html?banner_action=&keyword=";

const getHTML=async(key,url)=>{
    try {
        return await axios.get(url+encodeURI(key));
    } catch (error) {
        console.log(error);
    }
};
const sopa=async(key)=>{
    const html=await getHTML(key,url);
    const $=cheerio.load(html.data);
    const $courseList=$(".prdItem");

    $courseList.each((idx,node)=>{
        let title=$(node).find(".name").text();
        let price=$(node).find(".xans-record-").text();
        let img=$(node).find(".prdImg > a > img").attr("src");
        const sopa=new Furniture({
            title,
            price,
            img,
        });
        sopa.save();
    });
};

sopa("소파");