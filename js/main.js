/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL EDUCATION*/
sr.reveal('.section-title',{}); 
sr.reveal('.education__subtitle',{delay: 400}); 
sr.reveal('.education__text',{delay: 400}); 

/*SCROLL Work*/
sr.reveal('.section-title',{}); 
sr.reveal('.Work__subtitle',{delay: 400}); 
sr.reveal('.Work__text',{delay: 400}); 

/*SCROLL Photos*/
sr.reveal('.section-title',{}); 
sr.reveal('.photos__container',{delay: 400}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 100}); 


// Tilt Effect
let el = document.getElementById("tilt");

const height = el.clientHeight;
const width = el.clientWidth;

el.addEventListener("mousemove", handleMove);

function handleMove(e) {
  const xVal = e.layerX;
  const yVal = e.layerY;

  const yRotation = 20 * ((xVal - width / 2) / width);

  const xRotation = -20 * ((yVal - height / 2) / height);

  const string =
    "perspective(500px) scale(1.1) rotateX(" +
    xRotation +
    "deg) rotateY(" +
    yRotation +
    "deg)";

  el.style.transform = string;
}  
el.addEventListener("mouseout", function () {
  el.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
});

el.addEventListener("mousedown", function () {
  el.style.transform = "perspective(500px) scale(0.9) rotateX(0) rotateY(0)";
});

el.addEventListener("mouseup", function () {
  el.style.transform = "perspective(500px) scale(0.5) rotateX(0) rotateY(0)";
})
;

