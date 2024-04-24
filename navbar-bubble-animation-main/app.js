const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

window.addEventListener("scroll", function(){
    let header = document.querySelector('.header'); // Corrigido para .header
    header.classList.toggle('rolagem', window.scrollY > 500);
});
