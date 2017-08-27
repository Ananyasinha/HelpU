<?php 
	$conn = new MySQLi('localhost','root','','helpu');
	if ($_POST['mode'] == "product") {
	    $ref = $_POST['ref'];
	    switch ($ref) {
	        case 'saveproduct' :
	        	$title = $_POST['title'];
	        	$product = $_POST['product'];
	        	
	        	$select_title = "SELECT * FROM `products` WHERE title='$title'";
	        	$selected = $conn->query($select_title);
	        	if($selected->num_rows > 0){
	        		echo "exists";
	        	}else{
		        	$insert_product = "INSERT INTO `products` VALUES ('','$title','$product',now())";
		        	$inserted = $conn->query($insert_product);
		        	if($inserted){
		        		echo "inserted";
		        	}
	        	}
	        break;

	        case 'fetchproduct' :
	        	$select_product = "SELECT * FROM `products`";
	        	$selected = $conn->query($select_product);
	        	while($row = $selected->fetch_assoc()){
	        		$product = $row['product'];
	        		echo json_encode($product);
	        	}
	        break;

	        case 'deleteproduct' :
	        	$title = $_POST['title'];
	        	$delete_pro = "DELETE FROM `products` WHERE title='$title'";
				$deleted = $conn->query($delete_pro);

				if($deleted){
					echo "product_deleted";	
				}
	        break;
	    }    
	}
?>