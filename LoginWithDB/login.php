<?php
include("loginD.php");
?>

<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Login</title>
<link rel = "stylesheet" href = "style1.css">
</head>
<body>

<div class="login">
<h1 align="center">Login</h1>
<form action="" method="post" style="text-align:center;">
	<input type="text" placeholder="Username" id="username" name="user"><br/><br/>
	<input type="password" placeholder="Password" id="password" name="pass"><br/><br/>
	<input type="submit" value="Login" name="submit">
<!-- Error Message -->
<span><?php echo $error; ?></span>
	<div id = "display"> 
		<label><span id="results"></span id></label>
    </div>
</form>
</div>
<script src = "valid.js"></script>
</body>
</html>