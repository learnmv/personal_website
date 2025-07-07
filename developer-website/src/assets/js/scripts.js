// Modern Portfolio JavaScript

// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    navbar.style.boxShadow = 'none';
  }
});

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Add animation to elements
document.addEventListener('DOMContentLoaded', () => {
  // Initialize animations
  const animatedElements = document.querySelectorAll('.timeline-item, .skill-category, .education-card, .stat, .project-card');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Counter animation for stats
  const stats = document.querySelectorAll('.stat-number');
  const animateCounter = (el) => {
    const target = parseInt(el.textContent.replace(/\D/g, ''));
    const increment = target / 50;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current) + (el.textContent.includes('+') ? '+' : '');
    }, 30);
  };

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        statsObserver.unobserve(entry.target);
      }
    });
  });

  stats.forEach(stat => {
    statsObserver.observe(stat);
  });
});

// Contact form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Create mailto link
    const mailtoLink = `mailto:maheshvarmadommaraju671@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    showNotification('Thank you! Your email client should open with the message ready to send.', 'success');
    
    // Reset form
    this.reset();
  });
}

// Notification system
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span class="notification-message">${message}</span>
      <button class="notification-close">&times;</button>
    </div>
  `;
  
  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#2563eb'};
    color: white;
    padding: 16px 20px;
    border-radius: 8px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    z-index: 10000;
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.3s ease;
    max-width: 400px;
  `;
  
  document.body.appendChild(notification);
  
  // Trigger animation
  setTimeout(() => {
    notification.style.opacity = '1';
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Auto remove
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 5000);
  
  // Close button
  notification.querySelector('.notification-close').addEventListener('click', () => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  });
}

// Skill tags hover effect
document.querySelectorAll('.skill-tag').forEach(tag => {
  tag.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)';
  });
  
  tag.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector('.hero');
  if (parallax) {
    const speed = scrolled * 0.5;
    parallax.style.transform = `translateY(${speed}px)`;
  }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Add CSS for active nav link
const style = document.createElement('style');
style.textContent = `
  .nav-link.active {
    color: var(--primary-color) !important;
  }
  .nav-link.active::after {
    width: 100% !important;
  }
`;
document.head.appendChild(style);

// Typing effect for hero subtitle (optional enhancement)
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Initialize typing effect on page load
document.addEventListener('DOMContentLoaded', () => {
  const heroSubtitle = document.querySelector('.hero-subtitle');
  if (heroSubtitle) {
    const originalText = heroSubtitle.textContent;
    setTimeout(() => {
      typeWriter(heroSubtitle, originalText, 80);
    }, 1000);
  }
});

// Easter egg: Console message
console.log(`
🚀 Welcome to Mahesh Dommaraju's Portfolio!
🎯 Interested in the code? Check out the repository!
💼 Looking for a talented Full-Stack Developer? Let's connect!
📧 Email: maheshvarmadommaraju671@gmail.com
🔗 LinkedIn: https://www.linkedin.com/in/maheshdommaraju/
`);

// Performance optimization: Lazy load images when implemented
function lazyLoadImages() {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// ===== VISITOR COUNTER FUNCTIONALITY =====
class VisitorCounter {
  constructor() {
    this.storageKey = 'mahesh-portfolio-visitors';
    this.userKey = 'mahesh-portfolio-user-id';
    this.visitKey = 'mahesh-portfolio-last-visit';
    this.init();
  }

  init() {
    const isUniqueVisitor = this.checkUniqueVisitor();
    if (isUniqueVisitor) {
      this.incrementVisitorCount();
    }
    
    this.displayVisitorCount();
    this.animateCounter();
  }

  checkUniqueVisitor() {
    // Generate a unique fingerprint for this browser/device
    const fingerprint = this.generateFingerprint();
    const storedFingerprint = localStorage.getItem(this.userKey);
    const lastVisit = localStorage.getItem(this.visitKey);
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

    // Check if this is a completely new visitor
    if (!storedFingerprint) {
      localStorage.setItem(this.userKey, fingerprint);
      localStorage.setItem(this.visitKey, now.toString());
      return true;
    }

    // Check if it's the same user but after 24 hours (return visitor)
    if (storedFingerprint === fingerprint) {
      if (!lastVisit || (now - parseInt(lastVisit)) > oneDay) {
        localStorage.setItem(this.visitKey, now.toString());
        return false; // Same user, don't increment
      }
      return false; // Same user within 24 hours
    }

    // Different fingerprint on same device (different user)
    localStorage.setItem(this.userKey, fingerprint);
    localStorage.setItem(this.visitKey, now.toString());
    return true;
  }

  generateFingerprint() {
    // Create a unique fingerprint based on browser/device characteristics
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillText('Visitor fingerprint', 2, 2);
    
    const fingerprint = [
      navigator.userAgent,
      navigator.language,
      screen.width + 'x' + screen.height,
      screen.colorDepth,
      new Date().getTimezoneOffset(),
      !!window.sessionStorage,
      !!window.localStorage,
      canvas.toDataURL()
    ].join('|');

    // Simple hash function
    let hash = 0;
    for (let i = 0; i < fingerprint.length; i++) {
      const char = fingerprint.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    
    return Math.abs(hash).toString(36);
  }

  incrementVisitorCount() {
    const currentCount = this.getVisitorCount();
    const newCount = currentCount + 1;
    localStorage.setItem(this.storageKey, newCount.toString());
    
    // Optional: Log the visit for analytics
    console.log(`New unique visitor! Total count: ${newCount}`);
  }

  getVisitorCount() {
    const count = localStorage.getItem(this.storageKey);
    return count ? parseInt(count) : 0;
  }

  displayVisitorCount() {
    const counterElement = document.getElementById('visitor-count');
    if (counterElement) {
      const count = this.getVisitorCount();
      counterElement.textContent = this.formatNumber(count);
    }
  }

  formatNumber(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toLocaleString(); // Adds commas for thousands
  }

  animateCounter() {
    const counterElement = document.getElementById('visitor-count');
    if (!counterElement) return;

    const finalCount = this.getVisitorCount();
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = finalCount / steps;

    let currentCount = 0;
    counterElement.textContent = '0';
    counterElement.classList.add('counting');

    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= finalCount) {
        currentCount = finalCount;
        clearInterval(timer);
        counterElement.classList.remove('counting');
        counterElement.classList.add('animate');
        setTimeout(() => counterElement.classList.remove('animate'), 300);
      }
      counterElement.textContent = this.formatNumber(Math.floor(currentCount));
    }, stepDuration);
  }

  // Get visitor analytics
  getVisitorAnalytics() {
    return {
      totalVisitors: this.getVisitorCount(),
      userFingerprint: localStorage.getItem(this.userKey),
      lastVisit: new Date(parseInt(localStorage.getItem(this.visitKey) || '0')),
      isReturningVisitor: !!localStorage.getItem(this.userKey)
    };
  }

  // Method to reset counter (for development/testing)
  resetCounter() {
    localStorage.removeItem(this.storageKey);
    localStorage.removeItem(this.userKey);
    localStorage.removeItem(this.visitKey);
    this.displayVisitorCount();
  }

  // Method to set a specific count (for development/testing)
  setVisitorCount(count) {
    localStorage.setItem(this.storageKey, count.toString());
    this.displayVisitorCount();
  }
}

// Initialize visitor counter when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize visitor counter
  const visitorCounter = new VisitorCounter();
  
  // Make it globally available for debugging
  window.visitorCounter = visitorCounter;
  
  // Set initial visitor count if it's the first time 
  const currentCount = visitorCounter.getVisitorCount();
  if (currentCount === 0) {
    // Start with true count - no fake base number
    console.log('Starting visitor counter from 0 - tracking real visitors only');
  }

  // Animate counter when it comes into view
  const counterSection = document.querySelector('.visitor-counter');
  if (counterSection) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            visitorCounter.animateCounter();
          }, 300);
          counterObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });

    counterObserver.observe(counterSection);
  }

  // Optional: Show welcome message for new vs returning visitors
  const analytics = visitorCounter.getVisitorAnalytics();
  if (analytics.isReturningVisitor) {
    console.log('Welcome back! 👋');
  } else {
    console.log('Welcome to my portfolio! 🎉');
  }
});

// Add some utility functions for the visitor counter
console.log(`
🎯 Visitor Counter Debug Commands:
- visitorCounter.resetCounter() - Reset visitor count to 0
- visitorCounter.setVisitorCount(number) - Set specific count
- visitorCounter.getVisitorCount() - Get current count
- visitorCounter.getVisitorAnalytics() - Get detailed analytics
- visitorCounter.animateCounter() - Replay animation
`);
