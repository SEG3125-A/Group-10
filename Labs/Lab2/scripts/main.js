// products
const products = [
  {
    id: "chicken",
    name: "Chicken",
    price: 15.5,
    diet: "GF",
    imgsrc: "images/chicken.png",
    organic: true,
    diabetic: true,
    LactoseFree: true,
  },
  {
    id: "avocado",
    name: "Avocado",
    price: 3.25,
    diet: "VEGGF",
    imgsrc: "images/avocado.png",
    organic: false,
    diabetic: true,
    LactoseFree: true,
  },
  {
    id: "bread",
    name: "Bread",
    price: 4.5,
    diet: "VEG",
    imgsrc: "images/Bread.png",
    organic: true,
    diabetic: false,
    LactoseFree: true,
  },
  {
    id: "rice",
    name: "Rice",
    price: 3.5,
    diet: "VEGGF",
    imgsrc: "images/rice.png",
    organic: false,
    diabetic: false,
    LactoseFree: true,
  },
  {
    id: "bacon",
    name: "Bacon",
    price: 5.0,
    diet: "GF",
    imgsrc: "images/bacon.png",
    organic: false,
    diabetic: true,
    LactoseFree: true,
  },
  {
    id: "steak",
    name: "Steak",
    price: 30.0,
    diet: "GF",
    imgsrc: "images/steak.png",
    organic: true,
    diabetic: true,
    LactoseFree: true,
  },
  {
    id: "broccoli",
    name: "Broccoli",
    price: 2.5,
    diet: "VEGGF",
    imgsrc: "images/broccoli.png",
    organic: true,
    diabetic: true,
    LactoseFree: true,
  },
  {
    id: "banana",
    name: "Banana",
    price: 1.25,
    diet: "VEGGF",
    imgsrc: "images/banana.png",
    organic: true,
    diabetic: true,
    LactoseFree: true,
  },
  {
    id: "crab",
    name: "Crab",
    price: 20.5,
    diet: "GF",
    imgsrc: "images/crab.png",
    organic: true,
    diabetic: true,
    LactoseFree: true,
  },
  {
    id: "watermelon",
    name: "Watermelon",
    price: 5.0,
    diet: "VEGGF",
    imgsrc: "images/watermelon.png",
    organic: true,
    diabetic: false,
    LactoseFree: true,
  },
  {
    id: "milk",
    name: "Milk",
    price: 5.0,
    diet: "VEGGF",
    imgsrc: "images/milk.png",
    organic: true,
    diabetic: false,
    LactoseFree: false,
  },
  {
    id: "oatmilk",
    name: "Oatmilk",
    price: 7.0,
    diet: "VEGGF",
    imgsrc: "images/oatmilk.png",
    organic: true,
    diabetic: false,
    LactoseFree: true,
  },
];
let dietaryPreference = "NONE";
let organicOnly = false;
let Diabetes = false;
let LactoseFree = false;
let cart = [];
let subtotal = 0;

function showProfile() {
  document.getElementById("Client").style.display = "block";
  document.getElementById("Shop").style.display = "none";
  document.getElementById("checkout").style.display = "none";
  setButtonBackgroundColor("profileButton", "#c7c7c7");
}
function showProducts() {
  document.getElementById("Client").style.display = "none";
  document.getElementById("Shop").style.display = "block";
  document.getElementById("checkout").style.display = "none";
  setButtonBackgroundColor("productsButton", "#c7c7c7");
}
function showCart() {
  document.getElementById("Client").style.display = "none";
  document.getElementById("Shop").style.display = "none";
  document.getElementById("checkout").style.display = "block";
  setButtonBackgroundColor("cartButton", "#c7c7c7");
}

function setButtonBackgroundColor(buttonId, color) {
  // Reset background color for all buttons
  document.querySelectorAll(".topnav button").forEach(function (button) {
    button.style.backgroundColor = "#c8dcf1";
  });

  // Set background color for the clicked button
  document.getElementById(buttonId).style.backgroundColor = color;
}

window.onload = function () {
  showProfile();
  populateProductList(dietaryPreference);
  populateCart(cart);
  products.sort(sortByPrice);
};

function updateOrganic() {
  var check = document.getElementById("organic");
  if (check.checked) {
    organicOnly = true;
    document.getElementById("DietaryPref").innerText += ", (ORGANIC ONLY)";
  } else {
    let val = document.getElementById("DietaryPref").innerText;
    document.getElementById("DietaryPref").innerText = val.replace(
      ", (ORGANIC ONLY)",
      ""
    );
    organicOnly = false;
  }

  subtotal = 0;
  cart = [];
  populateProductList(dietaryPreference, organicOnly);
  populateCart(cart);
}

function updateLactoseFree() {
  var check = document.getElementById("Lactose Free");
  if (check.checked) {
    LactoseFree = true;
    document.getElementById("DietaryPref").innerText += ", (LACTOSE FREE)";
  } else {
    LactoseFree = false;
    let val = document.getElementById("DietaryPref").innerText;
    document.getElementById("DietaryPref").innerText = val.replace(
      ", (LACTOSE FREE)",
      ""
    );
  }

  subtotal = 0;
  cart = [];
  populateProductList(dietaryPreference, organicOnly);
  populateCart(cart);
}

function updateDiabetes() {
  var check = document.getElementById("Diabetic");
  if (check.checked) {
    Diabetes = true;
    document.getElementById("DietaryPref").innerText += ", (DIABETIC FRIENDLY)";
  } else {
    Diabetes = false;
    let val = document.getElementById("DietaryPref").innerText;
    document.getElementById("DietaryPref").innerText = val.replace(
      ", (DIABETIC FRIENDLY)",
      ""
    );
  }

  subtotal = 0;
  cart = [];

  populateProductList(dietaryPreference, organicOnly);
  populateCart(cart);
}

// Updates dietary prefrence
function updateDietaryPreference(value) {
  var checkboxes = document.getElementsByName("Rest");
  // check if user is trying to uncheck everything and default to None
  var canContinue = false;
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      canContinue = true;
    }
  }

  if (!canContinue) {
    dietaryPreference = "NONE";
    document.getElementById("DietaryPref").innerText =
      "have No Dietary Prefrence";
    checkboxes.forEach(function (checkbox) {
      if (checkbox.value !== "None") {
        checkbox.checked = false;
      } else {
        checkbox.checked = true;
      }
    });
  } else {
    // Logic for selecting dietary prefrence
    if (value === "None") {
      checkboxes.forEach(function (checkbox) {
        if (checkbox.value !== "None") {
          checkbox.checked = false;
        }
      });
      document.getElementById("DietaryPref").innerText =
        "have No Dietary Preference";
      dietaryPreference = "NONE";
    } else {
      var GF = false;
      var Veg = false;
      checkboxes.forEach(function (checkbox) {
        if (checkbox.value === "None") {
          checkbox.checked = false;
        }
        if (checkbox.value === "Gluten Free") {
          if (checkbox.checked === true) {
            GF = true;
          }
        }
        if (checkbox.value === "Vegeterian") {
          if (checkbox.checked === true) {
            Veg = true;
          }
        }
      });
      if (Veg && GF) {
        document.getElementById("DietaryPref").innerText =
          "are Vegeterian and Gluten Free";
        dietaryPreference = "VEGGF";
      } else if (Veg) {
        document.getElementById("DietaryPref").innerText = "are Vegeterian";
        dietaryPreference = "VEG";
      } else {
        document.getElementById("DietaryPref").innerText = "are Gluten Free";
        dietaryPreference = "GF";
      }
    }
  }
  if (organicOnly) {
    document.getElementById("DietaryPref").innerText += ", (ORGANIC ONLY)";
  }

  if (Diabetes) {
    document.getElementById("DietaryPref").innerText += ", (DIABETIC FRIENDLY)";
  }

  if (Diabetes) {
    document.getElementById("DietaryPref").innerText += ", (LACTOSE FREE)";
  }

  subtotal = 0;
  cart = [];
  populateProductList(dietaryPreference, organicOnly);
  populateCart(cart);
}

// Populates product list based on dietary prefrence
function populateProductList(dietaryPreference, organicOnly) {
  const shopDiv = document.getElementById("Shop");
  const productContainerWrapper = shopDiv.querySelector(
    ".product-container-wrapper"
  );
  productContainerWrapper.innerHTML = "";
  if (dietaryPreference === "NONE") {
    products.forEach((product) => {
      if (organicOnly && !product.organic) {
        // Nothing
      } else if (Diabetes && !product.diabetic) {
        // Nothing
      } else {
        const productDiv = createProductDiv(product);
        productContainerWrapper.appendChild(productDiv);
      }
    });
  } else if (dietaryPreference === "VEGGF") {
    products.forEach((product) => {
      if (product.diet === "VEGGF") {
        if (organicOnly && !product.organic) {
          // Nothing
        } else if (Diabetes && !product.diabetic) {
          // Nothing
        } else {
          const productDiv = createProductDiv(product);
          productContainerWrapper.appendChild(productDiv);
        }
      }
    });
  } else if (dietaryPreference === "VEG") {
    products.forEach((product) => {
      if (product.diet === "VEG" || product.diet === "VEGGF") {
        if (organicOnly && !product.organic) {
          // Nothing
        } else if (Diabetes && !product.diabetic) {
          // Nothing
        } else {
          const productDiv = createProductDiv(product);
          productContainerWrapper.appendChild(productDiv);
        }
      }
    });
  } else {
    products.forEach((product) => {
      if (product.diet === "GF" || product.diet === "VEGGF") {
        if (organicOnly && !product.organic) {
          // Nothing
        } else if (Diabetes && !product.diabetic) {
          // Nothing
        } else {
          const productDiv = createProductDiv(product);
          productContainerWrapper.appendChild(productDiv);
        }
      }
    });
  }
}

// creates div used by populateProductList
function createProductDiv(product) {
  const productContainer = document.createElement("div");
  productContainer.id = product.id;
  productContainer.classList.add("product-container");

  const productImage = document.createElement("img");
  productImage.classList.add("product-image");
  productImage.src = `images/${product.id}.png`;
  productImage.alt = `${product.name} (whole)`;
  productContainer.appendChild(productImage);

  const productName = document.createElement("p");
  productName.textContent = product.name;
  productContainer.appendChild(productName);

  const productPrice = document.createElement("h3");
  productPrice.textContent = `$${product.price.toFixed(2)}`;
  productContainer.appendChild(productPrice);

  const addToCartButton = document.createElement("button");
  addToCartButton.classList.add("add-to-cart-button");
  addToCartButton.textContent = "Add to Cart";

  productContainer.appendChild(addToCartButton);

  const quantityDropdown = document.createElement("select");
  quantityDropdown.classList.add("quantity-dropdown");
  for (var i = 1; i <= 5; i++) {
    var opt = document.createElement("option");
    opt.value = i;
    opt.innerHTML = i;
    quantityDropdown.appendChild(opt);
  }
  quantityDropdown.onclick = function () {};
  productContainer.appendChild(quantityDropdown);

  addToCartButton.onclick = function () {
    const selectedQuantity = quantityDropdown.value;
    toggleCartStatus(this, product, selectedQuantity);
  };

  return productContainer;
}

function toggleCartStatus(button, product, quantity) {
  var notification = document.getElementById("notification");
  console.log(product);

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
