let ham_icon_checkbox = document.getElementById('ham-icon-checkbox');
let ham_menu = document.getElementById("ham__menu");
let ham = document.getElementById("ham");
let ham_icon_container = document.getElementById('ham__icon__container');
function navMenu(){
    if(ham_icon_checkbox.checked == true){
        ham_menu.style.display = "flex";
        ham_menu.style.position = "fixed";       
        
    }else{
        ham_menu.style.display = "none";
    }
}
function notDeveloped(){
    alert ("Feature Not Developed Yet!");
}