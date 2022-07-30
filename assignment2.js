//Assignment --- Create a div that covers half the screen and when clicked becomes full screen and changes color.

function clicked() {
  document.querySelector("#box").style.height = "100%";
  document.querySelector("#box").style.width = "100%";
  document.querySelector("#box").style.position = "absolute";
  document.querySelector("#box").style.backgroundColor = "red";
}
