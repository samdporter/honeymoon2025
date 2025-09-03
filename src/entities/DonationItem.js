// Replace src/entities/DonationItem.js with this complete version:

// 🎯 HARDCODED TOTAL TARGET: £2,000 (realistic and achievable)
const TOTAL_TARGET = 2000;

const sampleItems = [
  // Custom Amount Option
  {
    id: "custom-donation",
    title: "Choose Your Own Amount",
    description: "Perfect if you'd like to give a specific amount towards our Italian adventure",
    target_amount: null,
    unit_price: null,
    current_amount: 450, // 0,
    max_contributions: null,
    category: "donations",
    is_custom: true,
    image_url: null
  },

  // Fixed Amount Donations
  {
    id: "donation-10",
    title: "£10 Contribution",
    description: "Every little helps towards our Italian adventure",
    target_amount: null, // £10 x 20 people
    unit_price: 10,
    current_amount: 0, // 40, // 4 people have contributed
    max_contributions: null,
    category: "donations",
    image_url: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500&h=400&fit=crop"
  },
  {
    id: "donation-20",
    title: "£20 Contribution", 
    description: "Help us savor the flavors of Italy",
    target_amount: null, // £20 x 10 people
    unit_price: 20,
    current_amount: 0, // 60, // 3 people have contributed
    max_contributions: null,
    category: "donations",
    image_url: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500&h=400&fit=crop"
  },
  {
    id: "donation-50",
    title: "£50 Contribution",
    description: "A generous boost to our culinary journey",
    target_amount: null, // £50 x 4 people
    unit_price: 50,
    current_amount: 50, // 100, // 2 people have contributed
    max_contributions: null,
    category: "donations",
    image_url: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500&h=400&fit=crop"
  },
  {
    id: "donation-100",
    title: "£100 Contribution",
    description: "A wonderful contribution to our Italian memories",
    target_amount: null, // £100 x 3 people
    unit_price: 100,
    current_amount: 200, // 100, // 1 person has contributed
    max_contributions: null,
    category: "donations",
    image_url: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500&h=400&fit=crop"
  },
  {
    id: "donation-200",
    title: "£200 Contribution",
    description: "An amazingly wonderful contribution to our Italian memories",
    target_amount: null, // £200 x 3 people
    unit_price: 200,
    current_amount: 0, // 100, // 1 person has contributed
    max_contributions: null,
    category: "donations",
    image_url: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500&h=400&fit=crop"
  },
  // Drinks & Aperitivo
  {
    id: 1,
    title: "Morning Espresso & Cornetti",
    description: "Perfect Italian breakfast ritual at local bars",
    target_amount: 60, // £10 x 6 breakfasts
    unit_price: 10,
    current_amount: 0, // 30, // 3 people have contributed
    max_contributions: 6,
    category: "drinks",
    image_url: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=500&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Aperol Spritz Sessions",
    description: "Classic Italian aperitivo for sunset moments",
    target_amount: 75, // £15 x 5 sessions
    unit_price: 15,
    current_amount: 0, // 45, // 3 people have contributed
    max_contributions: 5,
    category: "drinks",
    image_url: "https://images.unsplash.com/photo-1627558009791-2280bfc9fe14?w=500&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Beach Beers in Cinque Terre",
    description: "Cold Peroni while watching sunset over the Mediterranean",
    target_amount: 60, // £15 x 4 sessions
    unit_price: 15,
    current_amount: 0, // 15,
    max_contributions: 4,
    category: "drinks",
    image_url: "https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=500&h=400&fit=crop"
  },
  {
    id: 4,
    title: "Prosecco for Special Moments",
    description: "Celebrate our journey with bubbles from Veneto region",
    target_amount: 80, // £20 x 4 bottles
    unit_price: 20,
    current_amount: 0, // 40,
    max_contributions: 4,
    category: "drinks",
    image_url: "https://images.unsplash.com/photo-1619810856355-c5f4e7f8a90e?w=500&h=400&fit=crop"
  },
  {
    id: 5,
    title: "Limoncello on Amalfi Coast",
    description: "Sweet digestivo after dinner overlooking the sea",
    target_amount: 60, // £20 x 3 sessions
    unit_price: 20,
    current_amount: 0, // 20,
    max_contributions: 3,
    category: "drinks",
    image_url: "https://images.unsplash.com/photo-1622575464646-c3c26ee5a3db?w=500&h=400&fit=crop"
  },
  {
    id: 6,
    title: "Premium Italian Wine",
    description: "Something a bit fancier than your average drop",
    target_amount: 150, // £50 x 3 bottles
    unit_price: 50,
    current_amount: 0, // 35,
    max_contributions: 3,
    category: "drinks",
    image_url: "https://images.unsplash.com/photo-1714377769989-140c9e47fbb9?w=500&h=400&fit=crop"
  },

  // Dining Adventures
  {
    id: 7,
    title: "Gelato Crawl Adventures",
    description: "Daily gelato tastings - the most important meal!",
    target_amount: 50, // £5 x 10 gelatos
    unit_price: 5,
    current_amount: 0, // 25, // 5 people have contributed
    max_contributions: 4,
    category: "dining",
    image_url: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=500&h=400&fit=crop"
  },
  {
    id: 8,
    title: "Fresh Pasta & Wine Picnics",
    description: "Takeaway pasta and local wine in beautiful parks",
    target_amount: 105, // £35 x 3 picnics
    unit_price: 35,
    current_amount: 35, // 70,
    max_contributions: 3,
    category: "dining",
    image_url: "https://images.unsplash.com/photo-1615199348139-00bf10980769?w=500&h=400&fit=crop"
  },
  {
    id: 9,
    title: "Focaccia & Wine Lunches",
    description: "Simple Ligurian lunch with local white wine",
    target_amount: 66, // £22 x 3 lunches
    unit_price: 22,
    current_amount: 0, // 44,
    max_contributions: 3,
    category: "dining",
    image_url: "https://images.unsplash.com/photo-1619450239118-3a0385b360c2?w=500&h=400&fit=crop"
  },
  {
    id: 10,
    title: "Pasta Primavera at Trattorias",
    description: "Fresh pasta with seasonal vegetables",
    target_amount: 60, // £30 x 2 meals
    unit_price: 30,
    current_amount: 30, // 30,
    max_contributions: 2,
    category: "dining",
    image_url: "https://images.unsplash.com/photo-1724365858492-743b85c95ac4?w=500&h=400&fit=crop"
  },
  {
    id: 11,
    title: "Street Food Tour in Naples",
    description: "Pizza fritta, sfogliatelle and espresso in pizza's birthplace",
    target_amount: 100, // £50 x 2 people
    unit_price: 50,
    current_amount: 100, // 50,
    max_contributions: 2,
    category: "dining",
    image_url: "https://images.unsplash.com/photo-1599682715474-361182378581?w=500&h=400&fit=crop"
  },
  {
    id: 12,
    title: "Italian Market Shopping",
    description: "Fresh mozzarella, prosciutto and bread for romantic lunches",
    target_amount: 80, // £40 x 2 shopping trips
    unit_price: 40,
    current_amount: 0, // 40,
    max_contributions: 2,
    category: "dining",
    image_url: "https://images.unsplash.com/photo-1614874044863-95c6cc6b6cf3?w=500&h=400&fit=crop"
  },
  {
    id: 13,
    title: "Seafood Lunches by the Sea",
    description: "Fresh catch with local wine overlooking the Adriatic",
    target_amount: 150, // £75 x 2 lunches
    unit_price: 75,
    current_amount: 75, // 0,
    max_contributions: 2,
    category: "dining",
    image_url: "https://images.unsplash.com/photo-1611764060811-c052ae8304ef?w=500&h=400&fit=crop"
  },
  {
    id: 14,
    title: "Truffle Pasta Experience",
    description: "Handmade pappardelle with white truffles in Umbria",
    target_amount: 150, // £75 x 2 meals
    unit_price: 75,
    current_amount: 0, // 0,
    max_contributions: 2,
    category: "dining",
    image_url: "https://images.unsplash.com/photo-1642354609876-5386fea5e7fc?w=500&h=400&fit=crop"
  },
  {
    id: 15,
    title: "Special Celebration Dinner",
    description: "One memorable fine dining experience",
    target_amount: 200, // £100 x 2 people
    unit_price: 100,
    current_amount: 0, // 0,
    max_contributions: 2,
    category: "dining",
    image_url: "https://plus.unsplash.com/premium_photo-1682097304375-2de9b40b0119?w=500&h=400&fit=crop"
  },

  // Transport & Getting Around
  {
    id: 16,
    title: "Cycling Tuscan Countryside",
    description: "Explore scenic countryside on guided bike tours",
    target_amount: 150, // £75 x 2 people
    unit_price: 75,
    current_amount: 75, // 0,
    max_contributions: 2,
    category: "transport",
    image_url: "https://plus.unsplash.com/premium_photo-1684274186180-026782ae24ab?w=500&h=400&fit=crop"
  },
  {
    id: 17,
    title: "Vespa Day Rentals",
    description: "Cruise through Tuscan villages like true Italians",
    target_amount: 200, // £100 x 2 days
    unit_price: 100,
    current_amount: 0, // 100,
    max_contributions: 2,
    category: "transport",
    image_url: "https://images.unsplash.com/photo-1476419972179-ac981d01257e?w=500&h=400&fit=crop"
  },
  {
    id: 18,
    title: "Train Travel Between Cities",
    description: "Comfortable journeys through Italian countryside",
    target_amount: 100, // £50 x 2 journeys
    unit_price: 50,
    current_amount: 0, // 50,
    max_contributions: 4,
    category: "transport",
    image_url: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500&h=400&fit=crop"
  },
  {
    id: 19,
    title: "Convertible Car Days",
    description: "Classic Italian road trip style",
    target_amount: 150, // £50 x 3 days
    unit_price: 50,
    current_amount: 0, // 50,
    max_contributions: 3,
    category: "transport",
    image_url: "https://images.unsplash.com/photo-1589296261190-873c8e751605?w=500&h=400&fit=crop"
  },

  // Accommodation
  {
    id: 20,
    title: "Cosy Mountain Cabin",
    description: "Romantic cabin retreat in the Apennine woods",
    target_amount: 400, // £100 x 2 nights x 2 people
    unit_price: 100,
    current_amount: 400, // 100,
    max_contributions: 4,
    category: "accommodation",
    image_url: "https://images.unsplash.com/photo-1720449041332-b572acf1bf1e?w=500&h=400&fit=crop"
  },
  {
    id: 21,
    title: "Florence City Center Stay",
    description: "Charming apartment in the heart of Florence",
    target_amount: 300, // £150 x 2 nights
    unit_price: 150,
    current_amount: 0, // 0,
    max_contributions: 2,
    category: "accommodation",
    image_url: "https://images.unsplash.com/photo-1717170647896-73971d55e34b?w=500&h=400&fit=crop"
  },
  {
    id: 22,
    title: "Tuscan Villa Night",
    description: "Romantic stay in converted farmhouse with wine tasting",
    target_amount: 200, // £100 x 2 nights
    unit_price: 100,
    current_amount: 200, // 0,
    max_contributions: 2,
    category: "accommodation",
    image_url: "https://images.unsplash.com/photo-1699394631060-a643e09d4780?w=500&h=400&fit=crop"
  },

  // Food & Culture Experiences
  {
    id: 23,
    title: "Authentic Pizza Making Class",
    description: "Learn from a Neapolitan pizza master",
    target_amount: 130, // £65 x 2 people
    unit_price: 65,
    current_amount: 0, // 65,
    max_contributions: 2,
    category: "experiences",
    image_url: "https://images.unsplash.com/photo-1532460734809-e7f8475ca917?w=500&h=400&fit=crop"
  },
  {
    id: 24,
    title: "Wine Tasting in Chianti",
    description: "Visit family vineyards in the heart of Tuscany",
    target_amount: 170, // £85 x 2 people
    unit_price: 85,
    current_amount: 0, // 0,
    max_contributions: 2,
    category: "experiences",
    image_url: "https://images.unsplash.com/photo-1636362693426-04a3ff8228c9?w=500&h=400&fit=crop"
  },
  {
    id: 25,
    title: "Cooking Class with Local Family",
    description: "Learn nonna's secret recipes in Bologna",
    target_amount: 120, // £60 x 2 people
    unit_price: 60,
    current_amount: 0, // 0,
    max_contributions: 2,
    category: "experiences",
    image_url: "https://images.unsplash.com/photo-1569767143908-1342240550ce?w=500&h=400&fit=crop"
  },
  {
    id: 26,
    title: "Wine Estate Tour with Tastings",
    description: "Private tour of Barolo winery with lunch",
    target_amount: 200, // £100 x 2 people
    unit_price: 100,
    current_amount: 0, // 0,
    max_contributions: 2,
    category: "experiences",
    image_url: "https://images.unsplash.com/photo-1597050035361-aeadbc2feb48?w=500&h=400&fit=crop"
  },
  {
    id: 27,
    title: "Romantic Gondola & Prosecco",
    description: "Private gondola ride through Venice canals",
    target_amount: 150, // £75 x 2 people
    unit_price: 75,
    current_amount: 75, // 0,
    max_contributions: 2,
    category: "experiences",
    image_url: "https://images.unsplash.com/photo-1566984991763-91b985a3f9c2?w=500&h=400&fit=crop"
  },
  {
    id: 28,
    title: "Private Pasta Making with Chef",
    description: "One-on-one lesson with Michelin-trained chef",
    target_amount: 160, // £80 x 2 people
    unit_price: 80,
    current_amount: 0, // 0,
    max_contributions: 2,
    category: "experiences",
    image_url: "https://images.unsplash.com/photo-1586779245509-5f429311242f?w=500&h=400&fit=crop"
  },
  {
    id: 29,
    title: "Flights to Italy",
    description: "Round trip flights from London to Florence",
    target_amount: 500, // £250x 2 people
    unit_price: 250,
    current_amount: 0, // 0,
    max_contributions: 2,
    category: "transport",
    image_url: "https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=500&h=400&fit=crop"
  } ,
  {
    id: 30,
    title: "Mediterranean Boat Trip",
    description: "Explore hidden coves and enjoy a seafood lunch",
    target_amount: 200, // £100 x 2 people
    unit_price: 100,
    current_amount: 0, // 0,
    max_contributions: 2,
    category: "transport",
    image_url: "https://images.unsplash.com/photo-1559036212-2fd4158b2571?w=500&h=400&fit=crop"
  }
];

export class DonationItem {
  static async list(sortBy = 'category') {
    return new Promise((resolve) => {
      setTimeout(() => {
        const items = [...sampleItems];
        
        if (sortBy === 'category') {
          items.sort((a, b) => {
            // Put donations first, then other categories
            if (a.category === 'donations' && b.category !== 'donations') return -1;
            if (a.category !== 'donations' && b.category === 'donations') return 1;
            
            if (a.category !== b.category) {
              return a.category.localeCompare(b.category);
            }
            return (a.unit_price || 0) - (b.unit_price || 0);
          });
        }
        
        resolve(items);
      }, 300);
    });
  }

  static async addContribution(itemId, amount) {
    const item = sampleItems.find(item => item.id === itemId);
    if (item && !item.is_custom) {
      const newAmount = item.current_amount + amount;
      if (newAmount <= item.target_amount) {
        item.current_amount = newAmount;
      }
    }
    return item;
  }

  static getProgress(item) {
    if (!item || !item.target_amount || item.is_custom) return 0;
    return Math.min((item.current_amount / item.target_amount) * 100, 100);
  }

  static getContributionsRemaining(item) {
    if (!item || !item.max_contributions || item.is_custom) return null;
    const contributionsMade = Math.floor(item.current_amount / item.unit_price);
    return Math.max(0, item.max_contributions - contributionsMade);
  }

  static isFullyFunded(item) {
    if (!item || item.is_custom) return false;
    return item.current_amount >= item.target_amount;
  }

  // 🎯 HARDCODED TOTALS - This keeps the overall goal realistic
  static getTotalTarget() {
    return TOTAL_TARGET; // Always £2,000
  }

  static getTotalRaised(items) {
    return items
      .filter(item => item && !item.is_custom)
      .reduce((sum, item) => sum + (item.current_amount || 0), 0);
  }
}