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
    console.log("clicked1")
    document.querySelector('#section1').scrollIntoView()
}

function goTo2() {
    console.log("clicked2")
    document.querySelector('#section2').scrollIntoView()
}

function goTo3() {
    console.log("clicked3")
    document.querySelector('#section3').scrollIntoView()
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
const nav1 = document.createElement('li')
const nav2 = document.createElement('li')
const nav3 = document.createElement('li')
nav1.className = "menu__link"
nav2.className = "menu__link"
nav3.className = "menu__link"
const nav = document.querySelector('#navbar__list')
nav1.textContent = 'first'
nav2.textContent = 'second'
nav3.textContent = 'third'
nav.appendChild(nav1)
nav.appendChild(nav2)
nav.appendChild(nav3)


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 
nav1.addEventListener('click', goTo1)
nav2.addEventListener('click', goTo2)
nav3.addEventListener('click', goTo3)

// Scroll to section on link click

// Set sections as active