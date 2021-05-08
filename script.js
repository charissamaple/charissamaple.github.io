// HOME PAGE HOVER
document.getElementById("zone").onmouseover = function () { bgZone(); };
document.getElementById("zone").onmouseout = function () { mouseOut(); };

document.getElementById("verdant").onmouseover = function () { bgVerdant(); };
document.getElementById("verdant").onmouseout = function () { mouseOut(); };

document.getElementById("strvnger").onmouseover = function () { bgStrvnger(); };
document.getElementById("strvnger").onmouseout = function () { mouseOut(); };

document.getElementById("tasty").onmouseover = function () { bgTasty(); };
document.getElementById("tasty").onmouseout = function () { mouseOut(); };

// document.getElementById("esports").onmouseover = function () { bgEsports(); };
// document.getElementById("esports").onmouseout = function () { mouseOut(); };


function bgZone() {
  document.getElementById("zone-bg").style.opacity = "1";
}
function bgVerdant() {
  document.getElementById("verdant-bg").style.opacity = "1";
}
function bgStrvnger() {
  document.getElementById("stranger-bg").style.opacity = "1";
}
function bgTasty() {
  document.getElementById("tasty-bg").style.opacity = "1";
}
// function bgEsports() {
//   document.getElementById("zone-bg").style.display = "block";
// }

function mouseOut() {
  document.getElementById("zone-bg").style.opacity = "0";
  document.getElementById("verdant-bg").style.opacity = "0";
  document.getElementById("stranger-bg").style.opacity = "0";
  document.getElementById("tasty-bg").style.opacity = "0";
}
