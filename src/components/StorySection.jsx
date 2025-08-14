import React from "react";
import { Heart, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function StorySection() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-4 tracking-wide">
          Our Dream Honeymoon
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto rounded-full"></div>
      </div>

      <Card className="bg-white/70 backdrop-blur-sm border-rose-100/50 shadow-xl">
        <CardContent className="p-8 md:p-12">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white fill-current" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-1">A Journey of Love</h3>
                <p className="text-rose-600 text-sm">Creating memories to last a lifetime</p>
              </div>
            </div>

            <p className="text-lg mb-6">
              After saying "I do," we're dreaming of the perfect honeymoon escape. 
              We envision lazy mornings with coffee on a balcony overlooking crystal-clear waters, 
              romantic dinners under the stars, and adventures that will become our favorite stories to tell.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Where We're Going</h4>
                  <p className="text-gray-600">
                    A beautiful coastal destination where we can relax on pristine beaches, 
                    explore charming local towns, and indulge in incredible cuisine.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Our Plans</h4>
                  <p className="text-gray-600">
                    Two weeks of pure bliss - from sunrise yoga sessions and spa treatments 
                    to sunset sailing and discovering hidden gems together.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg">
              Instead of traditional wedding gifts, we'd love for you to help us create these magical moments. 
              Every contribution, big or small, brings us closer to our dream honeymoon and becomes part of our love story.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}