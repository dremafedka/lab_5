document.addEventListener("DOMContentLoaded", function() {
  const setAlarmButton = document.getElementById("set-alarm");
  const clearAlarmButton = document.getElementById("clear-alarm");
  const alarmMessage = document.getElementById("alarm-message");

  let alarmTimeout;

  setAlarmButton.addEventListener("click", function() {
    const alarmDate = document.getElementById("alarm-date").value;
    const alarmTime = document.getElementById("alarm-time").value;

    if (!alarmDate || !alarmTime) {
      alert("Будь ласка, введіть дату та час.");
      return;
    }

    const alarmDateTime = new Date(`${alarmDate}T${alarmTime}`);
    const now = new Date();

    if (alarmDateTime <= now) {
      alert("Дата та час будильника повинні бути в майбутньому.");
      return;
    }

    const timeToAlarm = alarmDateTime - now;
    alarmTimeout = setTimeout(() => {
      alarmMessage.classList.remove("hidden");
    }, timeToAlarm);

    alert("Будильник встановлено.");
  });

  clearAlarmButton.addEventListener("click", function() {
    if (alarmTimeout) {
      clearTimeout(alarmTimeout);
      alarmMessage.classList.add("hidden");
      alert("Будильник вимкнено.");
    }
  });
});
