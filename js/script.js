window.onload = () => {
  const startButton = document.querySelector('#start-button');
  const restartButton = document.querySelector('#restart-button');
  let game;

  startButton.addEventListener('click', ()=> {
    startGame();
  });
  restartButton.addEventListener('click', () => {
    restartGame();
  })

  function startGame() {
    console.log("start game");
    game = new Game();
    game.start();
  }

  function handleKeyDown () {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];
    
    if (possibleKeystrokes.includes(key)) {
        event.preventDefault();
    
        switch (key) {
          case "ArrowLeft":
              game.player.directionX = -3;
              break;
          case "ArrowUp":
              game.player.directionY = -3;
              break;
          case "ArrowRight":
              game.player.directionX = 3;
              break;
          case "ArrowDown":
              game.player.directionY = 3;
              break;
      }
    }
  };

  function restartGame() {
    location.reload();
  }

  window.addEventListener('keydown', handleKeyDown);
};

