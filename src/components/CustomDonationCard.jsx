import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ExternalLink, Check, Users, Target } from "lucide-react";
import { DonationItem } from "@/entities/DonationItem";

export default function DonationCard({ item, onContribution }) {
  const [isContributing, setIsContributing] = useState(false);
  const [customAmount, setCustomAmount] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);
  
  const progress = DonationItem.getProgress(item);
  const remainingContributions = DonationItem.getContributionsRemaining(item);
  const isFullyFunded = DonationItem.isFullyFunded(item);
  const contributionsMade = Math.floor(item.current_amount / item.unit_price);

  const handleDonate = (amount = item.unit_price) => {
    setIsContributing(true);
    
    // Use Sam's Monzo details
    const description = `${item.title} - £${amount}`;
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

  const handleCustomDonation = () => {
    const amount = parseFloat(customAmount);
    if (amount && amount > 0 && amount <= 500) {
      handleDonate(amount);
      setCustomAmount('');
      setShowCustomInput(false);
    }
  };

  return (
    <Card className="group h-full bg-white/80 backdrop-blur-sm border-green-100/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0 h-full flex flex-col">
        {/* Image */}
        <div className="relative overflow-hidden rounded-t-lg aspect-[4/3]">
          {item.image_url ? (
            <img 
              src={item.image_url}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
              £{item.unit_price}
            </Badge>
            {item.max_contributions && (
              <Badge className="bg-blue-100/90 text-blue-800 border-0 text-xs">
                <Users className="w-3 h-3 mr-1" />
                {contributionsMade}/{item.max_contributions}
              </Badge>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex-1">
            <h3 className="text-xl font-medium text-gray-800 mb-2 group-hover:text-green-700 transition-colors">
              {item.title}
            </h3>
            
            {item.description && (
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {item.description}
              </p>
            )}

            {/* Progress Section */}
            <div className="mb-4 space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Progress</span>
                <span>£{item.current_amount} / £{item.target_amount}</span>
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
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            {!isFullyFunded && remainingContributions !== 0 && (
              <>
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
                      Contribute £{item.unit_price}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>

                {/* Custom Amount Option for Donations and Big Items */}
                {(item.is_donation || item.unit_price >= 50) && (
                  <>
                    {!showCustomInput ? (
                      <Button 
                        onClick={() => setShowCustomInput(true)}
                        variant="outline"
                        className="w-full text-green-700 border-green-200 hover:bg-green-50"
                      >
                        <Target className="w-4 h-4 mr-2" />
                        Choose Amount
                      </Button>
                    ) : (
                      <div className="flex gap-2">
                        <input
                          type="number"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          placeholder="£"
                          min="5"
                          max="500"
                          className="flex-1 px-3 py-2 border border-green-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <Button 
                          onClick={handleCustomDonation}
                          disabled={!customAmount || parseFloat(customAmount) <= 0}
                          className="bg-green-600 hover:bg-green-700 text-white px-4"
                        >
                          Give
                        </Button>
                        <Button 
                          onClick={() => {
                            setShowCustomInput(false);
                            setCustomAmount('');
                          }}
                          variant="outline"
                          className="px-3"
                        >
                          ×
                        </Button>
                      </div>
                    )}
                  </>
                )}
              </>
            )}

            {isFullyFunded && (
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <Check className="w-5 h-5 text-green-600 mx-auto mb-1" />
                <span className="text-green-700 font-medium text-sm">Fully Funded!</span>
                <p className="text-green-600 text-xs mt-1">Thank you to all contributors</p>
              </div>
            )}

            {!isFullyFunded && remainingContributions === 0 && (
              <div className="text-center p-3 bg-orange-50 rounded-lg">
                <Users className="w-5 h-5 text-orange-600 mx-auto mb-1" />
                <span className="text-orange-700 font-medium text-sm">All Spots Taken</span>
                <p className="text-orange-600 text-xs mt-1">But still accepting funds!</p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}