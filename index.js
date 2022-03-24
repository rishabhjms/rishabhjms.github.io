let checkbox = document.getElementById('checkBx');
let hamIcon = document.getElementById('hamIcon');
let hamUl = document.getElementById('navUl');
checkbox.style.display = "none";
function onclick_hamIcon(){
    if(checkbox.checked == false){
        hamUl.style.display = "grid";
    }else{
        hamUl.style.display = "none";
    }
}