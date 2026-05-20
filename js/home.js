/* ========== HOME PAGE — Dynamic Content & Interactions ========== */

// ---- Package Data ----
const homePackages = [
  {
    id: 1, title: 'Magical Kashmir', destination: 'Kashmir',
    image: 'https://media.gettyimages.com/id/173294490/photo/tourists-enjoying-in-snow-covered-landscape-jammu-and-kashmir-india.jpg?s=612x612&w=0&k=20&c=vrkqUKSMMwSfsyrMzfYjNZwYIO_GQyG-3oBXYode3vE=',
    duration: '5N / 6D', price: '₹18,999', rating: 4.9, reviews: 234,
    highlights: ['Dal Lake Shikara', 'Gulmarg Gondola', 'Pahalgam Valley'],
    type: 'family', badge: 'Bestseller'
  },
  {
    id: 2, title: 'Romantic Goa Getaway', destination: 'Goa',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80',
    duration: '4N / 5D', price: '₹12,499', rating: 4.8, reviews: 189,
    highlights: ['Beach Hopping', 'Water Sports', 'Nightlife Tour'],
    type: 'honeymoon', badge: 'Limited Slots'
  },
  {
    id: 3, title: 'Kerala Backwaters Bliss', destination: 'Kerala',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80',
    duration: '6N / 7D', price: '₹22,999', rating: 4.9, reviews: 312,
    highlights: ['Houseboat Stay', 'Munnar Tea Gardens', 'Alleppey'],
    type: 'family', badge: 'Top Rated'
  },
  {
    id: 4, title: 'Bali Adventure', destination: 'Bali',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
    duration: '5N / 6D', price: '₹34,999', rating: 4.7, reviews: 156,
    highlights: ['Ubud Rice Terraces', 'Sunset Temple', 'Snorkeling'],
    type: 'adventure', badge: 'Limited Slots'
  },
  {
    id: 5, title: 'Royal Rajasthan', destination: 'Rajasthan',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80',
    duration: '7N / 8D', price: '₹24,999', rating: 4.8, reviews: 278,
    highlights: ['Jaipur Forts', 'Udaipur Lakes', 'Desert Safari'],
    type: 'group', badge: 'Bestseller'
  },
  {
    id: 6, title: 'Maldives Luxury Escape', destination: 'Maldives',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80',
    duration: '4N / 5D', price: '₹54,999', rating: 5.0, reviews: 98,
    highlights: ['Overwater Villa', 'Coral Diving', 'Sunset Cruise'],
    type: 'honeymoon', badge: 'Premium'
  }
];

// ---- Testimonials Data ----


// ---- Render Package Cards ----
function renderHomePackages() {
  const grid = document.getElementById('home-packages-grid');
  if (!grid) return;

  grid.innerHTML = homePackages.map((pkg, i) => {
    const stars = '★'.repeat(Math.floor(pkg.rating)) + (pkg.rating % 1 ? '½' : '');
    const badgeColor = pkg.badge === 'Limited Slots' ? 'bg-gradient-to-r from-red-500 to-red-600' :
      pkg.badge === 'Premium' ? 'bg-gradient-to-r from-amber-500 to-amber-600' :
        'bg-gradient-to-r from-teal-500 to-teal-600';
    const waMsg = `Hi! I'm interested in the ${pkg.title} package (${pkg.duration}, ${pkg.price}/person). Please share details.`;

    return `
      <div class="card" data-aos="fade-up" data-aos-delay="${(i % 3) * 100}">
        <div class="card-image">
          <img src="${pkg.image}" alt="${pkg.title}" loading="lazy">
          <div class="card-badge ${badgeColor}">${pkg.badge}</div>
          <div class="card-price">${pkg.price}<span class="text-xs text-white/60 font-normal">/person</span></div>
        </div>
        <div class="p-5">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-semibold text-teal-600 tracking-wider uppercase">${pkg.destination}</span>
            <span class="stars">${stars}</span>
          </div>
          <h3 class="font-heading text-xl font-bold text-gray-900 mb-2">${pkg.title}</h3>
          <div class="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <span><i class="far fa-clock mr-1"></i>${pkg.duration}</span>
            <span><i class="far fa-star mr-1"></i>${pkg.rating} (${pkg.reviews})</span>
          </div>
          <ul class="mb-4 space-y-1">
            ${pkg.highlights.map(h => `<li class="text-sm text-gray-500 flex items-center gap-2"><i class="fas fa-check text-teal-500 text-xs"></i>${h}</li>`).join('')}
          </ul>
          <div class="flex gap-2">
            <a href="${waLink(waMsg)}" target="_blank" class="btn-gold flex-1 justify-center text-sm !py-2.5">
              <span>Book Now</span><i class="fab fa-whatsapp"></i>
            </a>
            <a href="packages.html" class="btn-outline !text-gray-700 !border-gray-200 hover:!border-teal-500 hover:!text-teal-600 text-sm !py-2.5 px-4">
              Details
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (typeof AOS !== 'undefined') AOS.refresh();
}

// ---- Render Testimonials ----
function renderTestimonials() {
  const wrapper = document.getElementById('testimonials-wrapper');
  if (!wrapper) return;

  wrapper.innerHTML = testimonials.map(t => {
    const stars = '★'.repeat(t.rating);
    return `
      <div class="swiper-slide">
        <div class="testimonial-card mx-2">
          <div class="stars mb-3">${stars}</div>
          <p class="text-gray-600 leading-relaxed mb-6 text-sm">"${t.text}"</p>
          <div class="flex items-center gap-4">
            <img src="${t.photo}" alt="${t.name}" class="w-12 h-12 rounded-full object-cover border-2 border-amber-400">
            <div>
              <h4 class="font-semibold text-gray-900 text-sm">${t.name}</h4>
              <p class="text-xs text-gray-400">${t.location} • ${t.trip}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ---- Typewriter Effect ----
function initTypewriter() {
  const el = document.getElementById('typed-text');
  if (!el) return;
  const words = ['Starts Here', 'Awaits You', 'Begins Now', 'Is Calling'];
  let wordIdx = 0, charIdx = 0, deleting = false;

  function type() {
    const word = words[wordIdx];
    if (deleting) {
      el.textContent = word.substring(0, charIdx--);
      if (charIdx < 0) { deleting = false; wordIdx = (wordIdx + 1) % words.length; setTimeout(type, 500); return; }
    } else {
      el.textContent = word.substring(0, ++charIdx);
      if (charIdx === word.length) { deleting = true; setTimeout(type, 2000); return; }
    }
    setTimeout(type, deleting ? 50 : 100);
  }
  setTimeout(type, 1500);
}

// ---- Hero Search ----
function searchTrip() {
  const dest = document.getElementById('hero-destination').value;
  const date = document.getElementById('hero-date').value;
  const travelers = document.getElementById('hero-travelers').value;

  let msg = 'Hi! I\'m interested in booking a trip';
  if (dest) msg += ` to ${dest}`;
  msg += '.';
  if (date) msg += ` Travel date: ${date}.`;
  if (travelers) msg += ` Travelers: ${travelers}.`;
  msg += ' Please share packages and details.';

  window.open(waLink(msg), '_blank');
}
window.searchTrip = searchTrip;

// ---- Init Swipers ----
function initHomeSwipers() {
  new Swiper('.destinations-swiper', {
    slidesPerView: 1.2,
    spaceBetween: 20,
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    pagination: { el: '.destinations-swiper .swiper-pagination', clickable: true },
    breakpoints: {
      640: { slidesPerView: 2.2 },
      1024: { slidesPerView: 3.5 },
      1280: { slidesPerView: 4.2 }
    }
  });

  new Swiper('.testimonials-swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: { delay: 5000, disableOnInteraction: false },
    pagination: { el: '.testimonials-swiper .swiper-pagination', clickable: true },
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });
}

function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-bg-slide');
  if (slides.length === 0) return;
  
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 8000);
}

// ---- Initialize ----
document.addEventListener('DOMContentLoaded', () => {
  renderTestimonials();
  initTypewriter();
  initHeroSlider();
  
  // Initialize Swipers after a small delay to ensure DOM is ready
  setTimeout(() => {
    initHomeSwipers();
    if (typeof AOS !== 'undefined') AOS.refresh();
  }, 100);
});

// Refresh AOS when all images are loaded to recalculate exact offsets
window.addEventListener('load', () => {
  if (typeof AOS !== 'undefined') AOS.refresh();
});
