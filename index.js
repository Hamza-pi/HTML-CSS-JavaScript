window.addEventListener("scroll",()=>{
    document.querySelector('nav').classList.toggle("window-scroll",scrollY>0)
})

const faqs= document.querySelectorAll('.faq')

faqs.forEach(faq=>{
    faq.addEventListener("click",()=>{
        const p = faq.querySelector('p');
        p.classList.toggle("open")
        const icon = faq.querySelector('.faq_icon i')
        icon.className = icon.className==="fa-solid fa-plus"?"fa-solid fa-minus":"fa-solid fa-plus";
    })
})

let menu = document.querySelector('.nav_menu');
let openBtn = document.getElementById('open-btn');
let closeBtn = document.getElementById('close-btn');

openBtn.addEventListener('click',()=>{
    openBtn.style.display = "none";
    menu.style.display="flex";
    closeBtn.style.display="inline-block"
})

closeBtn.addEventListener("click",()=>{
    closeBtn.style.display = "none";
    menu.style.display="none";
    openBtn.style.display="inline-block"
})