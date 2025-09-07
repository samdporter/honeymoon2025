import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, Camera, Upload, Heart, ExternalLink, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Photos() {
  // Replace this URL with your actual Google Drive upload link
  const googleDriveUploadUrl = "https://drive.google.com/drive/u/3/folders/1QqqRfi9TruIXPmmZBddiIE3a0LKAzAU7";

  const handleUploadClick = () => {
    window.open(googleDriveUploadUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Navigation Header */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-100/50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button 
                variant="ghost" 
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 hover:bg-blue-50"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Main Page
              </Button>
            </Link>
            
            <Link to="/">
              <Button 
                variant="ghost"
                size="sm"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 hover:bg-blue-50"
              >
                <Home className="w-4 h-4" />
                Home
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Camera className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-light text-gray-800 mb-4 tracking-wide">
            Share Your Photos
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Help us capture every magical moment from our special day! 
            Upload your favorite photos to our shared album.
          </p>
        </div>

        {/* Upload Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Main Upload Card */}
          <Card className="bg-white/80 backdrop-blur-sm border-blue-100/50 shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                Upload to Our Album
              </h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Click below to open our shared Google Drive folder where you can upload all your photos from our wedding day.
              </p>
              <Button 
                onClick={handleUploadClick}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Camera className="w-4 h-4 mr-2" />
                Open Photo Upload
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Instructions Card */}
          <Card className="bg-white/80 backdrop-blur-sm border-blue-100/50 shadow-xl">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-4 text-center">
                How to Upload
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 font-medium text-xs">1</span>
                  </div>
                  <p>Click "Open Photo Upload" to access our Google Drive folder</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 font-medium text-xs">2</span>
                  </div>
                  <p>Drag and drop your photos directly into the folder</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 font-medium text-xs">3</span>
                  </div>
                  <p>Or click "New" → "File upload" to select photos from your device</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Heart className="w-3 h-3 text-green-600 fill-current" />
                  </div>
                  <p className="font-medium text-green-700">Upload as many as you'd like!</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-100">
            <CardContent className="p-8">
              <Heart className="w-8 h-8 text-purple-600 mx-auto mb-4 fill-current" />
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                Thank You for Capturing Our Day
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Your photos will help us relive every precious moment of our wedding day. 
                Whether it's a candid laugh, a touching moment, or a fun dance floor shot - 
                we'd love to see our special day through your eyes!
              </p>
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
                <Camera className="w-4 h-4" />
                <span>All photo formats welcome • No size limits • Upload anytime</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Secondary Navigation */}
        <div className="mt-12 text-center">
          <Link to="/honeymoon-fund">
            <Button 
              variant="outline"
              className="mx-auto border-blue-200 text-blue-700 hover:bg-blue-50"
            >
              View Our Honeymoon Fund →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}