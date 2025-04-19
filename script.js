let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
const display = document.getElementById("time-display");
const lapsList = document.getElementById("laps");

function updateTime() {
  const time = Date.now() - startTime + elapsedTime;
  const hrs = Math.floor(time / 3600000);
  const mins = Math.floor((time % 3600000) / 60000);
  const secs = Math.floor((time % 60000) / 1000);

  display.textContent = `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

document.getElementById("start").addEventListener("click", () => {
  if (!timerInterval) {
    startTime = Date.now();
    timerInterval = setInterval(updateTime, 1000);
  }
});

document.getElementById("pause").addEventListener("click", () => {
  if (timerInterval) {
    clearInterval(timerInterval);
    elapsedTime += Date.now() - startTime;
    timerInterval = null;
  }
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(timerInterval);
  startTime = 0;
  elapsedTime = 0;
  timerInterval = null;
  display.textContent = "00:00:00";
  lapsList.innerHTML = "";
});

document.getElementById("lap").addEventListener("click", () => {
  if (display.textContent !== "00:00:00") {
    const li = document.createElement("li");
    li.textContent = display.textContent;
    lapsList.appendChild(li);
  }
});
