
const products = [
    { id: 1, name: 'Phone', category: 'electronics', price: 499, rating: 3.0, image: 'assets/2.png' },
    { id: 2, name: 'T-Shirt', category: 'clothing', price: 19.99, rating: 3.0, image: 'assets/3.jfif' },
    { id: 3, name: 'Laptop', category: 'electronics', price: 76999, rating: 4.5, image: 'assets/4.jfif' },
    { id: 4, name: 'Ear-Pods', category: 'electronics', price: 1999, rating: 5.0, image: 'assets/5.jfif' },
    { id: 5, name: 'Saree', category: 'clothing', price: 2999, rating: 3.9, image: 'assets/6.webp' },
    { id: 6, name: 'Kids-Gown', category: 'clothing', price: 999, rating: 2.5, image: 'assets/7.jfif' },
    { id: 7, name: 'Chicken-Biryani', category: 'Foods', price: 399, rating: 4.7, image: 'assets/8.jfif' },
    { id: 8, name: 'Parota', category: 'Foods', price: 99, rating: 3.0, image: 'assets/9.jfif' },
    { id: 9, name: 'Ice-Cream', category: 'Foods', price: 299, rating: 5.0, image: 'assets/10.jfif' },
    { id: 10, name: 'Earrings', category: 'Jewellery', price: 699, rating: 2.0, image: 'assets/11.jfif' },
    { id: 11, name: 'Bangles', category: 'Jewellery', price: 999, rating: 3.5, image: 'assets/12.jfif' },
    { id: 12, name: 'Chains', category: 'Jewellery', price: 999, rating: 4.5, image: 'assets/13.jfif' },
];

document.getElementById('categoryFilter').addEventListener('change', filterProducts);
document.getElementById('priceFilter').addEventListener('change', filterProducts);
document.getElementById('ratingFilter').addEventListener('change', filterProducts);

function filterProducts() {
    const category = document.getElementById('categoryFilter').value;
    const priceOrder = document.getElementById('priceFilter').value;
    const minRating = parseFloat(document.getElementById('ratingFilter').value);

    let filteredProducts = products;

  
    if (category) {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }

    if (!isNaN(minRating)) {
        filteredProducts = filteredProducts.filter(product => product.rating >= minRating);
    }

    if (priceOrder) {
        filteredProducts = filteredProducts.sort((a, b) =>
            priceOrder === 'asc' ? a.price - b.price : b.price - a.price
        );
    }

    displayProducts(filteredProducts);
}

function displayProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        const starRating = generateStars(product.rating);

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price.toFixed(2)}</p>
            <div class="rating">${starRating}</div>
        `;

        productList.appendChild(productCard);
    });
}

function generateStars(rating) {
    const fullStar = '<span class="star full">★</span>';
    const emptyStar = '<span class="star empty">☆</span>';
    const maxStars = 5;

    let starHtml = '';
    for (let i = 1; i <= maxStars; i++) {
        starHtml += i <= Math.floor(rating) ? fullStar : emptyStar;
    }
    return starHtml;
}


displayProducts(products);
