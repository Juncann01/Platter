// main.js - JavaScript functionality for landing page

document.addEventListener('DOMContentLoaded', () => {
  const detectLocationBtn = document.getElementById('detectLocationBtn');
  const locationResult = document.getElementById('locationResult');
  const viewMenuBtn = document.getElementById('viewMenuBtn');
  const orderNowBtn = document.getElementById('orderNowBtn');
  const menuSearch = document.getElementById('menuSearch');

  detectLocationBtn.addEventListener('click', () => {
    if (navigator.geolocation) {
      locationResult.textContent = 'Detecting location...';
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Placeholder: In real app, use reverse geocoding API to find nearest branch
          locationResult.textContent = `Detected location: Lat ${latitude.toFixed(2)}, Lon ${longitude.toFixed(2)}. Nearest branch: Main Street.`;
        },
        (error) => {
          locationResult.textContent = 'Unable to retrieve your location.';
        }
      );
    } else {
      locationResult.textContent = 'Geolocation is not supported by your browser.';
    }
  });

  if (viewMenuBtn) {
    viewMenuBtn.addEventListener('click', () => {
      window.location.href = 'menu.html';
    });
  }

  if (orderNowBtn) {
    orderNowBtn.addEventListener('click', () => {
      window.location.href = 'order-cart.html';
    });
  }
  
  // Add event listeners for other buttons if needed, e.g., "Reserve a Table"
  const reserveTableBtn = document.getElementById('reserveTableBtn');
  if (reserveTableBtn) {
    reserveTableBtn.addEventListener('click', () => {
      window.location.href = 'reservation.html';
    });
  }

  if (menuSearch) {
    menuSearch.addEventListener('input', (e) => {
      // Placeholder: Implement search/filter logic here
      console.log('Search query:', e.target.value);
    });
  }
});
