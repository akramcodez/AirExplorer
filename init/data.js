const sampleListings = [
  {
    title: 'Cozy Beachfront Cottage',
    description:
      'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
    image: {
      filename: 'listingimage',
      url: 'https://plus.unsplash.com/premium_photo-1724701624517-22953482ce56?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    price: 1500,
    location: 'Malibu',
    country: 'United States',
    filters: ['trending', 'beach', 'boats', 'all'],
  },
  {
    title: 'Modern Loft in Downtown',
    description:
      'Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE1vZGVybiUyMExvZnQlMjBpbiUyMERvd250b3d8ZW58MHx8MHx8fDA%3D',
    },
    price: 1200,
    location: 'New York City',
    country: 'United States',
    filters: ['trending', 'rooms', 'iconic_cities', 'mountains', 'all','swimming_pool'],
  },
  {
    title: 'Mountain Retreat',
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1708597670612-70bd08ab2850?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    price: 1000,
    location: 'Aspen',
    country: 'United States',
    filters: ['trending', 'rooms', 'mountains', 'all'],
  },
  {
    title: 'Historic Villa in Tuscany',
    description:
      'Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1700993609611-ebee751f3c52?q=80&w=2898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    price: 2500,
    location: 'Florence',
    country: 'Italy',
    filters: ['trending', 'rooms', 'mountains', 'castles', 'farms', 'all'],
  },
  {
    title: 'Secluded Treehouse Getaway',
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: 'listingimage',
      url: 'https://plus.unsplash.com/premium_photo-1685133856065-a32643cc56d0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    price: 800,
    location: 'Portland',
    country: 'United States',
    filters: ['trending', 'camping', 'all'],
  },
  {
    title: 'Beachfront Paradise',
    description:
      'Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.',
    image: {
      filename: 'listingimage',
      url: 'https://plus.unsplash.com/premium_photo-1680966731279-db91badbaf06?q=80&w=2914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    price: 2000,
    location: 'Cancun',
    country: 'Mexico',
    filters: ['trending', 'boats', 'beach', 'mountains', 'all','swimming_pool'],
  },
  {
    title: 'Rustic Cabin by the Lake',
    description:
      'Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1523211589352-48bd02768ccc?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    price: 900,
    location: 'Lake Tahoe',
    country: 'United States',
    filters: ['mountains', 'camping', 'beach', 'boats', 'all'],
  },
  {
    title: 'Luxury Penthouse with City Views',
    description:
      'Indulge in luxury living with panoramic city views from this stunning penthouse apartment.',
    image: {
      filename: 'listingimage',
      url: 'https://plus.unsplash.com/premium_photo-1661902745118-a736d6956c03?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    price: 3500,
    location: 'Los Angeles',
    country: 'United States',
    filters: ['trending', 'rooms', 'iconic_cities', 'all','swimming_pool'],
  },
  {
    title: 'Ski-In/Ski-Out Chalet',
    description:
      'Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    price: 3000,
    location: 'Verbier',
    country: 'Switzerland',
    filters: ['trending', 'beach', 'all'],
  },
  {
    title: 'Safari Lodge in the Serengeti',
    description:
      'Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1667987566780-3b31fa5485c8?q=80&w=2830&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    price: 4000,
    location: 'Serengeti National Park',
    country: 'Tanzania',
    filters: ['trending', 'iconic_cities', 'mountains', 'camping', 'all' ,'swimming_pool'],
  },
  {
    title: 'Historic Canal House',
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1614607206234-f7b56bdff6e7?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    price: 1800,
    location: 'Amsterdam',
    country: 'Netherlands',
    filters: ['trending', 'iconic_cities', 'boats', 'all'],
  },
  {
    title: 'Private Island Retreat',
    description:
      'Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.',
    image: {
      filename: 'listingimage',
      url: 'https://plus.unsplash.com/premium_photo-1697730288131-6684ca63584b?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    price: 10000,
    location: 'Fiji',
    country: 'Fiji',
    filters: ['rooms', 'beach', 'all'],
  },
  {
    title: 'Charming Cottage in the Cotswolds',
    description:
      'Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1568144510602-c4082cb85d43?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    price: 1200,
    location: 'Cotswolds',
    country: 'United Kingdom',
    filters: ['trending', 'castles', 'camping', 'arctic', 'all'],
  },
  {
    title: 'Historic Brownstone in Boston',
    description:
      'Step back in time in this elegant historic brownstone located in the heart of Boston.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1543336414-319b2b916cdb?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    price: 2200,
    location: 'Boston',
    country: 'United States',
    filters: ['trending', 'mountains', 'castles', 'boats', 'all'],
  },
  {
    title: 'Beachfront Bungalow in Bali',
    description:
      'Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 1800,
    location: 'Bali',
    country: 'Indonesia',
    filters: [
      'trending',
      'rooms',
      'iconic_cities',
      'swimming_pool',
      'beach',
      'boats',
      'all',
    ],
  },
  {
    title: 'Mountain View Cabin in Banff',
    description:
      'Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    price: 1500,
    location: 'Banff',
    country: 'Canada',
    filters: ['trending', 'rooms', 'mountains', 'camping', 'domes', 'all'],
  },
  {
    title: 'Art Deco Apartment in Miami',
    description:
      'Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.',
    image: {
      filename: 'listingimage',
      url: 'https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    price: 1600,
    location: 'Miami',
    country: 'United States',
    filters: [
      'trending',
      'iconic_cities',
      'mountains',
      'arctic',
      'domes',
      'all',
    ],
  },
  {
    title: 'Tropical Villa in Phuket',
    description:
      'Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    price: 3000,
    location: 'Phuket',
    country: 'Thailand',
    filters: ['trending', 'mountains', 'castles', 'camping', 'all'],
  },
  {
    title: 'Historic Castle in Scotland',
    description:
      'Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1472502516535-eeee381bb45e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    price: 4000,
    location: 'Scottish Highlands',
    country: 'United Kingdom',
    filters: ['iconic_cities', 'mountains', 'castles', 'camping', 'all'],
  },
  {
    title: 'Desert Oasis in Dubai',
    description:
      'Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 5000,
    location: 'Dubai',
    country: 'United Arab Emirates',
    filters: [
      'trending',
      'rooms',
      'iconic_cities',
      'swimming_pool',
      'beach',
      'boats',
      'all',
    ],
  },
  {
    title: 'Rustic Log Cabin in Montana',
    description:
      'Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    price: 1100,
    location: 'Montana',
    country: 'United States',
    filters: ['trending', 'rooms', 'mountains', 'camping', 'all'],
  },
  {
    title: 'Beachfront Villa in Greece',
    description:
      'Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 2500,
    location: 'Mykonos',
    country: 'Greece',
    filters: ['trending', 'beach', 'boats', 'all'],
  },
  {
    title: 'Eco-Friendly Treehouse Retreat',
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: 'listingimage',
      url: 'https://plus.unsplash.com/premium_photo-1685305380695-90e58a33d4e9?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    price: 750,
    location: 'Costa Rica',
    country: 'Costa Rica',
    filters: ['trending', 'rooms', 'mountains', 'camping', 'farms', 'all'],
  },
  {
    title: 'Historic Cottage in Charleston',
    description:
      'Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    price: 1600,
    location: 'Charleston',
    country: 'United States',
    filters: ['camping', 'farms', 'arctic', 'domes', 'all'],
  },
  {
    title: 'Modern Apartment in Tokyo',
    description:
      'Explore the vibrant city of Tokyo from this modern and centrally located apartment.',
    image: {
      filename: 'listingimage',
      url: 'https://plus.unsplash.com/premium_photo-1682094026083-fc4329ef6771?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    price: 2000,
    location: 'Tokyo',
    country: 'Japan',
    filters: ['trending', 'rooms', 'iconic_cities', 'mountains', 'all'],
  },
  {
    title: 'Lakefront Cabin in New Hampshire',
    description:
      'Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 1200,
    location: 'New Hampshire',
    country: 'United States',
    filters: ['trending', 'mountains', 'camping', 'farms', 'boats', 'all'],
  },
  {
    title: 'Luxury Villa in the Maldives',
    description:
      'Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.',
    image: {
      filename: 'listingimage',
      url: 'https://plus.unsplash.com/premium_photo-1675745330148-1f7e5a7674a5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    price: 6000,
    location: 'Maldives',
    country: 'Maldives',
    filters: [
      'trending',
      'rooms',
      'iconic_cities',
      'mountains',
      'swimming_pool',
      'all',
    ],
  },
  {
    title: 'Ski Chalet in Aspen',
    description:
      'Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 4000,
    location: 'Aspen',
    country: 'United States',
    filters: [
      'mountains',
      'camping',
      'farms',
      'arctic',
      'domes',
      'boats',
      'all',
    ],
  },
  {
    title: 'Secluded Beach House in Costa Rica',
    description:
      'Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 1800,
    location: 'Costa Rica',
    country: 'Costa Rica',
    filters: ['iconic_cities', 'beach', 'boats', 'all'],
  },
];

module.exports = { data: sampleListings };
