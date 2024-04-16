let timerId; // переменная, которая будет хранить ID таймера

const startButton = document.getElementById("start");
startButton.addEventListener("click", function () {
  // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ setInterval
  timerId = setInterval(updateClock, 1000); // запускаем  updateClock() каждую секунду
});

const stopButton = ДОКУМЕНТ.ГЕТэЛЕМЕНТбАЙаЙДИ(КАКОЙ - ТО);
stopButton.addEventListener("click", function () {
  // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ clearInterval
  clearInterval(timerId); // останавливаем таймер
});

function updateClock() {
  const clock = document.getElementById("clock");
  // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ new Date()
  const now = new Date(2024, 3, 16, 22, 04, 59);
  const hours = now.ДАЙчАСЫ();
  const minutes = now.ДАЙмИНУТЫ();
  const seconds = now.ДАЙсЕКУНДЫ();
  clock.textContent = hours + ":" + minutes + ":" + seconds;
}
