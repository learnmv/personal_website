// Resume data for interactive commands
const resumeData = {
  about:
    "Driven software engineer with expertise in Python, ML frameworks, and cloud technologies.",
  experience: {
    factset:
      "Software Engineer III (Apr 2022 - Dec 2022): Optimized real-time news pipeline, reduced latency by 0.1ms.",
    infosys:
      "Python Developer (Sep 2019 - Apr 2022): Automated compensation review, cut cycle time from 3 months to 1 month.",
  },
  projects: {
    "credit-card-fraud":
      "Anomaly detection system with autoencoders, improved accuracy by 30%.",
    "blog-app": "Dynamic blog app with RBAC and real-time comments.",
  },
  skills:
    "Python, Bash, C++, Java, HTML, CSS, JavaScript, Django, React, AWS, Docker, Kubernetes, SQL, Git, Linux",
  education:
    "M.S. Computer Science (Wright State, GPA: 3.8) | B.Tech Electronics (NIT, GPA: 3.5)",
  contact: "maheshvarma.dommaraju@gmail.com | +1-937-241-3273",
};

// Command handlers
const commands = {
  help: "Commands: about, experience [factset/infosys], projects [credit-card-fraud/blog-app], skills, education, contact, clear",
  about: resumeData.about,
  skills: resumeData.skills,
  education: resumeData.education,
  contact: resumeData.contact,
  clear: () => (output.innerHTML = ""),
};

// DOM elements
const output = document.getElementById("output");
const input = document.getElementById("input");

// Handle command input
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const userInput = input.value.trim().toLowerCase();
    const [cmd, ...args] = userInput.split(" ");
    let response = "Command not found. Type 'help' for options.";

    if (commands[cmd]) {
      if (typeof commands[cmd] === "function") {
        commands[cmd]();
      } else {
        response = commands[cmd];
      }
    } else if (cmd === "experience" && args[0]) {
      response = resumeData.experience[args[0]] || "Experience not found.";
    } else if (cmd === "projects" && args[0]) {
      response =
        resumeData.projects[args[0].replace("-", "")] || "Project not found.";
    }

    output.innerHTML += `<p><span class="command">${userInput}</span>: ${response}</p>`;
    input.value = "";
    terminal.scrollTop = terminal.scrollHeight;
  }
});

// Focus input on load
window.onload = () => input.focus();
