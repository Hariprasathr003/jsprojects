const clock = document.getElementById("clock");

function currenttime() {
  const time = new Date();

  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  const ampm = hour >= 12 ? "PM" : "AM";

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  const ans = `${hour} : ${min} : ${sec} ${ampm}`;
  clock.innerHTML = ans;
}
currenttime();

setInterval(currenttime, 1000);
