/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    if (card.classList.contains('card--active')) {
      card.classList.remove('card--active');
    } else {
      card.classList.add('card--active');
    }
  });
});
