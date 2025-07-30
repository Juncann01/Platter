// order-confirmation.js - JavaScript for Order Confirmation Page interactivity

document.addEventListener('DOMContentLoaded', () => {
  const orderItemsList = document.getElementById('orderItems');
  const orderTotalElem = document.getElementById('orderTotal');
  const trackOrderBtn = document.getElementById('trackOrderBtn');

  // Sample order data (in real app, this would come from backend or state)
  const order = {
    items: [
      { name: 'Spicy Chicken Wings', quantity: 2, price: 12.99 },
      { name: 'Vegan Salad Bowl', quantity: 1, price: 10.99 },
    ],
    total: 36.97,
    estimatedTime: '30-45 minutes',
  };

  function renderOrderSummary() {
    orderItemsList.innerHTML = '';
    order.items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.quantity} x ${item.name} - $${(item.price * item.quantity).toFixed(2)}`;
      orderItemsList.appendChild(li);
    });
    orderTotalElem.textContent = order.total.toFixed(2);
    document.getElementById('estimatedTime').textContent = order.estimatedTime;
  }

  trackOrderBtn.addEventListener('click', () => {
    window.location.href = 'order-tracking.html';
  });

  renderOrderSummary();
});
