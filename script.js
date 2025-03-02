function darkModeButton(){
	document.body.classList.toggle('dark-theme');
	const button = document.getElementById('planet-item')
	if (!button.style.transform || button.style.transform === 'rotate(0deg)') {
    	button.style.transform = 'rotate(180deg)';
  	}
  	else {
    	button.style.transform = 'rotate(0deg)';
	}

}

function openArticle(url) {
  window.open(url, '_blank');
}

function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("show");
}

document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("mobileMenu").classList.remove("show");
    });
});

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-link");

const options = {
  threshold: 0.6,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => link.classList.remove("active"));
      const currentSectionID = entry.target.getAttribute("id");
      const activeLink = document.querySelector(`.nav-link[href="#${currentSectionID}"]`);
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});
