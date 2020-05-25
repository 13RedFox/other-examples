'use strict';
const btn = document.querySelector('.menu__bars');
let sidebar = document.querySelector('.sidebar');

btn.onclick = () => {
  sidebar.classList.toggle('sidebar__show')
}