// Slider
let navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0"
}

function hideMenu() {
    navLinks.style.right = "-500px"
}
// responsive click

let clicks = document.querySelectorAll("#click")
clicks.forEach(click => {
    click.addEventListener("click" ,()=>{
        navLinks.style.right = "-500px"
    } )
    
});

// Screen mmoving trigger

let nav = document.querySelector(".nav");


window.addEventListener("scroll", ()=>{
   
    nav.classList.toggle("sticky",window.scrollY > 0 )
    
})
