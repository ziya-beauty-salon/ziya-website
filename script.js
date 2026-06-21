// scroll animation
const sections = document.querySelectorAll("section");

<a href="https://wa.me/27660871027?text=Hi%20I%20want%20to%20book" class="fab whatsapp">W</a>
<a href="https://instagram.com/ziyahairandbeauty" class="fab instagram">I</a>
<a href="tel:+27660871027" class="fab call">C</a>
window.addEventListener("scroll", ()=>{
sections.forEach(s=>{
if(s.getBoundingClientRect().top < window.innerHeight - 100){
s.style.opacity = 1;
s.style.transform = "translateY(0)";
}
});
});