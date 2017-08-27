$("#upload-product").click(function(){
		$('.error-area').hide();
		$('.error-msg').hide();
		$('.success-msg').hide();
		$('.exists-msg').hide();
		
		var title = $('#pro-title').val();
		
		var obj = {};
		var errorshow = false;
		$(".add-product-main").find("input,select").each(function(){
			var values = $(this).val();
			if(values == ""){
				$('.error-area').show();
				$('.error-msg').show();
				$('.error-success').hide();
				errorshow = true;
				return false;
			}
			var index = $(this).attr("data-id");
		    obj[index] = values;
			
			if(errorshow)
				return false;
		});
			
		if(errorshow)
			return false;

		var ref = "saveproduct";
		$.ajax({
			type: "POST",
		    url: "includes/save.php",
		    data: {
		        mode: "product",
		        ref: ref,
				product: JSON.stringify(obj),
		    	title: title
		    }
		}).done(function(res){
			if(res == "inserted"){
				$('.error-area').show();
				$('.success-msg').show();
				$('.error-msg').hide();
				$('.exists-msg').hide();
				$('.reset-product').val('');
			}else if(res == "exists"){
				$('.error-area').show();
				$('.success-msg').hide();
				$('.error-msg').hide();
				$('.exists-msg').show();
				$('#pro-title').val('').focus();
			}
		});

	});

	function numbersonly(myfield, e, dec){
		var number = myfield.value.split('.');
		var charCode = (e.which) ? e.which : e.keyCode;

		if(number[1] != undefined)
			if((number[1].length > 1))
		    return false;

		if(number[0] != undefined)
			if((number[0].length > 15))
		    return false;

		if(charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
			return false;
		return true;
	}






$(document).ready(function(){
		var ref = "fetchproduct";
		$.ajax({
			type: "POST",
		    url: "includes/save.php",
		    data: {
		        mode: "product",
		        ref: ref,
		    }
		}).done(function(res){
			if(res.length != 0){
				$("#cart-empty").hide();
				var all_pro = res.split("\"\"");
				for(var i=0; i<all_pro.length; i++){
					if(i == 0){
						var pro_1 = all_pro[i].slice(1);
						if(i == all_pro.length - 1){
							var pro_1 = pro_1.substring(0,pro_1.length - 1);
						}
						var product = pro_1.replace(/\\/g,"");
						var prod = JSON.parse(product);
						$("#products-area").append("<div class='row pro-row'><div class='col-md-3 text-center' id='pro_"+i+"' style='box-shadow:0px 0px 1px 1px #e0e0e0;background-color:white'><div class='row' style='margin-top:20px'><div class='col-md-12'><div class='container' style='width:270px;height:200px'><img src='products/"+prod.image+"' width='100%' height='100%' style='padding-top:20px;padding-bottom:20px'/></div></div></div><div class='row' style='box-shadow:0px 0px 0px 1px #e0e0e0'><div class='col-md-6'><h2>Product Title :</h2></div><div class='col-md-6'><center><h2>"+prod.title+"</h2></center></div></div><div class='row' style='box-shadow:0px 1px 0px 0px #e0e0e0'><div class='col-md-6'><h2>Product Size :</h2></div><div class='col-md-6'><center><h2>"+prod.size+"</h2></center></div></div><div class='row' style='box-shadow:0px 1px 0px 0px #e0e0e0'><div class='col-md-6'><h2>Product Price :</h2></div><div class='col-md-6'><center><h2>"+prod.price+"</h2></center></div></div><div class='row' style='box-shadow:0px 1px 0px 0px #e0e0e0'><div class='col-md-6'><h2>Product MRP :</h2></div><div class='col-md-6'><center><h2>"+prod.mrp+"</h2></center></div></div><div class='row' style='box-shadow:0px 1px 0px 0px #e0e0e0'><div class='col-md-6'><h2>Delete Product :</h2></div><div class='col-md-6'><center><h2><i class='fa fa-trash' aria-hidden='true' style='color:red;cursor:pointer' id='"+i+"' onclick='delete_pro(\""+prod.title+"\")'></i></h2></center></div></div></div></div>");
					}else if( (i > 0) && (i!= (all_pro.length - 1) )){
						var pro_2 = all_pro[i].substring(0,all_pro[i].length);
						var product = pro_2.replace(/\\/g,"");
						var prod = JSON.parse(product);
						$(".pro-row").append("<div class='col-md-3 text-center' id='pro_"+i+"' style='box-shadow:0px 0px 1px 1px #e0e0e0;background-color:white'><div class='row' style='margin-top:20px'><div class='col-md-12'><div class='container' style='width:270px;height:200px'><img src='products/"+prod.image+"' width='100%' height='100%' style='padding-top:20px;padding-bottom:20px'/></div></div></div><div class='row' style='box-shadow:0px 0px 0px 1px #e0e0e0'><div class='col-md-6'><h2>Product Title :</h2></div><div class='col-md-6'><center><h2>"+prod.title+"</h2></center></div></div><div class='row' style='box-shadow:0px 1px 0px 0px #e0e0e0'><div class='col-md-6'><h2>Product Size :</h2></div><div class='col-md-6'><center><h2>"+prod.size+"</h2></center></div></div><div class='row' style='box-shadow:0px 1px 0px 0px #e0e0e0'><div class='col-md-6'><h2>Product Price :</h2></div><div class='col-md-6'><center><h2>"+prod.price+"</h2></center></div></div><div class='row' style='box-shadow:0px 1px 0px 0px #e0e0e0'><div class='col-md-6'><h2>Product MRP :</h2></div><div class='col-md-6'><center><h2>"+prod.mrp+"</h2></center></div></div><div class='row' style='box-shadow:0px 1px 0px 0px #e0e0e0'><div class='col-md-6'><h2>Delete Product :</h2></div><div class='col-md-6'><center><h2><i class='fa fa-trash' aria-hidden='true' style='color:red;cursor:pointer' id='"+i+"' onclick='delete_pro(\""+prod.title+"\")'></i></h2></center></div></div></div>");
					}else if(i == (all_pro.length - 1)){
						var pro_3 = all_pro[i].substring(0,all_pro[i].length - 1);
						var product = pro_3.replace(/\\/g,"");
						var prod = JSON.parse(product);
						$(".pro-row").append("<div class='col-md-3 text-center' id='pro_"+i+"' style='box-shadow:0px 0px 1px 1px #e0e0e0;background-color:white'><div class='row' style='margin-top:20px'><div class='col-md-12'><div class='container' style='width:270px;height:200px'><img src='products/"+prod.image+"' width='100%' height='100%' style='padding-top:20px;padding-bottom:20px'/></div></div></div><div class='row' style='box-shadow:0px 0px 0px 1px #e0e0e0'><div class='col-md-6'><h2>Product Title :</h2></div><div class='col-md-6'><center><h2>"+prod.title+"</h2></center></div></div><div class='row' style='box-shadow:0px 1px 0px 0px #e0e0e0'><div class='col-md-6'><h2>Product Size :</h2></div><div class='col-md-6'><center><h2>"+prod.size+"</h2></center></div></div><div class='row' style='box-shadow:0px 1px 0px 0px #e0e0e0'><div class='col-md-6'><h2>Product Price :</h2></div><div class='col-md-6'><center><h2>"+prod.price+"</h2></center></div></div><div class='row' style='box-shadow:0px 1px 0px 0px #e0e0e0'><div class='col-md-6'><h2>Product MRP :</h2></div><div class='col-md-6'><center><h2>"+prod.mrp+"</h2></center></div></div><div class='row' style='box-shadow:0px 1px 0px 0px #e0e0e0'><div class='col-md-6'><h2>Delete Product :</h2></div><div class='col-md-6'><center><h2><i class='fa fa-trash' aria-hidden='true' style='color:red;cursor:pointer' id='"+i+"' onclick='delete_pro(\""+prod.title+"\")'></i></h2></center></div></div></div>");
					}
				}
			}else{
				$("#cart-empty").show();	
			}
		});		
	});	


	function delete_pro(title){
		var ref = "deleteproduct";
		$.ajax({
			type: "POST",
		    url: "includes/save.php",
		    data: {
		        mode: "product",
		        ref: ref,
		    	title: title
		    }
		}).done(function(res){
			if(res == "product_deleted"){
				window.location.href="cart.php";
			}
		});
	}