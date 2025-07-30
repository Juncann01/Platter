// order-history.js - JavaScript for Order History Page interactivity

document.addEventListener('DOMContentLoaded', () => {
  const ordersList = document.getElementById('orders');

  // Sample past orders data (in real app, fetch from backend)
  const pastOrders = [
    {
      id: 'ORD12345',
      date: '2024-06-01',
      items: [
        { name: 'Margherita Pizza', quantity: 1 },
        { name: 'Caesar Salad', quantity: 2 },
      ],
      total: 29.97,
      rating: 4,
    },
    {
      id: 'ORD12346',
      date: '2024-05-20',
      items: [
        { name: 'Spaghetti Bolognese', quantity: 1 },
      ],
      total: 15.99,
      rating: 5,
    },
  ];

  function renderOrders() {
    ordersList.innerHTML = '';
    pastOrders.forEach(order => {
      const li = document.createElement('li');

      const header = document.createElement('div');
      header.className = 'order-item-header';
      header.textContent = `Order #${order.id} - ${order.date}`;

      const itemsList = document.createElement('ul');
      order.items.forEach(item => {
        const itemLi = document.createElement('li');
        itemLi.textContent = `${item.quantity} x ${item.name}`;
        itemsList.appendChild(itemLi);
      });

      const total = document.createElement('p');
      total.textContent = `Total: $${order.total.toFixed(2)}`;

      const actions = document.createElement('div');
      actions.className = 'order-item-actions';

      const reorderBtn = document.createElement('button');
      reorderBtn.textContent = 'Quick Reorder';
      reorderBtn.addEventListener('click', () => {
        // Save the items of this order to localStorage cart and navigate to order-cart.html
        const reorderedItems = order.items.map(item => ({
          id: null, // id can be null or assigned if available
          name: item.name,
          price: 0, // price unknown here, could be fetched or set to 0
          quantity: item.quantity,
          image: '', // image unknown here
        }));
        localStorage.setItem('cart', JSON.stringify(reorderedItems));
        window.location.href = 'order-cart.html';
      });

      const downloadBtn = document.createElement('button');
      downloadBtn.textContent = 'Download Receipt';
      downloadBtn.addEventListener('click', () => {
        alert(`Downloading receipt for order #${order.id}... (feature coming soon)`);
      });

      const ratingDiv = document.createElement('div');
      ratingDiv.className = 'star-rating';
      for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.className = 'star' + (i <= order.rating ? ' filled' : '');
        star.textContent = '★';
        star.addEventListener('click', () => {
          alert(`You rated order #${order.id} with ${i} stars. (feature coming soon)`);
        });
        ratingDiv.appendChild(star);
      }

      actions.appendChild(reorderBtn);
      actions.appendChild(downloadBtn);
      actions.appendChild(ratingDiv);

      li.appendChild(header);
      li.appendChild(itemsList);
      li.appendChild(total);
      li.appendChild(actions);

      ordersList.appendChild(li);
    });
  }

  renderOrders();
});
