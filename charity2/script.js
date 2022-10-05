//Scroll to forms

const scrollToForms = document.querySelectorAll('.scroll-to-forms')

scrollToForms.forEach (o => {
    o.addEventListener('click', function() {
        window.scrollTo({
            top: 2170,
            left: 0,
            behavior: 'smooth'})
    })
})

//Play video on the big image section

document.querySelector('.play-video').addEventListener('click', function() {
    window.open('https://www.youtube.com/watch?v=_vMGNbsL7KI', "_blank")
})

//Drop down text (Current Roles)

for (let i = 1; i <= 3; i++) {
    const popDownTrigger = document.querySelector(`.pop-down-trigger-${i}`);
    const popDown = document.querySelector(`.pop-down-${i}`);
    const vert = document.querySelector(`.vert-${i}`);

    popDownTrigger.addEventListener('click', function(){
        document.querySelector(`.pop-down-${i}`).classList.toggle('popped-down');
        if (popDown.classList.contains('popped-down')) {
            vert.classList.toggle('vert-on')
        } else vert.classList.toggle('vert-on')
    });   
}

//Drop-down menu (Forms)

const selected = document.querySelector('.selected');
const optionsContainer = document.querySelector('.options-container');
const optionsList = document.querySelectorAll('.option');

selected.addEventListener('click', function(){
    optionsContainer.classList.toggle('active')
    if (optionsContainer.classList.contains('active')) {
        selected.style.transform = "rotateX(180deg)";
        selected.style.width = "34.9vw";
        selected.textContent = "";
    } 
    else
        selected.style.transform = "none";
    
});

optionsList.forEach (o => {
    o.addEventListener('click', function(){
        selected.innerHTML = o.querySelector('label').innerHTML;
        optionsContainer.classList.remove('active');
        selected.style.transform = "none";
        selected.style.width = "35vw";
    })
})