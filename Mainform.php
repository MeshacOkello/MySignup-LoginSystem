<?php
require_once 'Plainphp/config_session.php';
require_once 'Plainphp/signup_view.php';
require_once 'Plainphp/login_view.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="main.css">
  <link rel="stylesheet" href="reset.css">
</head>

<body>

  <h3>
    <?php
    output_username();
    ?>
  </h3>

  <?php
    if (!isset($_SESSION["user_id"])) { ?>
      <h3>Login</h3>

      <form action="Plainphp/login.php" method="post"><br>
        <input type="text" name="username" placeholder="Username"><br>
        <input type="password" name="pwd" placeholder="Password"><br><br>
        <button>Login</button>
      </form>
  <?php } ?>

  <?php
  check_login_errors();
  ?>

  <h3>Signup</h3>

  <form action="Plainphp/signup.php" method="post">
    <?php
    signup_inputs();
    ?>
    <button>Signup</button>
  </form>

  <?php
  check_signup_errors();
  ?>

<h3>Logout</h3>

<form action="Plainphp/logout.php" method="post">
  <button>Logout</button>
</form>

</body>

</html>

