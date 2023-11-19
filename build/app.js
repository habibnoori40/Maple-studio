const menu = document.getElementById("menu");
const menuSec = document.getElementById("menu-2");
const menuBtn = document.getElementById("menu-btn");
const menuBtnSec = document.getElementById("menu-btn-2");
const darkmodeBtn = document.getElementById("darkToggler");
const darkmodeBtnSec = document.getElementById("darkToggler-2");
const htmlEl = document.documentElement;
const htmlClass = "act__menu";

menuBtn.addEventListener("click", () => {
  menu.classList.toggle(htmlClass);
  menuBtn.classList.toggle("burger__icon-anim");
  menu.classList.contains(htmlClass)
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "visible");
});

// function to change theme on sunrise or sunset
function getUserTimezoneOffset() {
  const now = new Date();
  return now.getTimezoneOffset();
}
function switchTheme() {
  const timezoneOffset = getUserTimezoneOffset();
  const isMorning = timezoneOffset < 0;
  if (isMorning) {
    htmlEl.classList.remove("dark");
  } else {
    htmlEl.classList.add("dark");
  }
}
switchTheme();

darkmodeBtn.addEventListener("click", () => {
  htmlEl.classList.toggle("dark");
  const isDarkModeEnabled = htmlEl.classList.contains("dark");
  if (isDarkModeEnabled) {
    localStorage.setItem("darkMode", isDarkModeEnabled);
  } else {
    localStorage.removeItem("darkMode");
  }
});

const isDarkModeEnabled = localStorage.getItem("darkMode") === "true";
if (isDarkModeEnabled) {
  htmlEl.classList.add("dark");
}

// for home page (the main page) menu
menuBtnSec &&
  menuBtnSec.addEventListener("click", () => {
    menuSec.classList.toggle(htmlClass);
    menuBtnSec.classList.toggle("burger__icon-anim");
    menuSec.classList.contains(htmlClass)
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  });

// for home page dark
darkmodeBtnSec &&
  darkmodeBtnSec.addEventListener("click", () => {
    htmlEl.classList.toggle("dark");
    const isDarkModeEnabledSec = htmlEl.classList.contains("dark");
    if (isDarkModeEnabledSec) {
      localStorage.setItem("darkMode", isDarkModeEnabledSec);
    } else {
      localStorage.removeItem("darkMode");
    }
  });

const isDarkModeEnabledSec = localStorage.getItem("darkMode") === "true";
if (isDarkModeEnabled) {
  htmlEl.classList.add("dark");
}
