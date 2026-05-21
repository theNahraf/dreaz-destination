/* ========== DREMZ DESTINATION — Shared App Logic ========== */

// ---- SVG Logo Definitions ----
const LOGO_SVG = {
  // Horizontal logo (navbar)
  horizontal: `
    <div class="flex items-center gap-2 md:gap-3">
      <img src="dd-logo.png" alt="DD Logo" class="h-9 md:h-12 w-auto object-contain">
      <div class="flex flex-col justify-center">
        <div class="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-1.5 leading-tight sm:leading-none">
          <span class="font-heading text-[15px] sm:text-[20px] md:text-2xl font-bold text-white tracking-[2px]">DREMZ</span>
          <span class="font-heading text-[15px] sm:text-[20px] md:text-2xl font-bold text-white tracking-[2px]">DESTINATION</span>
        </div>
        <span class="font-body text-[6px] md:text-[8px] text-amber-500 tracking-[2px] md:tracking-[4px] uppercase opacity-80 mt-1">Explore. Experience. Escape.</span>
      </div>
    </div>
  `,

  // Stacked logo (footer)
  stacked: `
    <div class="flex flex-col items-center text-center gap-4">
      <img src="dd-logo.png" alt="DD Logo" class="h-16 w-auto object-contain">
      <div class="flex flex-col justify-center">
        <div class="flex items-baseline justify-center gap-1.5 leading-none">
          <span class="font-heading text-xl font-bold text-white tracking-[3px]">DREMZ</span>
          <span class="font-heading text-xl font-bold text-white tracking-[3px]">DESTINATION</span>
        </div>
        <span class="font-body text-[7px] text-amber-500 tracking-[3px] uppercase opacity-70 mt-1.5">Explore. Experience. Escape.</span>
      </div>
    </div>
  `,

  // Icon only (favicon)
  icon: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 44">
      <defs>
        <linearGradient id="mg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0E7490"/>
          <stop offset="100%" style="stop-color:#0A1628"/>
        </linearGradient>
        <linearGradient id="sg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#FBBF24"/>
          <stop offset="100%" style="stop-color:#F59E0B"/>
        </linearGradient>
      </defs>
      <path d="M8 40 L20 12 L28 24 L36 8 L44 40 Z" fill="url(#mg)" opacity="0.9"/>
      <path d="M4 40 L16 18 L24 30 L32 14 L40 28 L48 40 Z" fill="url(#mg)"/>
      <circle cx="38" cy="14" r="6" fill="url(#sg)" opacity="0.9"/>
      <path d="M26 14 Q32 2 44 6" stroke="#F59E0B" stroke-width="1.5" fill="none" opacity="0.6"/>
    </svg>`
};

// ---- Phone & links config ----
const PHONE = '918178390282';
const PHONE_DISPLAY = '+91 8178390282';
const PHONEDISPLAY = '+91 8700282601';
const WHATSAPP_BASE = `https://wa.me/${PHONE}`;
const INSTAGRAM_URL = 'https://instagram.com/dremzdestination';
const EMAIL = 'dremzdestination@gmail.com';

function waLink(msg) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(msg)}`;
}

// ---- Get current page ----
function currentPage() {
  const path = window.location.pathname;
  if (path.includes('packages')) return 'packages';
  if (path.includes('hotels')) return 'hotels';
  if (path.includes('about')) return 'about';
  if (path.includes('blog')) return 'blog';
  if (path.includes('contact')) return 'contact';
  if (path.includes('reviews')) return 'reviews';
  return 'home';
}

// ---- Inject Navbar ----
function renderNavbar() {
  const page = currentPage();
  const links = [
    { href: 'index.html?v=4', label: 'Home', id: 'home' },
    {
      label: 'h +',
      id: 'domestic',
      dropdown: [
        { href: 'hotels.html?v=4', label: 'Hotels' },
        { href: 'packages.html?v=4', label: 'Packages' }
      ]
    },
    { href: 'about.html?v=4', label: 'About', id: 'about' },
    { href: 'reviews.html?v=4', label: 'Reviews', id: 'reviews' },
    { href: 'blog.html?v=4', label: 'Blog', id: 'blog' },
    { href: 'contact.html?v=4', label: 'Contact', id: 'contact' }
  ];

  const navLinksHTML = links.map(l => {
    if (l.dropdown) {
      return `
        <div class="nav-dropdown relative group">
          <button class="nav-link flex items-center gap-1 ${page === l.id || page === 'packages' || page === 'hotels' ? 'active' : ''}" style="text-transform: uppercase;">
            ${l.label}
          </button>
          <div class="dropdown-menu absolute top-full left-0 mt-2 w-48 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 flex flex-col z-50">
            ${l.dropdown.map(d => `<a href="${d.href}" class="px-5 py-3 text-sm text-gray-800 hover:bg-gray-50 hover:text-teal-600 transition-colors border-b border-gray-200 last:border-0" style="text-transform: uppercase; letter-spacing: 0.5px;">${d.label}</a>`).join('')}
          </div>
        </div>
      `;
    }
    return `<a href="${l.href}" class="nav-link ${page === l.id ? 'active' : ''}">${l.label}</a>`;
  }).join('');

  const mobileLinksHTML = links.map(l => {
    if (l.dropdown) {
      return `
        <div class="mobile-dropdown-group border-b border-white/10">
          <div class="text-white/80 py-3 text-lg font-medium">${l.label}</div>
          <div class="pl-4 flex flex-col pb-2">
            ${l.dropdown.map(d => `<a href="${d.href}" class="block text-white/60 hover:text-amber-400 py-2 text-md transition-colors">${d.label}</a>`).join('')}
          </div>
        </div>
      `;
    }
    return `<a href="${l.href}" class="block text-white/80 hover:text-amber-400 py-3 text-lg font-medium border-b border-white/10 transition-colors ${page === l.id ? 'text-amber-400' : ''}">${l.label}</a>`;
  }).join('');

  const header = document.createElement('header');
  header.className = 'navbar';
  header.id = 'main-navbar';
  header.innerHTML = `
    <nav class="max-w-7xl mx-auto flex items-center justify-between" aria-label="Main navigation">
      <a href="index.html" class="flex-shrink-0" aria-label="Dremz Destination Home">
        ${LOGO_SVG.horizontal}
      </a>
      <div class="hidden lg:flex items-center gap-8">
        ${navLinksHTML}
      </div>
      <div class="hidden lg:flex items-center gap-4">
        <a href="tel:${PHONE_DISPLAY.replace(/\s/g, '')}" class="text-white/70 hover:text-white text-sm transition-colors">
          <i class="fas fa-phone-alt mr-1"></i>${PHONE_DISPLAY}
        </a>
        <a href="${waLink('Hi! I\'d like a free quote for a customized trip. Please share details.')}" target="_blank" class="btn-gold text-sm !py-2.5 !px-5">
          <span>Get a Free Quote</span>
          <i class="fab fa-whatsapp text-lg"></i>
        </a>
      </div>
      <button class="lg:hidden text-white text-2xl p-2" id="hamburger-btn" aria-label="Open menu">
        <i class="fas fa-bars"></i>
      </button>
    </nav>
  `;
  document.body.prepend(header);

  // Mobile menu
  const mobileOverlay = document.createElement('div');
  mobileOverlay.className = 'mobile-overlay';
  mobileOverlay.id = 'mobile-overlay';
  document.body.appendChild(mobileOverlay);

  const mobileMenu = document.createElement('div');
  mobileMenu.className = 'mobile-menu';
  mobileMenu.id = 'mobile-menu';
  mobileMenu.innerHTML = `
    <button class="absolute top-5 right-5 text-white text-2xl" id="close-menu-btn" aria-label="Close menu">
      <i class="fas fa-times"></i>
    </button>
    <div class="mb-6 pt-2">${LOGO_SVG.horizontal}</div>
    ${mobileLinksHTML}
    <div class="mt-8 space-y-4">
      <a href="tel:${PHONE_DISPLAY.replace(/\s/g, '')}" class="flex items-center gap-3 text-white/70 hover:text-white">
        <i class="fas fa-phone-alt"></i>${PHONE_DISPLAY}
      </a>
      <a href="${waLink('Hi! I\'d like a free quote for a customized trip.')}" target="_blank" class="btn-gold w-full justify-center text-center">
        <span>Get a Free Quote</span>
        <i class="fab fa-whatsapp text-lg"></i>
      </a>
    </div>
  `;
  document.body.appendChild(mobileMenu);

  // Hamburger toggle
  document.getElementById('hamburger-btn').addEventListener('click', () => {
    mobileMenu.classList.add('open');
    mobileOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
  const closeMenu = () => {
    mobileMenu.classList.remove('open');
    mobileOverlay.classList.remove('open');
    document.body.style.overflow = '';
  };
  document.getElementById('close-menu-btn').addEventListener('click', closeMenu);
  mobileOverlay.addEventListener('click', closeMenu);

  // Scroll behavior
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('main-navbar');
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = window.scrollY;
  });
}

// ---- Inject Footer ----
function renderFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <!-- Brand -->
        <div class="col-span-2 lg:col-span-1">
          <div class="mb-6">${LOGO_SVG.stacked}</div>
          <p class="text-white/60 text-sm leading-relaxed mb-6">Crafting unforgettable travel experiences since 2024. Your trusted partner for customized trips across the world.</p>
          <div class="flex gap-3 justify-center lg:justify-start">
            <a href="${waLink('Hi! I\'m interested in planning a trip.')}" target="_blank" class="footer-social-icon" aria-label="WhatsApp">
              <i class="fab fa-whatsapp"></i>
            </a>
            <a href="${INSTAGRAM_URL}" target="_blank" class="footer-social-icon" aria-label="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="footer-social-icon" aria-label="Facebook">
              <i class="fab fa-facebook-f"></i>
            </a>

          </div>
        </div>

        <!-- Quick Links -->
        <div class="col-span-1">
          <h4 class="text-white font-semibold text-base lg:text-lg mb-4 lg:mb-5 font-sans">Quick Links</h4>
          <ul class="space-y-3 text-sm">
            <li><a href="index.html"><i class="fas fa-chevron-right text-[10px] text-teal-400 mr-2"></i>Home</a></li>
            <li><a href="packages.html"><i class="fas fa-chevron-right text-[10px] text-teal-400 mr-2"></i>Packages</a></li>
            <li><a href="hotels.html"><i class="fas fa-chevron-right text-[10px] text-teal-400 mr-2"></i>Hotels</a></li>
            <li><a href="about.html"><i class="fas fa-chevron-right text-[10px] text-teal-400 mr-2"></i>About</a></li>
            <li><a href="blog.html"><i class="fas fa-chevron-right text-[10px] text-teal-400 mr-2"></i>Blog</a></li>
            <li><a href="contact.html"><i class="fas fa-chevron-right text-[10px] text-teal-400 mr-2"></i>Contact</a></li>
          </ul>
        </div>

        <!-- Top Destinations -->
        <div class="col-span-1">
          <h4 class="text-white font-semibold text-base lg:text-lg mb-4 lg:mb-5 font-sans">Destinations</h4>
          <ul class="space-y-3 text-sm">
          <li><a href="packages.html?v=4#rajasthan"><i class="fas fa-map-marker-alt text-[10px] text-amber-400 mr-2"></i>Rajasthan</a></li>
          <li><a href="packages.html?v=4#goa"><i class="fas fa-map-marker-alt text-[10px] text-amber-400 mr-2"></i>Goa</a></li>
            <li><a href="packages.html?v=4#kashmir"><i class="fas fa-map-marker-alt text-[10px] text-amber-400 mr-2"></i>Kashmir</a></li>
            <li><a href="packages.html?v=4#kerala"><i class="fas fa-map-marker-alt text-[10px] text-amber-400 mr-2"></i>Kerala</a></li>
            <li><a href="packages.html?v=4#ladakh"><i class="fas fa-map-marker-alt text-[10px] text-amber-400 mr-2"></i>Ladakh</a></li>
            <li><a href="packages.html?v=4#uttarakhand"><i class="fas fa-map-marker-alt text-[10px] text-amber-400 mr-2"></i>Uttarakhand</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="col-span-2 lg:col-span-1 mt-4 lg:mt-0">
          <h4 class="text-white font-semibold text-lg mb-5 font-sans text-center lg:text-left">Contact Us</h4>
          <div class="space-y-3 text-sm">
            <a href="tel:${PHONE_DISPLAY.replace(/\s/g, '')}" class="flex items-center gap-3 hover:text-white">
              <i class="fas fa-phone-alt text-teal-400"></i>${PHONE_DISPLAY}
            </a>
            <a href="tel:${PHONEDISPLAY.replace(/\s/g, '')}" class="flex items-center gap-3 hover:text-white">
              <i class="fas fa-phone-alt text-teal-400"></i>${PHONEDISPLAY}
            </a>
            <a href="mailto:${EMAIL}" class="flex items-center gap-3 hover:text-white">
              <i class="fas fa-envelope text-teal-400"></i>${EMAIL}
            </a>
          </div>
        </div>
      </div>

      <!-- Trust Seals -->
      <div class="mt-12 pt-8 border-t border-white/10">
        <div class="flex flex-wrap justify-center gap-6 mb-8">
          <div class="flex items-center gap-2 text-white/50 text-xs">
            <i class="fas fa-shield-alt text-teal-400 text-lg"></i>
            <span>100% Secure Booking</span>
          </div>
          <div class="flex items-center gap-2 text-white/50 text-xs">
            <i class="fas fa-lock text-teal-400 text-lg"></i>
            <span>SSL Encrypted</span>
          </div>
          <div class="flex items-center gap-2 text-white/50 text-xs">
            <i class="fas fa-check-circle text-teal-400 text-lg"></i>
            <span>Verified Agency</span>
          </div>
          <div class="flex items-center gap-2 text-white/50 text-xs">
            <i class="fas fa-award text-amber-400 text-lg"></i>
            <span>5-Star Rated</span>
          </div>
        </div>
        <div class="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
          <p class="text-white/40 text-sm">© ${new Date().getFullYear()} Dremz Destination. All rights reserved. <span class="ml-2">Last updated: May 2026</span></p>
          
        </div>
      </div>
    </div>
  `;
  // Insert footer before scripts or at end of body
  const mainContent = document.getElementById('main-content');
  if (mainContent) {
    mainContent.after(footer);
  } else {
    document.body.appendChild(footer);
  }
}

// ---- Floating WhatsApp Button ----
function renderWhatsAppFloat() {
  const btn = document.createElement('a');
  btn.href = waLink('Hi! I\'m interested in booking a trip. Please share details.');
  btn.target = '_blank';
  btn.className = 'whatsapp-float';
  btn.setAttribute('aria-label', 'Chat on WhatsApp');
  btn.innerHTML = '<i class="fab fa-whatsapp"></i>';
  document.body.appendChild(btn);
}

// ---- Mobile Book Now Bar ----
function renderMobileBookBar() {
  const bar = document.createElement('div');
  bar.className = 'mobile-book-bar';
  bar.innerHTML = `
    <div>
      <div class="text-white font-semibold text-sm">Plan Your Dream Trip</div>
      <div class="text-amber-400 text-xs">100% Customizable</div>
    </div>
    <a href="${waLink('Hi! I want to plan my dream trip. Please help!')}" target="_blank" class="btn-gold !py-2 !px-4 text-sm">
      <span>Book Now</span>
      <i class="fab fa-whatsapp"></i>
    </a>
  `;
  document.body.appendChild(bar);
}

// ---- Discount Popup (10s delay) ----
function initDiscountPopup() {
  if (sessionStorage.getItem('popupDismissed')) return;

  setTimeout(() => {
    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
    overlay.id = 'discount-popup';
    overlay.innerHTML = `
      <div class="popup-content text-center">
        <button class="popup-close" onclick="closeDiscountPopup()">&times;</button>
        <div class="text-5xl mb-4">🎉</div>
        <h3 class="text-2xl font-bold mb-2" style="font-family:'Playfair Display',serif; color:#0A1628">Get ₹500 Off!</h3>
        <p class="text-gray-600 mb-1">On your first trip with Dremz Destination</p>
        <p class="text-sm text-gray-400 mb-6">Talk to our travel expert now on WhatsApp</p>
        <a href="${waLink('Hi! I saw the ₹500 off offer. I\'d like to plan a trip!')}" target="_blank" class="btn-gold w-full justify-center text-center block">
          <span>Claim Offer on WhatsApp</span>
          <i class="fab fa-whatsapp text-xl"></i>
        </a>
        <p class="text-xs text-gray-400 mt-4">*Valid for new customers only</p>
      </div>
    `;
    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add('active'));
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeDiscountPopup();
    });
  }, 10000);
}

function closeDiscountPopup() {
  const popup = document.getElementById('discount-popup');
  if (popup) {
    popup.classList.remove('active');
    setTimeout(() => popup.remove(), 300);
    sessionStorage.setItem('popupDismissed', 'true');
  }
}
window.closeDiscountPopup = closeDiscountPopup;

// ---- Toast System ----
function showToast(type, title, message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
  const iconColor = type === 'success' ? '#10B981' : '#EF4444';
  toast.innerHTML = `
    <i class="fas ${icon} text-xl" style="color:${iconColor}"></i>
    <div>
      <div class="font-semibold text-sm" style="color:#0A1628">${title}</div>
      <div class="text-xs text-gray-500">${message}</div>
    </div>
  `;
  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 5000);
}
window.showToast = showToast;

// ---- Loading Screen ----
function renderLoadingScreen() {
  const screen = document.createElement('div');
  screen.className = 'loading-screen';
  screen.id = 'loading-screen';
  screen.innerHTML = `
    <div class="text-center">
      <div class="mb-4">${LOGO_SVG.stacked}</div>
    </div>
  `;
  document.body.prepend(screen);
  window.addEventListener('load', () => {
    setTimeout(() => {
      screen.classList.add('hidden');
      setTimeout(() => screen.remove(), 600);
    }, 800);
  });
}

// ---- Animated Counter ----
function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'));
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 2000;
        const start = 0;
        const startTime = performance.now();
        function update(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic
          const current = Math.floor(start + (target - start) * eased);
          el.textContent = current.toLocaleString() + suffix;
          if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3 });
  counters.forEach(c => observer.observe(c));
}

// ---- Initialize Everything ----
document.addEventListener('DOMContentLoaded', () => {
  renderLoadingScreen();
  renderNavbar();
  renderFooter();
  renderWhatsAppFloat();
  renderMobileBookBar();
  initDiscountPopup();

  // Init AOS
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80
    });
  }

  // Animate counters
  animateCounters();
});
