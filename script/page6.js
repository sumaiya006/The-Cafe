
var holder = document.getElementById('page6-lower-row');

const inserItem = [
    {
        blood_group:"(A+)",
        result:"Not Available"

    },
    {
        blood_group:"(A-)",
        result:"Available"

    },
    {
        blood_group:"(B+)",
        result:"Available"

    },
    {
        blood_group:"(B-)",
        result:"Available"

    },
    {
        blood_group:"(O+)",
        result:"Not Available"

    },
    {
        blood_group:"(O-)",
        result:"Not Available"

    },
    {
        blood_group:"(AB+)",
        result:"Not Available"

    },
    {
        blood_group:"(AB-)",
        result:"Available"

    }

];
// console.log(typeof inserItem);

for(var i = 0;i < inserItem.length;i++){
    bloodType(inserItem[i].blood_group, inserItem[i].result);
}


function bloodType(blood_group, result){

var box = document.createElement('div');
box.setAttribute('class','page6-lower-box col-lg-3 col-md-4 col-sm-6 col-12');
box.setAttribute( onclick,'myFunction()');
// box.setAttribute('class','col-lg-3');
// box.setAttribute('class','col-md-4');
// box.setAttribute('class','col-sm-6');
// box.setAttribute('class','col-12');

var group =  document.createElement('div');
group.setAttribute('class','page6-text');
    
group.innerHTML = blood_group;

var show_result =  document.createElement('div');
show_result.setAttribute('class','show-result');
show_result.setAttribute("style", "display:none");
show_result.innerHTML =  result;

box.appendChild(group);
box.appendChild(show_result);
holder.appendChild(box);

}


window.onload = function() {
    const clickElement = document.querySelectorAll(".page6-text");
    const show_result = document.querySelectorAll(".show-result");
    for(var i = 0; i < clickElement.length;i++){
        
        let x = clickElement[i];
        // console.log(x);
        let y = show_result[i];
        // console.log(y);
        
        x.onclick = function(){
            // let x = clickElement[i];
            // console.log(x);
            // console.log(y);


            // y.setAttribute("style", "display:none");
            // show_result.innerHTML = y.setAttribute("style", "display:block");
           
          

          if(y.style.display == "none"){
            y.style.display = "block";
            show_result.innerHTML =  y.style.display;
          }
          else if(y.style.display == "block") {
            y.style.display = "none";
            show_result.innerHTML =  y.style.display;
          }

        }
       
        
        
    }


}




