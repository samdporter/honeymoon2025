// Italian culinary journey items
const sampleItems = [
  // Budget-Friendly Drinks (£12-35)
  {
    id: 1,
    title: "Espresso & Cornetto Breakfast",
    description: "Perfect Italian morning ritual at a local bar in Rome",
    price: 12,
    category: "drinks",
    image_url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 2,
    title: "Aperol Spritz for Two in Venice",
    description: "Classic Italian aperitivo watching gondolas drift by",
    price: 18,
    category: "drinks",
    image_url: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 3,
    title: "Beach Beers in Cinque Terre",
    description: "Cold Peroni while watching sunset over the Mediterranean",
    price: 15,
    category: "drinks",
    image_url: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 4,
    title: "Prosecco Bottle for the Room",
    description: "Celebrate our journey with bubbles from Veneto region",
    price: 28,
    category: "drinks",
    image_url: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 5,
    title: "Limoncello Shots on Amalfi Coast",
    description: "Sweet digestivo after dinner overlooking the sea",
    price: 20,
    category: "drinks",
    image_url: "https://images.unsplash.com/photo-1544216717-3bbf52512659?w=500&h=400&fit=crop",
    is_purchased: false
  },

  // Budget Dining (£22-45)
  {
    id: 6,
    title: "Gelato Crawl in Rome - 5 Stops",
    description: "Taste the best gelaterias from Trastevere to Pantheon",
    price: 25,
    category: "dining",
    image_url: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 7,
    title: "Fresh Pasta & Wine Picnic",
    description: "Takeaway carbonara and Frascati wine in Villa Borghese",
    price: 35,
    category: "dining",
    image_url: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 8,
    title: "Focaccia & Wine Lunch",
    description: "Simple Ligurian lunch with local white wine in Cinque Terre",
    price: 22,
    category: "dining",
    image_url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 9,
    title: "Street Food Tour in Naples",
    description: "Pizza fritta, sfogliatelle and espresso in the birthplace of pizza",
    price: 40,
    category: "dining",
    image_url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 10,
    title: "Italian Market Shopping Spree",
    description: "Fresh mozzarella, prosciutto and bread for romantic lunch",
    price: 45,
    category: "dining",
    image_url: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&h=400&fit=crop",
    is_purchased: false
  },

  // Mid-Range Experiences (£65-120)
  {
    id: 11,
    title: "Authentic Pizza Making Class",
    description: "Learn from a Neapolitan pizza master in a traditional kitchen",
    price: 65,
    category: "experiences",
    image_url: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 12,
    title: "Wine Tasting in Chianti",
    description: "Visit three family vineyards in the heart of Tuscany",
    price: 85,
    category: "experiences",
    image_url: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 13,
    title: "Vespa Rental for Half Day",
    description: "Cruise through Tuscan villages like a true Italian",
    price: 90,
    category: "transport",
    image_url: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 14,
    title: "Seafood Lunch by the Sea",
    description: "Fresh catch of the day with local wine overlooking the Adriatic",
    price: 75,
    category: "dining",
    image_url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 15,
    title: "Truffle Pasta at Local Trattoria",
    description: "Handmade pappardelle with white truffles in Umbria",
    price: 95,
    category: "dining",
    image_url: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 16,
    title: "Cooking Class with Local Family",
    description: "Learn nonna's secret recipes in her kitchen in Bologna",
    price: 120,
    category: "experiences",
    image_url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop",
    is_purchased: false
  },

  // Premium Experiences (£180-450)
  {
    id: 17,
    title: "Wine Estate Tour with Tastings",
    description: "Private tour of Barolo winery with cellar tastings and lunch",
    price: 180,
    category: "experiences",
    image_url: "https://images.unsplash.com/photo-1474721717769-b011e8f5c0b0?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 18,
    title: "Romantic Gondola & Prosecco",
    description: "Private gondola ride through Venice canals with champagne",
    price: 220,
    category: "experiences",
    image_url: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 19,
    title: "Private Pasta Making with Chef",
    description: "One-on-one lesson with Michelin-trained chef in Florence",
    price: 250,
    category: "experiences",
    image_url: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 20,
    title: "Tuscan Villa Night with Vineyard Views",
    description: "Romantic stay in converted farmhouse with wine tasting",
    price: 280,
    category: "accommodation",
    image_url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 21,
    title: "Convertible Car Rental (3 Days)",
    description: "Classic Italian road trip from Florence to Rome in style",
    price: 350,
    category: "transport",
    image_url: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 22,
    title: "Michelin Star Dinner in Florence",
    description: "Unforgettable tasting menu at Enoteca Pinchiorri",
    price: 400,
    category: "dining",
    image_url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=400&fit=crop",
    is_purchased: false
  }
];

export class DonationItem {
  static async list(sortBy = 'category') {
    // Simulate async data fetching
    return new Promise((resolve) => {
      setTimeout(() => {
        const items = [...sampleItems];
        
        if (sortBy === 'category') {
          items.sort((a, b) => {
            if (a.category !== b.category) {
              return a.category.localeCompare(b.category);
            }
            return b.price - a.price; // Higher price first within category
          });
        }
        
        resolve(items);
      }, 300);
    });
  }

  static async markAsPurchased(itemId) {
    // In a real app, this would update the backend
    const item = sampleItems.find(item => item.id === itemId);
    if (item) {
      item.is_purchased = true;
    }
    return item;
  }
}