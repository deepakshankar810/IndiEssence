import React, { useState, useEffect } from 'react';
import { X, Coffee, ArrowRight, MapPin, Clock, ChefHat, Flame } from 'lucide-react';
import { statesData } from '../data/statesData';

interface Dish {
  id: string;
  name: string;
  state: string;
  category: string;
  story: string;
  fullStory: string;
  spiceLevel: number;
  cookTime: string;
  region: string;
  ingredients: string[];
  culturalSignificance: string;
}

interface CulinaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreState: (stateName: string) => void;
}

// Generate dynamic dishes from statesData
const generateDynamicDishes = (): Dish[] => {
  const dishes: Dish[] = [];
  
  statesData.forEach(state => {
    // Determine spice level based on region and state
    const getSpiceLevel = (stateName: string): number => {
      const spicyStates = ['Andhra Pradesh', 'Telangana', 'Tamil Nadu', 'Rajasthan', 'Gujarat'];
      const mediumSpiceStates = ['Maharashtra', 'Karnataka', 'Madhya Pradesh', 'Uttar Pradesh'];
      const mildStates = ['Kerala', 'West Bengal', 'Punjab', 'Himachal Pradesh'];
      
      if (spicyStates.includes(stateName)) return Math.floor(Math.random() * 2) + 4; // 4-5
      if (mediumSpiceStates.includes(stateName)) return Math.floor(Math.random() * 2) + 3; // 3-4
      if (mildStates.includes(stateName)) return Math.floor(Math.random() * 2) + 2; // 2-3
      return Math.floor(Math.random() * 3) + 2; // 2-4
    };

    // Determine cook time based on dish complexity
    const getCookTime = (): string => {
      const times = ["30 mins", "45 mins", "60 mins", "90 mins", "2 hours"];
      return times[Math.floor(Math.random() * times.length)];
    };

    // Generate ingredients based on region
    const getIngredients = (stateName: string): string[] => {
      const baseIngredients = ["Rice", "Lentils", "Onions", "Garlic", "Ginger"];
      const regionalIngredients: { [key: string]: string[] } = {
        'South India': ["Coconut", "Curry Leaves", "Tamarind", "Mustard Seeds", "Turmeric"],
        'North India': ["Wheat", "Yogurt", "Cumin", "Coriander", "Garam Masala"],
        'West India': ["Jaggery", "Peanuts", "Sesame", "Kokum", "Cashews"],
        'East India': ["Mustard Oil", "Panch Phoron", "Fish", "Poppy Seeds", "Hilsa"],
        'Northeast India': ["Bamboo Shoots", "Fermented Fish", "Local Herbs", "Chilies", "Ginger"]
      };
      
      const region = getRegion(stateName);
      const regional = regionalIngredients[region] || regionalIngredients['North India'];
      return [...baseIngredients.slice(0, 3), ...regional.slice(0, 4)];
    };

    dishes.push({
      id: `dish-${state.id}`,
      name: state.dish.name,
      state: state.name,
      category: getCategoryFromDish(state.dish.name),
      story: `A beloved dish from ${state.name} that represents the culinary heritage of the region...`,
      fullStory: `${state.dish.description} This dish is deeply rooted in the cultural traditions of ${state.name}, where it has been prepared for generations. The recipe reflects the local ingredients, climate, and cultural influences that have shaped the cuisine of this region. Every family has their own variation, passed down through generations, making each preparation unique while maintaining the authentic flavors that define ${state.name}'s culinary identity.`,
      spiceLevel: getSpiceLevel(state.name),
      cookTime: getCookTime(),
      region: getRegion(state.name),
      ingredients: getIngredients(state.name),
      culturalSignificance: `Represents the culinary heritage and cultural identity of ${state.name}, often served during festivals and special occasions.`
    });
  });

  return dishes;
};

// Helper functions
function getRegion(stateName: string): string {
  const northStates = ['Punjab', 'Haryana', 'Himachal Pradesh', 'Uttarakhand', 'Uttar Pradesh', 'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Chandigarh'];
  const southStates = ['Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh', 'Telangana', 'Puducherry'];
  const eastStates = ['West Bengal', 'Odisha', 'Bihar', 'Jharkhand'];
  const westStates = ['Maharashtra', 'Gujarat', 'Rajasthan', 'Goa', 'Madhya Pradesh', 'Chhattisgarh', 'Dadra & Nagar Haveli and Daman & Diu'];
  const northeastStates = ['Assam', 'Arunachal Pradesh', 'Nagaland', 'Manipur', 'Mizoram', 'Tripura', 'Meghalaya', 'Sikkim'];

  if (northStates.includes(stateName)) return 'North India';
  if (southStates.includes(stateName)) return 'South India';
  if (eastStates.includes(stateName)) return 'East India';
  if (westStates.includes(stateName)) return 'West India';
  if (northeastStates.includes(stateName)) return 'Northeast India';
  return 'India';
}

function getCategoryFromDish(dishName: string): string {
  const categories = [
    "Traditional Curry", "Rice Dish", "Bread & Curry", "Street Food", 
    "Festival Special", "Royal Cuisine", "Comfort Food", "Spicy Delicacy",
    "Sweet Treat", "Healthy Bowl", "Fermented Delight", "Grilled Special"
  ];
  return categories[Math.floor(Math.random() * categories.length)];
}

// Function to get random dishes
const getRandomDishes = (count: number = 5): Dish[] => {
  const allDishes = generateDynamicDishes();
  const shuffled = [...allDishes].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export default function CulinaryModal({ isOpen, onClose, onExploreState }: CulinaryModalProps) {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [displayedDishes, setDisplayedDishes] = useState<Dish[]>([]);

  // Refresh dishes every time modal opens
  useEffect(() => {
    if (isOpen) {
      setDisplayedDishes(getRandomDishes(5));
      setSelectedDish(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDishSelect = (dish: Dish) => {
    setSelectedDish(dish);
  };

  const handleBack = () => {
    setSelectedDish(null);
  };

  const handleExplore = (stateName: string) => {
    onExploreState(stateName);
    onClose();
    setSelectedDish(null);
  };

  const handleRefreshDishes = () => {
    setDisplayedDishes(getRandomDishes(5));
    setSelectedDish(null);
  };

  const SpiceIndicator = ({ level }: { level: number }) => (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <Flame 
          key={i} 
          className={`h-4 w-4 ${i < level ? 'text-red-400 fill-current' : 'text-gray-600'}`} 
        />
      ))}
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-white/20 shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-500 to-purple-600 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 p-3 rounded-xl">
                <Coffee className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Culinary Odyssey</h2>
                <p className="text-violet-100">Taste the stories of India</p>
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
          {!selectedDish ? (
            /* Dish List */
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Choose Your Culinary Adventure</h3>
                  <p className="text-gray-400">Discover the stories behind India's most beloved dishes</p>
                </div>
                <button
                  onClick={handleRefreshDishes}
                  className="bg-violet-500/20 hover:bg-violet-500/30 text-violet-300 px-4 py-2 rounded-xl font-medium transition-colors border border-violet-500/30"
                >
                  Refresh Menu
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {displayedDishes.map((dish) => (
                  <div
                    key={dish.id}
                    onClick={() => handleDishSelect(dish)}
                    className="group bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-2xl p-6 border border-gray-600/20 hover:border-violet-400/40 transition-all duration-300 cursor-pointer hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className="bg-violet-500/20 text-violet-300 px-3 py-1 rounded-full text-sm font-medium">
                        {dish.category}
                      </span>
                      <span className="text-gray-400 text-sm">{dish.region}</span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
                      {dish.name}
                    </h4>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {dish.story}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{dish.state}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{dish.cookTime}</span>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-violet-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Dish Detail */
            <div>
              <button
                onClick={handleBack}
                className="flex items-center space-x-2 text-violet-400 hover:text-violet-300 mb-6 transition-colors"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
                <span>Back to Menu</span>
              </button>

              <div className="mb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-violet-500/20 text-violet-300 px-3 py-1 rounded-full text-sm font-medium">
                    {selectedDish.category}
                  </span>
                  <span className="text-gray-400 text-sm">{selectedDish.region}</span>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">
                  {selectedDish.name}
                </h3>
                
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-violet-400" />
                    <span className="text-gray-300">{selectedDish.state}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-violet-400" />
                    <span className="text-gray-300">{selectedDish.cookTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Flame className="h-5 w-5 text-violet-400" />
                    <SpiceIndicator level={selectedDish.spiceLevel} />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* Story */}
                <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-2xl p-8 border border-violet-500/20">
                  <h4 className="text-xl font-bold text-violet-300 mb-4">The Story</h4>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    {selectedDish.fullStory}
                  </p>
                </div>

                {/* Ingredients & Cultural Significance */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-6 border border-orange-500/20">
                    <div className="flex items-center space-x-2 mb-4">
                      <ChefHat className="h-5 w-5 text-orange-400" />
                      <h4 className="text-lg font-bold text-orange-300">Key Ingredients</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedDish.ingredients.map((ingredient, index) => (
                        <span 
                          key={index}
                          className="bg-orange-500/20 text-orange-200 px-3 py-1 rounded-full text-sm"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border border-green-500/20">
                    <h4 className="text-lg font-bold text-green-300 mb-4">Cultural Significance</h4>
                    <p className="text-gray-200 leading-relaxed">
                      {selectedDish.culturalSignificance}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-8">
                <div className="text-gray-400">
                  <p>Ready to taste authentic {selectedDish.state} cuisine?</p>
                </div>
                <button
                  onClick={() => handleExplore(selectedDish.state)}
                  className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Explore {selectedDish.state}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}