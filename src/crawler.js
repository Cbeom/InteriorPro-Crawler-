import axios from "axios";
import cheerio from "cheerio";

const getHTML=async(key)=>{
    try {
        return await axios.get("http://www.remod.co.kr/product/search.html?banner_action=&keyword="+encodeURI(key));
    } catch (error) {
        console.log(error);
    }
}

const parsing=async(key)=>{
    const html=await getHTML(key);
    const $=cheerio.load(html.data);
    const $courseList=$(".prdItem");

    let courses=[];
    $courseList.each((index,node)=>{
        courses.push({
            title:$(node).find(".name").text(),
            price:$(node).find(".xans-record-").text(),
            img:$(node).find(".prdImg > a > img").attr("src"),
        });
    });
    // console.log(courses[0]["title"]);
}

parsing("소파");