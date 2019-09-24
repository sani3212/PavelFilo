<?php 
		session_start();
		require '../assets/database/conn.php';
		if (isset($_SESSION['logged_in'])) {
			header('location:../index.php');
		} 


		else {
			if (isset($_POST['username'], $_POST['password'])) {
			$username = $_POST['username'];
			$password = ($_POST['password']);
			
			if (empty($username) or empty($password)) {
				$error = 'all columns required';
			}
			else {
				$sql = "SELECT name,password FROM users WHERE name = '$username' and password = '$password'";
				$result = mysqli_query($connect, $sql);

				$num = mysqli_num_rows($result);
				if ($num == 1) {
					if ($username=='admin') {
					$_SESSION['logged_in_admin'] = true;
					$_SESSION['logged_in'] = true;
					} else {
						$_SESSION['logged_in'] = true;
				}
					$_SESSION['username'] =$username;
					header('location:../index.php');
				} else 
					$error = 'incorrect details';


			}
		}


		?>
		<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title><?php echo $page_name ?> // Pavel Fiľo</title>
		<link rel="shortcut icon" href="../assets/img/logo.png" />
		<link href="https://fonts.googleapis.com/css?family=EB+Garamond" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Raleway:300,400,700" rel="stylesheet">
		<link rel="stylesheet" href="../assets/css/font-awesome.min.css">
		<link rel="stylesheet" href="../assets/css/header.css">
		<link rel="stylesheet" href="../assets/css/content.css">
	</head>
	<body>
		<div id="top"></div>
		<header>
			<a id="menuButton" href="#">
				<i class="fa fa-bars"></i>
				<span>Menu</span>
			</a>
			<div>
				<img src="../assets/img/logo.png" width="35" alt="logo">
				<h2>&nbspPavel&nbsp&nbsp Fiľo</h2>
			</div>
	

		</header>
		<nav class="toggleNav">
			<ul>
				<li><a href="../index.php">Home</a></li>
				<li><a href="../gallery.php">Gallery</a></li>
				<li><a href="../about.php">About</a></li>
				<li><a href="../contact.php">Contact</a></li>
			</ul>
		</nav>

		<div class="contact">
			<form class="login form" action="index.php" method="post">
			<?php if(isset($error)) { ?>
				<p style="color:#aa0000;"><?php echo($error) ?></p>	
			<?php } ?>
			<p>username</p>
				<input class="email" type="text" name="username" placeholder="username">
				<p>password</p>
				<input class="email" type="password" name="password" placeholder="password">
				<p></p>
				<input class="button2" style="width: 318px;"type="submit" value="login">
			</form>
		</div>

		<div class="pre-footer">
				<div class="links">
					<a href="https://www.facebook.com/pavel.p.filo.1" target="_blank"><i class="fa fa-facebook-square"></i></a>					
					<a href="https://www.instagram.com/palo_filo/" target="_blank"><i class="fa fa-instagram"></i></a>
					<a href="https://twitter.com/sani3212" target="_blank"><i class="fa fa-twitter"></i></a>
					<a href="https://plus.google.com/u/0/107145111532613023320" target="_blank"><i class="fa fa-google-plus"></i></a>
				</div>
				<form class="email-form" action="	" method="post">
					<p>Subscribe to my Newsletter</p>
					<input class="email" type="email" >
					<input class="button" type="submit" value="Sign me up">
				</form>
			</div>
			<footer>
				<nav id="not-fixed">
					<ul>
						<li><a href="../index.php">Home</a></li>
						<li><a href="../gallery.php">Gallery</a></li>
				<!--		<li><a href="blog.php">Blog</a></li>
						<li><a href="eshop.php">eShop</a></li> -->
						<li><a href="../about.php">About</a></li>
						<li><a href="../contact.php">Contact</a></li>
					</ul>
				</nav>

				<div class="scrolltop">
					<p class="nadpisabout"><a href="#">Scroll to top</a></p>	
				</div>

				
				<p class="copyright">	&copy; Pavel Fiľo 2017 / All rights reserved</p>
			</footer>
	
		</div>
			<div class="aboutpavel" style="display: none;"></div>



		<!--script-->
		<script src="../assets/jq/jquery-3.1.1.min.js"></script>	
		<script src="../assets/jq/script.js"></script>

	</body>
</html>


	
<?php 
}
	

 ?>


