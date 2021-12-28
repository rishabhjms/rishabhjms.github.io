let ul = document.getElementById('list-items-container');
let navbar = document.getElementById('main-container');
function toggleMenu(){
    if(ul.style.display="flex"){
        navbar.style.gridTemplateRows = ".3fr 3fr 2.5fr .5fr";
        ul.style.display = "none";
    }else if(navbar.style.gridTemplateRows == ".3fr 3fr 2.5fr .5fr"){
        navbar.style.gridTemplateRows = "1fr 3fr 5fr .5fr";
        ul.style.display="initial";
        console.log("Else")
    }else{
        console.warn("HELO ERROR")
    }

}