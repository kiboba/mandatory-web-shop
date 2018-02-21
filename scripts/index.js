// switching between products and checkout page
let productsPage = document.getElementById('productsPage');
let checkoutPage = document.getElementById('checkoutPage');
let prod = document.getElementById('container');
let check = document.getElementById('myForm'); 
productsPage.addEventListener('click', function() {
    prod.style.display = 'grid';
    check.style.display = 'none';
});

checkoutPage.addEventListener('click', function() {
    check.style.display = 'grid';
    prod.style.display = 'none';
});
