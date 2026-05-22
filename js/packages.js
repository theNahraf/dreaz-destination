/* ========== PACKAGES PAGE ========== */
const allPackages = [
  {
    id: 1, title: 'Royal Rajasthan', dest: 'Rajasthan', image: 'https://plus.unsplash.com/premium_photo-1661962428918-6a57ab674e23?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFqYXN0aGFufGVufDB8fDB8fHww', duration: '7N/8D', price: '₹24,999', rating: 4.8, reviews: 278, highlights: ['Jaipur Forts', 'Udaipur Lakes', 'Jaisalmer Desert Safari', 'Jodhpur Blue City'], type: 'group', badge: 'Bestseller',
    itinerary: [{ day: 'Day 1', title: 'Arrive Jaipur', desc: 'Pink City welcome. Check in to heritage hotel.' }, { day: 'Day 2', title: 'Jaipur Sightseeing', desc: 'Amber Fort, Hawa Mahal, City Palace, Jantar Mantar.' }, { day: 'Day 3', title: 'Jodhpur', desc: 'Drive to Blue City. Mehrangarh Fort, Jaswant Thada.' }, { day: 'Day 4', title: 'Jaisalmer', desc: 'Golden Fort, Patwon Ki Haveli, Gadisar Lake.' }, { day: 'Day 5', title: 'Desert Experience', desc: 'Sam Sand Dunes camel safari. Desert camp under stars.' }, { day: 'Day 6', title: 'Udaipur', desc: 'Drive to City of Lakes. Lake Pichola boat ride.' }, { day: 'Day 7', title: 'Udaipur Explore', desc: 'City Palace, Saheliyon ki Bari, Jagdish Temple.' }, { day: 'Day 8', title: 'Departure', desc: 'Airport transfer from Udaipur.' }],
    inclusions: ['Heritage hotel stays', 'Desert camp night', 'All breakfasts', 'AC vehicle', 'Camel safari', 'Boat rides', 'All entry tickets'],
    exclusions: ['Flights', 'Lunch & dinner', 'Personal expenses', 'Tips', 'Camera fees']
  },


  {
    id: 6, title: 'Discover Our Ravishing Rajasthan Vacation', dest: 'Rajasthan', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80', duration: '3N/4D', price: '₹9,999', rating: 4.7, reviews: 120, highlights: ['Jaipur Forts', 'City Tour'], type: 'family', badge: 'Trending',
    itinerary: [{ day: 'Day 1', title: 'Arrival', desc: 'Arrive in Jaipur.' }, { day: 'Day 2', title: 'Jaipur', desc: 'City tour.' }, { day: 'Day 3', title: 'Departure', desc: 'Leave for onward journey.' }],
    inclusions: ['Hotels', 'Breakfast', 'Transport'], exclusions: ['Flights']
  },
  {
    id: 8, title: 'Fort Special Rajasthan Holiday', dest: 'Rajasthan', image: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFqYXN0aGFuJTIwZm9ydHxlbnwwfHwwfHx8MA%3D%3D', duration: '4N/5D', price: '₹23,000', rating: 4.7, reviews: 150, highlights: ['Heritage Forts', 'Palaces'], type: 'family', badge: 'Bestseller',
    itinerary: [{ day: 'Day 1', title: 'Arrival', desc: 'Arrive.' }],
    inclusions: ['Hotels', 'Breakfast', 'Transport'], exclusions: ['Flights']
  },
  {
    id: 10, title: 'Best-Selling Jaisalmer Jodhpur Rajasthan', dest: 'Rajasthan', image: 'https://media.istockphoto.com/id/942152278/photo/gadisar-lake-at-jaisalmer-rajasthan-at-sunrise-with-ancient-temples-and-archaeological-ruins.jpg?s=612x612&w=0&k=20&c=HvhbHZ8HH_lAjAAI2pmqL4mUipyyAwy31qp5jjKQTO0=', duration: '3N/4D', price: '₹7,999', rating: 4.5, reviews: 80, highlights: ['Desert Safari', 'Mehrangarh Fort'], type: 'group', badge: 'Limited Slots',
    itinerary: [{ day: 'Day 1', title: 'Arrival', desc: 'Arrive.' }],
    inclusions: ['Hotels', 'Breakfast', 'Transport'], exclusions: ['Flights']
  },

  {
    id: 12, title: 'Heaven On Earth: Uttarakhand', dest: 'Uttarakhand', image: 'https://plus.unsplash.com/premium_photo-1691763914838-027436a3cdc8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXR0YXJha2hhbmQlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D', duration: '8N/9D', price: '₹16,000', rating: 4.8, reviews: 230, highlights: ['Nainital', 'Mussoorie', 'Rishikesh'], type: 'group', badge: 'Trending',
    itinerary: [{ day: 'Day 1', title: 'Arrival', desc: 'Arrive.' }],
    inclusions: ['Hotels', 'Breakfast', 'Transport'], exclusions: ['Flights']
  },
  {
    id: 13, title: 'Delightful Uttarakhand Family Tour', dest: 'Uttarakhand', image: 'https://images.unsplash.com/photo-1610715936287-6c2ad208cdbf?w=600&q=80', duration: '10N/11D', price: '₹40,950', rating: 4.9, reviews: 150, highlights: ['Jim Corbett', 'Nainital', 'Kausani'], type: 'family', badge: 'Premium',
    itinerary: [{ day: 'Day 1', title: 'Arrival', desc: 'Arrive.' }],
    inclusions: ['Hotels', 'Breakfast', 'Transport', 'Safari'], exclusions: ['Flights']
  },
  {
    id: 14, title: 'Blissful Nainital Ranikhet Tour', dest: 'Uttarakhand', image: 'https://images.unsplash.com/photo-1601821139990-9fc929db79ce?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHV0dGFyYWtoYW5kJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D', duration: '2N/3D', price: '₹8,925', rating: 4.5, reviews: 90, highlights: ['Naini Lake', 'Ranikhet Orchards'], type: 'family', badge: 'Bestseller',
    itinerary: [{ day: 'Day 1', title: 'Arrival', desc: 'Arrive.' }],
    inclusions: ['Hotels', 'Breakfast', 'Transport'], exclusions: ['Flights']
  },
  {
    id: 15, title: 'Most Affordable Uttarakhand Tour', dest: 'Uttarakhand', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vdW50YWlufGVufDB8fDB8fHww', duration: '1N/2D', price: '₹2,800', rating: 4.2, reviews: 45, highlights: ['Rishikesh', 'Ganga Aarti'], type: 'group', badge: 'Limited Slots',
    itinerary: [{ day: 'Day 1', title: 'Arrival', desc: 'Arrive.' }],
    inclusions: ['Hotels', 'Breakfast'], exclusions: ['Flights', 'Transport']
  },
  {
    id: 16, title: 'Best-Selling Rishikesh Tours', dest: 'Uttarakhand', image: 'https://images.unsplash.com/photo-1712510817140-917938f92e5b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmlzaGlrZXNofGVufDB8fDB8fHww', duration: '1N/2D', price: '₹3,938', rating: 4.7, reviews: 180, highlights: ['River Rafting', 'Camping'], type: 'adventure', badge: 'Bestseller',
    itinerary: [{ day: 'Day 1', title: 'Arrival', desc: 'Arrive.' }],
    inclusions: ['Camps', 'Meals', 'Rafting'], exclusions: ['Flights']
  },
  {
    id: 17, title: 'Uttarakhand Tour Packages For 3 Days', dest: 'Uttarakhand', image: 'https://images.unsplash.com/photo-1612438214708-f428a707dd4e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXR0YXJha2hhbmR8ZW58MHx8MHx8fDA%3D', duration: '2N/3D', price: '₹12,500', rating: 4.6, reviews: 110, highlights: ['Auli Skiing', 'Joshimath'], type: 'adventure', badge: 'Trending',
    itinerary: [{ day: 'Day 1', title: 'Arrival', desc: 'Arrive.' }],
    inclusions: ['Hotels', 'Breakfast', 'Transport'], exclusions: ['Flights']
  },
  {
    id: 18, title: 'Fascinating Uttarakhand Honeymoon', dest: 'Uttarakhand', image: 'https://images.unsplash.com/photo-1610715936287-6c2ad208cdbf?w=600&q=80', duration: '5N/6D', price: '₹20,000', rating: 4.8, reviews: 140, highlights: ['Mussoorie', 'Dhanaulti'], type: 'honeymoon', badge: 'Premium',
    itinerary: [{ day: 'Day 1', title: 'Arrival', desc: 'Arrive.' }],
    inclusions: ['Hotels', 'Breakfast', 'Transport', 'Candlelight Dinner'], exclusions: ['Flights']
  },
   {
    id: 101, title: 'BEST PACKAGE OF GOA', dest: 'Goa', image: 'https://titosgoa.com/_next/image?url=%2Fapi%2Fuploads%2F1768282500728-why-tourists-visit-goa.png&w=1920&q=75', duration: '3N/4D', price: '₹8,599', rating: 4.8, reviews: 189, highlights: ['Premium Hotel Stay', 'Full Sightseeing Tour', 'Airport Transfers', 'Daily Meals Included'], type: 'group', badge: 'Best Price',
    itinerary: [{ day: 'Day 1', title: 'Arrival', desc: 'Arrive in Goa.' }, { day: 'Day 2', title: 'North Goa Tour', desc: 'Aguada Fort, Vagator, Anjuna Flea Market, Chapora Fort.' }, { day: 'Day 3', title: 'South Goa Explore', desc: 'Colva Beach, Palolem Beach, Cabo de Rama Fort.' }, { day: 'Day 4', title: 'Departure', desc: 'Departure from Goa.' }],
    inclusions: ['Hotels', 'Meals', 'Sightseeing', 'Transport'], exclusions: ['Flights']
  },
  {
    id: 102, title: 'HONEYMOON SPECIAL PACKAGE', dest: 'Goa', image: 'https://allindiapackages.com/public/uploads/1550341227goa_honeymoon_tour.jpg', duration: '3N/4D', price: '₹12,000', rating: 4.9, reviews: 210, highlights: ['Romantic Hotel Stay', 'Couples Sightseeing', 'Private Transfers', 'Candlelight Dinner'], type: 'honeymoon', badge: 'Couples',
    itinerary: [{ day: 'Day 1', title: 'Arrival', desc: 'Arrive in Goa. Special Honeymoon Welcome.' }, { day: 'Day 2', title: 'Beach Day', desc: 'Relaxing day at South Goa beaches.' }, { day: 'Day 3', title: 'Sightseeing', desc: 'Private tour of Old Goa and Mandovi river cruise.' }, { day: 'Day 4', title: 'Departure', desc: 'Departure from Goa.' }],
    inclusions: ['Hotels', 'Meals', 'Sightseeing', 'Transport', 'Candlelight Dinner'], exclusions: ['Flights']
  },
  {
    id: 103, title: 'STANDARD PACKAGE', dest: 'Goa', image: 'https://travteler.com/wp-content/uploads/2024/03/goaresortlead-1366x768-1.jpg', duration: '3N/4D', price: '₹8,000', rating: 4.6, reviews: 145, highlights: ['Comfortable Hotel', 'Guided Sightseeing', 'Shared Transfers', 'Daily Meals'], type: 'family', badge: 'Popular',
    itinerary: [{ day: 'Day 1', title: 'Arrival', desc: 'Arrive in Goa.' }, { day: 'Day 2', title: 'North Goa', desc: 'Beaches and Forts.' }, { day: 'Day 3', title: 'South Goa', desc: 'Churches and Temples.' }, { day: 'Day 4', title: 'Departure', desc: 'Departure from Goa.' }],
    inclusions: ['Hotels', 'Meals', 'Sightseeing', 'Transport'], exclusions: ['Flights']
  },
  {
    id: 104, title: 'BUDGET FRIENDLY GOA PACKAGE', dest: 'Goa', image: 'https://media1.thrillophilia.com/filestore/sn4ivuxkv0osfmff7dv7aszx36ph_shutterstock_1129660346.jpg', duration: '3N/4D', price: '₹6,500', rating: 4.5, reviews: 98, highlights: ['Budget Hotel', 'Group Sightseeing', 'Pick & Drop Transfers', 'Breakfast Included'], type: 'group', badge: 'Budget',
    itinerary: [{ day: 'Day 1', title: 'Arrival', desc: 'Arrive in Goa.' }, { day: 'Day 2', title: 'North Goa', desc: 'Beaches and Forts.' }, { day: 'Day 3', title: 'South Goa', desc: 'Churches and Temples.' }, { day: 'Day 4', title: 'Departure', desc: 'Departure from Goa.' }],
    inclusions: ['Hotels', 'Meals', 'Sightseeing', 'Transport'], exclusions: ['Flights']
  },
  {
    id: 105, title: 'AMAZING GOA TRIP', dest: 'Goa', image: 'https://media.istockphoto.com/id/2150163402/photo/the-candolim-beach-at-dusk-in-north-goa-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=qwiUa9IbMb4DfS__oVfvR76YSIEg1rTwYpgIPBmBnFE=', duration: '4N/5D', price: '₹13,000', rating: 4.7, reviews: 167, highlights: ['Premium Hotel Stay', 'Full Sightseeing Tour', 'Airport Transfers', 'Daily Meals Included'], type: 'family', badge: 'Amazing',
    itinerary: [{ day: 'Day 1', title: 'Arrival', desc: 'Arrive in Goa.' }, { day: 'Day 2', title: 'North Goa', desc: 'Beaches and Forts.' }, { day: 'Day 3', title: 'South Goa', desc: 'Churches and Temples.' }, { day: 'Day 4', title: 'Adventure Day', desc: 'Water sports.' }, { day: 'Day 5', title: 'Departure', desc: 'Departure from Goa.' }],
    inclusions: ['Hotels', 'Meals', 'Sightseeing', 'Transport'], exclusions: ['Flights']
  },
  {
    id: 19, title: 'Manali-Kasol Tour Package', dest: 'Himachal', image: 'https://images.unsplash.com/photo-1656833111546-07d98abab448?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbmFsaXxlbnwwfHwwfHx8MA%3D%3D', duration: '3N/4D', price: '₹10,500', rating: 4.7, reviews: 250, highlights: ['Rohtang Pass', 'Solang Valley', 'Kasol Cafe'], type: 'adventure', badge: 'Trending',
    itinerary: [{ day: 'Day 1', title: 'Arrival', desc: 'Arrive.' }],
    inclusions: ['Hotels', 'Breakfast', 'Transport'], exclusions: ['Flights']
  },
  {
    id: 20, title: 'Himachal Honeymoon By Cab', dest: 'Himachal', image: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=600&q=80', duration: '7N/8D', price: '₹23,550', rating: 4.9, reviews: 190, highlights: ['Shimla', 'Kullu', 'Manali'], type: 'honeymoon', badge: 'Premium',
    itinerary: [{ day: 'Day 1', title: 'Arrival', desc: 'Arrive.' }],
    inclusions: ['Hotels', 'Breakfast', 'Cab', 'Honeymoon Inclusions'], exclusions: ['Flights']
  },
  {
    id: 21, title: 'Best Of Himachal Honeymoon Package', dest: 'Himachal', image: 'https://plus.unsplash.com/premium_photo-1697729690458-2d64ca777c04?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhpbWFjaGFsfGVufDB8fDB8fHww', duration: '3N/4D', price: '₹12,500', rating: 4.6, reviews: 120, highlights: ['Dalhousie', 'Khajjiar'], type: 'honeymoon', badge: 'Bestseller',
    itinerary: [{ day: 'Day 1', title: 'Arrival', desc: 'Arrive.' }],
    inclusions: ['Hotels', 'Breakfast', 'Transport'], exclusions: ['Flights']
  },
  {
    id: 22, title: 'Himachal Family Tour Packages', dest: 'Himachal', image: 'https://images.unsplash.com/photo-1652543393067-281cea9b8c02?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhpbWFjaGFsfGVufDB8fDB8fHww', duration: '9N/10D', price: '₹36,500', rating: 4.8, reviews: 210, highlights: ['Shimla', 'Manali', 'Dharamshala'], type: 'family', badge: 'Trending',
    itinerary: [{ day: 'Day 1', title: 'Arrival', desc: 'Arrive.' }],
    inclusions: ['Hotels', 'Breakfast', 'Dinner', 'Transport'], exclusions: ['Flights']
  },
  {
    id: 23, title: 'Blissful Himachal Honeymoon Package', dest: 'Himachal', image: 'https://images.unsplash.com/photo-1591382146670-900daa98d3d1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhpbWFjaGFsJTIwaG9uZXltb29ufGVufDB8fDB8fHww', duration: '9N/10D', price: '₹37,500', rating: 4.9, reviews: 130, highlights: ['Complete Himachal', 'Spiti Valley'], type: 'honeymoon', badge: 'Premium',
    itinerary: [{ day: 'Day 1', title: 'Arrival', desc: 'Arrive.' }],
    inclusions: ['Hotels', 'Meals', 'Transport'], exclusions: ['Flights']
  },
  {
    id: 3, title: 'Magical Kashmir', dest: 'Others', image: 'https://media.gettyimages.com/id/173294490/photo/tourists-enjoying-in-snow-covered-landscape-jammu-and-kashmir-india.jpg?s=612x612&w=0&k=20&c=vrkqUKSMMwSfsyrMzfYjNZwYIO_GQyG-3oBXYode3vE=', duration: '5N/6D', price: '₹18,999', rating: 4.9, reviews: 234, highlights: ['Dal Lake Shikara', 'Gulmarg Gondola', 'Pahalgam Valley', 'Saffron Fields'], type: 'family', badge: 'Bestseller',
    itinerary: [{ day: 'Day 1', title: 'Arrival in Srinagar', desc: 'Airport pickup, check-in to luxury houseboat on Dal Lake. Evening shikara ride.' }, { day: 'Day 2', title: 'Gulmarg Excursion', desc: 'Drive to Gulmarg. Gondola ride to Phase 1 & 2. Snow activities.' }, { day: 'Day 3', title: 'Pahalgam Day Trip', desc: 'Visit Betaab Valley, Aru Valley, and Chandanwari. Pony ride available.' }, { day: 'Day 4', title: 'Sonmarg Adventure', desc: 'Drive to Sonmarg. Visit Thajiwas Glacier. Scenic mountain views.' }, { day: 'Day 5', title: 'Srinagar Local', desc: 'Mughal Gardens - Nishat, Shalimar, Chashme Shahi. Shopping at local markets.' }, { day: 'Day 6', title: 'Departure', desc: 'Breakfast. Airport transfer. Tour ends with beautiful memories.' }],
    inclusions: ['5-star houseboat & hotel stays', 'All meals (breakfast & dinner)', 'Private AC vehicle', 'Experienced local guide', 'Airport transfers', 'Shikara ride', 'Gondola tickets'],
    exclusions: ['Flights', 'Personal expenses', 'Travel insurance', 'Pony rides', 'Tips & gratuities']
  },
  {
    id: 4, title: 'Kerala Backwaters Bliss', dest: 'Others', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80', duration: '6N/7D', price: '₹22,999', rating: 4.9, reviews: 312, highlights: ['Houseboat Stay', 'Munnar Tea Gardens', 'Alleppey Backwaters', 'Thekkady Wildlife'], type: 'family', badge: 'Top Rated',
    itinerary: [{ day: 'Day 1', title: 'Arrive Cochin', desc: 'Airport pickup. Fort Kochi tour - Chinese fishing nets, St. Francis Church.' }, { day: 'Day 2', title: 'Munnar', desc: 'Drive to Munnar. Tea plantations, Eravikulam National Park.' }, { day: 'Day 3', title: 'Munnar Sightseeing', desc: 'Mattupetty Dam, Echo Point, Tea Museum.' }, { day: 'Day 4', title: 'Thekkady', desc: 'Periyar Wildlife Sanctuary boat ride. Spice plantation visit.' }, { day: 'Day 5', title: 'Alleppey', desc: 'Drive to Alleppey. Board luxury houseboat. Backwater cruise.' }, { day: 'Day 6', title: 'Kovalam Beach', desc: 'Beach relaxation. Lighthouse visit. Ayurvedic massage.' }, { day: 'Day 7', title: 'Departure', desc: 'Trivandrum airport transfer.' }],
    inclusions: ['Premium hotels & houseboat', 'All meals on houseboat', 'AC vehicle', 'Boat rides', 'All entry tickets', 'Airport transfers'],
    exclusions: ['Flights', 'Ayurvedic treatments', 'Personal expenses', 'Tips']
  },

  {
    id: 5, title: 'Ladakh Expedition', dest: 'Others', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80', duration: '6N/7D', price: '₹26,999', rating: 4.8, reviews: 201, highlights: ['Pangong Lake', 'Nubra Valley', 'Khardung La Pass', 'Magnetic Hill'], type: 'adventure', badge: 'Trending',
    itinerary: [{ day: 'Day 1', title: 'Arrive Leh', desc: 'Fly into Leh. Acclimatization day. Explore Leh market.' }, { day: 'Day 2', title: 'Leh Local', desc: 'Shanti Stupa, Leh Palace, Hall of Fame, Magnetic Hill.' }, { day: 'Day 3', title: 'Nubra Valley', desc: 'Drive via Khardung La (18,380 ft). Diskit Monastery. Camel ride on sand dunes.' }, { day: 'Day 4', title: 'Pangong Lake', desc: 'Drive to Pangong Tso. Camp lakeside. Stunning blue waters.' }, { day: 'Day 5', title: 'Return to Leh', desc: 'Morning at Pangong. Drive back via Chang La pass.' }, { day: 'Day 6', title: 'Monasteries', desc: 'Hemis, Thiksey & Shey monasteries. Rancho School.' }, { day: 'Day 7', title: 'Departure', desc: 'Early morning flight from Leh.' }],
    inclusions: ['Hotels & camps', 'All meals', '4x4 vehicle', 'Inner Line Permits', 'Oxygen cylinder', 'All entry fees'],
    exclusions: ['Flights', 'Personal expenses', 'AMS medicine', 'Tips', 'Travel insurance']
  }
];

function renderPackages(filter = 'all') {
  const grid = document.getElementById('packages-grid');
  const noRes = document.getElementById('no-results');
  const filtered = filter === 'all' ? allPackages : allPackages.filter(p => p.type === filter);
  noRes.classList.toggle('hidden', filtered.length > 0);

  // Group by destination
  const grouped = {};
  filtered.forEach(p => {
    if (!grouped[p.dest]) grouped[p.dest] = [];
    grouped[p.dest].push(p);
  });

  let html = '';
  Object.keys(grouped).forEach((dest) => {
    const destId = dest.toLowerCase().replace(/\s+/g, '-');
    html += `<div class="mb-16 pt-24 -mt-24" id="${destId}">
      <h2 class="text-3xl font-bold text-center mb-8 text-gray-900 font-body uppercase tracking-wide">${dest === 'Himachal' ? 'Himachal' : dest}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">`;

    html += grouped[dest].map((pkg, i) => {
      const durationStr = pkg.duration.replace('N', ' NIGHTS').replace('D', ' DAYS').replace('/', '/ ');
      const priceVal = pkg.price.replace('₹', '').replace(',', ',');

      return `<div class="bg-white rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col h-full hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="${(i % 3) * 100}">
        <div class="p-3 pb-0 cursor-pointer" onclick="openPackageModal(${pkg.id})">
          <img src="${pkg.image}" alt="${pkg.title}" loading="lazy" class="w-full h-56 object-cover rounded-xl">
        </div>
        <div class="p-6 flex-grow flex flex-col justify-center text-center cursor-pointer" onclick="openPackageModal(${pkg.id})">
          <h3 class="text-[16px] font-bold text-gray-900 mb-4 px-2 leading-snug hover:text-[#F05A22] transition-colors">${pkg.title}</h3>
          <div class="text-[13px] text-gray-700 mb-2">
            <span class="font-bold text-black">Package Cost:</span> INR ${priceVal}/-
          </div>
          <div class="text-[13px] text-gray-700">
            <span class="font-bold text-black">Duration:</span> ${durationStr}
          </div>
        </div>
        <div class="bg-[#FFF5F0] p-4 px-5 flex justify-between items-center rounded-b-2xl border-t border-orange-50 mt-auto">
          <div class="text-left">
            <p class="text-[11px] text-gray-500 mb-0">Staring form</p>
            <p class="text-[22px] font-bold text-[#F05A22] leading-none mt-1">${pkg.price}/-</p>
          </div>
          <a href="${waLink(`Hi! I'm interested in booking the ${pkg.title} package (${pkg.duration}, ${pkg.price}/person). Please share details and availability.`)}" target="_blank" class="bg-[#F05A22] text-white px-4 py-2.5 rounded-lg hover:bg-[#d94f1c] transition-colors font-bold text-[13px] flex items-center gap-1.5 shadow-md">
            Book A Trip <i class="fab fa-whatsapp text-sm"></i>
          </a>
        </div>
      </div>`;
    }).join('');

    html += `</div></div>`;
  });

  grid.innerHTML = html;

  // Fix: Because the DOM is built dynamically, the browser won't auto-scroll to anchor links.
  // We manually scroll to the hash if it exists.
  if (window.location.hash) {
    setTimeout(() => {
      const target = document.querySelector(window.location.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200);
  }

  if (typeof AOS !== 'undefined') {
    // Small timeout to allow DOM to paint before recalculating offsets
    setTimeout(() => {
      AOS.refresh();
    }, 150);

    // Refresh again after all images have loaded to fix any layout shifts
    const images = grid.querySelectorAll('img');
    let loaded = 0;
    if (images.length > 0) {
      images.forEach(img => {
        if (img.complete) {
          loaded++;
          if (loaded === images.length) setTimeout(() => AOS.refresh(), 100);
        } else {
          img.addEventListener('load', () => {
            loaded++;
            if (loaded === images.length) setTimeout(() => AOS.refresh(), 100);
          });
        }
      });
    }
  }
}

function openPackageModal(id) {
  const pkg = allPackages.find(p => p.id === id); if (!pkg) return;
  const modal = document.getElementById('package-modal');
  const body = document.getElementById('modal-body');
  const waMsg = `Hi! I'm interested in the ${pkg.title} package (${pkg.duration}, ${pkg.price}/person). Please share details and availability.`;
  body.innerHTML = `
    <div class="relative"><img src="${pkg.image}" alt="${pkg.title}" class="w-full h-64 sm:h-80 object-cover">
      <button onclick="closePackageModal()" class="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center text-xl hover:bg-black/70 backdrop-blur-sm">&times;</button>
      <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
        <h2 class="text-white font-heading text-2xl sm:text-3xl font-bold">${pkg.title}</h2>
        <div class="flex items-center gap-4 mt-2 text-white/70 text-sm"><span><i class="far fa-clock mr-1"></i>${pkg.duration}</span><span class="stars">★★★★★</span><span>${pkg.rating} (${pkg.reviews} reviews)</span></div>
      </div>
    </div>
    <div class="p-6 sm:p-8">
      <div class="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div><span class="text-3xl font-bold text-amber-500">${pkg.price}</span><span class="text-gray-400">/person</span></div>
        <a href="${waLink(waMsg)}" target="_blank" class="btn-gold"><span>Book via WhatsApp</span><i class="fab fa-whatsapp text-lg"></i></a>
      </div>
      <h3 class="font-heading text-xl font-bold mb-4 text-gray-900">Day-by-Day Itinerary</h3>
      <div class="space-y-3 mb-8">${pkg.itinerary.map((d, i) => `
        <div class="accordion-item ${i === 0 ? 'open' : ''}">
          <div class="accordion-header" onclick="this.parentElement.classList.toggle('open')">
            <span><span class="text-teal-600 font-bold mr-2">${d.day}</span>${d.title}</span><i class="fas fa-chevron-down text-gray-400"></i>
          </div>
          <div class="accordion-body"><p class="text-gray-600 text-sm">${d.desc}</p></div>
        </div>`).join('')}</div>
      <div class="grid sm:grid-cols-2 gap-6 mb-8">
        <div><h4 class="font-bold text-green-700 mb-3"><i class="fas fa-check-circle mr-2"></i>Inclusions</h4>
          <ul class="space-y-2">${pkg.inclusions.map(i => `<li class="text-sm text-gray-600 flex items-start gap-2"><i class="fas fa-check text-green-500 mt-1 text-xs"></i>${i}</li>`).join('')}</ul>
        </div>
        <div><h4 class="font-bold text-red-600 mb-3"><i class="fas fa-times-circle mr-2"></i>Exclusions</h4>
          <ul class="space-y-2">${pkg.exclusions.map(i => `<li class="text-sm text-gray-600 flex items-start gap-2"><i class="fas fa-times text-red-400 mt-1 text-xs"></i>${i}</li>`).join('')}</ul>
        </div>
      </div>
      <div class="bg-gray-50 rounded-2xl p-6">
        <h4 class="font-heading text-lg font-bold mb-4">Quick Inquiry</h4>
        <form onsubmit="submitInquiry(event,'${pkg.title}')">
          <div class="grid sm:grid-cols-2 gap-4 mb-4">
            <div class="form-group"><label>Name</label><input type="text" class="form-control" required placeholder="Your name"></div>
            <div class="form-group"><label>Email</label><input type="email" class="form-control" required placeholder="your@email.com"></div>
            <div class="form-group"><label>Phone</label><input type="tel" class="form-control" required placeholder="+91 XXXXX XXXXX"></div>
            <div class="form-group"><label>Travel Dates</label><input type="date" class="form-control" required onclick="this.showPicker()"></div>
            <div class="form-group"><label>Travelers</label><select class="form-control"><option>2 People</option><option>3-5</option><option>6-10</option><option>10+</option></select></div>
            <div class="form-group"><label>Message</label><textarea class="form-control" rows="2" placeholder="Any special requests?"></textarea></div>
          </div>
          <button type="submit" class="btn-gold w-full justify-center"><span>Send Inquiry</span><i class="fas fa-paper-plane"></i></button>
        </form>
      </div>
    </div>`;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}
window.openPackageModal = openPackageModal;

function closePackageModal() {
  document.getElementById('package-modal').classList.remove('active');
  document.body.style.overflow = '';
}
window.closePackageModal = closePackageModal;

function submitInquiry(e, pkgTitle) {
  e.preventDefault();
  showToast('success', 'Inquiry Sent!', 'Our travel expert will reach out within 2 hours!');
  closePackageModal();
}
window.submitInquiry = submitInquiry;

document.addEventListener('DOMContentLoaded', () => {
  renderPackages();
  document.getElementById('filter-bar').addEventListener('click', e => {
    const btn = e.target.closest('.filter-tab'); if (!btn) return;
    document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderPackages(btn.dataset.filter);
  });
  document.getElementById('package-modal').addEventListener('click', e => {
    if (e.target.id === 'package-modal') closePackageModal();
  });
});
