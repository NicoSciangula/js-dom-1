const btn = document.getElementById("light-on/off");
const lightOn = document.querySelector(".light-on");
const lightOff = document.querySelector(".lamp");
let contatore = 0;

btn.addEventListener("click", () => {
  lightOn.classList.toggle("toggle-lamp");
  lightOff.classList.toggle("light-off");
  if (contatore === 10) {
    btn.textContent = "Classe 11 domina!";
    contatore = 0;
  } else if (lightOn.classList.contains("toggle-lamp")) {
    textOff();
    contatore++;
  } else {
    textOn();
    contatore++;
  }
});

const textOff = () => (btn.textContent = "Spengi");

const textOn = () => (btn.textContent = "Accendi");
