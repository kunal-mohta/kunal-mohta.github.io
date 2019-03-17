// MENU
let IS_MENU_OPEN = false;

const menuToggleButton = document.getElementById('mobile-menu-icon');
const mobileMenu = document.getElementById('mobile-menu');

const menuIconLine1 = document.querySelectorAll('#mobile-menu-icon div hr')[0];
const menuIconLine2 = document.querySelectorAll('#mobile-menu-icon div hr')[1];
const menuIconLine3 = document.querySelectorAll('#mobile-menu-icon div hr')[2];

function openMenu () {
  mobileMenu.style.maxHeight = '100vh';

  menuIconLine2.style.opacity = '0';
  menuIconLine1.style.transform = 'translateY(200%) rotate(45deg)';
  menuIconLine3.style.transform = 'translateY(-200%) rotate(-45deg)';

  IS_MENU_OPEN = true;
}

function closeMenu () {
  mobileMenu.style.maxHeight = '0';

  menuIconLine2.style.opacity = '1';
  menuIconLine1.style.transform = '';
  menuIconLine3.style.transform = '';

  IS_MENU_OPEN = false;
}

function toggleMenu () {
  (IS_MENU_OPEN) ? closeMenu() : openMenu(); 
}

menuToggleButton.addEventListener('click', toggleMenu);


/****** SMOOTH SCROLL ******/

window.onload = function () {
  let jmpLinks = document.getElementsByClassName("jump-link");

  for (let i = 0; i < jmpLinks.length; i++) {
    if (jmpLinks[i].dataset.link) {
      jmpLinks[i].addEventListener('click', function () {
        jump(jmpLinks[i].dataset.link);
        closeMenu();
      });
    }
  }
}
