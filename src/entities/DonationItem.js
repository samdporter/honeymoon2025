// Replace src/entities/DonationItem.js with this version that includes custom donation:

const sampleItems = [
  // Custom Amount Option - This will render the CustomDonationCard
  {
    id: "custom-donation",
    title: "Choose Your Own Amount",
    description: "Perfect if you'd like to give a specific amount towards our Italian adventure",
    target_amount: null,
    unit_price: null,
    current_amount: 0,
    max_contributions: null,
    category: "donations",
    is_custom: true, // This flag tells us to render CustomDonationCard
    image_url: null
  },

  // Regular donation items
  {
    id: 1,
    title: "Morning Espresso & Cornetti",
    description: "Perfect Italian breakfast ritual at local bars - we'll need many!",
    target_amount: 150,
    unit_price: 10,
    current_amount: 30,
    max_contributions: 15,
    category: "drinks",
    image_url: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=500&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Aperol Spritz Sessions",
    description: "Classic Italian aperitivo - we'll be having quite a few!",
    target_amount: 225,
    unit_price: 15,
    current_amount: 45,
    max_contributions: 15,
    category: "drinks",
    image_url: "https://images.unsplash.com/photo-1627558009791-2280bfc9fe14?w=500&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Gelato Adventures",
    description: "Daily gelato tastings across Italy - one is never enough!",
    target_amount: 100,
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
    target_amount: 350,
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
    target_amount: 420,
    unit_price: 30,
    current_amount: 90,
    max_contributions: 14,
    category: "drinks",
    image_url: "https://images.unsplash.com/photo-1714377769989-140c9e47fbb9?w=500&h=400&fit=crop"
  },
  {
    id: 6,
    title: "Pizza Making Class",
    description: "Learn from a Neapolitan pizza master",
    target_amount: 130,
    unit_price: 65,
    current_amount: 65,
    max_contributions: 2,
    category: "experiences",
    image_url: "https://images.unsplash.com/photo-1532460734809-e7f8475ca917?w=500&h=400&fit=crop"
  },
  {
    id: 7,
    title: "Chianti Wine Tour",
    description: "Visit family vineyards in Tuscany",
    target_amount: 170,
    unit_price: 85,
    current_amount: 0,
    max_contributions: 2,
    category: "experiences",
    image_url: "https://images.unsplash.com/photo-1636362693426-04a3ff8228c9?w=500&h=400&fit=crop"
  },
  {
    id: 8,
    title: "Vespa Day Rentals",
    description: "Cruise through Italian countryside on Vespas",
    target_amount: 360,
    unit_price: 90,
    current_amount: 180,
    max_contributions: 4,
    category: "transport",
    image_url: "https://images.unsplash.com/photo-1476419972179-ac981d01257e?w=500&h=400&fit=crop"
  },
  {
    id: 9,
    title: "Romantic Dinners by the Sea",
    description: "Special seaside dinners with local wines",
    target_amount: 300,
    unit_price: 75,
    current_amount: 75,
    max_contributions: 4,
    category: "dining",
    image_url: "https://images.unsplash.com/photo-1611764060811-c052ae8304ef?w=500&h=400&fit=crop"
  },
  {
    id: 10,
    title: "Cozy Accommodation Nights",
    description: "Charming B&Bs and local accommodations",
    target_amount: 1400,
    unit_price: 100,
    current_amount: 300,
    max_contributions: 14,
    category: "accommodation",
    image_url: "https://images.unsplash.com/photo-1717170647896-73971d55e34b?w=500&h=400&fit=crop"
  }
];

export class DonationItem {
  static async list(sortBy = 'category') {
    return new Promise((resolve) => {
      setTimeout(() => {
        const items = [...sampleItems];
        
        if (sortBy === 'category') {
          items.sort((a, b) => {
            // Put donations (including custom) first
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
}