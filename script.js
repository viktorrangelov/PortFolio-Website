let hamburburgerButton = document.getElementById("hamburger");
let menu = document.getElementById("showHide")

function changeClass() {

	if (menu.classList.contains('hide')) {
		menu.className = "show";
	}else if(menu.classList.contains('show'))

		menu.className= "hide";
	
}


hamburburgerButton.addEventListener('click',() => {
	changeClass();
})


let typed = new Typed(".typed", {
	strings: ['Viktor Rangelov', 'a Developer', 'a Technical Support Engineer'],
	typeSpeed: 100,
	backSpeed: 100,
	loop: true
})