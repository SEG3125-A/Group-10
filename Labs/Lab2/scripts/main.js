// products
const products = [
    { id: 'chicken', name: 'Chicken', price: 15.50, quantity: 0 },
    { id: 'avocado', name: 'Avocado', price: 3.25, quantity: 0 },
    { id: 'bread', name: 'Bread', price: 4.50, quantity: 0 },
  ];
let dietaryPreference = 'NONE';

function showProfile() {
    document.getElementById('Client').style.display = 'block';
    document.getElementById('Shop').style.display = 'none';
    document.getElementById('checkout').style.display = 'none';
    setButtonBackgroundColor('profileButton', "#c7c7c7");
}
function showProducts() {
    document.getElementById('Client').style.display = 'none';
    document.getElementById('Shop').style.display = 'block';
    document.getElementById('checkout').style.display = 'none';
    setButtonBackgroundColor('productsButton', "#c7c7c7");
}
function showCart() {
    document.getElementById('Client').style.display = 'none';
    document.getElementById('Shop').style.display = 'none';
    document.getElementById('checkout').style.display = 'block';
    setButtonBackgroundColor('cartButton', "#c7c7c7");
}

function setButtonBackgroundColor(buttonId, color) {
    // Reset background color for all buttons
    document.querySelectorAll('.topnav button').forEach(function(button) {
        button.style.backgroundColor = '#c8dcf1';
    });

    // Set background color for the clicked button
    document.getElementById(buttonId).style.backgroundColor = color;
}

window.onload = function() {
    showProfile();
};

// Updated dietary prefrence
function updateDietaryPreference(value) {
    var checkboxes = document.getElementsByName('Rest');
    // check if user is trying to uncheck everything and default to None
    var canContinue = false;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            canContinue = true; 
        }
    }

    if(!canContinue){
        dietaryPreference = 'NONE';
        document.getElementById('DietaryPref').innerText = 'have No Dietary Prefrence';
        checkboxes.forEach(function (checkbox) {
            if (checkbox.value !== 'None') {
                checkbox.checked = false;
            }else{ checkbox.checked = true;}
        });
    }
    else{
        // Logic for selecting dietary prefrence
        if(value === 'None'){
            checkboxes.forEach(function (checkbox) {
                if (checkbox.value !== 'None') {
                    checkbox.checked = false;
                }
            });
            document.getElementById('DietaryPref').innerText = 'have No Dietary Prefrence';
            dietaryPreference = 'NONE';
        }
        else{
            var GF = false;
            var Veg = false;
            checkboxes.forEach(function (checkbox) {
                if (checkbox.value === 'None') {
                    checkbox.checked = false;
                }
                if(checkbox.value === 'Gluten Free'){
                    if(checkbox.checked === true){
                        GF = true;
                    }
                }
                if(checkbox.value === 'Vegeterian'){
                    if(checkbox.checked === true){
                        Veg = true;
                    }
                }
            });
            if(Veg && GF){
                document.getElementById('DietaryPref').innerText = 'are Vegeterian and Gluten Free';
                dietaryPreference = 'VEGGF';
            }
            else if(Veg){ 
                document.getElementById('DietaryPref').innerText = 'are Vegeterian';
                dietaryPreference = 'VEG';
            }
            else{
                document.getElementById('DietaryPref').innerText = 'are Gluten Free';
                dietaryPreference = 'GF';
            }
        }
    }
    populateProductList(dietaryPreference);
}

//TODO: 
function populateProductList(dietaryPreference){
    console.log("DO THIS");
    // use createProductDiv
}


function createProductDiv(product) {
    const productContainer = document.createElement('div');
    productContainer.id = product.id;
    productContainer.classList.add('product-container');

    const productImage = document.createElement('img');
    productImage.classList.add('product-image');
    productImage.src = `images/${product.id}.png`;
    productImage.alt = `${product.name} (whole)`;
    productContainer.appendChild(productImage);

    const productName = document.createElement('p');
    productName.textContent = product.name;
    productContainer.appendChild(productName);

    const productPrice = document.createElement('h3');
    productPrice.textContent = `$${product.price.toFixed(2)}`;
    productContainer.appendChild(productPrice);

    const addToCartButton = document.createElement('button');
    addToCartButton.classList.add('add-to-cart-button');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.onclick = function() {
        toggleCartStatus(this);
    };
    productContainer.appendChild(addToCartButton);

    return productContainer;
}

function toggleCartStatus(button) {
    var notification = document.getElementById('notification');

    if (button.innerText === 'Add to Cart') {
        // Add to cart logic
        notification.innerText = 'Item added to cart!';
        button.innerText = 'Remove from Cart';
        button.classList.add('in-cart');
        
    } else {
        // Remove from cart logic
        notification.innerText = 'Item removed from cart!';
        button.innerText = 'Add to Cart';
        button.classList.remove('in-cart');
    }

    notification.style.display = 'block';
    setTimeout(function() {
        notification.style.display = 'none';
    }, 2500);
}