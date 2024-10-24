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
const cardInfos = document.querySelectorAll('.card__info');

const shortInfos = [
  'Discover the hidden gem of Abades, Tenerife! This tranquil coastal village offers crystal-clear waters, golden sands, and stunning views. Perfect for sunbathing, snorkeling, or simply relaxing, Abades is a peaceful escape from crowded spots.',
  'Explore the awe-inspiring Teide National Park, home to Spain’s highest peak and a UNESCO World Heritage Site. Whether hiking its volcanic trails or taking the cable car to the summit, you’ll be captivated by the otherworldly landscapes and breathtaking views',
  'Step back in time in San Cristóbal de La Laguna, a UNESCO World Heritage city rich in history and colonial architecture. Wander through its charming streets, admire beautifully preserved churches and palaces, and experience the vibrant culture of this picturesque town.'
]

cards.forEach(card => {
  card.addEventListener('click', () => {
    if (card.classList.contains('card--active')) {
      card.classList.remove('card--active');
    } else {
      card.classList.add('card--active');
    }
  });
});

if (window.innerWidth <= 411) {
  cardInfos.forEach((cardInfo, index) => {
    cardInfo.innerHTML =  shortInfos[index];
  });
}
