import React, { useState, useEffect } from "react";
import { DonationItem } from "@/entities/DonationItem";
import DonationCard from "./DonationCard.jsx";
import { Skeleton } from "@/components/ui/skeleton";
import { Gift } from "lucide-react";

const categoryTitles = {
  drinks: "Aperitivo & Drinks",
  dining: "Culinary Adventures", 
  transport: "La Strada",
  accommodation: "Romantic Stays",
  experiences: "Food & Culture"
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
      setItems(data);
    } catch (error) {
      console.error("Error loading donation items:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredItems = selectedCategory === "all" 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  const groupedItems = filteredItems.reduce((acc, item) => {
    const category = item.category || "other";
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});

  const categories = ["all", ...Object.keys(categoryTitles)];
  const totalRaised = items.filter(item => item.is_purchased).reduce((sum, item) => sum + item.price, 0);
  const totalGoal = items.reduce((sum, item) => sum + item.price, 0);

  if (loading) {
    return (
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Skeleton className="h-10 w-64 mx-auto mb-4" />
          <Skeleton className="h-4 w-96 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(6).fill(0).map((_, i) => (
            <Skeleton key={i} className="h-80 rounded-xl" />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-4 tracking-wide">
          Help Us Create Magic
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Choose something special to gift us for our honeymoon. Each contribution brings us closer to our dream getaway.
        </p>
        
        {/* Progress Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Raised: £{totalRaised}</span>
            <span>Goal: £{totalGoal}</span>
          </div>
          <div className="w-full bg-green-100 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-green-600 to-red-600 h-3 rounded-full transition-all duration-700"
              style={{ width: `${totalGoal > 0 ? (totalRaised / totalGoal) * 100 : 0}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            {Math.round(totalGoal > 0 ? (totalRaised / totalGoal) * 100 : 0)}% funded
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
                : "bg-white/70 text-gray-600 hover:bg-white/90 hover:text-gray-800"
            }`}
          >
            {category === "all" ? "All Items" : categoryTitles[category]}
          </button>
        ))}
      </div>

      {/* Items Grid */}
      {selectedCategory === "all" ? (
        Object.entries(groupedItems).map(([category, categoryItems]) => (
          <div key={category} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Gift className="w-6 h-6 text-green-600" />
              <h3 className="text-2xl font-light text-gray-800">
                {categoryTitles[category] || category}
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-green-200 to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryItems.map(item => (
                <DonationCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <DonationCard key={item.id} item={item} />
          ))}
        </div>
      )}

      {filteredItems.length === 0 && !loading && (
        <div className="text-center py-12">
          <Gift className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">No items found in this category</p>
        </div>
      )}
    </section>
  );
}