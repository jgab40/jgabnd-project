// Set the date we're counting down to
let countDowndDate = new Date("September 22, 2024 16:00:00").getTime();

// Update the count down every 1 second
const countDownFunction = setInterval(function () {
  // Get todays date and time
  let now = new Date().getTime();

  //Find the distance between now an the count down date
  let distance = countDowndDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  console.log(days);
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  console.log(hours);
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  console.log(minutes);
  let secondes = Math.floor((distance % (1000 * 60)) / 1000);
  console.log(secondes);

  // Output the result in an element with id="myCounter"
  document.querySelector(
    "#myCounter"
  ).innerHTML = `${days}d ${hours}h ${minutes}m ${secondes}s `;

  // Some text if the count down is over
  if (distance < 0) {
    clearInterval(countDownFunction);
    document.getElementById("myCounter").innerHTML = `EXPIRED`;
  }
}, 1000);
