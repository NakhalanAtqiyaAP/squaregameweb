<?php
// Check if the user submitted the login form
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve the form data
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Validate the username and password (you can implement your own validation logic here)
    if ($username === "akucintasekolah" && $password === "wikrama123") {
        // Successful login, redirect to a protected page
        header("Location: beranda.php");
        exit();
    } else {
        // Invalid username or password
        $error = "Kesalahan pada username atau password";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SquareGame</title>
    <link rel="stylesheet" href="stye/style2.css">
</head>
<body>
    <video autoplay muted loop id="bgvidio">
        <source src="assets/vidio.mp4" type="video/mp4">
      </video>
    <nav>
    <img src="assets/SquareGamelogo.png" alt="">
    </nav>
<div class="log">
    <form action="" method="post">
        <?php
        if(isset($eror) ):?>
        <div class="eror">
        <p>Username/Password salah</p>
    </div>
        <?php endif?>
        <h4><a href="UPW.php">Click untuk mendapatkan Username dan Password</a></h4>
        <br>
 <input type="text" name="username" class="from-control" placeholder="Username">
 <br>
 <input type="password" name="password" class="from-control" placeholder="Password">
<div class="kirim"> <br>
    <button type="sumbit" name="sumbit">Login</button>
</div>
</form>
</div>
</body>
</html>