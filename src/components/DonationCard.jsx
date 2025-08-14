import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ExternalLink, Check } from "lucide-react";

export default function DonationCard({ item }) {
  const handleDonate = () => {
    // Use Sam's Monzo details
    const monzoUrl = `https://monzo.me/samporter29/${item.price}?d=${encodeURIComponent(`Honeymoon Fund - ${item.title}`)}`;
    window.open(monzoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="group h-full bg-white/80 backdrop-blur-sm border-rose-100/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0">
        {/* Image */}
        <div className="relative overflow-hidden rounded-t-lg aspect-[4/3]">
          {item.image_url ? (
            <img 
              src={item.image_url}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-rose-200 to-pink-200 flex items-center justify-center">
              <Heart className="w-12 h-12 text-white/70" />
            </div>
          )}
          
          {item.is_purchased && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <div className="bg-white rounded-full p-3">
                <Check className="w-8 h-8 text-green-500" />
              </div>
            </div>
          )}
          
          <div className="absolute top-3 right-3">
            <Badge className="bg-white/90 text-gray-800 border-0 font-semibold text-lg">
              £{item.price}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-medium text-gray-800 mb-2 group-hover:text-rose-600 transition-colors">
            {item.title}
          </h3>
          
          {item.description && (
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {item.description}
            </p>
          )}

          <Button 
            onClick={handleDonate}
            disabled={item.is_purchased}
            className={`w-full transition-all duration-200 ${
              item.is_purchased 
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white shadow-lg hover:shadow-xl"
            }`}
          >
            {item.is_purchased ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Already Gifted
              </>
            ) : (
              <>
                <Heart className="w-4 h-4 mr-2 fill-current" />
                Gift This
                <ExternalLink className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}