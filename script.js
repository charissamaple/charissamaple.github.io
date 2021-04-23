// HOME PAGE HOVER
document.getElementById("zone").onmouseover = function () { bgZone(); };
document.getElementById("zone").onmouseout = function () { mouseOut(); };

document.getElementById("verdant").onmouseover = function () { bgVerdant(); };
document.getElementById("verdant").onmouseout = function () { mouseOut(); };

document.getElementById("strvnger").onmouseover = function () { bgStrvnger(); };
document.getElementById("strvnger").onmouseout = function () { mouseOut(); };

document.getElementById("tasty").onmouseover = function () { bgTasty(); };
document.getElementById("tasty").onmouseout = function () { mouseOut(); };

document.getElementById("esports").onmouseover = function () { bgEsports(); };
document.getElementById("esports").onmouseout = function () { mouseOut(); };


function bgZone() {
  document.getElementById("preview-image").style.backgroundImage = 
    "url(images/IMG_5876.JPG)";
}
function bgVerdant() {
  document.getElementById("preview-image").style.backgroundImage = 
    "url(images/IMG_5876.JPG)";
}
function bgStrvnger() {
  document.getElementById("preview-image").style.backgroundImage =
    "url(images/home/strvnger-cover.png)";
}
function bgTasty() {
  document.getElementById("preview-image").style.backgroundImage =
    "url(images/IMG_5876.JPG)";
}
function bgEsports() {
  document.getElementById("preview-image").style.backgroundImage =
    "url(images/IMG_5876.JPG)";
}

function mouseOut() {
  document.getElementById("preview-image").style.backgroundImage = "";
}
