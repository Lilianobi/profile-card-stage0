function updateTime() {
  const timeElement = document.getElementById("time");
  const now = Date.now(); 
  timeElement.textContent = now;
}


updateTime();
setInterval(updateTime, 1);

