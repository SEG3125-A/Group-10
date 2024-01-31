// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
  {
    id: "chicken",
    name: "Chicken",
    price: 15.5,
    diet: ["GF", "ORG", "DB", "LF"],
    Category: "Meat",
  },
  {
    id: "avocado",
    name: "Avocado",
    price: 3.25,
    diet: ["VEG", "GF", "DB", "LF"],
    Category: "Fruit",
  },
  {
    id: "bread",
    name: "Bread",
    price: 4.5,
    diet: ["VEG", "ORG", "LF"],
    Category: "Carbs",
  },
  {
    id: "rice",
    name: "Rice",
    price: 3.5,
    diet: ["VEG", "GF", "LF"],
    Category: "Carbs",
  },
  {
    id: "bacon",
    name: "Bacon",
    price: 5.0,
    diet: ["GF", "DB", "LF"],
    Category: "Meat",
  },
  {
    id: "steak",
    name: "Steak",
    price: 30.0,
    diet: ["GF", "OR", "DB", "LF"],
    Category: "Meat",
  },
  {
    id: "broccoli",
    name: "Broccoli",
    price: 2.5,
    diet: ["VEG", "GF", "OR", "DB", "LF"],
    Category: "Vegetable",
  },
  {
    id: "banana",
    name: "Banana",
    price: 1.25,
    diet: ["VEG", "GF", "OR", "DB", "LF"],
    Category: "Fruit",
  },
  {
    id: "crab",
    name: "Crab",
    price: 20.5,
    diet: ["GF", "OR", "DB", "LF"],
    Category: "Meat",
  },
  {
    id: "watermelon",
    name: "Watermelon",
    price: 5.0,
    diet: ["VEG", "GF", "OR", "LF"],
    Category: "Fruit",
  },
  {
    id: "milk",
    name: "Milk",
    price: 5.0,
    diet: ["VEG", "GF", "OR"],
    Category: "Dairy",
  },
  {
    id: "oatmilk",
    name: "Oatmilk",
    price: 7.0,
    diet: ["VEG", "GF", "OR", "LF"],
    Category: "Dairy",
  },
];

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restrictions) {
  let product_info = [];

  let category_prods = [];
  for (let prod of prods) {
    if (selectedCategories.includes(prod.Category)) {
      category_prods.push(prod);
    }
  }

  if (restrictions[0] == "NONE") {
    return category_prods;
  }

  for (let i = 0; i < category_prods.length; i += 1) {
    var flag = true;
    for (let restriction of restrictions) {
      if (!category_prods[i].diet.includes(restriction)) {
        flag = false;
        break;
      }
    }
    if (flag == true) {
        product_info.push(category_prods[i]);
    }
  }
  return product_info;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
  totalPrice = 0;
  for (let i = 0; i < products.length; i += 1) {
    if (chosenProducts.indexOf(products[i].name) > -1) {
      totalPrice += products[i].price;
    }
  }
  return totalPrice;
}
