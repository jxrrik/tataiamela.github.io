function startCelebration() {
  // Mostra a dançarina
  document.getElementById("dancer").style.display = "block";

  // Toca a música
  var music = document.getElementById("music");
  music.play().catch(function (error) {
    console.log("Erro ao reproduzir a música:", error);
  });

  // Inicia a animação de confetes
  var duration = 5 * 1000; // 5 segundos
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // Confetes saindo de diferentes pontos
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0, 1), y: Math.random() - 0.2 },
      })
    );
  }, 250);
}
