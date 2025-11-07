/* JavaScript básico: navegación, form handling y accesibilidad */
document.addEventListener('DOMContentLoaded', function(){
// Menu toggle
var menuToggle = document.getElementById('menu-toggle');
var mainNav = document.getElementById('main-nav');
if(menuToggle){
menuToggle.addEventListener('click', function(){
var expanded = this.getAttribute('aria-expanded') === 'true';
this.setAttribute('aria-expanded', String(!expanded));
mainNav.classList.toggle('show');
});
}


// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
anchor.addEventListener('click', function(e){
var targetId = this.getAttribute('href');
if(targetId.length > 1){
e.preventDefault();
var el = document.querySelector(targetId);
if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
// close mobile nav
if(mainNav.classList.contains('show')){ mainNav.classList.remove('show'); menuToggle.setAttribute('aria-expanded','false'); }
}
});
});


// Year in footer
var y = new Date().getFullYear();
document.getElementById('year').textContent = y;


// Contact form: provide feedback without sending (progressive enhancement still allows real submission)
var form = document.getElementById('contact-form');
if(form){
form.addEventListener('submit', function(e){
// let default submission proceed to Formspree/EmailJS if configured
// but show a quick thank you message via UI
var submitBtn = form.querySelector('button[type="submit"]');
submitBtn.disabled = true;
submitBtn.textContent = 'Enviando...';
setTimeout(function(){
submitBtn.textContent = 'Enviado';
submitBtn.disabled = false;
}, 1200);
});
}


});


/* Fin del JS */