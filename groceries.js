var products = [
    {
        name: "Banana",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        vegetable:false,
        fruit:true,
        condiments:false,
        price: 0.99,
        img: "items/banana.jpg",
        dairy:false,
        cookingProducts:false,
        beverages:false
    },
    {
        name: "Salt",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        vegetable:false,
        fruit:false,
        condiments:true,
        price: 1.99,
        img: "items/salt.jpg",
        dairy:false,
        cookingProducts:true,
        beverages:false
    },
    {
        name: "Apple",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        vegetable:false,
        fruit:true,
        condiments:false,
        price: 2.99,
        img: "items/apple.png",
        dairy:false,
        cookingProducts:false,
        beverages:false
    },
    {
        name: "Pomegrante",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        vegetable:false,
        fruit:false,
        condiments:false,
        price: 3.99,
        img: "./items/pomegrante.jpg",
        dairy:false,
        cookingProducts:false,
        beverages:false
    },
    {
        name: "Bread",
        vegetarian: false,
        glutenFree: false,
        organic: false,
        vegetable:false,
        fruit:false,
        condiments:false,
        price: 4.99,
        img: "./items/bread.jpg",
        dairy:false,
        cookingProducts:false,
        beverages:false
    },
    {
        name: "Chicken Nuggets",
        vegetarian: false,
        glutenFree: false,
        organic: false,
        vegetable:false,
        fruit:false,
        condiments:false,
        price: 7.99,
        img: "./items/chicken.jpg",
        dairy:false,
        cookingProducts:false,
        beverages:false
    },
    {
        name: "Orange juice",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        vegetable:false,
        fruit:false,
        condiments:false,
        price: 3.79,
        img: "./items/orangejuice.jpeg",
        dairy:false,
        cookingProducts:false,
        beverages:true
    },
    {
        name: "Eggplant",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        vegetable:true,
        fruit:false,
        condiments:false,
        price: 3.99,
        img: "./items/eggplant.jpg",
        dairy:false,
        cookingProducts:false,
        beverages:false
    },
    {
        name: "Potatoes",
        vegetarian: true,
        glutenFree: true,
        vegetable:true,
        fruit:false,
        organic: false,
        condiments:false,
        price: 5.99,
        img: "./items/potatoes.jpg",
        dairy:false,
        cookingProducts:false,
        beverages:false
        
    },
    {
        name: "Ketchup",
        vegetarian: true,
        glutenFree: true,
        vegetable:false,
        fruit:false,
        organic: false,
        price: 3.79,
        img: "./items/ketchup.jpg",
        dairy:false,
        cookingProducts:false,
        condiments:true,
        beverages:false
    },
    {
        name: "Mustard",
        vegetarian: true,
        glutenFree: true,
        vegetable:false,
        fruit:false,
        organic: false,
        condiments:true,
        price: 1.99,
        img: "./items/mustard.jpg",
        dairy:false,
        cookingProducts:false,
        beverages:false
    },
    {
        name: "Milk",
        vegetarian: false,
        glutenFree: true,
        vegetable:false,
        fruit:false,
        organic: false,
        condiments:false,
        price: 4.99,
        img: "./items/milk.jpg",
        dairy:true,
        cookingProducts:false,
        beverages:true
    },
    {
        name: "Cheese Strings",
        vegetarian: false,
        glutenFree: true,
        vegetable:false,
        fruit:false,
        organic: false,
        condiments:false,
        price: 6.99,
        img: "./items/cheesestrings.png",
        dairy:true,
        cookingProducts:false,
        beverages:false
    },
];



//this code is inspired by https://www.javascripttutorial.net/javascript-dom/javascript-checkbox/
function getSelectedCheckboxValues(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;
}

const searchBtn = document.querySelector('#search');
searchBtn.addEventListener('click', (event) => {
    listDiv = document.getElementById("productChoices");
    listDiv.innerHTML = "";
    let preferences = getSelectedCheckboxValues('preference');
    let categories = getSelectedCheckboxValues('categorization');
    let productList = getProducts(preferences, categories);
    populateListProduct(productList);
});

const addToCartBtn = document.querySelector('#addCart');
addToCartBtn.addEventListener('click', (event) => { //["Broccoli", "Milk", "Peaches"]
    listDiv = document.getElementById("cart");
    listDiv.innerHTML = "";
    let productsToCartNames = getSelectedCheckboxValues('product');
    let productsToCart = getCartItems(productsToCartNames);
    let cart = populateCart(productsToCart);
});

function getCartItems(productsToCart){
    let listOfProducts = [] 
    for(product in products){
        let name = products[product].name
        if(productsToCart.indexOf(name) >= 0){
            listOfProducts.push(products[product]);
        }
    }
    return listOfProducts;
}

function populateCart(productList){
    productList.sort((a, b) => (a.price > b.price) ? 1 : -1)
    var listDiv = document.getElementById("cart");
    let totalPrice = 0
    for(product in productList){
        let productName = productList[product].name;
        let productPrice = productList[product].price;
        totalPrice += productPrice;

        let label = document.createElement('label')
        label.htmlFor = productName;
        label.appendChild(document.createTextNode(productName));
        listDiv.appendChild(label);
        
        listDiv.appendChild(document.createElement("br"));
    }
    let priceLabel = document.createElement('p')
    priceLabel.innerHTML = "Total Price: $" + totalPrice

    listDiv.appendChild(priceLabel);
}

function populateListProduct(productList){
    productList.sort((a, b) => (a.price > b.price) ? 1 : -1)
    var listDiv = document.getElementById("productChoices");
    for(product in productList){
        let productName = productList[product].name;
        let productPrice = productList[product].price;
        let productImg = productList[product].img;

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "product"; 
        checkbox.value = productName;
        listDiv.appendChild(checkbox)

        let img = document.createElement("img");
        img.src = productImg;
        img.width = 100;
        img.height = 100;
        listDiv.appendChild(img);

        let label = document.createElement('label')
        label.htmlFor = productName;
        label.appendChild(document.createTextNode(productName  + ": $" + productPrice));
        listDiv.appendChild(label);
        
        listDiv.appendChild(document.createElement("br"));
        listDiv.appendChild(document.createElement("br"));
    }
}




function getProducts(preferences, categories) { 
    let productsList = []

    for(product in products){
        let toAdd = true;
        if(categories[0] == "noAdditional"){
           toAdd = true;
        }else{
            if(products[product][categories[0]] == true){
                toAdd = true;
            }else{
                toAdd = false
            }
        }
        for(preference in preferences){     
            if(products[product][preferences[preference]] == false){
                toAdd = false
            }     
        }
        if(toAdd){
            productsList.push(products[product])
        }
    }
    return productsList;
};