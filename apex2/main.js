document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirmPassword').value.trim();

  if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
  }

  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);

  document.getElementById('contact').style.display = 'none';
  document.getElementById('imageSection').style.display = 'block';
});

document.getElementById('imageForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const imageUrl = document.getElementById('imageUrl').value.trim();
  
  if (isValidImageUrl(imageUrl)) {
      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = 'Submitted Image';
      img.style.maxWidth = '100%';  // Ensure the image is responsive
      img.style.height = 'auto';    // Maintain aspect ratio

      img.onload = function() {
          console.log("Image loaded successfully");
          document.getElementById('imagePreview').innerHTML = '';  // Clear previous content
          document.getElementById('imagePreview').appendChild(img);
          
          // Create and append the Remove button
          const removeButton = document.createElement('button');
          removeButton.textContent = 'Remove Image';
          removeButton.style.marginTop = '10px';
          removeButton.addEventListener('click', function() {
              removeImage();  // Remove the image and clear the input field
          });
          document.getElementById('imagePreview').appendChild(removeButton);
      };

      img.onerror = function() {
          console.error('Image failed to load');
          alert('This image could not be loaded. Please check the URL.');
      };

      // Display loading message before the image loads
      document.getElementById('imagePreview').innerHTML = "Loading image...";
  } else {
      alert('Please enter a valid image URL.');
  }
});

// A simple check to ensure the URL ends with an image file extension (like .jpg, .jpeg, .png, etc.)
function isValidImageUrl(url) {
  return /\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(url);
}

// Function to remove the image and clear the URL input field
function removeImage() {
  document.getElementById('imagePreview').innerHTML = '';  // Clear the image and button
  document.getElementById('imageUrl').value = '';  // Clear the image URL input field
}