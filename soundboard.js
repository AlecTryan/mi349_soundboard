var buttonFirst = document.getElementById('my-first-button')
const clickAlarmSound = document.getElementById('alarmLong')
const hoverAlarmSound = document.getElementById('alarmShort')
buttonFirst.addEventListener('click', function () {
  clickAlarmSound.play();
});

var buttonSecond = document.getElementById('my-second-button')
const clickCheersSound = document.getElementById('cheersLong')
const hoverCheersSound = document.getElementById('cheersShort')
buttonSecond.addEventListener('click', function () {
  clickCheersSound.play();
});

var buttonThird = document.getElementById('my-third-button')
const clickBoxingSound = document.getElementById('boxingLong')
const hoverBoxingSound = document.getElementById('boxingShort')
buttonThird.addEventListener('click', function () {
  clickBoxingSound.play();
});
