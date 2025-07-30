// account.js - JavaScript for Account/Profile Page interactivity

document.addEventListener('DOMContentLoaded', () => {
  const profileForm = document.getElementById('profileForm');

  profileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!profileForm.checkValidity()) {
      profileForm.reportValidity();
      return;
    }
    alert('Profile saved successfully!');
    // In real app, submit form data to backend
  });
});
