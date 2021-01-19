'use strict';

function nav() {
    let menu = document.querySelector('.menu');
    let toggle = document.querySelector('.toggle');
    toggle.img = toggle.querySelectorAll('img');
    let items = document.querySelectorAll('.item');
    let subMenusHead = document.querySelectorAll('.hasSubMenu');
    let subMenus = document.querySelectorAll('.subMenu');

    function closeAllSubMenus() {        
        subMenus.forEach((item) => {
            if (item.classList.contains('active')) item.classList.remove('active');
        });
        subMenusHead.forEach((item) => {
            if (item.classList.contains('subMenuSelected')) {
                item.classList.remove('subMenuSelected');
                item.querySelector('.contentArrow').innerHTML = '&#9662';
            }
        });
    }

    function closeMenu() {
        if (toggle.classList.contains('toggleActive')) {
            toggle.classList.remove('toggleActive')
            items.forEach((item) => item.classList.remove('active'));
            toggle.img[0].style.display = 'inline-block';
            toggle.img[1].style.display = 'none';
        }
        closeAllSubMenus();
    }

    function showMenu() {
        if (toggle.classList.contains('toggleActive')) {
            toggle.classList.remove('toggleActive')
            items.forEach((item) => item.classList.remove('active'));
            toggle.img[0].style.display = 'inline-block';
            toggle.img[1].style.display = 'none';
        } else {
            toggle.classList.add('toggleActive');
            items.forEach((item) => item.classList.add('active'));
            toggle.img[0].style.display = 'none';
            toggle.img[1].style.display = 'inline-block';
        }
        closeAllSubMenus();
    }

    function showSubMenu(item) {
        if (item.querySelector('.subMenu').classList.contains('active')) {
            item.querySelector('.subMenu').classList.remove('active');
            item.classList.remove('subMenuSelected');
            item.querySelector('.contentArrow').innerHTML = '&#9662';
        } else {
            closeAllSubMenus();
            item.querySelector('.subMenu').classList.add('active');
            item.classList.add('subMenuSelected');
            item.querySelector('.contentArrow').innerHTML = '&#9652';
        }
    }

    subMenusHead.forEach((item) => {
        item.addEventListener('click', () => showSubMenu(item));
        item.addEventListener('keydown', (e) => {
            if (e.key !== 'Escape' && e.key !== 'Tab') showSubMenu(item);
        });
    });

    toggle.addEventListener('click', showMenu);
    toggle.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape' && e.key !== 'Tab') showMenu();
    });

    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target)) closeMenu();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    })
}

nav();