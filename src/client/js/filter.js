const rankfilter=document.getElementById("viewchoice");
const CLICKED_CLASS = "clicked";
let clicked=false;

const filter=async ()=>{
  let selectValue=rankfilter.value;
  console.log(selectValue);
  fetch("/rank/filter",{
      method:'POST',
      headers:{
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({selectValue}),
  });
  
}

function init(){
  if(rankfilter) {
    rankfilter.addEventListener("change", filter);
  }
}

init();