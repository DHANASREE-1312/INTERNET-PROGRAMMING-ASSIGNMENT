$(document).ready(function () {
    let score = 0;
    let isGameRunning = false;
    let gameInterval;
  
    // Move the object to a random position when clicked
    $('#moving-object').click(function () {
      if (!isGameRunning) return;
      
      score += 1;
      $('#score').text('Score: ' + score);
  
      moveObject();
    });
  
    // Start the game
    $('#start-game').click(function () {
      if (!isGameRunning) {
        score = 0;
        $('#score').text('Score: ' + score);
        isGameRunning = true;
        moveObject();
        gameInterval = setInterval(moveObject, 1000); // Move object every second
      }
    });
  
    // End the game
    $('#end-game').click(function () {
      clearInterval(gameInterval);
      isGameRunning = false;
      $('#score').text('Game Over! Final Score: ' + score);
    });
  
    // Function to move the object to a random position
    function moveObject() {
      const gameArea = $('#game-area');
      const movingObject = $('#moving-object');
      
      const gameAreaWidth = gameArea.width();
      const gameAreaHeight = gameArea.height();
      const randomX = Math.floor(Math.random() * (gameAreaWidth - movingObject.width()));
      const randomY = Math.floor(Math.random() * (gameAreaHeight - movingObject.height()));
  
      movingObject.css({ top: randomY + 'px', left: randomX + 'px' });
    }
  });
  