const content = document.querySelector('.content')

const sliderLine = document.querySelector('.slider-line');
const z = document.querySelector('.z')
const r = document.querySelector('.r')
const startBTN = document.getElementById('startBTN')
const btnWrap = document.querySelector('.btn-wrap')


startBTN.addEventListener('click', () => {
    const ask = confirm('хотите посмотреть картинки?')
    if (ask == true) {
        content.style.display = 'flex'
        btnWrap.style.display = 'none'
    }
    else {
        btnWrap.innerHTML = 'нет так нет 0_o'
    }
})








let offset = 0; // смещение от леыого края
r.addEventListener('click', function() {
    offset -= 500;
    if (offset > -2500) {
        sliderLine.style.left = offset + 'px';
    }
    else {
        offset = 0
        sliderLine.style.left = offset + 'px';
    }
});

z.addEventListener('click', function() {
    offset += 500;
    if (offset < 0) {
        sliderLine.style.left = offset + 'px';
    }
    else {
        offset = -2000
        sliderLine.style.left = offset + 'px';
    }
});