// order-tracking.js - JavaScript for Order Tracking Page interactivity

document.addEventListener('DOMContentLoaded', () => {
  const statusList = document.getElementById('statusList');
  const timeEstimate = document.getElementById('timeEstimate');
  const chatSupportBtn = document.getElementById('chatSupportBtn');

  const statuses = ['Ordered', 'Preparing', 'Ready', 'On the Way', 'Delivered'];
  let currentStatusIndex = 0;

  function updateStatus() {
    const items = statusList.querySelectorAll('.status-item');
    items.forEach((item, index) => {
      if (index === currentStatusIndex) {
        item.classList.add('current');
      } else {
        item.classList.remove('current');
      }
    });
    // Update estimated time based on status
    let estimateText = '';
    switch (statuses[currentStatusIndex]) {
      case 'Ordered':
        estimateText = 'Estimated time: 45-60 minutes';
        break;
      case 'Preparing':
        estimateText = 'Estimated time: 30-45 minutes';
        break;
      case 'Ready':
        estimateText = 'Estimated time: 15-30 minutes';
        break;
      case 'On the Way':
        estimateText = 'Estimated time: 5-15 minutes';
        break;
      case 'Delivered':
        estimateText = 'Order delivered. Enjoy your meal!';
        break;
      default:
        estimateText = '';
    }
    timeEstimate.textContent = estimateText;
  }

  chatSupportBtn.addEventListener('click', () => {
    alert('Chat support is coming soon!');
  });

  // Simulate status progression every 10 seconds for demo
  updateStatus();
  setInterval(() => {
    if (currentStatusIndex < statuses.length - 1) {
      currentStatusIndex++;
      updateStatus();
    }
  }, 10000);
});
