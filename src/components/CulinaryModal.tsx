import React, { useState, useEffect } from 'react';
import { X, Coffee, ArrowRight, MapPin, Clock, ChefHat, Flame } from 'lucide-react';

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

const allDishes: Dish[] = [
  {
    id: 'chettinad-chicken',
    name: "Chettinad Chicken",
    state: "Tamil Nadu",
    category: "Spicy Curry",
    story: "A fiery curry with 20+ spices that tells the story of ancient spice traders...",
    fullStory: "In the heart of Tamil Nadu's Chettinad region, wealthy merchant families created this legendary dish using spices from their global trade routes. Each family guarded their unique spice blend, passed down through generations. The dish represents the prosperity and cosmopolitan nature of Chettinad merchants who brought flavors from across the world to create something uniquely Tamil. The complex layering of spices - from star anise to stone flower - creates a symphony of flavors that dance on your palate.",
    spiceLevel: 5,
    cookTime: "45 mins",
    region: "South India",
    ingredients: ["Chicken", "Coconut", "Red Chilies", "Coriander", "Fennel", "Star Anise", "Stone Flower"],
    culturalSignificance: "Symbol of Chettinad merchant prosperity and global spice trade heritage"
  },
  {
    id: 'machher-jhol',
    name: "Machher Jhol",
    state: "West Bengal",
    category: "Fish Curry",
    story: "A delicate fish curry that captures the essence of Bengali home cooking...",
    fullStory: "In Bengali households, Machher Jhol is more than a dish - it's an emotion. This light, turmeric-tinted fish curry represents the soul of Bengali cuisine. Made with fresh river fish, it's cooked with minimal spices to let the fish's natural flavors shine. The dish reflects Bengal's geography - a land crisscrossed by rivers where fish is not just food but culture. Every Bengali mother has her own secret to the perfect jhol, often involving the precise balance of turmeric, ginger, and green chilies.",
    spiceLevel: 2,
    cookTime: "30 mins",
    region: "East India",
    ingredients: ["Fresh Fish", "Turmeric", "Ginger", "Green Chilies", "Tomatoes", "Mustard Oil"],
    culturalSignificance: "Represents Bengali home cooking and the river culture of Bengal"
  },
  {
    id: 'vada-pav',
    name: "Vada Pav",
    state: "Maharashtra",
    category: "Street Food",
    story: "Mumbai's beloved street food that represents the spirit of the city...",
    fullStory: "Born in the 1960s outside Dadar railway station, Vada Pav became Mumbai's answer to fast food. Created by Ashok Vaidya, this 'Indian burger' was designed for the city's mill workers who needed quick, affordable, and filling food. The deep-fried potato dumpling in a bun, served with spicy chutneys, represents Mumbai's democratic spirit - rich or poor, everyone eats Vada Pav. It's the taste of Mumbai's hustle, the flavor of dreams, and the comfort food of millions who call this city home.",
    spiceLevel: 3,
    cookTime: "20 mins",
    region: "West India",
    ingredients: ["Potatoes", "Gram Flour", "Pav Bread", "Green Chilies", "Garlic Chutney", "Tamarind Chutney"],
    culturalSignificance: "Symbol of Mumbai's working-class spirit and democratic food culture"
  },
  {
    id: 'dal-baati-churma',
    name: "Dal Baati Churma",
    state: "Rajasthan",
    category: "Traditional Meal",
    story: "A hearty meal that showcases Rajasthan's resourceful desert cuisine...",
    fullStory: "In Rajasthan's harsh desert landscape, Dal Baati Churma represents culinary ingenuity. The hard wheat balls (baati) were originally designed for travelers and warriors - they could be buried in sand and cooked using dried dung, requiring minimal water. The dal provides protein, while churma (sweetened crushed wheat) offers energy for desert life. This complete meal reflects Rajasthani hospitality - guests are served with ghee poured generously over baati, symbolizing abundance despite the desert's scarcity.",
    spiceLevel: 3,
    cookTime: "90 mins",
    region: "West India",
    ingredients: ["Wheat Flour", "Lentils", "Jaggery", "Ghee", "Spices", "Dried Fruits"],
    culturalSignificance: "Represents Rajasthani hospitality and desert survival ingenuity"
  },
  {
    id: 'kerala-sadhya',
    name: "Kerala Sadhya",
    state: "Kerala",
    category: "Festival Feast",
    story: "A vegetarian feast that embodies Kerala's philosophy of balance and community...",
    fullStory: "The Kerala Sadhya is a symphony of flavors served on a banana leaf, representing the state's biodiversity and culinary philosophy. With over 20 dishes, each has a specific place and purpose - from the tangy rasam that aids digestion to the sweet payasam that concludes the meal. Traditionally served during Onam, it brings communities together regardless of caste or creed. The meal follows Ayurvedic principles, balancing six tastes and ensuring nutritional completeness. Eating with hands from a banana leaf connects diners to nature and tradition.",
    spiceLevel: 2,
    cookTime: "4 hours",
    region: "South India",
    ingredients: ["Rice", "Coconut", "Vegetables", "Lentils", "Tamarind", "Curry Leaves", "Jaggery"],
    culturalSignificance: "Embodies Kerala's secular values and Ayurvedic food philosophy"
  },
  {
    id: 'rogan-josh',
    name: "Rogan Josh",
    state: "Jammu and Kashmir",
    category: "Aromatic Curry",
    story: "A royal Kashmiri dish that reflects the valley's Persian influences...",
    fullStory: "Rogan Josh arrived in Kashmir with Persian cooks in the 14th century, but Kashmiri cooks made it their own. The dish gets its distinctive red color not from tomatoes, but from dried Kashmiri chilies and cockscomb flowers. Cooked slowly with yogurt and aromatic spices, it represents the sophistication of Kashmiri cuisine. The name means 'red juice' in Persian, but in Kashmir, it became a symbol of celebration - served at weddings and festivals, representing the warmth of Kashmiri hospitality even in the coldest winters.",
    spiceLevel: 3,
    cookTime: "75 mins",
    region: "North India",
    ingredients: ["Mutton", "Yogurt", "Kashmiri Chilies", "Fennel", "Ginger", "Garlic", "Saffron"],
    culturalSignificance: "Represents Kashmir's Persian heritage and royal culinary traditions"
  },
  {
    id: 'dhokla',
    name: "Dhokla",
    state: "Gujarat",
    category: "Steamed Snack",
    story: "A light, fluffy snack that embodies Gujarat's vegetarian culinary genius...",
    fullStory: "Dhokla is Gujarat's gift to healthy eating - a fermented, steamed cake that's both nutritious and delicious. Made from gram flour and fermented overnight, it represents the Gujarati philosophy of 'simple living, high thinking.' The dish reflects the community's Jain influences, being completely vegetarian and made without root vegetables. Served with green chutney and sweet tamarind sauce, dhokla is often the first food offered to guests, symbolizing the Gujarati tradition of treating guests as gods.",
    spiceLevel: 1,
    cookTime: "30 mins",
    region: "West India",
    ingredients: ["Gram Flour", "Yogurt", "Ginger", "Green Chilies", "Mustard Seeds", "Curry Leaves"],
    culturalSignificance: "Embodies Gujarati hospitality and Jain culinary principles"
  },
  {
    id: 'litti-chokha',
    name: "Litti Chokha",
    state: "Bihar",
    category: "Rustic Meal",
    story: "A humble dish that represents the heart of Bihari cuisine...",
    fullStory: "Litti Chokha is Bihar's soul food - wheat balls stuffed with roasted gram flour, served with mashed vegetables. This dish tells the story of Bihar's agricultural heritage, where farmers needed portable, nutritious meals for long days in the fields. The litti is traditionally cooked over cow dung cakes, giving it a unique smoky flavor. Chokha, made from roasted eggplant, tomatoes, and potatoes, represents the abundance of Bihar's fertile plains. Together, they create a meal that's both humble and deeply satisfying.",
    spiceLevel: 2,
    cookTime: "60 mins",
    region: "East India",
    ingredients: ["Wheat Flour", "Sattu", "Eggplant", "Tomatoes", "Potatoes", "Mustard Oil"],
    culturalSignificance: "Represents Bihar's agricultural heritage and rural food traditions"
  },
  {
    id: 'fish-curry-goa',
    name: "Goan Fish Curry",
    state: "Goa",
    category: "Coastal Curry",
    story: "A coconut-based curry that blends Indian spices with Portuguese influences...",
    fullStory: "Goan Fish Curry is a beautiful fusion of Indian and Portuguese culinary traditions. The Portuguese introduced tomatoes and vinegar, while local cooks added coconut milk and kokum for tanginess. This curry represents Goa's unique position as a cultural bridge between East and West. Made with fresh catch from the Arabian Sea, it's traditionally served with rice at every Goan meal. The dish embodies the laid-back Goan lifestyle - simple ingredients transformed into something extraordinary through patience and love.",
    spiceLevel: 3,
    cookTime: "25 mins",
    region: "West India",
    ingredients: ["Fresh Fish", "Coconut Milk", "Kokum", "Turmeric", "Red Chilies", "Onions"],
    culturalSignificance: "Represents Goa's unique Indo-Portuguese cultural fusion"
  },
  {
    id: 'bamboo-shoot-curry',
    name: "Bamboo Shoot Curry",
    state: "Nagaland",
    category: "Tribal Delicacy",
    story: "A traditional Naga dish that showcases the region's forest-to-table cuisine...",
    fullStory: "In Nagaland's hills, bamboo shoots are more than food - they're a way of life. This curry represents the Naga people's deep connection with their forests. The shoots are fermented for months, developing a unique umami flavor that's central to Naga cuisine. Cooked with minimal spices to preserve the natural taste, it reflects the Naga philosophy of living in harmony with nature. Each tribe has its own variation, but all share the common thread of respecting the forest's bounty and using every part of the bamboo plant.",
    spiceLevel: 2,
    cookTime: "40 mins",
    region: "Northeast India",
    ingredients: ["Bamboo Shoots", "Pork", "Ginger", "Garlic", "Local Herbs", "Fermented Fish"],
    culturalSignificance: "Represents Naga tribal connection with forest ecosystems"
  }
];

// Function to shuffle array and get random selection
const getRandomDishes = (count: number = 5): Dish[] => {
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