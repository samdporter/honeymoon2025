import React from "react";
import { Heart, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function StorySection() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-4 tracking-wide">
          Our Italian Adventure
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-red-600 mx-auto rounded-full"></div>
      </div>

      <Card className="bg-white/70 backdrop-blur-sm border-green-100/50 shadow-xl">
        <CardContent className="p-8 md:p-12">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-red-600 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white fill-current" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-1">Un Viaggio d'Amore</h3>
                <p className="text-green-700 text-sm">A culinary journey through bella Italia</p>
              </div>
            </div>

            <p className="text-lg mb-6">
              After saying "I do," we're embarking on the ultimate Italian food adventure! 
              Picture us cruising through Tuscan vineyards in a convertible, sharing gelato in Rome's cobbled streets, 
              and learning pasta-making secrets from Italian nonnas. From budget-friendly spritz at sunset to splurge-worthy Michelin dinners - every bite will be a memory.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-green-700" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">La Strada Italiana</h4>
                  <p className="text-gray-600">
                    From the rolling hills of Tuscany to the Amalfi Coast's dramatic cliffs - 
                    we'll wind through Italy's most delicious regions in a classic convertible, 
                    following our taste buds from trattorias to michelin-starred temples of cuisine.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-red-700" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Our Culinary Calendar</h4>
                  <p className="text-gray-600">
                    Two weeks of pure indulgence - morning espresso and cornetti, 
                    afternoon aperitivo with locals, truffle hunting in Umbria, 
                    and romantic dinners overlooking the Mediterranean.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg">
              Instead of traditional wedding gifts, help us fund our Italian food adventure! 
              From a simple gelato (£12) to a Michelin star splurge (£400), every contribution adds flavor to our journey. 
              Buon viaggio e buon appetito! 🇮🇹
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}