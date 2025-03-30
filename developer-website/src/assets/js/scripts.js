// This file contains JavaScript code for interactivity on the website.

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  const links = document.querySelectorAll("nav a");
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Form submission handling (example)
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      // Handle form submission logic here
      alert("Form submitted! Thank you for reaching out.");
      contactForm.reset();
    });
  }

  // Example of a simple animation on project cards
  const projectCards = document.querySelectorAll(".project");
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.classList.add("hover");
    });
    card.addEventListener("mouseleave", function () {
      this.classList.remove("hover");
    });
  });

  // Resume data (extracted from Mahesh_Dommaraju.docx)
  const resumeData = {
    name: "Mahesh Dommaraju",
    about:
      "I am a passionate developer with expertise in building web applications. I specialize in HTML, CSS, JavaScript, and modern frameworks like React and Node.js.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    projects: [
      {
        title: "Personal Website",
        description: "A portfolio website showcasing my skills and projects.",
      },
      {
        title: "E-commerce Platform",
        description: "An online store built with React and Node.js.",
      },
      {
        title: "Blogging Platform",
        description:
          "A full-stack application for creating and managing blogs.",
      },
    ],
    contact:
      "Email: mahesh.dommaraju@example.com | GitHub: https://github.com/maheshdommaraju",
  };

  // Populate name
  document.getElementById("name").textContent = resumeData.name;

  // Populate about section
  document.getElementById("about-text").textContent = resumeData.about;

  // Populate skills
  const skillsList = document.getElementById("skills-list");
  resumeData.skills.forEach((skill) => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
  });

  // Populate projects
  const projectsContainer = document.getElementById("projects-container");
  resumeData.projects.forEach((project) => {
    const div = document.createElement("div");
    div.classList.add("project");
    div.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
    projectsContainer.appendChild(div);
  });

  // Populate contact
  document.getElementById("contact-info").textContent = resumeData.contact;
});
