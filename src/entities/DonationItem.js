// Italian culinary journey items
const sampleItems = [
  // Budget-Friendly Drinks (£12-35)
  {
    id: 1,
    title: "Espresso & Cornetto Breakfast",
    description: "Perfect Italian morning ritual at a local bar in Rome",
    price: 10,
    category: "drinks",
    image_url: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 2,
    title: "Aperol Spritz for Two in Venice",
    description: "Classic Italian aperitivo watching gondolas drift by",
    price: 15,
    category: "drinks",
    image_url: "https://images.unsplash.com/photo-1627558009791-2280bfc9fe14?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 3,
    title: "Beach Beers in Cinque Terre",
    description: "Cold Peroni while watching sunset over the Mediterranean",
    price: 15,
    category: "drinks",
    image_url: "https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 4,
    title: "Prosecco Bottle for the Room",
    description: "Celebrate our journey with bubbles from Veneto region",
    price: 20,
    category: "drinks",
    image_url: "https://images.unsplash.com/photo-1619810856355-c5f4e7f8a90e?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 5,
    title: "Limoncello Shots on Amalfi Coast",
    description: "Sweet digestivo after dinner overlooking the sea",
    price: 20,
    category: "drinks",
    image_url: "https://images.unsplash.com/photo-1622575464646-c3c26ee5a3db?w=500&h=400&fit=crop",
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
    image_url: "https://images.unsplash.com/photo-1615199348139-00bf10980769?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 8,
    title: "Focaccia & Wine Lunch",
    description: "Simple Ligurian lunch with local white wine in Cinque Terre",
    price: 22,
    category: "dining",
    image_url: "https://images.unsplash.com/photo-1619450239118-3a0385b360c2?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 9,
    title: "Street Food Tour in Naples",
    description: "Pizza fritta, sfogliatelle and espresso in the birthplace of pizza",
    price: 40,
    category: "dining",
    image_url: "https://images.unsplash.com/photo-1599682715474-361182378581?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 10,
    title: "Italian Market Shopping Spree",
    description: "Fresh mozzarella, prosciutto and bread for romantic lunch",
    price: 45,
    category: "dining",
    image_url: "https://images.unsplash.com/photo-1614874044863-95c6cc6b6cf3?w=500&h=400&fit=crop",
    is_purchased: false
  },

  // Mid-Range Experiences (£65-120)
  {
    id: 11,
    title: "Authentic Pizza Making Class",
    description: "Learn from a Neapolitan pizza master in a traditional kitchen",
    price: 65,
    category: "experiences",
    image_url: "https://images.unsplash.com/photo-1532460734809-e7f8475ca917?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 12,
    title: "Wine Tasting in Chianti",
    description: "Visit three family vineyards in the heart of Tuscany",
    price: 85,
    category: "experiences",
    image_url: "https://images.unsplash.com/photo-1636362693426-04a3ff8228c9?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 13,
    title: "Vespa Rental for Half Day",
    description: "Cruise through Tuscan villages like a true Italian",
    price: 90,
    category: "transport",
    image_url: "https://images.unsplash.com/photo-1476419972179-ac981d01257e?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 14,
    title: "Seafood Lunch by the Sea",
    description: "Fresh catch of the day with local wine overlooking the Adriatic",
    price: 75,
    category: "dining",
    image_url: "https://images.unsplash.com/photo-1611764060811-c052ae8304ef?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 15,
    title: "Truffle Pasta at Local Trattoria",
    description: "Handmade pappardelle with white truffles in Umbria",
    price: 95,
    category: "dining",
    image_url: "https://images.unsplash.com/photo-1642354609876-5386fea5e7fc?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 16,
    title: "Cooking Class with Local Family",
    description: "Learn nonna's secret recipes in her kitchen in Bologna",
    price: 120,
    category: "experiences",
    image_url: "https://images.unsplash.com/photo-1569767143908-1342240550ce?w=500&h=400&fit=crop",
    is_purchased: false
  },

  // Premium Experiences (£180-450)
  {
    id: 17,
    title: "Wine Estate Tour with Tastings",
    description: "Private tour of Barolo winery with cellar tastings and lunch",
    price: 180,
    category: "experiences",
    image_url: "https://images.unsplash.com/photo-1597050035361-aeadbc2feb48?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 18,
    title: "Romantic Gondola & Prosecco",
    description: "Private gondola ride through Venice canals with champagne",
    price: 220,
    category: "experiences",
    image_url: "https://images.unsplash.com/photo-1566984991763-91b985a3f9c2?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 19,
    title: "Private Pasta Making with Chef",
    description: "One-on-one lesson with Michelin-trained chef in Florence",
    price: 250,
    category: "experiences",
    image_url: "https://images.unsplash.com/photo-1586779245509-5f429311242f?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 20,
    title: "Tuscan Villa Night with Vineyard Views",
    description: "Romantic stay in converted farmhouse with wine tasting",
    price: 280,
    category: "accommodation",
    image_url: "https://images.unsplash.com/photo-1699394631060-a643e09d4780?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 21,
    title: "Convertible Car Rental (3 Days)",
    description: "Classic Italian road trip from Florence to Rome in style",
    price: 350,
    category: "transport",
    image_url: "https://images.unsplash.com/photo-1589296261190-873c8e751605?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 22,
    title: "Michelin Star Dinner in Florence",
    description: "Unforgettable tasting menu at Enoteca Pinchiorri",
    price: 400,
    category: "dining",
    image_url: "https://plus.unsplash.com/premium_photo-1682097304375-2de9b40b0119?w=500&h=400&fit=crop",
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