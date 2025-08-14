// Replace src/components/DonationGrid.jsx with this version that includes CustomDonationCard:

import React, { useState, useEffect } from "react";
import { DonationItem } from "@/entities/DonationItem";
import DonationCard from "./DonationCard.jsx";
import CustomDonationCard from "./CustomDonationCard.jsx";
import { Skeleton } from "@/components/ui/skeleton";
import { Gift, Heart, Users } from "lucide-react";

const categoryTitles = {
  donations: "General Contributions",
  drinks: "Aperitivo & Drinks",
  dining: "Culinary Adventures", 
  transport: "La Strada (Getting Around)",
  accommodation: "Romantic Stays",
  experiences: "Food & Culture Experiences"
};

export default function DonationGrid() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      const data = await DonationItem.list("category");
      console.log("Loaded items:", data);
      setItems(data || []);
    } catch (error) {
      console.error("Error loading donation items:", error);
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  const handleContribution = async (itemId, amount) => {
    try {
      await DonationItem.addContribution(itemId, amount);
      loadItems();
    } catch (error) {
      console.error("Error processing contribution:", error);
    }
  };

  // Filter items safely
  const filteredItems = selectedCategory === "all" 
    ? items 
    : items.filter(item => item && item.category === selectedCategory);

  // Group items safely
  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!item) return acc;
    
    const category = item.category || "other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  const categories = ["all", ...Object.keys(categoryTitles)];
  
  // Safe calculations - exclude custom donations from totals
  const regularItems = items.filter(item => item && !item.is_custom);
  const totalRaised = DonationItem.getTotalRaised(items);
  const totalGoal = DonationItem.getTotalTarget(); // Hardcoded £2,000
  const fullyFundedCount = regularItems.filter(item => DonationItem.isFullyFunded(item)).length;
  const totalContributors = regularItems.reduce((total, item) => {
    if (!item) return total;
    const contributions = Math.floor((item.current_amount || 0) / (item.unit_price || 1));
    return total + contributions;
  }, 0);

  if (loading) {
    return (
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Skeleton className="h-10 w-64 mx-auto mb-4" />
          <Skeleton className="h-4 w-96 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(6).fill(0).map((_, i) => (
            <Skeleton key={i} className="h-96 rounded-xl" />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-4 tracking-wide">
          Help us taste our way through Italy
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Your presence at our wedding is the greatest gift, but if you'd like to contribute to our Italian culinary adventure, 
          we'd be incredibly grateful. We're aiming for £2,000 to help us create delicious memories together!
        </p>
        
        {/* Overall Progress */}
        <div className="max-w-2xl mx-auto mb-8 p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-green-100/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Heart className="w-5 h-5 text-red-500" />
                <span className="text-2xl font-bold text-gray-800">£{totalRaised}</span>
              </div>
              <p className="text-sm text-gray-600">Total Raised</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Users className="w-5 h-5 text-blue-500" />
                <span className="text-2xl font-bold text-gray-800">{totalContributors}</span>
              </div>
              <p className="text-sm text-gray-600">Contributors</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Gift className="w-5 h-5 text-green-500" />
                <span className="text-2xl font-bold text-gray-800">{fullyFundedCount}</span>
              </div>
              <p className="text-sm text-gray-600">Fully Funded</p>
            </div>
          </div>
          
          <div className="w-full bg-green-100 rounded-full h-4 mb-2">
            <div 
              className="bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 h-4 rounded-full transition-all duration-700 flex items-center justify-end pr-2"
              style={{ width: `${totalGoal > 0 ? Math.min((totalRaised / totalGoal) * 100, 100) : 0}%` }}
            >
              {totalRaised > 0 && (
                <span className="text-white text-xs font-medium">
                  {Math.round(totalGoal > 0 ? (totalRaised / totalGoal) * 100 : 0)}%
                </span>
              )}
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Target: £{totalGoal.toLocaleString()} for our Italian honeymoon adventure
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === category
                ? "bg-gradient-to-r from-green-600 to-red-600 text-white shadow-lg"
                : "bg-white/70 text-gray-600 hover:bg-white/90 hover:text-gray-800 border border-green-100"
            }`}
          >
            {category === "all" ? "All Options" : categoryTitles[category]}
          </button>
        ))}
      </div>

      {/* Items Grid */}
      {selectedCategory === "all" ? (
        Object.entries(groupedItems).map(([category, categoryItems]) => (
          <div key={category} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-red-600 rounded-full flex items-center justify-center">
                {category === 'donations' ? (
                  <Heart className="w-4 h-4 text-white fill-current" />
                ) : (
                  <Gift className="w-4 h-4 text-white" />
                )}
              </div>
              <h3 className="text-2xl font-light text-gray-800">
                {categoryTitles[category] || category}
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-green-200 to-transparent"></div>
              <span className="text-sm text-gray-500 bg-white/60 px-3 py-1 rounded-full">
                {categoryItems.length} {categoryItems.length === 1 ? 'option' : 'options'}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryItems.map(item => {
                if (!item) return null;
                
                // Render CustomDonationCard for custom items
                if (item.is_custom) {
                  return <CustomDonationCard key={item.id} />;
                }
                
                // Render regular DonationCard for normal items
                return (
                  <DonationCard 
                    key={item.id} 
                    item={item} 
                    onContribution={handleContribution}
                  />
                );
              })}
            </div>
          </div>
        ))
      ) : (
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-red-600 rounded-full flex items-center justify-center">
              <Gift className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-2xl font-light text-gray-800">
              {categoryTitles[selectedCategory] || selectedCategory}
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-green-200 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map(item => {
              if (!item) return null;
              
              // Render CustomDonationCard for custom items
              if (item.is_custom) {
                return <CustomDonationCard key={item.id} />;
              }
              
              // Render regular DonationCard for normal items
              return (
                <DonationCard 
                  key={item.id} 
                  item={item} 
                  onContribution={handleContribution}
                />
              );
            })}
          </div>
        </div>
      )}

      {filteredItems.length === 0 && !loading && (
        <div className="text-center py-12">
          <Gift className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">No options found in this category</p>
        </div>
      )}

      {/* Thank You Message */}
      <div className="mt-16 text-center">
        <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-green-50 to-red-50 rounded-2xl border border-green-100">
          <Heart className="w-12 h-12 text-red-500 mx-auto mb-4 fill-current" />
          <h3 className="text-2xl font-light text-gray-800 mb-4">Grazie Mille! 🇮🇹</h3>
          <p className="text-gray-600 leading-relaxed">
            Every contribution, no matter the size, helps us create unforgettable memories in Italy. 
            From a morning espresso to a michelin-starred dinner, each moment will be made sweeter knowing 
            our friends and family helped make it possible. We can't wait to share our adventure with you 
            when we return! <span className="font-medium">With love, Kate & Sam</span>
          </p>
        </div>
      </div>
    </section>
  );
}