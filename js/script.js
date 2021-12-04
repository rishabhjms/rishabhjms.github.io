const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

const home = document.getElementById("nav-item-active");
home.addEventListener("contextmenu",()=>{
  alert("This is the home page");
});
//Alert the user when they click on home 
home.addEventListener("click",()=>{
  alert("This is the home page");
});
function toggleDark(){
const darkmode = document.getElementById('darkmode').addEventListener("click",()=>{
  if(document.body.style.background=="#000"){
    document.body.style.background=="#fff";
  }else if(document.body.style.background=="#fff"){
    document.body.style.background=="#000";
  }else{
    console.log("UMM :/")
  }
})
}