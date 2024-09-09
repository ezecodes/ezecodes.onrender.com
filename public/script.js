document.addEventListener("DOMContentLoaded", () => {
  new Typed("#hero-text", {
    strings: [
      "Welcome to My Portfolio",
      "I'm Elijah Eze",
      "Full Stack Developer",
      "Cloud Enthusiast",
      "DevOps Specialist",
    ],
    typeSpeed: 50,
    backSpeed: 100,
    loop: true,
  });

  new Typed("#hero-subtext", {
    strings: [
      "Explore my work",
      "Connect with me",
      "Let's build something great together",
    ],
    typeSpeed: 50,
    backSpeed: 100,
    startDelay: 2000,
    loop: true,
  });

  // Initialize Intersection Observer for other sections
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // Optionally, stop observing the section once it's visible
        observer.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });

  const contactForm = document.getElementById("contact-form");
  const name = document.querySelector('input[name="name"]');
  const email = document.querySelector('input[name="email"]');
  const message = document.querySelector('textarea[name="message"]');

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch("/contact", {
      method: "post",
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
      }),
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        Swal.fire({
          title: "Success!",
          text: res.message,
          icon: "success",
        });
      });
  });
});
