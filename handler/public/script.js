document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.querySelectorAll(".skills-grid")[0];

  const skills = [
    `<a href="https://aws.amazon.com/amplify/" target="_blank" rel="noreferrer">
      <img
        src="https://docs.amplify.aws/assets/logo-dark.svg"
        alt="amplify"
        width="40"
        height="40"
      />
    </a>`,

    `<a href="https://aws.amazon.com" target="_blank" rel="noreferrer">
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
        alt="aws"
        width="40"
        height="40"
      />
    </a>`,

    `<a
      href="https://www.gnu.org/software/bash/"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg"
        alt="bash"
        width="40"
        height="40"
      />
    </a>`,

    `<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
        alt="css3"
        width="40"
        height="40"
      />
    </a>`,

    `<a href="https://www.docker.com/" target="_blank" rel="noreferrer">
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
        alt="docker"
        width="40"
        height="40"
      />
    </a>`,

    `<a href="https://expressjs.com" target="_blank" rel="noreferrer">
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
        alt="express"
        width="40"
        height="40"
      />
    </a>`,

    `<a href="https://firebase.google.com/" target="_blank" rel="noreferrer">
      <img
        src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
        alt="firebase"
        width="40"
        height="40"
      />
    </a>`,

    `<a href="https://git-scm.com/" target="_blank" rel="noreferrer">
      <img
        src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
        alt="git"
        width="40"
        height="40"
      />
    </a>`,

    `<a href="https://heroku.com" target="_blank" rel="noreferrer">
      <img
        src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"
        alt="heroku"
        width="40"
        height="40"
      />
    </a>`,

    `<a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
        alt="html5"
        width="40"
        height="40"
      />
    </a>`,

    `<a
      href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
        alt="javascript"
        width="40"
        height="40"
      />
    </a>`,

    `<a href="https://www.jenkins.io" target="_blank" rel="noreferrer">
      <img
        src="https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg"
        alt="jenkins"
        width="40"
        height="40"
      />
    </a>`,

    `<a href="https://www.linux.org/" target="_blank" rel="noreferrer">
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
        alt="linux"
        width="40"
        height="40"
      />
    </a>`,

    `<a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
        alt="mongodb"
        width="40"
        height="40"
      />
    </a>`,

    `<a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
        alt="mysql"
        width="40"
        height="40"
      />
    </a>`,

    `<a href="https://nextjs.org/" target="_blank" rel="noreferrer">
      <img
        src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
        alt="nextjs"
        width="40"
        height="40"
      />
    </a>`,

    `<a href="https://www.nginx.com" target="_blank" rel="noreferrer">
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg"
        alt="nginx"
        width="40"
        height="40"
      />
    </a>`,

    `<a href="https://nodejs.org" target="_blank" rel="noreferrer">
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
        alt="nodejs"
        width="40"
        height="40"
      />
    </a>`,

    `<a href="https://www.postgresql.org" target="_blank" rel="noreferrer">
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
        alt="postgresql"
        width="40"
        height="40"
      />
    </a>`,

    `<a href="https://postman.com" target="_blank" rel="noreferrer">
      <img
        src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
        alt="postman"
        width="40"
        height="40"
      />
    </a>`,

    `<a href="https://www.python.org" target="_blank" rel="noreferrer">
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
        alt="python"
        width="40"
        height="40"
      />
    </a>`,

    `<a href="https://reactjs.org/" target="_blank" rel="noreferrer">
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
        alt="react"
        width="40"
        height="40"
      />
    </a>`,

    `<a href="https://reactnative.dev/" target="_blank" rel="noreferrer">
      <img
        src="https://reactnative.dev/img/header_logo.svg"
        alt="reactnative"
        width="40"
        height="40"
      />
    </a>`,

    `<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
        alt="typescript"
        width="40"
        height="40"
      />
    </a>`,
  ];
  skills.forEach((skill) => {
    const div = document.createElement("div");
    div.innerHTML = skill;
    div.classList.add("skill");
    skillsSection.appendChild(div);
  });
  // Initialize Typed.js for the hero section
  const typedHero = new Typed("#hero-text", {
    strings: [
      "Welcome to My Portfolio",
      "I'm Elijah Eze",
      "Full Stack Developer",
      "Cloud Enthusiast",
      "DevOps Specialist",
    ],
    typeSpeed: 300,
    backSpeed: 100,
    loop: true,
  });

  const typedHeroSubtext = new Typed("#hero-subtext", {
    strings: [
      "Explore my work",
      "Connect with me",
      "Let's build something great together",
    ],
    typeSpeed: 300,
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
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });

  const u = new URL(document.location);
  const w = new URLSearchParams(u.search);
  const requestQuery = {};
  w.forEach((value, key) => {
    requestQuery[key] = value;
  });
  if (requestQuery.rT === "form" && requestQuery.ok === "true") {
    Swal.fire({
      title: "<strong>Success</strong>",
      icon: "info",
      html: "You form was received",
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: "Great!",
      confirmButtonAriaLabel: "We'll get back to you soon!",
      cancelButtonText: "Dismiss",
      cancelButtonAriaLabel: "Thumbs down",
    }).then(() => {
      document.location.href = u.origin;
    });
  }
});
