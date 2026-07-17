/*=====================================
    MOBILE MENU
=====================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }else{
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});


/*=====================================
    STICKY NAVBAR
=====================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.background = "#0B7A3D";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.2)";

    }else{

        header.style.background = "rgba(0,0,0,.55)";
        header.style.boxShadow = "none";

    }

});


/*=====================================
    ANIMATED COUNTERS
=====================================*/

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 150;

        if(current < target){

            counter.innerText = Math.ceil(current + increment);

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target;

        }

    };

    updateCounter();

});


/*=====================================
    HERO IMAGE SLIDER
=====================================*/

const hero = document.querySelector(".hero");

const images = [

    "images/garden1.jpg",
    "images/garden2.jpg",
    "images/garden3.jpg",
    "images/garden4.jpg"

];

let current = 0;

function changeBackground(){

    hero.style.backgroundImage = `url('${images[current]}')`;

    current++;

    if(current >= images.length){

        current = 0;

    }

}

changeBackground();

setInterval(changeBackground,5000);


/*=====================================
    GALLERY LIGHTBOX
=====================================*/

const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

document.body.appendChild(lightbox);

galleryImages.forEach(image => {

    image.addEventListener("click",()=>{

        lightbox.classList.add("active");

        const img = document.createElement("img");

        img.src = image.src;

        while(lightbox.firstChild){

            lightbox.removeChild(lightbox.firstChild);

        }

        lightbox.appendChild(img);

    });

});

lightbox.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});


/*=====================================
    DARK MODE
=====================================*/

const darkButton = document.createElement("button");

darkButton.innerHTML = "🌙";

darkButton.id = "darkMode";

document.body.appendChild(darkButton);

darkButton.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        darkButton.innerHTML="☀️";

    }else{

        darkButton.innerHTML="🌙";

    }

});


/*=====================================
    FADE-IN ANIMATION
=====================================*/

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

const hiddenElements = document.querySelectorAll("section");

hiddenElements.forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});