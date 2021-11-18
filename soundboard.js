var buttonFirst = document.getElementById('my-first-button')
var buttonSecond = document.getElementById('my-second-button')
var buttonThird = document.getElementById('my-third-button')

const clickAlarmSound = new Audio('air_raid.wav');
const hoverAlarmSound = new Audio('alarm_beep.wav');
const clickBoxingSound = new Audio('boxing_bell.wav');
const hoverBoxingSound = new Audio('boxing_bell_multiple.wav');
const clickCheersSound = new Audio('cheer_long.wav');
const hoverCheersSound = new Audio('cheering.wav');

buttonFirst.addEventListener('click', function () {
  await clickAlarmSound.play();
})

buttonSecond.addEventListener('click', function () {
  await clickCheersSound.play();
})

buttonThird.addEventListener('click', function () {
  await clickBoxingSound.play();
})
