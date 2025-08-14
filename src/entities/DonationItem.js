// Sample honeymoon fund items
const sampleItems = [
  // Accommodation
  {
    id: 1,
    title: "Romantic Beach Suite",
    description: "A night in a luxury beachfront suite with ocean views and private balcony",
    price: 250,
    category: "accommodation",
    image_url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 2,
    title: "Cozy Mountain Cabin",
    description: "A romantic night in a secluded mountain cabin with fireplace and hot tub",
    price: 180,
    category: "accommodation",
    image_url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 3,
    title: "City Center Hotel",
    description: "One night in a boutique hotel in the heart of the city",
    price: 120,
    category: "accommodation",
    image_url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=400&fit=crop",
    is_purchased: false
  },

  // Food & Drink
  {
    id: 4,
    title: "Candlelit Dinner for Two",
    description: "A romantic three-course dinner at a fine dining restaurant",
    price: 150,
    category: "food_drink",
    image_url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 5,
    title: "Wine Tasting Experience",
    description: "A guided wine tasting experience at a local vineyard",
    price: 80,
    category: "food_drink",
    image_url: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 6,
    title: "Breakfast in Bed",
    description: "A luxurious breakfast served in our hotel room",
    price: 45,
    category: "food_drink",
    image_url: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 7,
    title: "Sunset Cocktails",
    description: "Premium cocktails at a rooftop bar watching the sunset",
    price: 60,
    category: "food_drink",
    image_url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&h=400&fit=crop",
    is_purchased: false
  },

  // Activities
  {
    id: 8,
    title: "Couples Spa Day",
    description: "A full day of relaxation with couples massage and spa treatments",
    price: 300,
    category: "activities",
    image_url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 9,
    title: "Sunset Sailing Trip",
    description: "A romantic sailing trip during golden hour with champagne",
    price: 200,
    category: "activities",
    image_url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 10,
    title: "Hiking Adventure",
    description: "Guided hiking tour to discover hidden waterfalls and scenic viewpoints",
    price: 75,
    category: "activities",
    image_url: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 11,
    title: "Scuba Diving Lesson",
    description: "Beginner scuba diving lesson to explore the underwater world together",
    price: 120,
    category: "activities",
    image_url: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=500&h=400&fit=crop",
    is_purchased: false
  },

  // Transport
  {
    id: 12,
    title: "Airport Transfer",
    description: "Luxury car service from airport to hotel",
    price: 50,
    category: "transport",
    image_url: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 13,
    title: "Scenic Train Journey",
    description: "First-class tickets on a scenic railway through the mountains",
    price: 160,
    category: "transport",
    image_url: "https://images.unsplash.com/photo-1474899420076-a61e74989430?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 14,
    title: "Bike Rental for Two",
    description: "Full day bike rental to explore the countryside at our own pace",
    price: 40,
    category: "transport",
    image_url: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=400&fit=crop",
    is_purchased: false
  },

  // Experiences
  {
    id: 15,
    title: "Hot Air Balloon Ride",
    description: "A magical sunrise hot air balloon ride with champagne breakfast",
    price: 400,
    category: "experiences",
    image_url: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 16,
    title: "Photography Session",
    description: "Professional couples photoshoot in a beautiful location",
    price: 250,
    category: "experiences",
    image_url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 17,
    title: "Cultural Walking Tour",
    description: "Private guided tour of historical sites and local culture",
    price: 100,
    category: "experiences",
    image_url: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?w=500&h=400&fit=crop",
    is_purchased: false
  },
  {
    id: 18,
    title: "Stargazing Experience",
    description: "Private stargazing session with telescope and astronomer guide",
    price: 150,
    category: "experiences",
    image_url: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=500&h=400&fit=crop",
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