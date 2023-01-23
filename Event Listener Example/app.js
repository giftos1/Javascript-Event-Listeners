const revealBtn = document.querySelector('.reveal-btn');
const hiddenContent = document.querySelector('.hidden-content');
const container = document.querySelector('.container');

function revealContent() {
    if (hiddenContent.classList.contains('reveal-btn')) {    
        hiddenContent.classList.remove('reveal-btn');
        revealBtn.style.width = '90%';
        revealBtn.innerText = 'Reveal more';
        
    } else {
        hiddenContent.classList.add('reveal-btn');
        revealBtn.style.width = 'fit-content';
        container.style.flexDirection = 'row';
        container.style.gap = '20px';
        revealBtn.innerText = 'Reveal less';
    }

}

revealBtn.addEventListener('click', revealContent);