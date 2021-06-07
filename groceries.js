var products = [
    {  
        name: "Banana",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        vegetable:false,
        fruit:true,
        //new
        nutfree:true,
        lactosefree:true,
        nutfreeo:false,
        lactosefreeo:false,

        condiments:false,
        price: 0.99,
        img: "./Items/banana.jpg",
        dairy:false,
        cookingProducts:false,
        beverages:false
    },

    {  
        name: "Blueberry",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        vegetable:true,
        fruit:true,
        //new
        nutfree:true,
        lactosefree:true,
        nutfreeo:false,
        lactosefreeo:false,

        condiments:false,
        price: 1.99,
        img: "./Items/blueberry.jpg",
        dairy:false,
        cookingProducts:false,
        beverages:false
    },
    {  
        name: "Organic Blueberry",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        vegetable:true,
        fruit:true,
        //new
        nutfree:true,
        lactosefree:true,
        nutfreeo:true,
        lactosefreeo:true,

        condiments:false,
        price: 1.99,
        img: "./Items/blueberryo.jpg",
        dairy:false,
        cookingProducts:false,
        beverages:false
    },
    {  
        name: "Organic Bread",
        vegetarian: false,
        glutenFree: false,
        organic: true,
        vegetable:true,
        fruit:true,
        //new
        nutfree:true,
        lactosefree:true,
        nutfreeo:true,
        lactosefreeo:false,

        condiments:false,
        price: 2.99,
        //img from https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ewg.org%2Ffoodscores%2Fproducts%2F073410955529-ArnoldOrganic100WholeGrainBread%2F&psig=AOvVaw0eIljAOdgxVP0sH-w90ysd&ust=1623162693130000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDp_bHehfECFQAAAAAdAAAAABAD
        img: "./Items/breado.jpg",
        dairy:false,
        cookingProducts:false,
        beverages:false
    },
    {  
        name: "Organic Milk",
        vegetarian: true,
        glutenFree: false,
        organic: true,
        vegetable: false,
        fruit:false,
        //new
        nutfree:true,
        lactosefree:false,
        nutfreeo:true,
        lactosefreeo:false,

        condiments:false,
        price: 1.99,
        img: "./Items/milko.jpg",
        dairy:true,
        cookingProducts:false,
        beverages:false
    },

    {
        name: "Brocoli",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        fruit:true,
        nutfree: true,
        lactosefree: true,
        nutfreeo: false,
        lactosefreeo: false,
        condiments: false,
        price: 1.99,
        //img from https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fappetite-broccoli-brocoli-broccolli-calories-161486%2F&psig=AOvVaw0xQdjYTSvCHlNX16uyTXAN&ust=1623161786811000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMDI6oLbhfECFQAAAAAdAAAAABAa
        img: "./Items/brocoli.jpg",
        dairy: false,
        cookingProducts: false,
        beverages: false
    },

    {
        name: "Salt",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        vegetable:false,
        fruit:false,
         //new
        nutfree:true,
        lactosefree:true,
        nutfreeo:false,
        lactosefreeo:false,
        condiments:true,
        price: 1.99,
        img: "./Items/salt.jpg",
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
         //new
        nutfree:true,
        lactosefree:true,
        nutfreeo:false,
        lactosefreeo:false,
        condiments:false,
        price: 2.99,
        img: "Items/apple.png",
        dairy:false,
        cookingProducts:false,
        beverages:false
    },
    {
        name: "Pomegrante (Organic)",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        vegetable:false,
        fruit:false,
         //new
        nutfree:true,
        lactosefree:true,
        nutfreeo:true,
        lactosefreeo:true,
        condiments:false,
        price: 3.99,
        img: "./Items/pomegrante.jpg",
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
         //new
        nutfree:true,
        lactosefree:true,
        nutfreeo:false,
        lactosefreeo:false,
        condiments:false,
        price: 2.99,
        img: "./Items/bread.jpg",
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
         //new
        nutfree:true,
        lactosefree:true,
        nutfreeo:false,
        lactosefreeo:false,
        condiments:false,
        price: 7.99,
        img: "./Items/chicken.jpg",
        dairy:false,
        cookingProducts:false,
        beverages:false
    },
    {  
        name: "Salmon",
        vegetarian: false,
        glutenFree: true,
        organic: false,
        vegetable:false,
        fruit:false,
        //new
        nutfree:true,
        lactosefree:true,
        nutfreeo:false,
        lactosefreeo:false,

        condiments:false,
        price: 11.99,
        //img from: https://www.citarella.com/media/catalog/product/cache/6bd6bc90948058f1c179c773d53c57be/0/2/024028800000_01_1_1.jpg
        img: "./Items/salmon.jpg",
        dairy:false,
        cookingProducts:false,
        beverages:false
    },
    {
        name: "Orange juice (Organic)",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        vegetable:true,
        fruit:false,//true but it's juice
         //new
        nutfree:true,
        lactosefree:true,
        nutfreeo:true,
        lactosefreeo:true,
        condiments:false,
        price: 3.79,
        img: "./Items/orangejuice.jpeg",
        dairy:false,
        cookingProducts:false,
        beverages:true
    },
    {
        name: "Eggplant (Organic)",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        vegetable:true,
        fruit:false,
         //new
        nutfree:true,
        lactosefree:true,
        nutfreeo:true,
        lactosefreeo:true,
        condiments:false,
        price: 3.99,
        img: "./Items/eggplant.jpg",
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
         //new
        nutfree:true,
        lactosefree:true,
        nutfreeo:false,
        lactosefreeo:false,
        organic: false,
        condiments:false,
        price: 5.99,
        img: "./Items/potatoes.jpg",
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
         //new
        nutfree:true,
        lactosefree:true,
        nutfreeo:false,
        lactosefreeo:false,
        organic: false,
        price: 3.79,
        img: "./Items/ketchup.jpg",
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
         //new
        nutfree:true,
        lactosefree:true,
        nutfreeo:false,
        lactosefreeo:false,
        organic: false,
        condiments:true,
        price: 1.99,
        img: "Items/mustard.jpg",
        dairy:false,
        cookingProducts:false,
        beverages:false
    },
    {
        name: "Milk",
        vegetarian: true,
        glutenFree: true,
        vegetable:false,
        fruit:false,
         //new
        nutfree:true,
        lactosefree:false,
        nutfreeo:false,
        lactosefreeo:false,
        organic: false,
        condiments:false,
        price: 1.99,
        img: "./Items/milk.jpg",
        dairy:true,
        cookingProducts:false,
        beverages:true
    },
    {  
        name: "Bacon",
        vegetarian: false,
        glutenFree: false,
        organic: false,
        vegetable:false,
        fruit:false,
        //new
        nutfree:true,
        lactosefree:false,
        nutfreeo:false,
        lactosefreeo:false,

        condiments:false,
        price: 8.99,
        img: "./Items/bacon.jpg",
        dairy:false,
        cookingProducts:false,
        beverages:false
    },
    {  
        name: "Almond Granola",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        vegetable:true,
        fruit:true,
        //new
        nutfree:false,
        lactosefree:true,
        nutfreeo:false,
        lactosefreeo:false,

        condiments:false,
        price: 4.99,
        img: "./Items/almondgranola.jpg",
        dairy:false,
        cookingProducts:false,
        beverages:false
    },
    {  
        name: "Yogurt",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        vegetable:false,
        fruit:false,
        //new
        nutfree:true,
        lactosefree:false,
        nutfreeo:false,
        lactosefreeo:false,

        condiments:false,
        price: 1.99,
        img: "./Items/yogurt.jpg",
        dairy:true,
        cookingProducts:false,
        beverages:false
    },
    {
        name: "Cheese Strings",
        vegetarian: true,
        glutenFree: true,
        vegetable:false,
        fruit:false,
        organic: false,
         //new
        nutfree:true,
        lactosefree:true,
        nutfreeo:false,
        lactosefreeo:false,
        condiments:false,
        price: 6.99,
        img: "./Items/cheesestrings.png",
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
addToCartBtn.addEventListener('click', (event) => { 
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
        if(categories[0] == "none"){
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


