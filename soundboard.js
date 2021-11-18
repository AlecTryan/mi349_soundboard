var buttonFirst = document.getElementById('my-first-button')
var buttonSecond = document.getElementById('my-second-button')
var buttonThird = document.getElementById('my-third-button')

let alarmElem = document.getElementById("alarm");
let cheersElem = document.getElementById("cheers");
let boxingElem = document.getElementById("boxing");

buttonFirst.addEventListener('click', function () {
  await alarmElem.play();
})

buttonSecond.addEventListener('click', function () {
  await cheersElem.play();
})

buttonThird.addEventListener('click', function () {
  await boxingElem.play();
})
