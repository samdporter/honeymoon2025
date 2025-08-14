import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Heart, Gift } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-red-50">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-green-200/20 to-yellow-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-br from-red-200/20 to-green-200/20 rounded-full blur-3xl"></div>
      </div>
      
      {/* Header */}
      <header className="relative z-10 bg-white/80 backdrop-blur-md border-b border-green-100/50">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-red-600 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white fill-current" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-light text-gray-800 tracking-wide">
                Our Italian Culinary Journey
              </h1>
              <p className="text-sm text-green-700 font-medium">
                Help us taste our way through Italy
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-20 bg-white/60 backdrop-blur-md border-t border-green-100/50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Gift className="w-5 h-5 text-green-600" />
              <span className="text-gray-600 font-medium">Made with love</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </div>
            <p className="text-sm text-gray-500">
              Thank you for being part of our special journey
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}