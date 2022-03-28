let checkbox = document.getElementById('checkBx');
let hamIcon = document.getElementById('hamIcon');
let hamUl = document.getElementById('navUl');
let navContainer = document.getElementById('navbar-container');
let navItems = document.getElementById('navItems-nav');
let lp = document.getElementById('landingPage');
let p_bar = document.querySelectorAll('.p-bar');
checkbox.style.display = "none";
let cpp_progress_bar = document.getElementById('cpp_p_bar');
let py_p_bar = document.getElementById('py_p_bar');
let web_progress_bar = document.getElementById('web_p_bar');
let rishabh_current_age = 14;
let age_an = document.getElementById('age_an');
let email_an = document.getElementById('email_an');
let rishabh_current_email = "rishabhjms99@gmail.com";
age_an.innerText = rishabh_current_age;
email_an.innerText = rishabh_current_email;
function onclick_hamIcon() {
    if (checkbox.checked == false) {
        hamUl.style.display = "flex";
    } else {
        hamUl.style.display = "none"
    }
}
let title = cpp_progress_bar.title.replace("%", " ");
let titlenum = parseInt(title);
if (titlenum < 50) {
    cpp_progress_bar.style.backgroundColor = "red";
} else if (titlenum > 50 && titlenum < 60) {
    cpp_progress_bar.style.backgroundColor = "orange";
}else if(titlenum > 60 && titlenum < 80){
    cpp_progress_bar.style.backgroundColor = "#aaff00";
} else {
    cpp_progress_bar.style.backgroundColor = "green";
}
let title1 = py_p_bar.title.replace("%", " ");
let titlenum1 = parseInt(title1);
if (titlenum1 < 50) {
    py_p_bar.style.backgroundColor = "red";
} else if (titlenum1 > 50 && titlenum1 < 60) {
    py_p_bar.style.backgroundColor = "orange";
}else if (titlenum1>60 && titlenum1<80) {
    py_p_bar.style.backgroundColor = "#aaff00";
}
else {
    py_p_bar.style.backgroundColor = "green";
}
let title2 = web_progress_bar.title.replace("%", " ");
let titlenum2 = parseInt(title2);
if (titlenum2 < 50) {
    web_progress_bar.style.backgroundColor = "red";
} else if (titlenum2 > 50 && titlenum2 < 60) {
    web_progress_bar.style.backgroundColor = "orange";
} else if (titlenum2 > 60 && titlenum2 < 80) {
    web_progress_bar.style.backgroundColor = "#aaff00";
} else {
    web_progress_bar.style.backgroundColor = "green";
}