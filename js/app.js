


// I have already copied section 3 naming it sectoin 4 to try the code

const [...sections] = document.getElementsByTagName("section"); //call sections into array
let secName = sections.map((section) => section.getAttribute("data-nav")); //section data
let secId = sections.map((section) => section.id); //section id
const navBar = document.getElementById("navbar__list"); // call the navigation bar

//End Global Variables
//Start Helper Functions
let inView = (section) => {
	let diemen = section.getBoundingClientRect();
	return (
		diemen.bottom <= window.innerHeight * 1.4 &&
		diemen.top <= 0.4 * diemen.height &&
		diemen.top >= -30
	);
};
// || document.documentElement.clientHeight
//End Helper Functions
//Begin Main Functions

// build the nav

for (let i = 0; i < secId.length; i++) {
	navBar.innerHTML += `<li class="menu__item"><a href="#101" class="menu__link">${secName[i]}</a></li>`;
} // this loop will also navigate to the section when the link clicked by its href so I do not need another function to navigate but I will cancel the href method in order to implement smooth behavior

// Add class 'active' to section when near top of viewport

// for (let i = 0; i < sections.length; i++) {
// 	window.addEventListener("scroll", () => {
// 		inView(sections[i])
// 			? sections[i].classList.add("your-active-class")
// 			: sections[i].classList.remove("your-active-class");
// 	});
// }
const btnsst = document.getElementsByClassName("menu__link");
window.addEventListener("scroll", () => {
	for (let i = 0; i < sections.length; i++) {
		if (inView(sections[i])) {
			sections[i].classList.add("your-active-class");
			btnsst[i].classList.add("active-btn");
		} else {
			sections[i].classList.remove("your-active-class");
			btnsst[i].classList.remove("active-btn");
		}
	}
});

// Scroll to anchor ID using scrollTO event
const btns = document.getElementsByClassName("menu__item"); // call the navigation items
for (let i = 0; i < secId.length; i++) {
	btns[i].addEventListener("click", () => {
		sections[i].scrollIntoView({ behavior: "smooth" });
	});
}

//End Main Functions
//Begin Events
topbtn = document.getElementById("nav_to_top"); // call the button

window.addEventListener("scroll", () => {
	if (document.body.scrollTop <= 300) {
		topbtn.style.display = "none";
	} else if (document.body.scrollTop > 300) {
		topbtn.style.display = "block";
	}
});

topbtn.addEventListener("click", () => {
	document.body.scrollTop = 0;
});
// Build menu

// Scroll to section on link click

// Set sections as active
