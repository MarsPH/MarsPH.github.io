/**
 * Epic AAA Game Developer Portfolio
 * Advanced JavaScript for Maximum Impact
 */

// Epic Portfolio Class
class EpicPortfolio {
  constructor() {
    this.init();
  }

  init() {
    this.setupLoader();
    this.setupNavigation();
    this.setupScrollEffects();
    this.setupAnimations();
    this.setupCounters();
    this.setupParticles();
    this.setupIntersectionObserver();
    this.setupKeyboardNavigation();
    this.setupPerformanceOptimizations();
  }

  // Epic Loading Screen
  setupLoader() {
    const loader = document.getElementById('epic-loader');
    const progressBar = document.getElementById('progress-bar');

    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => {
          loader.style.opacity = '0';
          setTimeout(() => {
            loader.style.display = 'none';
            this.startMainAnimations();
          }, 500);
        }, 500);
      }
      progressBar.style.width = progress + '%';
    }, 100);
  }

  // Navigation Setup
  setupNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');

      // Animate hamburger
      const spans = navToggle.querySelectorAll('span');
      if (navToggle.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });

    // Smooth scrolling for nav links
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }

        // Close mobile menu
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      });
    });

    // Navbar scroll effect
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const navbar = document.getElementById('epic-navbar');

      if (scrollTop > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.backdropFilter = 'blur(20px)';
      } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
      }

      lastScrollTop = scrollTop;
    });
  }

  // Scroll Effects
  setupScrollEffects() {
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.epic-hero');
      const heroContent = document.querySelector('.hero-content');

      if (hero && heroContent) {
        const rate = scrolled * -0.5;
        heroContent.style.transform = `translateY(${rate}px)`;
      }
    });

    // Scroll indicator hide/show
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          scrollIndicator.style.opacity = '0';
          scrollIndicator.style.pointerEvents = 'none';
        } else {
          scrollIndicator.style.opacity = '1';
          scrollIndicator.style.pointerEvents = 'auto';
        }
      });
    }
  }

  // Animation Setup
  setupAnimations() {
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out-cubic',
        once: true,
        offset: 100,
        delay: 0
      });
    }

    // Add CSS animations to elements
    this.addCSSAnimations();
  }

  addCSSAnimations() {
    // Stagger animation for project cards
    const projectCards = document.querySelectorAll('.project-card-epic');
    projectCards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
    });

    // Stagger animation for tech items
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach((item, index) => {
      item.style.animationDelay = `${index * 0.1}s`;
    });
  }

  // Counter Animation
  setupCounters() {
    const counters = document.querySelectorAll('.stat-number');

    const animateCounter = (counter) => {
      const target = parseInt(counter.getAttribute('data-target'));
      const increment = target / 100;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        counter.textContent = Math.floor(current);
      }, 20);
    };

    // Intersection Observer for counters
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
      counterObserver.observe(counter);
    });
  }

  // Particle System
  setupParticles() {
    const particlesContainer = document.getElementById('hero-particles');

    if (!particlesContainer) return;

    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';

      // Random properties
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 20 + 's';
      particle.style.animationDuration = (Math.random() * 10 + 10) + 's';

      // Random size
      const size = Math.random() * 4 + 2;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';

      // Random color
      const colors = ['#00d4ff', '#ff6b6b', '#4ecdc4', '#ffd700'];
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      particle.style.opacity = Math.random() * 0.6 + 0.2;

      particlesContainer.appendChild(particle);
      particles.push(particle);
    }

    // Add particle CSS
    const particleCSS = `
      .particle {
        position: absolute;
        border-radius: 50%;
        pointer-events: none;
        animation: particleFloat 20s linear infinite;
      }

      @keyframes particleFloat {
        0% {
          transform: translateY(100vh) translateX(0px);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translateY(-100px) translateX(100px);
          opacity: 0;
        }
      }
    `;

    const style = document.createElement('style');
    style.textContent = particleCSS;
    document.head.appendChild(style);
  }

  // Intersection Observer for Animations
  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.project-card-epic, .contact-card, .timeline-item');
    animateElements.forEach(el => observer.observe(el));
  }

  // Keyboard Navigation
  setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      // Skip to main content with Enter key
      if (e.key === 'Enter' && e.target.classList.contains('epic-skip-link')) {
        e.preventDefault();
        document.getElementById('main-content').focus();
      }

      // Escape key to close mobile menu
      if (e.key === 'Escape') {
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');

        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          navToggle.classList.remove('active');
        }
      }
    });
  }

  // Performance Optimizations
  setupPerformanceOptimizations() {
    // Lazy loading for images
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    }

    // Debounce scroll events
    this.debounce = (func, wait) => {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    };

    // Optimize scroll listeners
    const optimizedScrollHandler = this.debounce(() => {
      // Scroll optimizations here
    }, 16);

    window.addEventListener('scroll', optimizedScrollHandler);
  }

  // Start Main Animations
  startMainAnimations() {
    // Add loaded class to body
    document.body.classList.add('loaded');

    // Trigger hero animations
    this.animateHeroElements();

    // Initialize any additional animations
    this.initializeAdvancedAnimations();
  }

  animateHeroElements() {
    const heroElements = document.querySelectorAll('.hero-title, .hero-description, .hero-actions');

    heroElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate-in');
      }, index * 200);
    });
  }

  initializeAdvancedAnimations() {
    // Advanced floating animation for avatar elements
    const floatingElements = document.querySelectorAll('.floating-element');
    floatingElements.forEach((element, index) => {
      element.style.animationDelay = `${index * 0.5}s`;
    });

    // Add ripple effect to buttons
    this.addRippleEffect();

    // Initialize tech stack interactions
    this.initializeTechStack();
  }

  addRippleEffect() {
    const buttons = document.querySelectorAll('.btn-epic, .project-link, .contact-button');

    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          left: ${x}px;
          top: ${y}px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.6s linear;
          pointer-events: none;
        `;

        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);

        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });

    // Add ripple animation CSS
    const rippleCSS = `
      @keyframes ripple {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;

    const style = document.createElement('style');
    style.textContent = rippleCSS;
    document.head.appendChild(style);
  }

  initializeTechStack() {
    const techItems = document.querySelectorAll('.tech-item');

    techItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-5px) scale(1.05)';
      });

      item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
      });
    });
  }
}

// Advanced Utility Functions
class EpicUtils {
  static throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }

  static debounce(func, wait, immediate) {
    let timeout;
    return function() {
      const context = this, args = arguments;
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  static randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  static lerp(start, end, factor) {
    return start + (end - start) * factor;
  }
}

// Initialize Epic Portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const portfolio = new EpicPortfolio();

  // Add additional epic features
  EpicPortfolio.addEpicFeatures();
});

// Static methods for additional features
EpicPortfolio.addEpicFeatures = () => {
  // Add smooth scrolling to all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add loading states to images
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (!img.complete) {
      img.style.opacity = '0';
      img.addEventListener('load', () => {
        img.style.transition = 'opacity 0.3s ease';
        img.style.opacity = '1';
      });
    }
  });

  // Add advanced hover effects
  EpicPortfolio.addAdvancedHovers();

  // Initialize performance monitoring
  EpicPortfolio.initializePerformanceMonitoring();
};

EpicPortfolio.addAdvancedHovers = () => {
  const cards = document.querySelectorAll('.project-card-epic, .contact-card, .about-card');

  cards.forEach(card => {
    card.addEventListener('mouseenter', (e) => {
      // Add glow effect
      card.style.boxShadow = '0 20px 40px rgba(0, 212, 255, 0.3)';

      // Add subtle scale
      card.style.transform = 'translateY(-5px) scale(1.02)';
    });

    card.addEventListener('mouseleave', (e) => {
      card.style.boxShadow = '';
      card.style.transform = '';
    });
  });
};

EpicPortfolio.initializePerformanceMonitoring = () => {
  // Monitor Core Web Vitals
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        console.log('Performance Entry:', entry.name, entry.value);
      });
    });

    observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });
  }
};

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { EpicPortfolio, EpicUtils };
}
