import React from "react";
import { Link } from "react-router-dom";
import StorySection from "../components/StorySection.jsx";
import DonationGrid from "../components/DonationGrid.jsx";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HoneymoonFund() {
  return (
    <div>
      {/* Navigation Header */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-green-100/50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button 
                variant="ghost" 
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 hover:bg-green-50"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Main Page
              </Button>
            </Link>
            
            <Link to="/">
              <Button 
                variant="ghost"
                size="sm"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 hover:bg-green-50"
              >
                <Home className="w-4 h-4" />
                Home
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Original Home Content */}
      <StorySection />
      <DonationGrid />
    </div>
  );
}