import React from 'react';
import { ArrowLeft, Clock, MapPin, Camera, Star, Calendar, Navigation, Ticket, Users, Mountain, Building, Heart, Sunrise, Award } from 'lucide-react';
import { TouristPlace } from '../types';

interface TouristPlaceDetailProps {
  place: TouristPlace;
  stateName: string;
  stateColor: string;
  onBack: () => void;
}

const categoryIcons = {
  heritage: Building,
  nature: Mountain,
  religious: Heart,
  modern: Building,
  adventure: Mountain,
  cultural: Users
};

const categoryColors = {
  heritage: 'from-amber-500 to-orange-600',
  nature: 'from-green-500 to-emerald-600',
  religious: 'from-purple-500 to-pink-600',
  modern: 'from-blue-500 to-cyan-600',
  adventure: 'from-red-500 to-orange-600',
  cultural: 'from-indigo-500 to-purple-600'
};

export default function TouristPlaceDetail({ place, stateName, stateColor, onBack }: TouristPlaceDetailProps) {
  const CategoryIcon = categoryIcons[place.category];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sophisticated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      </div>

      {/* Header */}
      <header className="relative z-50 bg-black/20 backdrop-blur-xl border-b border-white/10 sticky top-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <button
              onClick={onBack}
              className="flex items-center space-x-3 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full transition-all duration-300 border border-white/10 group"
            >
              <ArrowLeft className="h-5 w-5 text-white group-hover:-translate-x-1 transition-transform" />
              <span className="text-white font-medium">Back to {stateName}</span>
            </button>
            <div className="flex items-center space-x-3">
              <MapPin className="h-6 w-6 text-amber-400" />
              <span className="text-lg font-medium text-amber-200">IndiEssence</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`py-24 bg-gradient-to-r ${stateColor} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center mb-8">
              <div className={`bg-gradient-to-r ${categoryColors[place.category]} p-5 rounded-2xl mr-6`}>
                <CategoryIcon className="h-10 w-10 text-white" />
              </div>
              <span className="bg-white/20 px-6 py-3 rounded-full text-lg font-medium capitalize backdrop-blur-sm">
                {place.category} Site
              </span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              {place.name}
            </h1>
            <div className="flex items-center justify-center space-x-8 text-xl opacity-90">
              <div className="flex items-center space-x-3">
                <MapPin className="h-6 w-6" />
                <span>{stateName}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="h-6 w-6 text-yellow-300" />
                <span>Must Visit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="space-y-20">
          {/* Overview */}
          <section>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
              <div className="flex items-center mb-10">
                <div className="relative mr-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl blur-sm opacity-75"></div>
                  <div className="relative bg-gradient-to-r from-amber-400 to-orange-500 p-4 rounded-2xl">
                    <Camera className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h2 className="text-4xl font-bold text-white">Overview</h2>
              </div>
              <p className="text-gray-200 text-xl leading-relaxed mb-12">
                {place.description}
              </p>
              
              {/* Quick Info Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-8 rounded-2xl border border-blue-500/20">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-6 w-6 text-blue-300 mr-3" />
                    <h3 className="font-bold text-blue-300 text-lg">Best Time</h3>
                  </div>
                  <p className="text-gray-200">{place.bestTimeToVisit}</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-8 rounded-2xl border border-green-500/20">
                  <div className="flex items-center mb-4">
                    <Navigation className="h-6 w-6 text-green-300 mr-3" />
                    <h3 className="font-bold text-green-300 text-lg">How to Reach</h3>
                  </div>
                  <p className="text-gray-200">{place.howToReach}</p>
                </div>
                
                {place.entryFee && (
                  <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 p-8 rounded-2xl border border-yellow-500/20">
                    <div className="flex items-center mb-4">
                      <Ticket className="h-6 w-6 text-yellow-300 mr-3" />
                      <h3 className="font-bold text-yellow-300 text-lg">Entry Fee</h3>
                    </div>
                    <p className="text-gray-200">{place.entryFee}</p>
                  </div>
                )}
                
                {place.timings && (
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-purple-500/20">
                    <div className="flex items-center mb-4">
                      <Clock className="h-6 w-6 text-purple-300 mr-3" />
                      <h3 className="font-bold text-purple-300 text-lg">Timings</h3>
                    </div>
                    <p className="text-gray-200">{place.timings}</p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* History */}
          <section>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
              <div className="flex items-center mb-10">
                <div className="relative mr-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl blur-sm opacity-75"></div>
                  <div className="relative bg-gradient-to-r from-amber-400 to-orange-500 p-4 rounded-2xl">
                    <Sunrise className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h2 className="text-4xl font-bold text-white">History & Heritage</h2>
              </div>
              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-10 rounded-2xl border border-amber-500/20">
                <p className="text-gray-200 text-xl leading-relaxed">
                  {place.history}
                </p>
              </div>
            </div>
          </section>

          {/* Special Features */}
          <section>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
              <div className="flex items-center mb-10">
                <div className="relative mr-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-red-500 rounded-2xl blur-sm opacity-75"></div>
                  <div className="relative bg-gradient-to-r from-pink-400 to-red-500 p-4 rounded-2xl">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h2 className="text-4xl font-bold text-white">Special Features</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {place.specialFeatures.map((feature, index) => (
                  <div key={index} className="bg-gradient-to-br from-pink-500/10 to-red-500/10 p-8 rounded-2xl border border-pink-500/20">
                    <div className="flex items-start">
                      <div className="bg-pink-500/20 p-3 rounded-full mr-6 mt-1">
                        <Star className="h-6 w-6 text-pink-300" />
                      </div>
                      <p className="text-gray-200 text-lg leading-relaxed">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Nearby Attractions */}
          <section>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
              <div className="flex items-center mb-10">
                <div className="relative mr-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur-sm opacity-75"></div>
                  <div className="relative bg-gradient-to-r from-green-400 to-emerald-500 p-4 rounded-2xl">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h2 className="text-4xl font-bold text-white">Nearby Attractions</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {place.nearbyAttractions.map((attraction, index) => (
                  <div key={index} className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-8 rounded-2xl border border-green-500/20 hover:-translate-y-2 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <MapPin className="h-6 w-6 text-green-300 mr-3" />
                      <h3 className="font-bold text-green-300 text-lg">Nearby</h3>
                    </div>
                    <p className="text-gray-200 text-lg">{attraction}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}