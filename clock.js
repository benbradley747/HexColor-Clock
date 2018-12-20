//Hexadecimal Color Clock
//Author: Benjamin Bradley 2018
var clock = document.getElementById("clock");
var hexColor = document.getElementById("hex-color");

function renderTime() {
  var date = new Date();
  var h = (date.getHours() % 12).toString(); // 0 - 12
  var m = date.getMinutes().toString(); // 0 - 59
  var s = date.getSeconds().toString(); // 0 - 59
  
  if(m.length < 2) {
    m = "0" + m;
  }

  if(s.length < 2) {
    s = "0" + s;
  }

  //decides whether or not it is AM or PM
  var session = "AM";
  if(date.getHours() > 12) {
    session = "PM";
  }

  var hexColorValue = '#' + date.getHours() + m + s;
  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("clockDisplay").innerText = time;
  document.getElementById("clockDisplay").textContent = time;
  hexColor.textContent = hexColorValue;
  document.body.style.backgroundColor = hexColorValue;
}

//showTime();
setInterval(renderTime, 1000);
