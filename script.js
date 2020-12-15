const tl = document.querySelector('.tl');
const tr = document.querySelector('.tr');
const bl = document.querySelector('.bl');
const br = document.querySelector('.br');
const p = document.querySelector('.p');
const botPixels = document.querySelector('.botPixels');
const botPercent = document.querySelector('.botPercent');
const border = document.querySelector('.bordinha');
const resp = document.querySelector('.resp');

botPixels.onclick = function () {
    let topLeft = Number(tl.value);
    let topRight = Number(tr.value);
    let botRight = Number(br.value);
    let botLeft = Number(bl.value);
    border.style.borderRadius = `${topLeft}px ${topRight}px ${botRight}px ${botLeft}px`;
    resp.innerHTML = `border-top-left-radius: ${topLeft}px </br>
    border-top-right-radius: ${topRight}px </br>
    border-bottom-right-radius: ${botRight}px </br>
    border-bottom-left-radius: ${botLeft}px </br>`;
};

botPercent.onclick = function () {
    let topLeft = Number(tl.value);
    let topRight = Number(tr.value);
    let botRight = Number(br.value);
    let botLeft = Number(bl.value);
    border.style.borderRadius = `   ${topLeft}% ${topRight}% ${botRight}% ${botLeft}%`;
    resp.innerHTML = `border-top-left-radius: ${topLeft}% </br>
    border-top-right-radius: ${topRight}% </br>
    border-bottom-right-radius: ${botRight}% </br>
    border-bottom-left-radius: ${botLeft}% </br>`;
};