'use strict';

function nav() {
    let nav = {};
    nav.home = document.querySelector('.home');
    nav.isShown = true;
    nav.showNav = function() {
        let nextChild = nav.home.nextElementSibling;
        if (nav.isShown) {
            while (nextChild) {
                nextChild.style.display = 'none';
                nextChild = nextChild.nextElementSibling;
            }
            nav.isShown = false;
        } else {
            while (nextChild) {
                nextChild.style.display = 'block';
                nextChild = nextChild.nextElementSibling;
            }
            nav.isShown = true;
        }
    }

    nav.showNav();

    nav.home.addEventListener('click', nav.showNav);

    let containers = document.querySelectorAll('.container');
    let navItems = [];

    for (let i = 0; i < containers.length; i++) {
        let obj = {};
        obj.container = containers[i];
        obj.navTitle = containers[i].firstElementChild;
        obj.content = obj.navTitle.nextElementSibling;
        obj.isContentShown = false;
        obj.showChild = function() {
            if (obj.isContentShown) {
                obj.content.style.display = 'none';
                obj.isContentShown = false;
            } else {
                obj.content.style.display = 'block';
                obj.isContentShown = true;
            }
        }
        obj.navTitle.addEventListener('click', obj.showChild);
        navItems.push(obj);
    }
}

nav();