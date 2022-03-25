let checkbox = document.getElementById('checkBx');
let hamIcon = document.getElementById('hamIcon');
let hamUl = document.getElementById('navUl');
let navContainer = document.getElementById('navbar-container');
let navItems = document.getElementById('navItems-nav');
let lp = document.getElementById('landingPage');
checkbox.style.display = "none";
function onclick_hamIcon(){
    if(checkbox.checked == false){
        hamUl.style.display = "flex";
    }else{
        hamUl.style.display = "none"
    }
}