<?php include 'includes/header.php'; ?>
	<div class="container" style="margin-top:60px">
		<center>
			<h1><center><i class="fa fa-cart-plus" aria-hidden="true"></i> &nbspAdd Product</center></h1>
		</center>
	</div>
	<div class="container add-product-main">
		<div class="row error-area" style="margin-top:10px;margin-bottom:-30px;display: none">
			<div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 success-msg" style="display:none">
			    <center><h2 style="color:green">Product Successfully Saved In Cart</h2></center>
			</div>
			<div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 error-msg" style="display:none">
			    <center><h2 style="color:red">Please Fill Out All the Fields*</h2></center>
			</div>
			<div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 exists-msg" style="display:none">
			    <center><h2 style="color:red">Product Already Exists</h2></center>
			</div>
		</div>
		<div class="row first-pro">
			<div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
			    <div class="form-group">
			      <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
			        <input type="text" class="form-control reset-product" id="pro-title" placeholder="Product Title" data-id="title">
			      </div>
			    </div>
			</div>    
		</div>
		<div class="row mar-product-up">
			<div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
			    <div class="form-group">
			      <div class="col-lg-12">
			      	<select class="form-control reset-product" id="pro-size" data-id="size">
	      	          	<option value="">Product Size</option>
	      	          	<option value="S">Small</option>
	      	          	<option value="M">Medium</option>
	      	          	<option value="L">Large</option>
			      	</select>
			      </div>
			    </div>
			</div>    
		</div>
		<div class="row mar-product-up">
			<div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
			    <div class="form-group">
			      <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
			        <input type="text" class="form-control reset-product" id="pro-price" placeholder="Product Price" data-id="price" onkeypress="return numbersonly(this,event)">
			      </div>
			    </div>
			</div>    
		</div>
		<div class="row mar-product-up">
			<div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
			    <div class="form-group">
			      <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
			        <input type="text" class="form-control reset-product" id="pro-mrp" placeholder="Product MRP" data-id="mrp" onkeypress="return numbersonly(this,event)">
			      </div>
			    </div>
			</div>    
		</div>
		<div class="row mar-product-up">
			<div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
				<div class="form-group">
					<div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
						<input type="text" class="form-control reset-product" id="pro-image" placeholder="Product Image Name / Path eg. imagename.jpg" data-id="image">
					</div>
				</div>
			</div>
		</div>
		<div class="row mar-product-down">
			<div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
				<center>
					<a href="cart.php">
						<button class="btn btn-primary" id="view-cart">
							View Cart
						</button>
					</a>	
					<button class="btn btn-primary" id="upload-product">
						Add Product
					</button>
				</center>
			</div>
		</div>
	</div>

<?php include 'includes/footer.php'; ?>
