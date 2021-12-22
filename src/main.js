toggleTheme = ()=>{
    let firstIcon = document.getElementById("firstIcon").classList.toggle('dark-mode');
    let secondIcon = document.getElementById("secondIcon").classList.toggle('dark-mode');
    let thirdIcon = document.getElementById("thirdIcon").classList.toggle('dark-mode');
    let body = document.body.classList.toggle('dark-mode');
    let navbody = document.getElementById('navbar-body');
    let biolink = document.getElementById('bio-intext-link').classList.toggle('dark-mode');
    let homenav = document.getElementById('home-nav').classList.toggle('dark-mode');
    let projectnav = document.getElementById('project-nav').classList.toggle('dark-mode');
    let aboutnav = document.getElementById('about-nav').classList.toggle('dark-mode');
    let themenav = document.getElementById('theme-nav').classList.toggle('dark-mode');
    let firstCard = document.getElementById('first-card').classList.toggle('dark-mode');
    let secondCard = document.getElementById('second-card').classList.toggle('dark-mode');
    let thirdCard = document.getElementById('third-card').classList.toggle('dark-mode');

}