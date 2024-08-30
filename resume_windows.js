// Opens new browser windows
let myGitWindow;
let myLinkedinWindow;
function openGitWindow() {
  myGitWindow = window.open(
    "https://github.com/jgab40",
    "_blank",
    "toolbar=yes,scrollbars=yes,resizable=yes,top=150,left=150,width=400,height=200"
  );
}
function closeGitWindow() {
  myGitWindow.close();
}
function openLinkedinWindow() {
  myLinkedinWindow = window.open(
    "https://www.linkedin.com/in/jgndongendeba/details/certifications/",
    "_blank",
    "toolbar=yes,scrollbars=yes,resizable=yes,top=150,left=850,width=400,height=200"
  );
}
function closeLinkedinWindow() {
  myLinkedinWindow.close();
}
