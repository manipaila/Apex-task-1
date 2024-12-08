// Initialize an empty cart array to hold cart items
let cart = [];

// Function to add an item to the cart
function addToCart(button) {
    // Get the closest product card and extract product details (name and price)
    const card = button.closest('.card');
    const name = card.getAttribute('data-name');
    const price = parseFloat(card.getAttribute('data-price'));

    // Check if the item already exists in the cart
    const existingItemIndex = cart.findIndex(item => item.name === name);

    if (existingItemIndex === -1) {
        // If the item is not in the cart, add it to the cart
        cart.push({ name, price });
        updateCartCount();
        alert(`${name} added to cart!`);
    } else {
        // If the item is already in the cart, show an alert
        alert(`${name} is already in the cart!`);
    }
}

// Function to update the cart count
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    cartCount.textContent = cart.length;
}

// Function to display the cart items on the cart page
function displayCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');

    // Clear current cart display
    cartItemsContainer.innerHTML = '';

    // Loop through the cart and add each item to the display
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${item.name} - $${item.price}</p>
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    // Calculate and display the total price
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
}

// Function to remove an item from the cart
function removeFromCart(itemName) {
    cart = cart.filter(item => item.name !== itemName);
    displayCart();
    updateCartCount();
}

// Function to proceed with the order
function proceedToOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items to the cart first.");
    } else {
        window.location.href = "order.html"; // Redirect to order page
    }
}

// Function to handle the order submission
function submitOrder(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const paymentMethod = document.getElementById('payment').value;

    if (name && address && paymentMethod) {
        alert(`Order placed successfully! \nName: ${name} \nAddress: ${address} \nPayment: ${paymentMethod}`);
        // After submission, you can reset the cart and form if needed
        cart = [];
        updateCartCount();
        document.getElementById('cartItems').innerHTML = ''; // Clear cart items
    } else {
        alert("Please fill in all the details to place the order.");
    }
}

// If this script is used for the Cart page, call this function to display the cart content
if (document.getElementById('cartItems')) {
    displayCart();
}

// Adding items dynamically (assumes products are in an array)
const products = [
    { name: 'Product 1', price: 10.00 },
    { name: 'Product 2', price: 20.00 },
    { name: 'Product 3', price: 30.00 },
];

// Dynamically add products to the page
const productsContainer = document.getElementById('products');
products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('card');
    productCard.setAttribute('data-name', product.name);
    productCard.setAttribute('data-price', product.price);
    
    productCard.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <button onclick="addToCart(this)">Add to Cart</button>
    `;
    productsContainer.appendChild(productCard);
});
document.querySelector('form').addEventListener('submit', submitOrder);
