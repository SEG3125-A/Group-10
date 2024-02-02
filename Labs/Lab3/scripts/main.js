// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp
let cart = [];
let selectedCategories = ["Fruit", "Meat", "Dairy", "Carbs", "Vegetable"];
let currentOptions = [];

function openInfo(evt, tabName) {
  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// This function disables other options if the 'None' option is selected
function handleNoneCheckbox(checkbox, slct2) {
  var otherCheckboxes = document.querySelectorAll(
    'input[name="diet"]:not([value="NONE"])'
  );
  for (var i = 0; i < otherCheckboxes.length; i++) {
    otherCheckboxes[i].disabled = checkbox.checked;
    if (checkbox.checked) {
      otherCheckboxes[i].checked = false;
    }
  }
  var s2 = document.getElementById(slct2);
  s2.innerHTML = "";
  for (i = 0; i < products.length; i++) {
    var product = products[i];
    // new code
    // create product div and add it in the DOM
    var productContainer = createProductDiv(product);
    s2.appendChild(productContainer);
  }
}

// handles the clicking of 'View Products'
function submitDietRestrictions(slct2) {
  updateDietRestrictions(slct2);
  // switch to the Products tab
  productTablink = document.getElementsByClassName("tablinks products");
  productTablink.className += " active";
  openInfo(event, "Products");
}

// gets the relevant products for the checkboxes clicked
function updateDietRestrictions(slct2) {
  var selectedOptions = [];
  var checkboxes = document.getElementsByName("diet");
  var s2 = document.getElementById(slct2);
  // s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
  s2.innerHTML = "";

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      selectedOptions.push(checkboxes[i].value);
    }
  }

  // obtain a reduced list of products based on restrictions and render them
  var optionArray = restrictListProducts(products, selectedOptions);
  currentOptions = optionArray; 

  for (i = 0; i < optionArray.length; i++) {
    var product = optionArray[i];
    // new code
    // create product div and add it in the DOM
    var productContainer = createProductDiv(product);
    s2.appendChild(productContainer);
  }
}

function searchProducts(){
  submitDietRestrictions("displayProduct");
  let searchContent = document.getElementById("SearchContent").value; 
  let tempCurrentOptions = []; 
  let minPrice = document.getElementById("min").value;
  let maxPrice = document.getElementById("max").value;
  let filterMin = false; 
  let filterMax = false;

  if(minPrice){filterMin = true;}
  if(maxPrice){filterMax = true;}

  var s2 = document.getElementById("displayProduct");

  if(searchContent){
    s2.innerHTML = "";
    currentOptions.forEach(function (product){
      console.log(product.name.toLowerCase());
      console.log(searchContent.toLowerCase());
      console.log(product.name.toLowerCase().startsWith(searchContent.toLowerCase()));
      if(product.name.toLowerCase().startsWith(searchContent.toLowerCase())){
        tempCurrentOptions.push(product);
      }
    });
    currentOptions = tempCurrentOptions; 
  }
  else{
    submitDietRestrictions("displayProduct");

  }
  
  if(filterMax || filterMin){
    s2.innerHTML = "";
    if(filterMin && filterMax){
      tempCurrentOptions = []; 
      currentOptions.forEach(function (product){
        if( (product.price > minPrice) && (product.price < maxPrice) ){
          tempCurrentOptions.push(product);
        }
      });
    }
    else if(filterMax){
      tempCurrentOptions = []; 
      currentOptions.forEach(function (product){
        if( (product.price < maxPrice) ){
          tempCurrentOptions.push(product);
        }
      });
    }
    else {
      tempCurrentOptions = []; 
      currentOptions.forEach(function (product){
        if( (product.price > minPrice) ){
          tempCurrentOptions.push(product);
        }
      });
    }
    currentOptions = tempCurrentOptions; 
  }

  currentOptions.forEach(function (product){
    var productContainer = createProductDiv(product);
    s2.appendChild(productContainer);
});
}

// Building each product tile
function createProductDiv(product) {
  const productContainer = document.createElement("div");
  productContainer.id = product.id;
  productContainer.classList.add("product-container");

  const productImage = document.createElement("img");
  productImage.classList.add("product-image");
  productImage.src = `assets/${product.id}.png`;
  productImage.alt = `${product.name} (whole)`;
  productContainer.appendChild(productImage);

  const productDesc = document.createElement("div");
  productDesc.classList.add("product-desc");
  const productName = document.createElement("h2");
  productName.classList.add("product-title");
  productName.textContent = product.name;
  productDesc.appendChild(productName); // name

  const productPrice = document.createElement("span");
  productPrice.classList.add("price");
  productPrice.textContent = `$${product.price.toFixed(2)}`;
  productDesc.appendChild(productPrice); // price

  const addDiv = document.createElement("div");
  addDiv.classList.add("add-quantity-box");
  const addToCartButton = document.createElement("button");
  addToCartButton.classList.add("add-to-cart-button");
  addToCartButton.textContent = "Add to Cart";

  addDiv.appendChild(addToCartButton);

  const quantityDropdown = document.createElement("select");
  quantityDropdown.classList.add("quantity-dropdown");
  for (var i = 1; i <= 5; i++) {
    var opt = document.createElement("option");
    opt.value = i;
    opt.innerHTML = i;
    quantityDropdown.appendChild(opt);
  }
  quantityDropdown.onclick = function () {};
  addDiv.appendChild(quantityDropdown);
  productDesc.appendChild(addDiv);
  productContainer.appendChild(productDesc);
  addToCartButton.onclick = function () {
    const selectedQuantity = quantityDropdown.value;
    toggleCartStatus(this, product, selectedQuantity);
  };

  return productContainer;
}

// handles the clicking of 'Add to Cart'
function toggleCartStatus(button, product, quantity) {
  var notification = document.getElementById("notification");

  if (button.innerText === "Add to Cart") {
    cart.push([product, quantity]);
    notification.innerText = `Added to cart!`;
    button.innerText = "Remove from Cart";
    button.classList.add("in-cart");
  } else {
    const index = cart.findIndex(([item, quantity]) => item.id === product.id);
    if (index !== -1) {
      cart.splice(index, 1);
    }
    notification.innerText = "Item removed from cart!";
    button.innerText = "Add to Cart";
    button.classList.remove("in-cart");
  }
  populateCart(cart);

  notification.style.display = "block";
  setTimeout(function () {
    notification.style.display = "none";
  }, 2500);
}

function populateCart(cart) {
  const cartContainer = document.getElementById("Cart");
  cartContainer.innerHTML = "";
  subtotal = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    const productList = document.createElement("ul");
    cart.forEach(function ([product, quantity]) {
      const listItem = createProductListItem(product, quantity);
      productList.appendChild(listItem);
    });
    cartContainer.appendChild(productList);
    cart.forEach(function ([product, quantity]) {
      subtotal += product.price * quantity;
    });
    const subtotalElement = document.createElement("p");
    subtotalElement.textContent = `Total: $${subtotal.toFixed(2)}`;
    cartContainer.appendChild(subtotalElement);
  }
}

function createProductListItem(product, quantity) {
  const listItem = document.createElement("li");
  const productName = document.createElement("span");
  productName.textContent = product.name;
  listItem.appendChild(productName);
  const quantityAndPrice = document.createElement("span");
  listItem.appendChild(quantityAndPrice);
  quantityAndPrice.textContent = quantity + " x $" + product.price;
  const productPrice = document.createElement("span");
  productPrice.textContent = `$${(product.price * quantity).toFixed(2)}`;
  listItem.appendChild(productPrice);
  return listItem;
}

function sortByPrice(itemA, itemB) {
  return itemA.price - itemB.price;
}

function onCategoryChange() {

  const inputVegetable = document.getElementById("inputVegetable");
  const inputFruit = document.getElementById("inputFruits");
  const inputMeat = document.getElementById("inputMeat");
  const inputDairy = document.getElementById("inputDairy");
  const inputCarbs = document.getElementById("inputCarbs");

  var selectedOptions = [];
  if (inputVegetable.checked) {
    selectedOptions.push("Vegetable");
  }
  if (inputFruit.checked) {
    selectedOptions.push("Fruit");
  }
  if (inputMeat.checked) {
    selectedOptions.push("Meat");
  }
  if (inputDairy.checked) {
    selectedOptions.push("Dairy");
  }
  if (inputCarbs.checked) {
    selectedOptions.push("Carbs");
  }

  selectedCategories = selectedOptions;
  submitDietRestrictions("displayProduct");
}

function updatePriceRange() {
  var minPrice = document.getElementById("min").value;
  var maxPrice = document.getElementById("max").value;
  let minPriceQuote = "Minimum Price: " + minPrice + "$";
  let maxPriceQuote = "Maximum Price: " + maxPrice + "$";
  document.getElementById("MinPrice").innerHTML = minPriceQuote;
  document.getElementById("MaxPrice").innerHTML = maxPriceQuote;
}