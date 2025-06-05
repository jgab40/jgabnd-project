// Create a drop-down button for a navigation sidebar

const dropButton = document
  .querySelector("#myBtn")
  .addEventListener("click", function () {
    myToggle();
  });

const myToggle = () => {
  document.querySelector("#myDropdown").classList.toggle("show");
};

// Setting  timer for coming soon message

const timeHandler = setInterval(setTime, 1000);

function setTime() {
  let timeStart = new Date().getTime();
  let timeEnd = new Date(2025, 5, 16, 16).getTime();
  let timeDuration = timeEnd - timeStart;

  let days = Math.floor(timeDuration / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (timeDuration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((timeDuration % (1000 * 60 * 60)) / (1000 * 60));
  let secondes = Math.floor((timeDuration % (1000 * 60)) / 1000);

  document.querySelector(
    "#myCounter"
  ).innerHTML = `${days}d ${hours}h ${minutes}m ${secondes}s `;

  if (timeDuration < 0) {
    clearInterval(timeHandler);
    document.querySelector("#myCounter").innerHTML = `EXPIRED`;
  }
}

// Setting color

const colorHandler = setInterval(setColor, 1000);

function setColor() {
  let element = document.getElementById("colorText");
  element.style.backgroundColor =
    element.style.backgroundColor == "lightblue" ? "white" : "lightblue";
}
