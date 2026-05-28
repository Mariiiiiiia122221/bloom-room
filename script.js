window.addEventListener("load",()=>setTimeout(()=>document.getElementById("loader").classList.add("hide"),700));
const menuBtn=document.getElementById("menuBtn"),nav=document.getElementById("nav");
menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const observer=new IntersectionObserver((entries)=>{entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add("show"),i*80);observer.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
document.querySelector(".order").addEventListener("submit",function(e){e.preventDefault();const phone="79221049456";const name=this.querySelector('input[type="text"]').value||"Клиент";const interest=this.querySelector("select").value||"Мебель";const comment=this.querySelector("textarea").value||"";const text=encodeURIComponent(`Здравствуйте! Меня зовут ${name}. Хочу рассчитать стоимость: ${interest}. ${comment}`);window.open(`https://wa.me/${phone}?text=${text}`,"_blank")});
