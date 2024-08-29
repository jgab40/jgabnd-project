//Greetings
(function () {
  let text = "";
  const d = new Date();
  const time = d.getHours();
  if (time < 10) {
    text = `Good Morning!`;
  } else if (time < 18) {
    text = `Good Day!`;
  } else {
    text = `Good Evening!`;
  }
  document.getElementById("greeting").innerHTML = text;
}());

// Opens new browser windows
let myGitWindow;
let myLinkedinWindow;
function openGitWindow() {
  myGitWindow = window.open("https://github.com/jgab40", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=150,left=150,width=400,height=200");
}
function closeGitWindow() {
  myGitWindow.close();
}
function openLinkedinWindow() {
  myLinkedinWindow = window.open("https://www.linkedin.com/in/jgndongendeba/details/certifications/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=150,left=850,width=400,height=200");
}
function closeLinkedinWindow() {
  myLinkedinWindow.close();
}

// Navigate Between my skills catalog
let i = 0;
let x;
displaySkill(i);

function displaySkill(i) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      myLoadFunction(this, i);
    }
  };
  xmlhttp.open("GET", "skills_catalog.xml", true);
  xmlhttp.send();
}

function myLoadFunction(xml, i) {
  var xmlDoc = xml.responseXML;
  x = xmlDoc.getElementsByTagName("SKILL");
  document.getElementById("showSkill").innerHTML =
    "Skills covered: " +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "<br>Certifying organizations: " +
    x[i].getElementsByTagName("CERTIF")[0].childNodes[0].nodeValue +
    "<br>Year: " +
    x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
}

function next() {
  if (i < x.length - 1) {
    i++;
    displaySkill(i);
  }
}

function previous() {
  if (i > 0) {
    i--;
    displaySkill(i);

  }
}

