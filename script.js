const openButton = document.getElementById("openButton");
const content = document.getElementById("content");
const gif = document.querySelector(".birthday-gif");
const typingText = document.getElementById("typingText");
const bgMusic = document.getElementById("bgMusic");

openButton.addEventListener("click", () => {
  openButton.style.opacity = 0;
  setTimeout(() => {
    openButton.style.display = "none";
    content.classList.remove("hidden");
    showGifAndText();
  }, 600);
});

function showGifAndText() {
  gif.style.opacity = 1;
  setTimeout(() => {
    bgMusic.play().catch(() => {});
    startTyping("Happy Birthday!\nWishing you a day full of joy, laughter, and sweet memories 💖");
  }, 1200);
}

function startTyping(text) {
  typingText.style.opacity = 1;
  let i = 0;
  function type() {
    if (i < text.length) {
      typingText.textContent += text.charAt(i);
      i++;
      setTimeout(type, 70);
    }
  }
  type();
}
