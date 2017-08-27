<!DOCTYPE html>
<html>
<head>
	<title> 
	<?php 
		if ($_SERVER['REQUEST_URI']=='/cart.php') {
			echo "cart |";
		}else{
			echo "Add Product |";
		} 
	?>
	HelpU</title>
	<link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css" />
	<link rel="stylesheet" type="text/css" href="assets/fonts/roboto.css"/>
	<link rel="shortcut icon" type="image/x-icon" href="assets/images/favicon.ico" />
	<link rel="stylesheet" type="text/css" href="assets/css/style.css" />
	<link rel="stylesheet" type="text/css" href="assets/font-awesome/css/font-awesome.min.css">
</head>
<body>
	<nav class="navbar navbar-default top-bar navbar-fixed-top">
	  <div class="container-fluid">
	    <div class="navbar-header">
	      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
	        <span class="sr-only">Toggle navigation</span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	      </button>
	      <a class="navbar-brand" href="index.php">
	      	<img class="helpu-logo" src="assets/images/logo.png"/>
	      </a>
	    </div>
	  </div>
	</nav>
</body>