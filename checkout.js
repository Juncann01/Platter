// checkout.js - JavaScript for Checkout Page interactivity

document.addEventListener('DOMContentLoaded', () => {
  const orderTypeRadios = document.querySelectorAll('input[name="orderType"]');
  const deliveryFields = document.getElementById('deliveryFields');
  const dineInFields = document.getElementById('dineInFields');
  const checkoutForm = document.getElementById('checkoutForm');

  function updateFields() {
    const selected = document.querySelector('input[name="orderType"]:checked').value;
    if (selected === 'delivery') {
      deliveryFields.style.display = 'block';
      dineInFields.style.display = 'none';
      deliveryFields.querySelector('input').required = true;
      dineInFields.querySelector('input').required = false;
    } else if (selected === 'dinein') {
      deliveryFields.style.display = 'none';
      dineInFields.style.display = 'block';
      deliveryFields.querySelector('input').required = false;
      dineInFields.querySelector('input').required = true;
    } else {
      deliveryFields.style.display = 'none';
      dineInFields.style.display = 'none';
      deliveryFields.querySelector('input').required = false;
      dineInFields.querySelector('input').required = false;
    }
  }

  orderTypeRadios.forEach(radio => {
    radio.addEventListener('change', updateFields);
  });

  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!checkoutForm.checkValidity()) {
      checkoutForm.reportValidity();
      return;
    }
    alert('Order placed successfully!');
    // In real app, submit form data to backend
    // Clear cart from localStorage after order placed
    localStorage.removeItem('cart');
    // Redirect to order confirmation page
    window.location.href = 'order-confirmation.html';
  });

  updateFields();
});
