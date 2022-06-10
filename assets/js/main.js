function timer() {
  function getTimeFromSeconds(seconds) {
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  let timer = 0;
  let seconds = 0;

  function startTimer() {
    timer = setInterval(function () {
      seconds++;
      clock.innerHTML = getTimeFromSeconds(seconds);
    }, 1000);
  }

  const clock = document.querySelector('.timer');

  document.addEventListener('click', function (event) {
    const element = event.target;
    if (element.classList.contains('iniciar')) {
      clock.classList.remove('paused');
      clearInterval(timer);
      startTimer();
    }

    if (element.classList.contains('pausar')) {
      clearInterval(timer);
      clock.classList.add('paused');
    }

    if (element.classList.contains('zerar')) {
      clearInterval(timer);
      clock.innerHTML = '00:00:00';
      clock.classList.remove('paused');
      seconds = 0;
    }

    if (clock.classList.contains('paused')){
      document.querySelector('.container').style.boxShadow = "0.8rem 0.8rem #ED474A";
    }else{
      document.querySelector('.container').style.boxShadow = "0.8rem 0.8rem #067BC2";
    }
  });
}

timer();