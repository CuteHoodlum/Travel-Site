  const filterButtons = document.querySelectorAll('.filter-btn');
  const hotelCards = document.querySelectorAll('.hotel-card-wrapper');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedCountry = button.textContent.trim();

      hotelCards.forEach(card => {
        const country = card.getAttribute('data-country');

        if (selectedCountry === 'All' || country === selectedCountry) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });

      // Optional: Highlight the active button
      filterButtons.forEach(btn => btn.classList.remove('btn-dark'));
      filterButtons.forEach(btn => btn.classList.add('btn-outline-secondary'));
      button.classList.remove('btn-outline-secondary');
      button.classList.add('btn-dark');
    });
  });

