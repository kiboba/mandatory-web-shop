const products = [
    {img: 'https://bigbenur.se/images/normal/527-19-x3_552-16-x1.jpg',
    name: 'halsband', price: 20, description: 'la la loss'},
    
    {img: 'http://www.byhovland.se/shop/24122/art22/h0884/13800884-origpic-a85813.jpg',
    name: 'halsband', price: 30, description: 'la la loss'},
    
    {img: 'http://www.byhovland.se/shop/24122/art22/h2805/9542805-origpic-abbca6.jpg',
    name: 'ringar', price: 25, description: 'la la loss'},
    
    {img: 'http://www.byhovland.se/shop/24122/art22/h5198/19885198-origpic-f64579.jpg',
    name: 'öronhängen', price: 15, description: 'la la loss'}
];

// creating the products in the array

for (var i = 0; i < products.length; i++) {
    let contain = document.getElementById('container');
    let divs = document.createElement('div');
    divs.setAttribute('class', 'cards');
    let image = document.createElement('img');
    image.setAttribute('src', products[i].img);
    divs.appendChild(image);
    contain.appendChild(divs);

let title = document.createElement('h3');
let titleText = document.createTextNode(products[i].name);
title.appendChild(titleText);
divs.appendChild(title);

let price = document.createElement('p');
let priceText = document.createTextNode(products[i].price + ' kr');
price.setAttribute('class', 'price');
price.appendChild(priceText);
divs.appendChild(price);

let descrip = document.createElement('p');
let descripText = document.createTextNode(products[i].description);
descrip.appendChild(descripText);
divs.appendChild(descrip);
}

