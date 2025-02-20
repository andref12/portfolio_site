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

// Select all sections
const sections = document.querySelectorAll("section");

// Select all nav links
const navLinks = document.querySelectorAll(".nav-link");

/*
  Set up an Intersection Observer
  - threshold: 0.6 means 60% of the section is visible
*/
const options = {
  threshold: 0.6,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // If the section is in the viewport
    if (entry.isIntersecting) {
      // Remove 'active' from all nav links
      navLinks.forEach((link) => link.classList.remove("active"));

      // Highlight the nav link that matches the current section's ID
      const currentSectionID = entry.target.getAttribute("id");
      const activeLink = document.querySelector(`.nav-link[href="#${currentSectionID}"]`);
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
}, options);

// Observe each section
sections.forEach((section) => {
  observer.observe(section);
});
