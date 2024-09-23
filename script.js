// SETTING COUNTDOWN TIMER FOR COMING SOON MESSAGE
// Set the date we're counting down to
let countDowndDate = new Date("September 26, 2024 16:00:00").getTime();

// Update the count down every 1 second
const countDownFunction = setInterval(() => {
  // Get todays date and time
  let now = new Date().getTime();

  //Find the distance between now an the count down date
  let distance = countDowndDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let secondes = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="myCounter"
  document.querySelector(
    "#myCounter"
  ).innerHTML = `${days}d ${hours}h ${minutes}m ${secondes}s `;

  // Some text if the count down is over
  if (distance < 0) {
    clearInterval(countDownFunction);
    document.querySelector("#myCounter").innerHTML = `EXPIRED`;
  }
}, 1000);

// Set flashing paragraphs

const flashPara = setInterval(function () {
  document.querySelector(".flashing").style.cssText =
    "color: transparent; backgroundImage: url(/)";
  document.querySelector("#myCounter.flashing").style.cssText =
    "border:2px dashed green;color:white;";
}, 1000);

const flashParaW = setInterval(function () {
  document.querySelector(".flashing").style.cssText =
    "border:2px dashed white;color:white;";
  document.querySelector("#myCounter.flashing").style.cssText =
    "border:2px dashed white;color:white;";
}, 2000);

// STYLING FLASHING PARAGRAPH
