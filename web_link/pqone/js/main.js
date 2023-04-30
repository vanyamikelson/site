


document.querySelector(".year").innerHTML = new Date().getFullYear();
const menuBtn = document.querySelector('.bars');
const navbar =document.getElementById('navbar')
const menu  = document.querySelector('.menu')
const offset = 50;


menuBtn.addEventListener("click",()=>{
    menu.classList.toggle("menu-open")
} )

window.addEventListener("scroll",()=>{
    if (scrollY > offset)
     {
        navbar.classList.add("navbar-active");
    }else
    {
        navbar.classList.remove("navbar-active");
    }
})


const title = document.querySelector('.title');
const cap = document.querySelectorAll('.caption > div');
const pag = document.querySelectorAll('.pag');
const slideNum = document.querySelector('.slide-count');
const header = document.querySelector('header');

let id = 0;

const imgages = [
    'asset/slide1.jpg',
    'asset/slide2.jpg',
    'asset/slide3.jpg'
]


 

function slider(i) {
// Set Bg image dtnamiclly
    header.style.background= `url(${imgages[i]}) no-repeat center`;

    // toggle active class
    // Remove active clasfrom all

    for (let i = 0; i < pag.length; i++) {
        // remove active from paginatiom
        pag[i].classList.remove('pag-active');
        // Remvoe cap-activer
        cap[i].classList.remove('cap-active');
        }

    // reset active class

    pag[i].classList.add('pag-active')
    cap[i].classList.add('cap-active')


    title.innerText = cap[i].lastElementChild.innerText

    title.classList.add('animate__fadeInUp')

    setTimeout(() =>{
        // Remove animation
        title.classList.remove('animate__fadeInUp')
    },300)
    slideNum.innerHTML = `0${i + 1}/<sup>0${pag.length}</sup>`;
    

    
    
}

// pagination coneroller
for (let i = 0; i < pag.length; i++) {
       pag[i].addEventListener("click", () =>{
        // Run the slder functiom
        slider(i)
        // set id to clicked paginationindex
        id = i
        // Stop Auto Slide
        stopAutoSlide()
       })
        
    }


function nextSlide() {
        // increae img id
        id++

        /*
         Check if id is greater than the number avalabla slide
        */

         if (id > pag.length - 1 ) {
            id = 0
         }
         slider(id)

    }

let autoSlide = setInterval(nextSlide,10000);
// stop Auto,matic slide
function stopAutoSlide() {
    // Reset autoslide
    clearInterval(autoSlide)
}



    