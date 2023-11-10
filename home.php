<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SquareFighting</title>
    <link rel="stylesheet" href="stye/style.css">
</head>
<body>
<audio controls autoplay
      src="audio/music2.mp3"></audio>
<div class="all">
        <div class="layar">
    <nav>
    <img src="assets/SquareGamelogo.png" alt="">
    </nav>
</div>
</div>
    <div class="layar1">
        <div class="layar2">  
        <a href="home.php" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Refresh</a>        
         <!--Player 1-->
         <div class="attackk">
            <div class="player1-health"></div>
            <div id="health1" class="attack22"></div>
    </div>
        <!--timer-->
        <div id="timer" class="timer"></div>
        <!--Player 1-->
            <div class="attack">
            <div class="player1-health"></div>
            <div id="health2" class="attack2"></div>
    </div>
    </div>
    <div id="displayText" class="gameover"></div>
  <canvas></canvas>
</div>
<br>
    <script src="JS/ground.js"></script> 
    <script src="JS/player2.js"></script>
    <script src="JS/player1.js"></script>
    <script src="JS/JS.js"></script>
</body>
</html>   
