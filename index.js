const sections = document.querySelectorAll(".section");
const btnContainer = document.querySelector(".controls");
const btns = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");
//Page Transtitions
const pageTransitions = () => {
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
      let currentBtn = document.querySelector(".active-btn");
      currentBtn.className = currentBtn.className.replace("active-btn", "");
      btns[i].className += " active-btn";
      const id = btns[i].dataset.id;
      let activeSection = document.querySelector(".active");
      activeSection.classList.remove("active");
      sections.forEach((section) => {
        section.id == id ? section.classList.add("active") : "";
        setTimeout(() => {
          section.scrollTo(0, 0);
        }, 1000);
      });
    });
  }
  // Theme Toggle
  const themeBtn = document.querySelector(".theme-btn");
  themeBtn.addEventListener("click", () => {
    const element = document.body;
    element.classList.toggle("light-mode");
  });
};

pageTransitions();
