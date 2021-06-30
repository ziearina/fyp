document.querySelector('.btnAdd').onclick = function() {

    var productid = document.querySelector('.productID').value;
    var productname = document.querySelector('.product_name').value;

    var productcategory = document.querySelector('.product_category').value;
    var select = productcategory.options[productcategory.selectedIndex];

    var productprice = document.querySelector('.product_price').value;
    var productquantity = document.querySelector('.product_quantity').value;

    if (productid + productname + category + productprice + productquantity == ""){
        alert("The required fields are empty. Please fill in to add new product.");
        return false;
    }
    
    // } else {
    //     alert("Product Succesfully added!");
    //     return true;
    // }

    if (productid == "") {
        alert("Please enter the product ID.");
        return false;
    } 

    if (productname == "") {
        alert("Please enter the product name.");
        return false;
    }

    if (productprice == "") {
        alert("Please enter the product price.");
        return false;
    }

    if (productquantity == "") {
        alert("Please enter the product quantity.");
        return false;
    }

    if (select = 0) {
        productid = "P";
    }

    // /^[+-]?([1-9]+\.?[0-9]*|\.[0-9]+)$/
    // ^[1-9]\d*(\.\d+)?$
    //^\d+(\.\d{1,2})?$
    var decimal = '^[1-9]\d*(\.\d+)?$'; 
    if (!productprice.match(decimal)) {
        alert("Please enter the product price in decimal value only.");
        return false;
    }

    var number = '^(?:[1-9]|[1-9][0-9]|[1-9][0-9][0-9]|100[0])$';
    if (!productquantity.match(number)) {
        alert("Please enter product quantity in numeric value within the range of 1-1000 only.");
        return false;
    }
    
}
