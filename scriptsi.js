// script.js
const flowers = document.querySelectorAll('.flower');

flowers.forEach(flower => {
    flower.addEventListener('click', () => {
        flower.style.animation = 'none';
        void flower.offsetHeight; // Trigger reflow
        flower.style.animation = null;
    });
});