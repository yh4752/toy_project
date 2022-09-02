const main = document.querySelector(".main");
const $toggle = document.querySelector(".toggleSwitch");
const unable = document.querySelector(".unable");
const main_per = document.querySelector(".main_per");
const main_num = document.querySelector(".main_num");

$toggle.onclick = () => {
  $toggle.classList.toggle("active");
  if (main_per.classList.contains("unable")) {
    main_per.classList.remove("unable");
    main_num.classList.add("unable");
    main.style.width = "";
  } else {
    main_num.classList.remove("unable");
    main_per.classList.add("unable");
    main.style.width = "700px";
  }
};
