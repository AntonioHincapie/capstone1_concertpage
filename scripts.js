import dataConcerts from './data.js';

const btnMenu = document.getElementById('menubtn');
const menu = document.getElementById('menu');
const exitBtn = document.getElementById('exitbtn');
const menuElements = document.querySelectorAll('#mobile-menu a');

btnMenu.addEventListener('click', () => {
  menu.style.display = 'flex';
  btnMenu.style.display = 'none';
});

exitBtn.addEventListener('click', () => {
  menu.style.display = 'none';
  btnMenu.style.display = 'block';
});

for (let i = 0; i < menuElements.length; i += 1) {
  menuElements[i].addEventListener('click', () => {
    menu.style.display = 'none';
    btnMenu.style.display = 'block';
  });
}

const presenters = document.getElementById('presentations');
const printPresentations = () => {
  let str = '';
  for (let i = 0; i < dataConcerts.length; i += 1) {
    const [a] = dataConcerts[i].imgShow;
    str += `<div class="presenter">
      <img class="presenter-img" src="${a}" alt="Band${i + 1}" />
      <div class="presenter-info">
        <h3>${dataConcerts[i].bandName}</h3>
        <h4>${dataConcerts[i].bandDescription}</h4>
        <div class="separator"></div>
        <h5>${dataConcerts[i].bandDiscography}</h5>
      </div>
    </div>`;
  }
  return str;
};

presenters.innerHTML = `
<h2 class="presentations-title">Agrupaciones Musicales</h2>
      <div class="title-separator"></div>
      <div class="presentations-wraper">
        ${printPresentations()}
        </div>`;