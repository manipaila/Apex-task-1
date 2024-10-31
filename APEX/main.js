// Show hover images on button hover
function showHoverImages(type) {
    const hoverImages = document.querySelector(`.hover-images.${type}`);
    hoverImages.style.display = 'block'; // Show the images
}

// Hide hover images when mouse leaves button
function hideHoverImages(type) {
    const hoverImages = document.querySelector(`.hover-images.${type}`);
    hoverImages.style.display = 'none'; // Hide the images
}

// Show alert message for each section
function showAlert(collectionName) {
    alert(`You selected ${collectionName}!`);
}
