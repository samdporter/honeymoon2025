import React from "react";
import { Link } from "react-router-dom";
import { Heart, Gift, Camera, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MainPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        {/* 🖼️ LOCAL IMAGE - Put your image in public/wedding-photo.jpg */}
        <img 
          src="/wedding-photo.jpg"
          alt="Kate and Sam's Wedding"
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback if image fails to load
            console.log("Image failed to load, using fallback background");
            e.target.style.display = 'none';
            e.target.parentElement.style.background = 'linear-gradient(135deg, #10b981, #f59e0b, #ef4444)';
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header Section */}
        <div className="flex-1 flex items-center justify-center px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Title */}
            <div className="mb-8">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-white/30">
                <Heart className="w-8 h-8 text-white fill-current" />
              </div>
              <h1 className="text-5xl md:text-7xl font-light text-white mb-4 tracking-wide">
                Kate & Sam
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-red-400 mx-auto rounded-full mb-6"></div>
              <p className="text-xl md:text-2xl text-white/90 font-light">
                We did it!
              </p>
              <p className="text-lg text-white/80 mt-2">
                Thank you for being part of our day
              </p>
            </div>

            {/* Navigation Cards */}
            <div className="grid md:grid-cols-2 gap- max-w-2xl mx-auto mt-12">
              {/* Honeymoon Fund Card */}
              <Link to="/honeymoon-fund">
                <Card className="group cursor-pointer bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Gift className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-3">
                      Our Italian Honeymoon
                    </h3>
                    <p className="text-white/80 text-sm mb-4 leading-relaxed">
                      Help us taste our way through Italy! 
                    </p>
                    <div className="flex items-center justify-center text-white/70 group-hover:text-white transition-colors">
                      <span className="text-sm font-medium">View Honeymoon Fund</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* Photo Upload Card */}
              <Link to="/photos">
                <Card className="group cursor-pointer bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-3">
                      Share Your Photos
                    </h3>
                    <p className="text-white/80 text-sm mb-4 leading-relaxed">
                      Upload your favorite photos or videos.
                    </p>
                    <div className="flex items-center justify-center text-white/70 group-hover:text-white transition-colors">
                      <span className="text-sm font-medium">Upload Photos</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center pb-8 px-4">
          <div className="max-w-2xl mx-auto p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
            <p className="text-white/90 text-lg font-light leading-relaxed">
              Our wedding day was absolutely incredible. Thanks so much to all of you for being a part of it
            </p>
            <div className="flex items-center justify-center mt-4 gap-2">
              <span className="text-white/70">With love,</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span className="text-white font-medium">Kate & Sam</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}