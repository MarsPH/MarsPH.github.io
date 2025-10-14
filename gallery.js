let currentSlide = 0;
const totalSlides = 5;

function showSlide(index) {
  const track = document.querySelector('.gallery-track');
  if (track) {
    track.style.transform = `translateX(-${index * 33.333}%)`;
  }

  // Update indicators
  const indicators = document.querySelectorAll('.indicator');
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
  });

  // Add smooth scrolling effect
  const container = document.querySelector('.gallery-container');
  if (container) {
    container.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

function goToSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
}

// Auto-play functionality (optional)
let autoPlayInterval;

function startAutoPlay() {
  autoPlayInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  showSlide(currentSlide);

  // Pause auto-play on hover
  const gallery = document.querySelector('.gallery-container');
  if (gallery) {
    gallery.addEventListener('mouseenter', stopAutoPlay);
    gallery.addEventListener('mouseleave', startAutoPlay);
  }

  // Start auto-play
  startAutoPlay();
});
