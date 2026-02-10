
function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

// smooth scroll + auto close menu
document.querySelectorAll('#menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById("menu").classList.remove("active");
  });
});

function toggleChat() {
  const chat = document.getElementById("chatBox");
  chat.style.display=chat.style.display==="flex"?"none":"flex";
}

function sendMessage() {
  const input = document.getElementById("chatInput");
  const body = document.getElementById("chatBody");
  const msg = input.value.trim();

  if (msg === "") return;

  // User message
  const userDiv = document.createElement("div");
  userDiv.className = "user-msg";
  userDiv.innerText = msg;
  body.appendChild(userDiv);

  input.value = "";
  body.scrollTop = body.scrollHeight;

  // Auto reply
  setTimeout(() => {
    const botDiv = document.createElement("div");
    botDiv.className = "bot-msg";

    const text = msg.toLowerCase();

    if (text.includes("project")) {
      botDiv.innerText = "📂 You can check my projects section below 👇";
    } else if (text.includes("contact")) {
      botDiv.innerText = "📧 You can contact me via LinkedIn or Email.";
    } else if (text.includes("resume")) {
      botDiv.innerText = "📄 Click the Resume button to download my resume.";
    } else {
      botDiv.innerText = "🙂 Thanks for reaching out! I’ll get back to you soon.";
    }

    body.appendChild(botDiv);
    body.scrollTop = body.scrollHeight;
  }, 600);
}

document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero-content");
  hero.classList.add("show");
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".slide-left").classList.add("show");
  document.querySelector(".slide-right").classList.add("show");
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleProjects");
  const extraProjects = document.querySelectorAll(".project-card.extra");

  let isExpanded = false;

  toggleBtn.addEventListener("click", () => {
    extraProjects.forEach(project => {
      project.classList.toggle("hidden");
    });

    isExpanded = !isExpanded;
    toggleBtn.textContent = isExpanded ? "Show Less" : "Show More";
  });
});

