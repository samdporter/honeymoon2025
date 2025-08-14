// Replace src/components/DonationCard.jsx with this safer version:

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ExternalLink, Check, Users } from "lucide-react";
import { DonationItem } from "@/entities/DonationItem";

export default function DonationCard({ item, onContribution }) {
  const [isContributing, setIsContributing] = useState(false);
  
  // Safety check - if no item, don't render
  if (!item) {
    console.warn("DonationCard received undefined item");
    return null;
  }

  // Safe access to item properties with defaults
  const title = item.title || "Untitled";
  const description = item.description || "";
  const unitPrice = item.unit_price || 0;
  const currentAmount = item.current_amount || 0;
  const targetAmount = item.target_amount || 0;
  const maxContributions = item.max_contributions || null;
  const imageUrl = item.image_url || null;
  
  const progress = targetAmount > 0 ? Math.min((currentAmount / targetAmount) * 100, 100) : 0;
  const contributionsMade = unitPrice > 0 ? Math.floor(currentAmount / unitPrice) : 0;
  const remainingContributions = maxContributions ? Math.max(0, maxContributions - contributionsMade) : null;
  const isFullyFunded = currentAmount >= targetAmount;

  const handleDonate = (amount = unitPrice) => {
    if (amount <= 0) {
      console.warn("Invalid donation amount:", amount);
      return;
    }
    
    setIsContributing(true);
    
    // Use Sam's Monzo details
    const description = `${title} - £${amount}`;
    const monzoUrl = `https://monzo.me/samporter29/${amount}?d=${encodeURIComponent(description)}`;
    window.open(monzoUrl, '_blank', 'noopener,noreferrer');
    
    // Simulate the contribution being processed
    setTimeout(() => {
      if (onContribution) {
        onContribution(item.id, amount);
      }
      setIsContributing(false);
    }, 1000);
  };

  return (
    <Card className="group h-full bg-white/80 backdrop-blur-sm border-green-100/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0 h-full flex flex-col">
        {/* Image */}
        <div className="relative overflow-hidden rounded-t-lg aspect-[4/3]">
          {imageUrl ? (
            <img 
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                // Fallback if image fails to load
                e.target.style.display = 'none';
              }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-green-200 to-yellow-200 flex items-center justify-center">
              <Heart className="w-12 h-12 text-white/70" />
            </div>
          )}
          
          {isFullyFunded && (
            <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center">
              <div className="bg-white/90 rounded-full p-2">
                <Check className="w-6 h-6 text-green-600" />
              </div>
            </div>
          )}
          
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            <Badge className="bg-white/90 text-gray-800 border-0 font-semibold">
              £{unitPrice}
            </Badge>
            {maxContributions && (
              <Badge className="bg-blue-100/90 text-blue-800 border-0 text-xs">
                <Users className="w-3 h-3 mr-1" />
                {contributionsMade}/{maxContributions}
              </Badge>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex-1">
            <h3 className="text-xl font-medium text-gray-800 mb-2 group-hover:text-green-700 transition-colors">
              {title}
            </h3>
            
            {description && (
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {description}
              </p>
            )}

            {/* Progress Section */}
            {targetAmount > 0 && (
              <div className="mb-4 space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Progress</span>
                  <span>£{currentAmount} / £{targetAmount}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-600 to-red-600 h-2 rounded-full transition-all duration-700"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{Math.round(progress)}% funded</span>
                  {remainingContributions !== null && (
                    <span>{remainingContributions} spots left</span>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Action Button */}
          <div>
            {!isFullyFunded && remainingContributions !== 0 && unitPrice > 0 ? (
              <Button 
                onClick={() => handleDonate()}
                disabled={isContributing}
                className="w-full bg-gradient-to-r from-green-600 to-red-600 hover:from-green-700 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
              >
                {isContributing ? (
                  <>Contributing...</>
                ) : (
                  <>
                    <Heart className="w-4 h-4 mr-2 fill-current" />
                    Contribute £{unitPrice}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            ) : isFullyFunded ? (
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <Check className="w-5 h-5 text-green-600 mx-auto mb-1" />
                <span className="text-green-700 font-medium text-sm">Fully Funded!</span>
                <p className="text-green-600 text-xs mt-1">Thank you to all contributors</p>
              </div>
            ) : remainingContributions === 0 ? (
              <div className="text-center p-3 bg-orange-50 rounded-lg">
                <Users className="w-5 h-5 text-orange-600 mx-auto mb-1" />
                <span className="text-orange-700 font-medium text-sm">All Spots Taken</span>
                <p className="text-orange-600 text-xs mt-1">But still accepting funds!</p>
              </div>
            ) : (
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-500 text-sm">Item not available</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}