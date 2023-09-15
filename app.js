const min = document.querySelector(".min .numb");
const sec = document.querySelector(".sec .numb");
const mili = document.querySelector(".mili .numb");
var timer = setInterval(()=>{
  var currentDate = new Date().getTime();
  var launchDate = new Date('sept 15, 2023 16:07:00').getTime();
  var duration = launchDate - currentDate;

  var minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((duration % (1000 * 60)) / 1000);
  var milisec = Math.floor((duration % 1000)/10);
//   console.log(mili);

  min.innerHTML = minutes;
  sec.innerHTML = seconds;
  mili.innerHTML = milisec;

  if(minutes < 10){
    min.innerHTML = '0' + minutes;
  }
  if(seconds < 10){
    sec.innerHTML = '0' + seconds;
  }
  if(milisec < 10){
    mili.innerHTML = '0' + milisec;
  }
  if(duration < 0){
    clearInterval(timer);
  }
}, 10);

function start(){
    window.open("../../game/index.html", "_blank");
}

function checkCode() {
    console.log(codeInput.value);
if (codeInput.value === 'jgiah') { 
    alert('Passcode matched');
clearInterval(timer);
min.innerHTML = minutes;
sec.innerHTML = seconds;

} else {
alert('Incorrect code. Try again.');
}
}
