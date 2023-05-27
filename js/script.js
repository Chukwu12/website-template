
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)




/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// About Card //
var swiper = new Swiper('.blog-slider', {
	spaceBetween: 30,
	effect: 'fade',
	loop: true,
	mousewheel: {
	  invert: false,
	},
	// autoHeight: true,
	pagination: {
	  el: '.blog-slider__pagination',
	  clickable: true,
	}
  });


//   Tabs //



let filter_btn = document.querySelectorAll('.filter-btn');
let tab_items = document.querySelectorAll('.tab-item');

for (let i = 0; i < filter_btn.length; i++) {
  filter_btn[i].addEventListener('click', function () {
    for (let j = 0; j < filter_btn.length; j++) {
      filter_btn[j].classList.remove('active');
    }
    let select_tab = filter_btn[i].getAttribute('data-tab');
    filter_btn[i].classList.add('active');
    for (let t = 0; t < tab_items.length; t++) {
      document.querySelector('.tab-filter-item-container').style.height =
        tab_items[t].scrollHeight + 'px';
      if (tab_items[t].classList.contains(select_tab)) {
        tab_items[t].classList.add('select_tab');
      } else {
        tab_items[t].classList.remove('select_tab');
      }
    }
  });
}

for (let th = 0; th < tab_items.length; th++) {
  document.querySelector('.tab-filter-item-container').style.height =
    tab_items[th].scrollHeight + 'px';
}




function readMore() {
  var expandInfo = document.getElementById("more-info-js");
  var mainHeadings = document.getElementById("main-headings-js");
  
  mainHeadings.style.transform = "scale(0.7)";
  expandInfo.style.height = "350px";
} 



