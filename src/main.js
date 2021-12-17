toggleTheme = ()=>{
    let darkModebtn = document.getElementById('user-about-section-container');
    let toggleButton = document.getElementById('darkModeBtn');
    let body = document.body;
    let firstcard,secondcard,thirdcard;
    let copyrightSection = document.getElementById('copyrights-sect');
    let firstIcon = document.getElementById('firstIcon');
    let secondIcon = document.getElementById('secondIcon');
    let thirdIcon = document.getElementById('thirdIcon');
    let project_container = document.getElementById('prj-container');
    project_container.classList.toggle('applygreyscale')
    secondIcon.classList.toggle('blue-to-white');
    thirdIcon.classList.toggle('blue-to-white');
    firstIcon.classList.toggle('blue-to-white');
    firstcard = document.getElementById('first-card');
    secondcard = document.getElementById('second-card');
    thirdcard = document.getElementById('third-card');
    darkModebtn.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode')
    firstcard.classList.toggle('dark-mode');
    secondcard.classList.toggle('dark-mode');
    thirdcard.classList.toggle('dark-mode');
    copyrightSection.classList.toggle('dark-mode')
}