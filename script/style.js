
// menu bar----------------------->

let logo_button = document.getElementById('logo_button');
let nav_links = document.getElementById('nav_links');


logo_button.onclick = function(){
  nav_links.classList.toggle('show');
}



// sub items------------------------>

let down = document.getElementById('down');
let item_links = document.getElementById('item_links');
down.setAttribute("style" , "transform: rotate(360deg)");
var x = 1;
down.onclick = function(){
  // console.log("1");
  item_links.classList.toggle('show');

  if(down.style.transform == "rotate(360deg)"){

    down.setAttribute("style" , "transform: rotate(-180deg)");
    down.style.transform = "rotate(-180deg)";
 
  }
  else if(down.style.transform == "rotate(-180deg)"){
    down.setAttribute("style" , "transform: rotate(360deg)");
    down.style.transform = "rotate(360deg)";
  
  }
}




















// let item = document.getElementById('item');
// let item_sub = document.getElementById('item_sub');



// item_sub.setAttribute("style", "display:block");
// var i=1;
// item.onclick = function(){

//     if(i==1){
//         item_sub.setAttribute("style", "display:block");
//         i=2;
//     }
//     else if(i==2){
//         item_sub.setAttribute("style", "display:none");
//         i=1;
//     }

// }

// let right_arrow = document.getElementById('right_arrow');
// let more_link = document.getElementById('more_link');

// more_link.setAttribute("style", "display:none");
// var x = 1;
// right_arrow.onclick = function(){
    
//     if(more_link.style.display == "none"){
//         more_link.setAttribute("style", "display:block");
//         more_link.style.display="block";
//     }
//     else if(more_link.style.display == "block"){
//         more_link.setAttribute("style", "display:none");
//         more_link.style.display="none";
//     }

// }

