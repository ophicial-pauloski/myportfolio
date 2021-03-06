var copyRight = document.getElementById("copyright");
var contactBtn = document.getElementById("contactbtn");
var closeBtn = document.getElementById("closebtn");
var contactMeModal = document.querySelector(".contact-me-modal");
var projectItems = document.querySelectorAll(".project_item");
;


var navLinks = document.querySelector(".nav-links");
var opennavbtn = document.getElementById("opennavbtn");
var closenavbtn = document.getElementById("closenavbtn");
var aud = document.querySelector("audio");


function copyRight_(params) {
    let date = new Date();
    let yr = date.getFullYear();
    copyRight.innerHTML = yr;
}
copyRight_();

contactBtn.addEventListener("click", ()=>{
    aud.play();
contactMeModal.classList.add("active")
});

closeBtn.addEventListener("click", ()=>{
    aud.play();
    contactMeModal.classList.remove("active")
});

opennavbtn.addEventListener("click", ()=>{
    aud.play();
    opennavbtn.style.display = "none"
    closenavbtn.style.display = "block";
    navLinks.classList.toggle("nav-active")
});

closenavbtn.addEventListener("click", ()=>{
    aud.play();
    navLinks.classList.remove("nav-active");
    opennavbtn.style.display = "block";
    closenavbtn.style.display = "none";
});

projectItems.forEach(function (stt) {
    var projectLinks = stt.querySelector(".site_links");
    stt.addEventListener("mouseover", ()=>{
        projectLinks.classList.add("site_active");
    });

    stt.addEventListener("mouseout", ()=>{
        projectLinks.classList.remove("site_active");
    })
});

const text = "Thanks for checking out my portfolio. Now, Let's connect!";

let idx = 0;

function autowritetext() {
    var outtext = document.getElementById("outtext").innerText = text.slice(0, idx);
    idx++;
    if (idx > text.length) {
        idx = 0;
    }
}
setInterval(autowritetext, 300);