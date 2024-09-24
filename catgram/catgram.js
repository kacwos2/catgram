document.addEventListener("DOMContentLoaded", () => {
  const emoticonButtons = document.querySelectorAll(".emoticon");

  emoticonButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.textContent === "🐱") {
        button.textContent = "😻";
      } else {
        button.textContent = "🐱";
      }

      button.classList.add("clicked");

      setTimeout(() => {
        button.classList.remove("clicked");
      }, 300);
    });
  });
});
