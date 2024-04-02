let countdown = document.getElementById("countdown");
console.log(countdown);

let countFuncDown = function () {
  let currentTime = parseFloat(countdown.textContent);

  if (currentTime > 0) {
    countdown.textContent = currentTime - 1;
  } else {
    window.clearInterval(timer);
  }
};

let timer = window.setInterval(countFuncDown, 1000);

setTimeout(function(){
	window.location.href = 'index.html';
  }, 21 * 1000);