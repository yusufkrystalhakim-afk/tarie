// ===== SALJU =====
const numFlakes = 50;
for (let i = 0; i < numFlakes; i++) {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  const size = Math.random() * 5 + 2;
  snowflake.style.width = `${size}px`;
  snowflake.style.height = `${size}px`;
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.animationDuration = `${Math.random() * 10 + 5}s`;
  snowflake.style.opacity = Math.random();
  document.body.appendChild(snowflake);
}

// ===== MUSIK =====
const audio = new Audio("audio.mp3"); // ganti link mp3 sesuai kamu
audio.loop = true;
audio.preload = "none";

const playBtn = document.createElement("button");
playBtn.id = "playMusic";
playBtn.textContent = "Putar Musik 🎵";
document.body.appendChild(playBtn);

playBtn.addEventListener("click", async () => {
  try {
    await audio.play();
    playBtn.textContent = "Musik Diputar 🎶";
    playBtn.disabled = true;
    playBtn.style.opacity = 0.8;
  } catch (err) {
    alert("Tidak bisa memutar musik — pastikan file audionya bisa diakses.");
  }
});

// ===== EFEK KETIK =====
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

// Jalankan efek ketik setelah halaman siap
window.addEventListener("load", () => {
  const title = document.getElementById("title").textContent;
  const message = document.getElementById("message").textContent;
  typeText("title", title, 80);
  setTimeout(() => typeText("message", message, 45), 2000);
});

