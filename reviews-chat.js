// reviews-chat.js - JavaScript for Reviews & Chat Support Page interactivity

document.addEventListener('DOMContentLoaded', () => {
  const reviewForm = document.getElementById('reviewForm');
  const startChatBtn = document.getElementById('startChatBtn');
  const chatWidget = document.getElementById('chatWidget');

  reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!reviewForm.checkValidity()) {
      reviewForm.reportValidity();
      return;
    }
    alert('Thank you for your review!');
    reviewForm.reset();
  });

  startChatBtn.addEventListener('click', () => {
    alert('Live chat support coming soon!');
  });
});
