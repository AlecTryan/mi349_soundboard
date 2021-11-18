var buttonFirst = document.getElementById('my-first-button')
var buttonSecond = document.getElementById('my-second-button')
var buttonThird = document.getElementById('my-third-button')

const clickAlarmSound = document.getElementById('alarmLong')
const hoverAlarmSound = document.getElementById('alarmShort')
const clickBoxingSound = document.getElementById('boxingLong')
const hoverBoxingSound = document.getElementById('boxingShort')
const clickCheersSound = document.getElementById('cheersLong')
const hoverCheersSound = document.getElementById('cheersShort')

buttonFirst.addEventListener('click', function () {
  clickAlarmSound.play();
})

buttonSecond.addEventListener('click', function () {
  clickCheersSound.play();
})

buttonThird.addEventListener('click', function () {
  clickBoxingSound.play();
})
