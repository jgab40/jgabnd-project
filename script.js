// Create a drop-down button for a navigation sidebar

const dropButton = document
  .querySelector("#myBtn")
  .addEventListener("click", function () {
    myToggle();
  });

const myToggle = () => {
  document.querySelector("#myDropdown").classList.toggle("show");
};

// Setting countdown timer for coming soon message

let countDownDate = new Date("October 14, 2024 16:00:00").getTime();

const countDownFunction = setInterval(() => {
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let secondes = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(
    "#myCounter"
  ).innerHTML = `${days}d ${hours}h ${minutes}m ${secondes}s `;

  if (distance < 0) {
    clearInterval(countDownFunction);
    document.querySelector("#myCounter").innerHTML = `EXPIRED`;
  }
}, 1000);

// Setting flashing paragraph

const flashingGradient = setInterval(function () {
  document.querySelector("p+p").style.cssText =
    "background-image: linear-gradient(to right, #f83600, #f9d423);";
}, 1000);
const flashingWhite = setInterval(function () {
  document.querySelector("p+p").style.cssText = "color: #ffffff;";
}, 2000);
