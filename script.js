// Setting countdown timer for coming soon message

let countDowndDate = new Date("September 26, 2024 16:00:00").getTime();

const countDownFunction = setInterval(() => {
  let now = new Date().getTime();

  let distance = countDowndDate - now;

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

// Set flashing paragraphs

const flashingGradient = setInterval(function () {
  document.querySelector(".flashing").style.cssText =
    "background-image: linear-gradient(to right, #f83600, #f9d423);";
}, 1000);
const flashingWhite = setInterval(function () {
  document.querySelector(".flashing").style.cssText = "color: #ffffff;";
}, 2000);
