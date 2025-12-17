const btn = document.getElementById("light-on/off");
const lightOn = document.querySelector(".light-on");
const lightOff = document.querySelector(".lamp");

btn.addEventListener("click", () => {
  lightOn.classList.add("toggle-lamp");
  lightOff.classList.add("light-off");
});

