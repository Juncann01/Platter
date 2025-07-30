// reservation.js - JavaScript for Reservation Page interactivity

document.addEventListener('DOMContentLoaded', () => {
  const reservationForm = document.getElementById('reservationForm');

  reservationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!reservationForm.checkValidity()) {
      reservationForm.reportValidity();
      return;
    }
    alert('Reservation booked successfully!');
    // In real app, submit form data to backend
    reservationForm.reset();
    // Redirect to home page after successful reservation
    window.location.href = 'index.html';
  });
});
