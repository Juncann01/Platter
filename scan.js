// scan.js - JavaScript for Scan Page functionality

document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('video');
  const scanBtn = document.getElementById('scanBtn');
  const resultContent = document.getElementById('resultContent');

  // Access the camera
  async function startCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      video.srcObject = stream;
    } catch (err) {
      resultContent.innerHTML = '<p>Unable to access camera: ' + err.message + '</p>';
    }
  }

  // Mock scan function
  function performScan() {
    // In a real app, capture frame and send to backend or ML model for recognition
    // Here, we mock a scan result
    const mockDish = {
      name: 'Spicy Chicken Wings',
      description: 'Hot and crispy wings with a tangy sauce.',
      price: '$12.99',
      reviews: '4.5 stars (120 reviews)',
    };

    resultContent.innerHTML = `
      <h3>${mockDish.name}</h3>
      <p>${mockDish.description}</p>
      <p><strong>Price:</strong> ${mockDish.price}</p>
      <p><strong>Reviews:</strong> ${mockDish.reviews}</p>
      <button id="addToCartBtn">Add to Cart</button>
    `;

    const addToCartBtn = document.getElementById('addToCartBtn');
    addToCartBtn.addEventListener('click', () => {
    alert(`Added ${mockDish.name} to cart!`);
    });

    // Optional: Voice narration
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(`Scanned dish is ${mockDish.name}. Description: ${mockDish.description}.`);
      window.speechSynthesis.speak(utterance);
    }
  }

  scanBtn.addEventListener('click', performScan);

  startCamera();
});
