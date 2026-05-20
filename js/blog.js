/* ========== BLOG PAGE ========== */
const blogPosts = [
  { id:1, title:'10 Must-Visit Places in Kashmir for First-Timers', excerpt:'Kashmir is a paradise that needs no introduction. Here are the top 10 spots every traveler must experience on their first visit to this heavenly valley.', image:'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2FzaG1pcnxlbnwwfHwwfHx8MA%3D%3D', cat:'guides', date:'May 10, 2026', readTime:'5 min',
    content:`<p>Kashmir, often called "Paradise on Earth," is a destination that should be on every traveler's bucket list. From the serene Dal Lake to the snow-capped peaks of Gulmarg, here are the must-visit places:</p>
    <h3>1. Dal Lake, Srinagar</h3><p>The iconic heart of Kashmir. Take a shikara ride at sunset, stay in a traditional houseboat, and experience the floating markets. The reflection of mountains in the calm waters is truly magical.</p>
    <h3>2. Gulmarg</h3><p>Known as the "Meadow of Flowers," Gulmarg transforms into a winter wonderland with Asia's highest gondola ride. Perfect for skiing in winter and trekking in summer.</p>
    <h3>3. Pahalgam</h3><p>The Valley of Shepherds offers pristine beauty with the Lidder River, Betaab Valley, and Aru Valley. It's also the base camp for the Amarnath Yatra pilgrimage.</p>
    <h3>4. Sonmarg</h3><p>The "Meadow of Gold" lives up to its name with glaciers, alpine lakes, and stunning mountain passes. The Thajiwas Glacier is a highlight.</p>
    <h3>5. Mughal Gardens</h3><p>Visit Nishat Bagh, Shalimar Bagh, and Chashme Shahi — these gardens are masterpieces of Mughal architecture and landscaping.</p>
    <p><strong>Pro tip:</strong> Visit Kashmir between March and October for the best weather. Book your trip with Dremz Destination for a hassle-free experience!</p>`
  },
  { id:2, title:'Ultimate Packing Guide for a Beach Vacation', excerpt:'Packing for a beach trip can be tricky. Here\'s everything you need — and what to leave behind — for the perfect beach getaway.', image:'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&q=80', cat:'packing', date:'May 5, 2026', readTime:'4 min',
    content:`<p>Heading to Goa, Maldives, or Bali? Packing smart is the key to a stress-free beach vacation. Here's your complete checklist:</p>
    <h3>Essentials</h3><ul><li>Lightweight, breathable clothing</li><li>Swimwear (at least 2 sets)</li><li>Reef-safe sunscreen (SPF 50+)</li><li>Sunglasses with UV protection</li><li>Wide-brimmed hat</li><li>Waterproof phone case</li></ul>
    <h3>What to Skip</h3><ul><li>Heavy jeans or formal wear</li><li>Expensive jewelry</li><li>Too many shoes (flip-flops + one pair of sneakers is enough)</li><li>Full-size toiletries (hotels provide basics)</li></ul>
    <p><strong>Pro tip:</strong> Roll your clothes instead of folding — you'll fit 30% more in your suitcase!</p>`
  },
  { id:3, title:'How to Travel India on a ₹2,000/Day Budget', excerpt:'Think luxury travel requires deep pockets? Think again. Here\'s how to explore India\'s best destinations without breaking the bank.', image:'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80', cat:'budget', date:'Apr 28, 2026', readTime:'6 min',
    content:`<p>India is one of the most budget-friendly travel destinations in the world. Here's how to make the most of ₹2,000 per day:</p>
    <h3>Accommodation: ₹500-800</h3><p>Hostels, guesthouses, and homestays offer clean, comfortable stays at fraction of hotel prices. Apps like OYO and Hostelworld are your friends.</p>
    <h3>Food: ₹400-600</h3><p>Eat like a local! Street food and small restaurants (dhabas) serve incredible meals for ₹50-150. Try thalis for the best value.</p>
    <h3>Transport: ₹300-500</h3><p>Trains are the backbone of budget travel. Book sleeper class tickets weeks in advance. Local buses are even cheaper.</p>
    <h3>Activities: ₹200-400</h3><p>Many temples, beaches, and natural attractions are free. Museum entries rarely exceed ₹100.</p>
    <p><strong>Pro tip:</strong> Travel during shoulder season (Sep-Nov, Feb-Mar) for the best deals on everything!</p>`
  },
  { id:5, title:'5 Essential Travel Safety Tips for Solo Travelers', excerpt:'Solo travel is liberating, but safety should always be a priority. Here are 5 proven tips to stay safe while exploring the world alone.', image:'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', cat:'tips', date:'Apr 15, 2026', readTime:'4 min',
    content:`<p>Solo travel is one of the most rewarding experiences. Stay safe with these essential tips:</p>
    <h3>1. Share Your Itinerary</h3><p>Always share your travel plans, hotel details, and flight info with a trusted friend or family member.</p>
    <h3>2. Keep Digital Copies</h3><p>Photograph your passport, visa, insurance, and important documents. Store them in cloud storage.</p>
    <h3>3. Trust Your Instincts</h3><p>If something feels off, leave. Your gut feeling is usually right. Don't let politeness override your safety.</p>
    <h3>4. Stay Connected</h3><p>Get a local SIM card immediately. Having internet access is your best safety net for maps, translations, and emergency calls.</p>
    <h3>5. Use Registered Transport</h3><p>Only use official taxis, ride-hailing apps (Uber, Grab), or pre-arranged transfers. Avoid unmarked vehicles.</p>`
  },
  { id:6, title:'The Perfect 7-Day Kerala Itinerary', excerpt:'Kerala has it all — backwaters, beaches, hills, and wildlife. Here\'s how to see the best of God\'s Own Country in just one week.', image:'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80', cat:'guides', date:'Apr 8, 2026', readTime:'8 min',
    content:`<p>Kerala is a destination that rewards slow travel. Here's the perfect week-long itinerary:</p>
    <h3>Days 1-2: Kochi & Munnar</h3><p>Start in Fort Kochi for Chinese fishing nets and spice markets. Drive up to Munnar for tea plantations and cool mountain air.</p>
    <h3>Days 3-4: Thekkady & Periyar</h3><p>Wildlife safari at Periyar Lake, spice plantation tour, and bamboo rafting through the jungle.</p>
    <h3>Days 5-6: Alleppey Backwaters</h3><p>Board a luxury houseboat and cruise through the iconic backwaters. This is the highlight of any Kerala trip.</p>
    <h3>Day 7: Kovalam Beach</h3><p>End your trip with beach relaxation, an Ayurvedic massage, and a stunning lighthouse sunset.</p>
    <p><strong>Book this exact itinerary</strong> with Dremz Destination — we'll handle every detail!</p>`
  },
];

function renderBlog(filter='all') {
  const grid = document.getElementById('blog-grid');
  const filtered = filter === 'all' ? blogPosts : blogPosts.filter(p => p.cat === filter);
  grid.innerHTML = filtered.map((p, i) => `
    <div class="blog-card cursor-pointer" data-aos="fade-up" data-aos-delay="${(i%3)*100}" onclick="showArticle(${p.id})">
      <div class="relative overflow-hidden"><img src="${p.image}" alt="${p.title}" class="w-full h-52 object-cover hover:scale-105 transition-transform duration-500" loading="lazy"></div>
      <div class="p-6">
        <div class="flex items-center gap-3 mb-3">
          <span class="blog-tag">${p.cat}</span>
          <span class="text-xs text-gray-400">${p.date}</span>
          <span class="text-xs text-gray-400"><i class="far fa-clock mr-1"></i>${p.readTime}</span>
        </div>
        <h3 class="font-heading text-lg font-bold text-gray-900 mb-2 leading-snug">${p.title}</h3>
        <p class="text-gray-500 text-sm leading-relaxed">${p.excerpt}</p>
        <p class="text-teal-600 font-semibold text-sm mt-4 hover:underline">Read More <i class="fas fa-arrow-right text-xs ml-1"></i></p>
      </div>
    </div>
  `).join('');
  if(typeof AOS!=='undefined') AOS.refresh();
}

function showArticle(id) {
  const post = blogPosts.find(p=>p.id===id); if(!post) return;
  const section = document.getElementById('article-view');
  section.innerHTML = `
    <div class="max-w-3xl mx-auto px-4">
      <button onclick="hideArticle()" class="text-teal-600 font-semibold mb-6 hover:underline"><i class="fas fa-arrow-left mr-2"></i>Back to all posts</button>
      <img src="${post.image}" alt="${post.title}" class="w-full h-72 sm:h-96 object-cover rounded-2xl mb-8">
      <div class="flex items-center gap-4 mb-4">
        <span class="blog-tag">${post.cat}</span>
        <span class="text-sm text-gray-400">${post.date}</span>
        <span class="text-sm text-gray-400"><i class="far fa-clock mr-1"></i>${post.readTime} read</span>
      </div>
      <h1 class="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">${post.title}</h1>
      <div class="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4 [&_h3]:font-heading [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-gray-900 [&_h3]:mt-8 [&_h3]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1">${post.content}</div>
      <div class="mt-12 p-8 bg-amber-50 rounded-2xl text-center">
        <h3 class="font-heading text-2xl font-bold text-gray-900 mb-3">Ready to Plan Your Trip?</h3>
        <p class="text-gray-600 mb-6">Let our experts create the perfect itinerary for you.</p>
        <a href="https://wa.me/918178390282?text=Hi!%20I%20read%20your%20blog%20and%20I'm%20interested%20in%20planning%20a%20trip!" target="_blank" class="btn-gold"><span>Talk to Us</span><i class="fab fa-whatsapp text-lg"></i></a>
      </div>
    </div>`;
  section.classList.remove('hidden');
  section.scrollIntoView({behavior:'smooth',block:'start'});
  document.querySelector('.bg-gray-50').style.display = 'none';
}
window.showArticle = showArticle;

function hideArticle() {
  document.getElementById('article-view').classList.add('hidden');
  document.querySelector('.bg-gray-50').style.display = '';
  document.getElementById('blog-grid').scrollIntoView({behavior:'smooth'});
}
window.hideArticle = hideArticle;

document.addEventListener('DOMContentLoaded', () => {
  renderBlog();
  document.getElementById('blog-filters').addEventListener('click', e => {
    const btn = e.target.closest('.filter-tab'); if(!btn) return;
    document.querySelectorAll('#blog-filters .filter-tab').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    renderBlog(btn.dataset.filter);
  });
});
