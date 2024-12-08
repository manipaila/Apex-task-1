// Initialize an empty cart array or retrieve it from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add an item to the cart
function addToCart(button) {
    const card = button.closest('.card');
    const name = card.getAttribute('data-name');
    const price = parseFloat(card.getAttribute('data-price'));

    // Check if the item is already in the cart
    const existingItemIndex = cart.findIndex(item => item.name === name);

    if (existingItemIndex === -1) {
        // If item is not in the cart, add it
        cart.push({ name, price });
        updateCartCount();
        alert(`${name} added to cart!`);
    } else {
        // If the item is already in the cart, just notify the user
        alert(`${name} is already in the cart!`);
    }

    // Save the updated cart in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to update the cart item count
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) cartCount.textContent = cart.length;
}

// Function to display the cart items on the Cart page
function displayCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');

    // Clear current cart display
    cartItemsContainer.innerHTML = '';  

    // Display the cart items
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
    // Filter out the item to be removed
    cart = cart.filter(item => item.name !== itemName);

    // Save the updated cart in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart display
    displayCart();
    updateCartCount();
}

// Function to handle the order submission
function submitOrder(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const paymentMethod = document.getElementById('payment').value;

    if (name && address && paymentMethod) {
        alert(`Order placed successfully!\nName: ${name}\nAddress: ${address}\nPayment: ${paymentMethod}`);
        // Clear cart after order is placed
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        document.getElementById('cartItems').innerHTML = ''; // Clear cart
        document.getElementById('confirmation').style.display = 'block'; // Show confirmation
    } else {
        alert("Please fill in all the details to place the order.");
    }
}

// If this script is used for the Order page, call this function to display the cart content
if (document.getElementById('cartItems')) {
    displayCart();
}
