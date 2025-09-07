import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, Gift, Camera, Home } from "lucide-react";

export default function Layout({ children }) {
  const location = useLocation();
  
  // Determine page-specific styling
  const isHoneymoonPage = location.pathname === "/honeymoon-fund";
  const isPhotosPage = location.pathname === "/photos";
  
  const gradientClass = isPhotosPage 
    ? "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
    : "bg-gradient-to-br from-green-50 via-yellow-50 to-red-50";

  return (
    <div className={`min-h-screen ${gradientClass}`}>
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {isPhotosPage ? (
          <>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
          </>
        ) : (
          <>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-green-200/20 to-yellow-200/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-br from-red-200/20 to-green-200/20 rounded-full blur-3xl"></div>
          </>
        )}
      </div>
      
      {/* Header */}
      <header className="relative z-10 bg-white/80 backdrop-blur-md border-b border-green-100/50">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Logo/Title */}
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                isPhotosPage 
                  ? "bg-gradient-to-r from-blue-600 to-purple-600" 
                  : "bg-gradient-to-r from-green-600 to-red-600"
              }`}>
                <Heart className="w-5 h-5 text-white fill-current" />
              </div>
              <div>
                <h1 className="text-xl font-light text-gray-800 tracking-wide">
                  Kate & Sam's Wedding
                </h1>
                <p className="text-xs text-gray-600">
                  {isPhotosPage ? "Photo Sharing" : "Italian Culinary Journey"}
                </p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-4">
              <Link 
                to="/"
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-white/60 rounded-lg transition-all"
              >
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">Home</span>
              </Link>
              
              <Link 
                to="/honeymoon-fund"
                className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-all ${
                  isHoneymoonPage 
                    ? "bg-green-100 text-green-800" 
                    : "text-gray-600 hover:text-gray-800 hover:bg-white/60"
                }`}
              >
                <Gift className="w-4 h-4" />
                <span className="hidden sm:inline">Honeymoon Fund</span>
              </Link>
              
              <Link 
                to="/photos"
                className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-all ${
                  isPhotosPage 
                    ? "bg-blue-100 text-blue-800" 
                    : "text-gray-600 hover:text-gray-800 hover:bg-white/60"
                }`}
              >
                <Camera className="w-4 h-4" />
                <span className="hidden sm:inline">Photos</span>
              </Link>
            </nav>
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
            <p className="text-sm text-gray-500 mb-4">
              Thank you for being part of our special journey
            </p>
            
            {/* Footer Navigation */}
            <div className="flex justify-center gap-6 text-sm">
              <Link to="/" className="text-gray-500 hover:text-gray-700 transition-colors">
                Home
              </Link>
              <Link to="/honeymoon-fund" className="text-gray-500 hover:text-gray-700 transition-colors">
                Honeymoon Fund
              </Link>
              <Link to="/photos" className="text-gray-500 hover:text-gray-700 transition-colors">
                Share Photos
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}