/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function goTo1() {
    document.querySelector("#section1").scrollIntoView();
}

function goTo2() {
    document.querySelector("#section2").scrollIntoView();
}

function goTo3() {
    document.querySelector("#section3").scrollIntoView();
}

function goTo4() {
    document.querySelector("#section4").scrollIntoView();
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const nav1 = document.createElement("li");
const nav2 = document.createElement("li");
const nav3 = document.createElement("li");
const nav4 = document.createElement("li");
nav1.className = "menu__link";
nav2.className = "menu__link";
nav3.className = "menu__link";
nav4.className = "menu__link";
const nav = document.querySelector("#navbar__list");
nav1.textContent = "Section 1";
nav2.textContent = "Section 2";
nav3.textContent = "Section 3";
nav4.textContent = "Section 4";
nav.appendChild(nav1);
nav.appendChild(nav2);
nav.appendChild(nav3);
nav.appendChild(nav4);

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
nav1.addEventListener("click", goTo1);
nav2.addEventListener("click", goTo2);
nav3.addEventListener("click", goTo3);
nav4.addEventListener("click", goTo4);

// Scroll to section on link click

// Set sections as active