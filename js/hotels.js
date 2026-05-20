const allHotels = [
  // Taj Group
  {
    id: 2,
    brand: 'Taj Group',
    name: 'Taj Lake Palace, Taj Aravali Resort, Spa Taj Fateh Prakash Palace',
    location: 'Udaipur',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80'
  },
  {
    id: 3,
    brand: 'Taj Group',
    name: 'Umaid Bhawan Palace, Taj Hari Mahal',
    location: 'Jodhpur',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80'
  },
  {
    id: 4,
    brand: 'Taj Group',
    name: 'Taj Rishikesh resort, spa Anand Kashi by the ganges',
    location: 'Rishikesh',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80'
  },
  {
    id: 5,
    brand: 'Taj Group',
    name: 'Taj Lake Palace, Taj Aravali Resort, Spa Taj Fateh Prakash Palace',
    location: 'Haridwar',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80'
  },
  
  // The Oberoi Group
  {
    id: 6,
    brand: 'The Oberoi Group',
    name: 'The Oberoi Amarvilas- Agra',
    location: 'The Oberoi Amarvilas- Agra', // Screenshot shows "Travel To The Oberoi Amarvilas- Agra"
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&q=80'
  },
  {
    id: 7,
    brand: 'The Oberoi Group',
    name: 'The Oberoi- Bengaluru',
    location: 'The Oberoi- Bengaluru',
    image: 'https://lh3.googleusercontent.com/p/AF1QipOmyo81C__rgkDBjAftVDWRzjvHhkoUIIozTAJR=s1360-w1360-h1020-rw'
  },
  {
    id: 8,
    brand: 'The Oberoi Group',
    name: 'The Oberoi- Gurgaon',
    location: 'The Oberoi- Gurgaon',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80'
  },
  {
    id: 9,
    brand: 'The Oberoi Group',
    name: 'The Oberoi Rajvilas- Jaipur',
    location: 'The Oberoi Rajvilas- Jaipur',
    image: 'https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&q=80'
  },
  {
    id: 10,
    brand: 'The Oberoi Group',
    name: 'The Oberoi Vrinda- Luxuary Kerala...',
    location: 'The Oberoi Vrinda- Luxuary Kerala...',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80'
  },
  {
    id: 11,
    brand: 'The Oberoi Group',
    name: 'The Oberoi Grand- Kolkata',
    location: 'The Oberoi Grand- Kolkata',
    image: 'https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=600&q=80'
  },
  {
    id: 12,
    brand: 'The Oberoi Group',
    name: 'The Oberoi Grand- Mumbai',
    location: 'The Oberoi Grand- Mumbai',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80'
  },
  {
    id: 13,
    brand: 'The Oberoi Group',
    name: 'The Oberoi Sukhvilas Spa Resort- New Chandigarh',
    location: 'The Oberoi Sukhvilas Spa Resort- New Chandigarh',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80'
  },
  {
    id: 14,
    brand: 'The Oberoi Group',
    name: 'The Oberoi- New Delhi',
    location: 'The Oberoi- New Delhi',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80'
  },
  {
    id: 15,
    brand: 'The Oberoi Group',
    name: 'The Oberoi Vanyavilas Wildlife Resort - Ranthambhore',
    location: 'The Oberoi Vanyavilas Wildlife Resort - Ranthambhore',
    image: 'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?w=600&q=80'
  },
  {
    id: 16,
    brand: 'The Oberoi Group',
    name: 'Wildflower Hall, An Oberoi Resort - Shimla',
    location: 'Wildflower Hall, An Oberoi Resort - Shimla',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHzLvjK3cOmpEDepJawtEwgTbNhtm-nvufc7vlR3QlxcX9PIrJ8bn7de_WWmzs9GvzTIIK38IQL50RcTO8dvP1bcQc06AX3CsagtEy47YwPpbuwIYnZcRqMCsgCSiXWYp9ovzk=s1360-w1360-h1020-rw'
  },
  {
    id: 17,
    brand: 'The Oberoi Group',
    name: 'The Oberoi Udaivilas - Udaipur',
    location: 'The Oberoi Udaivilas - Udaipur',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80'
  },
  
  // Antalya Rishikesh
 
  
  // SUJAN GROUP
  {
    id: 19,
    brand: 'SUJAN GROUP',
    name: 'SUJAN Sher Bagh',
    location: 'SUJAN Sher Bagh',
    image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=600&q=80'
  },
  {
    id: 20,
    brand: 'SUJAN GROUP',
    name: 'SUJAN Jawai',
    location: 'SUJAN Jawai',
    image: 'https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&q=80'
  },
  {
    id: 21,
    brand: 'SUJAN GROUP',
    name: 'SUJAN The Serai',
    location: 'SUJAN The Serai',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=600&q=80'
  },

  // LUXURY CAMPS IN JAISALMER
  {
    id: 22,
    brand: 'LUXURY CAMPS IN JAISALMER',
    name: 'Kanak Jaisalmer',
    location: 'Kanak Jaisalmer',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=600&q=80'
  },
  {
    id: 23,
    brand: 'LUXURY CAMPS IN JAISALMER',
    name: 'Kafila Desert Camp, Jaisalmer',
    location: 'Kafila Desert Camp, Jaisalmer',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80'
  },
  {
    id: 24,
    brand: 'LUXURY CAMPS IN JAISALMER',
    name: 'Tao\'s Lakhmana, Jaisalmer',
    location: 'Tao\'s Lakhmana, Jaisalmer',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&q=80'
  }
];

function renderHotels() {
  const grid = document.getElementById('hotels-grid');
  
  // Group hotels by brand
  const grouped = {};
  allHotels.forEach(h => {
    if (!grouped[h.brand]) grouped[h.brand] = [];
    grouped[h.brand].push(h);
  });
  
  let html = '';
  
  // Order of sections
  const brandOrder = ['Taj Group', 'The Oberoi Group', 'Antalya Rishikesh', 'SUJAN GROUP', 'LUXURY CAMPS IN JAISALMER'];
  
  brandOrder.forEach(brand => {
    if (grouped[brand] && grouped[brand].length > 0) {
      html += `
        <div class="w-full mb-16">
          <h2 class="text-3xl font-bold text-center mb-8" style="color: #2D2D2D;">${brand}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${grouped[brand].map(h => `
              <div class="flex flex-col h-full bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div class="relative w-full h-56">
                  <img src="${h.image}" class="w-full h-full object-cover" alt="${h.name}" loading="lazy">
                  <!-- Travel To Overlay -->
                  <div class="absolute bottom-4 left-4 z-10" style="text-shadow: 1px 1px 3px rgba(0,0,0,0.8);">
                    <div class="text-white text-xs font-bold uppercase tracking-wider mb-0.5">Travel To</div>
                    <div class="text-yellow-400 text-sm font-semibold">${h.location}</div>
                  </div>
                  <!-- Gradient overlay for text readability -->
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                
                <div class="p-4 flex flex-col items-center flex-grow">
                  <h3 class="text-xs font-bold text-center text-gray-800 mb-4 px-2" style="font-family: 'Inter', sans-serif;">${h.name}</h3>
                  <div class="mt-auto pt-2 w-full text-center">
                    <a href="${waLink(`Hi! I'm interested in booking a stay at ${h.name}, ${h.location}. Please share availability and details.`)}" target="_blank" class="text-white text-sm font-semibold px-6 py-1.5 rounded inline-flex items-center gap-1.5 justify-center" style="background-color: #f26f28; transition: background-color 0.2s;" onmouseover="this.style.backgroundColor='#e35d15'" onmouseout="this.style.backgroundColor='#f26f28'">
                      <span>Book Now</span><i class="fab fa-whatsapp text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
  });

  grid.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
  renderHotels();
});

