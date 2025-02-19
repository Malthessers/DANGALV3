const header = document.querySelector("header");
const subheader = document.querySelector(".subheader");

window.addEventListener("scroll", function () {
    const isScrolled = window.scrollY > 100; // Adjust threshold if needed

    // Toggle sticky class for header
    header.classList.toggle("sticky", window.scrollY > 0);

    // Show or hide subheader
    if (isScrolled) {
        subheader.classList.add("show-subheader");
    } else {
        subheader.classList.remove("show-subheader");
    }
});

let menu = document.querySelector("#menu-icon"); // Use # for ID
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle("bx-x"); // Fix classList usage
    navlist.classList.toggle("open");
};

window.onscroll = () => {
    menu.classList.remove("bx-x"); // Fix classList usage
    navlist.classList.remove("open");
};

const sr = ScrollReveal ({
        distance: '30px',
        duration: 2600,
        reset: true
})

