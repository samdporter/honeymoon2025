// Make sure this file exists: src/components/CustomDonationCard.jsx

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ExternalLink, Gift } from "lucide-react";

export default function CustomDonationCard() {
  const [customAmount, setCustomAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [isContributing, setIsContributing] = useState(false);

  const quickAmounts = [10, 25, 50, 75, 100, 150];

  const handleDonate = (amount) => {
    setIsContributing(true);
    
    const description = `Italian Honeymoon Fund - £${amount}`;
    const monzoUrl = `https://monzo.me/samporter29/${amount}?d=${encodeURIComponent(description)}`;
    window.open(monzoUrl, '_blank', 'noopener,noreferrer');
    
    setTimeout(() => {
      setIsContributing(false);
      setCustomAmount('');
      setSelectedAmount(null);
    }, 1000);
  };

  const handleCustomDonation = () => {
    const amount = parseFloat(customAmount);
    if (amount && amount > 0 && amount <= 1000) {
      handleDonate(amount);
    }
  };

  const finalAmount = selectedAmount || parseFloat(customAmount) || 0;

  return (
    <Card className="group h-full bg-gradient-to-br from-white/90 to-green-50/80 backdrop-blur-sm border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0 h-full flex flex-col">
        {/* Header */}
        <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-green-500 to-red-500 p-8 text-center">
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              Choose Your Amount
            </h3>
            <p className="text-white/90 text-sm">
              Perfect if you'd like to give a specific amount
            </p>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Quick Amount Buttons */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Quick amounts:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {quickAmounts.map(amount => (
                <button
                  key={amount}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount('');
                  }}
                  className={`p-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedAmount === amount
                      ? "bg-green-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  £{amount}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Amount Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Or enter your own amount:
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">£</span>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(null);
                }}
                placeholder="0"
                min="1"
                max="1000"
                className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Minimum £1, maximum £1000
            </p>
          </div>

          {/* Summary */}
          {finalAmount > 0 && (
            <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-100">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Your contribution:</span>
                <span className="text-2xl font-bold text-green-700">£{finalAmount}</span>
              </div>
              <p className="text-sm text-green-600 mt-1">
                This will help make our Italian adventure even more special! 🇮🇹
              </p>
            </div>
          )}

          {/* Donate Button */}
          <Button 
            onClick={() => handleDonate(finalAmount)}
            disabled={finalAmount <= 0 || finalAmount > 1000 || isContributing}
            className={`w-full transition-all duration-200 ${
              finalAmount > 0 && finalAmount <= 1000
                ? "bg-gradient-to-r from-green-600 to-red-600 hover:from-green-700 hover:to-red-700 text-white shadow-lg hover:shadow-xl"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {isContributing ? (
              <>Processing...</>
            ) : finalAmount > 0 ? (
              <>
                <Heart className="w-4 h-4 mr-2 fill-current" />
                Contribute £{finalAmount}
                <ExternalLink className="w-4 h-4 ml-2" />
              </>
            ) : (
              <>
                <Heart className="w-4 h-4 mr-2" />
                Choose an amount above
              </>
            )}
          </Button>

          {/* Info */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              You'll be redirected to Monzo to complete your contribution securely
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}