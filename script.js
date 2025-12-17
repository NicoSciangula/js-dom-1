const btn = document.getElementById("light-on/off");
const lightOn = document.querySelector(".light-on");
const lightOff = document.querySelector(".lamp");

btn.addEventListener("click", () => {
  lightOn.classList.toggle("toggle-lamp");
  lightOff.classList.toggle("light-off");
  if (lightOn.classList.contains("toggle-lamp")) {
    textOff();
  } else {
    textOn();
  }
});

const textOff = () => (btn.textContent = "Spengi");

const textOn = () => (btn.textContent = "Accendi");
