import { adviceNumberId, diceButton, adviceText, rotatingImg } from "./domElements.js";

document.addEventListener("DOMContentLoaded", () => {
  const getAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      if (!response.ok) {
        throw new Error(`Ups, something wrong happend: ${response.statusText}`);
      }
      const data = await response.json();
      adviceText.textContent = data.slip.advice;
      adviceNumberId.textContent = data.slip.id;
    } catch (error) {
      adviceText.textContent = `Failed to get advice: ${error.message}`;
    }
  };
  rotatingImg.addEventListener('click', () => {
    rotatingImg.classList.toggle('rotation')
  })
  diceButton.addEventListener("click", getAdvice);
});
