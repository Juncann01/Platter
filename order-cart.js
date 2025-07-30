// order-cart.js - JavaScript for Cart Page interactivity

document.addEventListener('DOMContentLoaded', () => {
  const cartItemsContainer = document.querySelector('.cart-items');
  const totalPriceElem = document.getElementById('totalPrice');
  const checkoutBtn = document.getElementById('checkoutBtn');

  // Sample cart data (in real app, this would come from backend or localStorage)
  let cart = [
    {
      id: 1,
      name: 'Spicy Chicken Wings',
      price: 12.99,
      quantity: 2,
      image: 'assets/dish1.jpg',
    },
    {
      id: 2,
      name: 'Vegan Salad Bowl',
      price: 10.99,
      quantity: 1,
      image: 'assets/dish2.jpg',
    },
  ];

  function renderCart() {
    cartItemsContainer.innerHTML = '';
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
      totalPriceElem.textContent = '0.00';
      checkoutBtn.disabled = true;
      return;
    }
    checkoutBtn.disabled = false;

    cart.forEach(item => {
      const itemElem = document.createElement('div');
      itemElem.className = 'cart-item';
      itemElem.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <div class="cart-item-details">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-quantity">
            <button class="quantity-btn" aria-label="Decrease quantity" data-id="${item.id}" data-action="decrease">-</button>
            <input type="number" min="1" value="${item.quantity}" aria-label="Quantity for ${item.name}" data-id="${item.id}" />
            <button class="quantity-btn" aria-label="Increase quantity" data-id="${item.id}" data-action="increase">+</button>
          </div>
        </div>
        <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
      `;
      cartItemsContainer.appendChild(itemElem);
    });

    updateTotal();
  }

  function updateTotal() {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    totalPriceElem.textContent = total.toFixed(2);
  }

  function changeQuantity(id, action) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    if (action === 'increase') {
      item.quantity++;
    } else if (action === 'decrease' && item.quantity > 1) {
      item.quantity--;
    }
    renderCart();
  }

  cartItemsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('quantity-btn')) {
      const id = parseInt(e.target.dataset.id);
      const action = e.target.dataset.action;
      changeQuantity(id, action);
    }
  });

  cartItemsContainer.addEventListener('change', (e) => {
    if (e.target.tagName === 'INPUT' && e.target.type === 'number') {
      const id = parseInt(e.target.dataset.id);
      const value = parseInt(e.target.value);
      if (value >= 1) {
        const item = cart.find(i => i.id === id);
        if (item) {
          item.quantity = value;
          updateTotal();
        }
      }
    }
  });

  checkoutBtn.addEventListener('click', () => {
    // Save cart to localStorage for state preservation
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'checkout.html';
  });

  renderCart();
});
