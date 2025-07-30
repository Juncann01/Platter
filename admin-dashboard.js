// admin-dashboard.js - JavaScript for Admin Dashboard interactivity

document.addEventListener('DOMContentLoaded', () => {
  const itemNameInput = document.getElementById('itemNameInput');
  const itemDescriptionInput = document.getElementById('itemDescriptionInput');
  const itemPriceInput = document.getElementById('itemPriceInput');
  const itemCategorySelect = document.getElementById('itemCategorySelect');
  const addItemBtn = document.getElementById('addItemBtn');
  const menuItemsTableBody = document.getElementById('menuItemsTableBody');

  // Sample data for demo purposes
  let menuItems = [
    {
      name: 'Spicy Chicken Sandwich',
      description: 'Grilled chicken with a spicy sauce, lettuce, and tomato on a toasted bun',
      price: 12.99,
      category: 'Sandwiches',
    },
    {
      name: 'Classic Burger',
      description: 'Juicy beef patty with cheese, lettuce, tomato, and pickles',
      price: 10.99,
      category: 'Burgers',
    },
    {
      name: 'Caesar Salad',
      description: 'Romaine lettuce with Caesar dressing, croutons, and parmesan cheese',
      price: 8.99,
      category: 'Salads',
    },
    {
      name: 'Pasta Primavera',
      description: 'Pasta with fresh vegetables and a light tomato sauce',
      price: 14.99,
      category: 'Pasta',
    },
    {
      name: 'Chocolate Cake',
      description: 'Rich chocolate cake with a creamy chocolate frosting',
      price: 6.99,
      category: 'Desserts',
    },
  ];

  function renderMenuItems() {
    menuItemsTableBody.innerHTML = '';
    menuItems.forEach((item, index) => {
      const tr = document.createElement('tr');
      tr.classList.add('border-t', 'border-t-[#e6e0db]');
      tr.innerHTML = `
        <td class="table-f7f7ddaf-33ea-4ecc-8951-45304a001acc-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181411] text-sm font-normal leading-normal">${item.name}</td>
        <td class="table-f7f7ddaf-33ea-4ecc-8951-45304a001acc-column-240 h-[72px] px-4 py-2 w-[400px] text-[#8a7560] text-sm font-normal leading-normal">${item.category}</td>
        <td class="table-f7f7ddaf-33ea-4ecc-8951-45304a001acc-column-360 h-[72px] px-4 py-2 w-[400px] text-[#8a7560] text-sm font-normal leading-normal">$${item.price.toFixed(2)}</td>
        <td class="table-f7f7ddaf-33ea-4ecc-8951-45304a001acc-column-480 h-[72px] px-4 py-2 w-60 text-[#8a7560] text-sm font-bold leading-normal tracking-[0.015em]">
          <button class="edit-btn text-blue-600 hover:underline mr-2" data-index="${index}">Edit</button> |
          <button class="remove-btn text-red-600 hover:underline ml-2" data-index="${index}">Remove</button>
        </td>
      `;
      menuItemsTableBody.appendChild(tr);
    });
    attachEventListeners();
  }

  function attachEventListeners() {
    const editButtons = document.querySelectorAll('.edit-btn');
    const removeButtons = document.querySelectorAll('.remove-btn');

    editButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const index = e.target.getAttribute('data-index');
        const item = menuItems[index];
        itemNameInput.value = item.name;
        itemDescriptionInput.value = item.description;
        itemPriceInput.value = item.price;
        itemCategorySelect.value = item.category;
        addItemBtn.textContent = 'Update Item';
        addItemBtn.setAttribute('data-edit-index', index);
      });
    });

    removeButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const index = e.target.getAttribute('data-index');
        menuItems.splice(index, 1);
        renderMenuItems();
      });
    });
  }

  addItemBtn.addEventListener('click', () => {
    const name = itemNameInput.value.trim();
    const description = itemDescriptionInput.value.trim();
    const price = parseFloat(itemPriceInput.value);
    const category = itemCategorySelect.value;

    if (!name || !description || isNaN(price) || !category) {
      alert('Please fill in all fields correctly.');
      return;
    }

    const editIndex = addItemBtn.getAttribute('data-edit-index');
    if (editIndex !== null) {
      // Update existing item
      menuItems[editIndex] = { name, description, price, category };
      addItemBtn.textContent = 'Add Item';
      addItemBtn.removeAttribute('data-edit-index');
    } else {
      // Add new item
      menuItems.push({ name, description, price, category });
    }

    // Clear inputs
    itemNameInput.value = '';
    itemDescriptionInput.value = '';
    itemPriceInput.value = '';
    itemCategorySelect.value = '';

    renderMenuItems();
  });

  renderMenuItems();
});
