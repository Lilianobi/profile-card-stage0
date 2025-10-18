function updateTime() {
  const timeElement = document.getElementById("time");
  const now = Date.now();
  timeElements.forEach(el => {
    el.textContent = now;
  });
}

updateTime();
setInterval(updateTime, 1000);

