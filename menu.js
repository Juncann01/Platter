// menu.js - JavaScript for Menu Page interactivity

document.addEventListener('DOMContentLoaded', () => {
  const dishes = [
    {
      id: 1,
      category: 'starters',
      name: 'Bruschetta',
      description: 'Grilled bread with tomato, garlic, and basil.',
      dietary: ['vegetarian'],
      price: 6.99,
      popularity: 8,
      spiciness: 1,
      image: 'assets/bruschetta.jpg',
      ingredients: 'Bread, tomato, garlic, basil, olive oil',
    },
    {
      id: 2,
      category: 'mains',
      name: 'Grilled Salmon',
      description: 'Fresh salmon with lemon butter sauce.',
      dietary: ['gluten-free'],
      price: 18.99,
      popularity: 9,
      spiciness: 0,
      image: 'assets/grilled-salmon.jpg',
      ingredients: 'Salmon, lemon, butter, herbs',
    },
    {
      id: 3,
      category: 'desserts',
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with molten center.',
      dietary: ['vegetarian'],
      price: 7.99,
      popularity: 10,
      spiciness: 0,
      image: 'assets/lava-cake.jpg',
      ingredients: 'Chocolate, flour, eggs, sugar, butter',
    },
    {
      id: 4,
      category: 'mains',
      name: 'Spicy Vegan Curry',
      description: 'Aromatic curry with chickpeas and vegetables.',
      dietary: ['vegan', 'gluten-free'],
      price: 14.99,
      popularity: 7,
      spiciness: 4,
      image: 'assets/vegan-curry.jpg',
      ingredients: 'Chickpeas, vegetables, spices, coconut milk',
    },
    // Add more dishes as needed
  ];

  const dishList = document.querySelector('.dish-list');
  const categoryFilter = document.getElementById('categoryFilter');
  const dietFilter = document.getElementById('dietFilter');
  const sortFilter = document.getElementById('sortFilter');
  const dishModal = document.getElementById('dishModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalImage = document.getElementById('modalImage');
  const modalDescription = document.getElementById('modalDescription');
  const modalIngredients = document.getElementById('modalIngredients');
  const addToCartBtn = document.getElementById('addToCartBtn');
  const closeModalBtn = dishModal.querySelector('.close-modal');

  function renderDishes() {
    dishList.innerHTML = '';
    let filteredDishes = dishes;

    // Filter by category
    const category = categoryFilter.value;
    if (category !== 'all') {
      filteredDishes = filteredDishes.filter(d => d.category === category);
    }

    // Filter by dietary
    const diet = dietFilter.value;
    if (diet !== 'all') {
      filteredDishes = filteredDishes.filter(d => d.dietary.includes(diet));
    }

    // Sort dishes
    const sort = sortFilter.value;
    if (sort === 'price-asc') {
      filteredDishes.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
      filteredDishes.sort((a, b) => b.price - a.price);
    } else if (sort === 'popularity') {
      filteredDishes.sort((a, b) => b.popularity - a.popularity);
    } else if (sort === 'spiciness') {
      filteredDishes.sort((a, b) => b.spiciness - a.spiciness);
    }

    filteredDishes.forEach(dish => {
      const card = document.createElement('article');
      card.className = 'dish-card';
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-pressed', 'false');
      card.innerHTML = `
        <img src="${dish.image}" alt="${dish.name}" />
        <h3>${dish.name}</h3>
        <p>${dish.description}</p>
        <div class="dietary-tags">
          ${dish.dietary.map(tag => `<span class="dietary-tag">${tag}</span>`).join('')}
        </div>
        <div class="price">$${dish.price.toFixed(2)}</div>
        <button class="add-to-cart-btn" data-id="${dish.id}">Add to Cart</button>
      `;

      // Open modal on card click or Enter key
      card.addEventListener('click', () => openModal(dish));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(dish);
        }
      });

      dishList.appendChild(card);
    });
  }

  function openModal(dish) {
    modalTitle.textContent = dish.name;
    modalImage.src = dish.image;
    modalImage.alt = dish.name;
    modalDescription.textContent = dish.description;
    modalIngredients.textContent = dish.ingredients;
    addToCartBtn.dataset.id = dish.id;
    dishModal.style.display = 'flex';
    dishModal.setAttribute('aria-hidden', 'false');
    addToCartBtn.focus();
  }

  function closeModal() {
    dishModal.style.display = 'none';
    dishModal.setAttribute('aria-hidden', 'true');
  }

  closeModalBtn.addEventListener('click', closeModal);
  dishModal.addEventListener('click', (e) => {
    if (e.target === dishModal) {
      closeModal();
    }
  });

  addToCartBtn.addEventListener('click', () => {
    const dishId = addToCartBtn.dataset.id;
    alert(`Added dish ID ${dishId} to cart!`);
    closeModal();
  });

  categoryFilter.addEventListener('change', renderDishes);
  dietFilter.addEventListener('change', renderDishes);
  sortFilter.addEventListener('change', renderDishes);

  renderDishes();
});
