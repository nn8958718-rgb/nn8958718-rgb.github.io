const screens = [...document.querySelectorAll('.screen')];
function showScreen(id) {
  screens.forEach(screen => screen.classList.toggle('active', screen.id === id));
}

// The glowing heart opens the birthday experience.
document.getElementById('open-heart').addEventListener('click', () => {
  showScreen('cake-screen');
});

// Either candle starts the birthday reveal; the cake is then completely gone.
document.querySelectorAll('.candle').forEach(candle => {
  candle.addEventListener('click', () => showScreen('celebration-screen'));
});

document.getElementById('to-letter').addEventListener('click', () => {
  showScreen('letter-screen');
});

document.getElementById('to-ending').addEventListener('click', () => {
  showScreen('ending-screen');
});

// The final tap ends the experience on the full-screen final message.
document.getElementById('final-candle').addEventListener('click', () => {
  showScreen('final-screen');
});
