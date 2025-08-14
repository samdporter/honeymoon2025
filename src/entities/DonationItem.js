// Italian culinary journey items with multiple contribution support
const sampleItems = [
  // Custom Amount Donation
  {
    id: "custom-donation",
    title: "Choose Your Own Amount",
    description: "Perfect if you'd like to give a specific amount towards our Italian adventure",
    target_amount: null,
    unit_price: null,
    current_amount: 0,
    max_contributions: null,
    category: "donations",
    is_donation: true,
    is_custom: true,
    image_url: null
  },

  // Generic Cash Donations
  {
    id: "donation-10",
    title: "£10 Contribution",
    description: "Every little helps towards our Italian adventure",
    target_amount: 1000, // £10 x 100 people
    unit_price: 10,
    current_amount: 0,
    max_contributions: 100,
    category: "donations",
    is_donation: true,
    image_url: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500&h=400&fit=crop"
  },
  {
    id: "donation-20",
    title: "£20 Contribution", 
    description: "Help us savor the flavors of Italy",
    target_amount: 1000, // £20 x 50 people
    unit_price: 20,
    current_amount: 0,
    max_contributions: 50,
    category: "donations",
    is_donation: true,
    image_url: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500&h=400&fit=crop"
  },
  {
    id: "donation-50",
    title: "£50 Contribution",
    description: "A generous boost to our culinary journey",
    target_amount: 1000, // £50 x 20 people
    unit_price: 50,
    current_amount: 0,
    max_contributions: 20,
    category: "donations",
    is_donation: true,
    image_url: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500&h=400&fit=crop"
  },
  {
    id: "donation-100",
    title: "£100 Contribution",
    description: "A wonderful contribution to our Italian memories",
    target_amount: 1000, // £100 x 10 people
    unit_price: 100,
    current_amount: 0,
    max_contributions: 10,
    category: "donations",
    is_donation: true,
    image_url: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500&h=400&fit=crop"
  },
  {
    id: "donation-150",
    title: "£150 Contribution",
    description: "An incredibly generous gift towards our honeymoon",
    target_amount: 750, // £150 x 5 people
    unit_price: 150,
    current_amount: 0,
    max_contributions: 5,
    category: "donations",
    is_donation: true,
    image_url: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500&h=400&fit=crop"
  },
  {
    id: "donation-200",
    title: "£200 Contribution",
    description: "An amazingly generous contribution to our Italian adventure",
    target_amount: 600, // £200 x 3 people
    unit_price: 200,
    current_amount: 0,
    max_contributions: 3,
    category: "donations",
    is_donation: true,
    image_url: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500&h=400&fit=crop"
  },

  // Multi-contribution Food & Drink Items
  {
    id: 1,
    title: "Morning Espresso & Cornetti",
    description: "Perfect Italian breakfast ritual at local bars - we'll need many!",
    target_amount: 150, // £10 x 15 breakfasts
    unit_price: 10,
    current_amount: 30, // Example: 3 people have contributed
    max_contributions: 15,
    category: "drinks",
    image_url: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=500&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Aperol Spritz Sessions",
    description: "Classic Italian aperitivo - we'll be having quite a few!",
    target_amount: 225, // £15 x 15 sessions
    unit_price: 15,
    current_amount: 45, // 3 contributions so far
    max_contributions: 15,
    category: "drinks",
    image_url: "https://images.unsplash.com/photo-1627558009791-2280bfc9fe14?w=500&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Gelato Adventures",
    description: "Daily gelato tastings across Italy - one is never enough!",
    target_amount: 100, // £5 x 20 gelatos
    unit_price: 5,
    current_amount: 15,
    max_contributions: 20,
    category: "dining",
    image_url: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=500&h=400&fit=crop"
  },
  {
    id: 4,
    title: "Fresh Pasta Meals",
    description: "Authentic pasta dishes from local trattorias",
    target_amount: 350, // £25 x 14 meals
    unit_price: 25,
    current_amount: 75,
    max_contributions: 14,
    category: "dining",
    image_url: "https://images.unsplash.com/photo-1615199348139-00bf10980769?w=500&h=400&fit=crop"
  },
  {
    id: 5,
    title: "Local Wine with Dinner",
    description: "Regional wines to pair with our meals",
    target_amount: 420, // £30 x 14 bottles
    unit_price: 30,
    current_amount: 90,
    max_contributions: 14,
    category: "drinks",
    image_url: "https://images.unsplash.com/photo-1714377769989-140c9e47fbb9?w=500&h=400&fit=crop"
  },

  // Specific Experience Goals
  {
    id: 10,
    title: "Pizza Making Class",
    description: "Learn from a Neapolitan pizza master",
    target_amount: 130, // £65 x 2 people
    unit_price: 65,
    current_amount: 65,
    max_contributions: 2,
    category: "experiences",
    image_url: "https://images.unsplash.com/photo-1532460734809-e7f8475ca917?w=500&h=400&fit=crop"
  },
  {
    id: 11,
    title: "Chianti Wine Tour",
    description: "Visit family vineyards in Tuscany",
    target_amount: 170, // £85 x 2 people
    unit_price: 85,
    current_amount: 0,
    max_contributions: 2,
    category: "experiences",
    image_url: "https://images.unsplash.com/photo-1636362693426-04a3ff8228c9?w=500&h=400&fit=crop"
  },
  {
    id: 12,
    title: "Vespa Day Rentals",
    description: "Cruise through Italian countryside on Vespas",
    target_amount: 360, // £90 x 4 days
    unit_price: 90,
    current_amount: 180,
    max_contributions: 4,
    category: "transport",
    image_url: "https://images.unsplash.com/photo-1476419972179-ac981d01257e?w=500&h=400&fit=crop"
  },
  {
    id: 13,
    title: "Romantic Dinners by the Sea",
    description: "Special seaside dinners with local wines",
    target_amount: 300, // £75 x 4 dinners
    unit_price: 75,
    current_amount: 75,
    max_contributions: 4,
    category: "dining",
    image_url: "https://images.unsplash.com/photo-1611764060811-c052ae8304ef?w=500&h=400&fit=crop"
  },
  {
    id: 14,
    title: "Cooking Classes with Locals",
    description: "Learn family recipes from Italian nonnas",
    target_amount: 240, // £120 x 2 classes
    unit_price: 120,
    current_amount: 0,
    max_contributions: 2,
    category: "experiences",
    image_url: "https://images.unsplash.com/photo-1569767143908-1342240550ce?w=500&h=400&fit=crop"
  },
  {
    id: 15,
    title: "Cozy Accommodation Nights",
    description: "Charming B&Bs and local accommodations",
    target_amount: 1400, // £100 x 14 nights
    unit_price: 100,
    current_amount: 300,
    max_contributions: 14,
    category: "accommodation",
    image_url: "https://images.unsplash.com/photo-1717170647896-73971d55e34b?w=500&h=400&fit=crop"
  },

  // Big Ticket Items
  {
    id: 20,
    title: "Convertible Car Rental",
    description: "Classic Italian road trip car for the full journey",
    target_amount: 600, // £300 x 2 people or smaller contributions
    unit_price: 50, // Allow £50 contributions
    current_amount: 100,
    max_contributions: 12,
    category: "transport",
    image_url: "https://images.unsplash.com/photo-1589296261190-873c8e751605?w=500&h=400&fit=crop"
  },
  {
    id: 21,
    title: "Michelin Star Dinner",
    description: "Once-in-a-lifetime fine dining experience in Florence",
    target_amount: 800, // £400 x 2 people
    unit_price: 100, // Allow £100 contributions
    current_amount: 200,
    max_contributions: 8,
    category: "dining",
    image_url: "https://plus.unsplash.com/premium_photo-1682097304375-2de9b40b0119?w=500&h=400&fit=crop"
  },
  {
    id: 22,
    title: "Tuscan Villa Weekend",
    description: "Luxury villa stay with vineyard views",
    target_amount: 560, // £280 x 2 nights
    unit_price: 70, // Allow £70 contributions
    current_amount: 140,
    max_contributions: 8,
    category: "accommodation",
    image_url: "https://images.unsplash.com/photo-1699394631060-a643e09d4780?w=500&h=400&fit=crop"
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
            return a.unit_price - b.unit_price; // Lower price first within category
          });
        }
        
        resolve(items);
      }, 300);
    });
  }

  static async addContribution(itemId, amount) {
    // In a real app, this would update the backend
    const item = sampleItems.find(item => item.id === itemId);
    if (item) {
      const newAmount = item.current_amount + amount;
      if (newAmount <= item.target_amount) {
        item.current_amount = newAmount;
      }
    }
    return item;
  }

  static getProgress(item) {
    if (!item.target_amount) return 0;
    return Math.min((item.current_amount / item.target_amount) * 100, 100);
  }

  static getContributionsRemaining(item) {
    if (!item.max_contributions) return null;
    const contributionsMade = Math.floor(item.current_amount / item.unit_price);
    return Math.max(0, item.max_contributions - contributionsMade);
  }

  static isFullyFunded(item) {
    return item.current_amount >= item.target_amount;
  }
}