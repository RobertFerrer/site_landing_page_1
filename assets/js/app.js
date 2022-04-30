AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
const filter_btns = document.querySelectorAll(".filter-btn");
const skills_wrap = document.querySelector(".skills");
const skills_bars = document.querySelectorAll(".skill-progress");
const records_wrap = document.querySelector(".records");
const records_numbers = document.querySelectorAll(".number");
const footer_input = document.querySelector(".footer-input");
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");

footer_input.addEventListener("focus", () => {
    footer_input.classList.add("focus");
});

footer_input.addEventListener("blur", () => {
    if (footer_input.value != "") return;
    footer_input.classList.remove("focus");
});

function closeMenu() {
    navbar.classList.remove("open");
    document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () => {
    if (!navbar.classList.contains("open")) {
        navbar.classList.add("open");
        document.body.classList.add("stop-scrolling");
    } else {
        closeMenu();
    }
});

links.forEach((link) => link.addEventListener("click", () => closeMenu()));

filter_btns.forEach((btn) =>
    btn.addEventListener("click", () => {
        filter_btns.forEach((button) => button.classList.remove("active"));
        btn.classList.add("active");

        let filterValue = btn.dataset.filter;

        $(".grid").isotope({ filter: filterValue });
    })
);

$(".grid").isotope({
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
    transitionDuration: "0.6s",
});

window.addEventListener("scroll", () => {
    skillsEffect();
    countUp();
});

function checkScroll(el) {
    let rect = el.getBoundingClientRect();
    if (window.innerHeight >= rect.top + el.offsetHeight) return true;
    return false;
}

function skillsEffect() {
    if (!checkScroll(skills_wrap)) return;
    skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
}

function countUp() {
    if (!checkScroll(records_wrap)) return;
    records_numbers.forEach((numb) => {
        const updateCount = () => {
            let currentNum = +numb.innerText;
            let maxNum = +numb.dataset.num;
            let speed = 100;
            const increment = Math.ceil(maxNum / speed);

            if (currentNum < maxNum) {
                numb.innerText = currentNum + increment;
                setTimeout(updateCount, 1);
            } else {
                numb.innerText = maxNum;
            }
        };

        setTimeout(updateCount, 400);
    });
}

var mySwiper = new Swiper(".swiper-container", {
    speed: 1100,
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
});