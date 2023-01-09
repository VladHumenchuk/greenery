(() => {
    "use strict";
    const arrow = document.querySelector(".menu__arrow-img");
    document.querySelector(".menu__arrow");
    const menu = document.querySelector(".menu__block");
    document.querySelector(".page-1");
    const zagluska = document.querySelector(".menu__zagluska");
    let index = 0;
    arrow.addEventListener("click", (function() {
        if (0 === index) {
            menu.style.left = "0";
            arrow.style.transform = "rotate(180deg)";
            zagluska.style.display = "block";
            index = 1;
        } else {
            menu.style.left = "-165px";
            arrow.style.transform = "rotate(0deg)";
            index = 0;
            zagluska.style.display = "none";
        }
    }));
    zagluska.addEventListener("click", (function() {
        menu.style.left = "-165px";
        arrow.style.transform = "rotate(0deg)";
        index = 0;
        zagluska.style.display = "none";
    }));
    const arrowFooter = document.querySelectorAll(".inform__title--arrow");
    const listFotter = document.querySelectorAll(".inform__list--hed");
    console.log(arrowFooter);
    arrowFooter.forEach(((arrow, i) => {
        arrow.addEventListener("click", (function() {
            listFotter[i].classList.toggle("list-block");
            document.querySelectorAll(".inform__title ")[i].classList.toggle("inform__title--arrow");
            document.querySelectorAll(".inform__title ")[i].classList.toggle("arrow-up");
        }));
    }));
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    window["FLS"] = true;
    isWebp();
})();