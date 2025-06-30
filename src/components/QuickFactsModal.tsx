import React, { useState, useEffect } from 'react';
import { X, Zap, ArrowRight, MapPin, Globe, Users, Mountain, Calendar, Star, Lightbulb, Award, Heart } from 'lucide-react';
import { statesData } from '../data/statesData';

interface Fact {
  id: string;
  title: string;
  content: string;
  category: string;
  region?: string;
  icon: string;
  color: string;
}

interface QuickFactsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreState: (stateName: string) => void;
}

// Generate dynamic facts from statesData
const generateDynamicFacts = (): Fact[] => {
  const dynamicFacts: Fact[] = [];
  
  statesData.forEach((state, index) => {
    // Fact about the state's dish
    dynamicFacts.push({
      id: `dish-${state.id}`,
      title: `${state.name}: ${state.dish.name}`,
      content: state.dish.description,
      category: "Cuisine",
      region: state.name,
      icon: "🍛",
      color: "from-orange-500 to-red-500"
    });

    // Fact about cultural essence
    dynamicFacts.push({
      id: `culture-${state.id}`,
      title: `${state.name}: Cultural Heritage`,
      content: state.culturalEssence,
      category: "Culture",
      region: state.name,
      icon: "🎭",
      color: "from-purple-500 to-pink-500"
    });

    // Fact about famous attractions
    if (state.touristPlaces.length > 0) {
      dynamicFacts.push({
        id: `tourism-${state.id}`,
        title: `${state.name}: ${state.touristPlaces.length}+ Amazing Places`,
        content: `${state.name} offers incredible destinations including ${state.touristPlaces.slice(0, 3).map(p => p.name).join(', ')}${state.touristPlaces.length > 3 ? ' and more' : ''}.`,
        category: "Tourism",
        region: state.name,
        icon: "🏛️",
        color: "from-blue-500 to-cyan-500"
      });
    }

    // Fact about language
    dynamicFacts.push({
      id: `language-${state.id}`,
      title: `${state.name}: "${state.language.phrase}"`,
      content: `In ${state.language.language}, "${state.language.phrase}" means "${state.language.meaning}" - showcasing the linguistic diversity of ${state.name}.`,
      category: "Language",
      region: state.name,
      icon: "🗣️",
      color: "from-green-500 to-emerald-500"
    });

    // Fact about stereotype vs reality
    dynamicFacts.push({
      id: `reality-${state.id}`,
      title: `${state.name}: Beyond Stereotypes`,
      content: `While many think ${state.stereotype.myth.toLowerCase()}, the reality is that ${state.stereotype.reality.toLowerCase()}`,
      category: "Reality Check",
      region: state.name,
      icon: "💡",
      color: "from-yellow-500 to-orange-500"
    });
  });

  return dynamicFacts;
};

// Static general facts about India
const staticFacts: Fact[] = [
  {
    id: 'languages-total',
    title: "1,600+ Languages Spoken",
    content: "India is home to over 1,600 languages and dialects, making it one of the most linguistically diverse countries in the world. The Constitution recognizes 22 official languages.",
    category: "Language & Culture",
    icon: "🗣️",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 'festivals-total',
    title: "5,000+ Festivals Celebrated",
    content: "India celebrates over 5,000 festivals throughout the year - that's about 14 festivals every single day! Each region has its unique celebrations reflecting local traditions.",
    category: "Festivals",
    icon: "🎉",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 'cuisine-diversity',
    title: "Every 100km = New Cuisine",
    content: "India's culinary landscape changes dramatically every 100 kilometers. From spicy Rajasthani dal baati to sweet Bengali mishti doi, each region has distinct flavors.",
    category: "Cuisine",
    icon: "🍛",
    color: "from-orange-500 to-red-500"
  },
  {
    id: 'geography-diversity',
    title: "All Climate Zones in One Country",
    content: "India has all major climate zones - from the snowy peaks of Ladakh to tropical beaches of Kerala, from deserts of Rajasthan to rainforests of Northeast.",
    category: "Geography",
    icon: "🌍",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 'states-total',
    title: "36 States & Union Territories",
    content: "India consists of 28 states and 8 union territories, each with its own unique culture, language, cuisine, and traditions, making it incredibly diverse.",
    category: "Geography",
    icon: "🗺️",
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 'unesco-sites',
    title: "40+ UNESCO World Heritage Sites",
    content: "India has over 40 UNESCO World Heritage Sites, including the Taj Mahal, Red Fort, Ajanta and Ellora Caves, showcasing its rich historical and cultural heritage.",
    category: "Heritage",
    icon: "🏛️",
    color: "from-amber-500 to-orange-500"
  }
];

// Function to get random facts from both dynamic and static
const getRandomFacts = (count: number = 6): Fact[] => {
  const allFacts = [...generateDynamicFacts(), ...staticFacts];
  const shuffled = [...allFacts].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

export default function QuickFactsModal({ isOpen, onClose, onExploreState }: QuickFactsModalProps) {
  const [displayedFacts, setDisplayedFacts] = useState<Fact[]>([]);

  // Generate new facts when modal opens
  useEffect(() => {
    if (isOpen) {
      setDisplayedFacts(getRandomFacts(6));
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleRefreshFacts = () => {
    setDisplayedFacts(getRandomFacts(6));
  };

  const handleExploreRegion = (region: string) => {
    onExploreState(region);
    onClose();
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'Language & Culture': Globe,
      'Festivals': Calendar,
      'Cuisine': Heart,
      'Geography': Mountain,
      'Culture': Users,
      'Tourism': Mountain,
      'Language': Globe,
      'Reality Check': Lightbulb,
      'Heritage': Award
    };
    return iconMap[category] || Star;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-white/20 shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 p-3 rounded-xl">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Quick Facts</h2>
                <p className="text-cyan-100">Fascinating facts about incredible India</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 max-h-[calc(90vh-120px)] overflow-y-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Did You Know?</h3>
              <p className="text-gray-400">Discover amazing facts about India's incredible diversity</p>
            </div>
            <button
              onClick={handleRefreshFacts}
              className="bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 px-6 py-3 rounded-xl font-medium transition-colors border border-cyan-500/30 flex items-center space-x-2"
            >
              <Zap className="h-4 w-4" />
              <span>Refresh Facts</span>
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedFacts.map((fact) => {
              const CategoryIcon = getCategoryIcon(fact.category);
              return (
                <div
                  key={fact.id}
                  className="group bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-2xl p-6 border border-gray-600/20 hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`bg-gradient-to-r ${fact.color} p-2 rounded-lg`}>
                        <CategoryIcon className="h-5 w-5 text-white" />
                      </div>
                      <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">
                        {fact.category}
                      </span>
                    </div>
                    <div className="text-2xl">{fact.icon}</div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {fact.title}
                  </h4>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {fact.content}
                  </p>
                  
                  {fact.region && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <MapPin className="h-4 w-4" />
                        <span>{fact.region}</span>
                      </div>
                      <button
                        onClick={() => handleExploreRegion(fact.region!)}
                        className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                      >
                        <span>Explore</span>
                        <ArrowRight className="h-3 w-3" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
              <h4 className="text-2xl font-bold text-white mb-4">🇮🇳 Incredible India</h4>
              <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
                With 36 states and union territories, 1.4 billion people, and thousands of years of history, 
                India is a treasure trove of fascinating facts. Every region has its own unique story, 
                contribution, and cultural heritage that makes this nation truly incredible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}