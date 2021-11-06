
const navSlide = () =>{
    const button = document.querySelector('.logo');
    const nav = document.querySelector('.nav-links');
    button.addEventListener('click',()=> {
        nav.classList.toggle('show');
    });
}
navSlide();

// $(document).ready(function(){
//     $('.logo').click(function(){
//         $('ul').toggleClass('show');
//     });

// });