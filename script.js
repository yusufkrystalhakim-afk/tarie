// ===== Efek salju =====
const numFlakes = 50;
for (let i = 0; i < numFlakes; i++) {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  const size = Math.random() * 5 + 2;
  snowflake.style.width = `${size}px`;
  snowflake.style.height = `${size}px`;
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.animationDuration = `${Math.random() * 10 + 5}s`;
  snowflake.style.opacity = Math.random();
  document.body.appendChild(snowflake);
}

// ===== Efek tombol pembuka =====
const openButton = document.getElementById("openButton");
const intro = document.getElementById("intro");
const content = document.getElementById("content");
const messageBox = document.getElementById("message");
const music = document.getElementById("bgMusic");

openButton.addEventListener("click", () => {
  intro.style.opacity = "0";
  intro.style.transition = "opacity 1s ease";
  setTimeout(() => {
    intro.style.display = "none";
    content.classList.remove("hidden");
    content.style.opacity = "1";
    playMusic();
    typeText("message",
      "Hey you,\n\nJust wanted to say... Happy Birthday! 🎂\nI hope your day is filled with laughter, warmth, and little moments that make you smile.\n\nYou deserve all the good things today and always. 💛",
      45
    );
  }, 900);
});

function playMusic() {
  music.play().catch(() => {
    console.warn("Autoplay prevented. User interaction required.");
  });
}

// ===== Efek mengetik =====
function typeText(elementId, text, delay = 50) {
  const element = document.getElementById(elementId);
  element.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;
    if (i === text.length) clearInterval(interval);
  }, delay);
}
