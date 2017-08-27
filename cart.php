<?php include 'includes/header.php'; ?>
<!DOCTYPE html>
<html>
<head>
	<title>Cart | HelpU</title>
</head>
<body>
	<div class="container" style="margin-top:60px">
		<center><h1><i class="fa fa-shopping-cart" aria-hidden="true"></i> &nbspView Cart</h1></center>
	</div>
	<div class="container" id="products-area"></div>

	<div class="container" id="cart-empty" style="display:none">
		<div class="row">
			<div class="col-md-12">
				<center>
					<img src="assets/images/empty-cart.png" width="200" height="200" />
				</center>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<center><h2>Cart is Empty</h2></center>
			</div>
		</div>
		<div class="row" style="margin-top:30px">
			<div class="col-md-12">
				<center>
					<a href="index.php">
						<button class="btn btn-primary">Add Product</button>
					</a>
				</center>
			</div>
		</div>
	</div>

</body>
</html>

<?php include 'includes/footer.php'; ?>
