import React, { useState, useEffect } from 'react';
import { X, Zap, ArrowRight, MapPin, Globe, Users, Mountain, Calendar, Star, Lightbulb, Award, Heart } from 'lucide-react';

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

const allFacts: Fact[] = [
  // General India Facts
  {
    id: 'languages',
    title: "1,600+ Languages Spoken",
    content: "India is home to over 1,600 languages and dialects, making it one of the most linguistically diverse countries in the world. The Constitution recognizes 22 official languages.",
    category: "Language & Culture",
    icon: "🗣️",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 'festivals',
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
    id: 'geography',
    title: "All Climate Zones in One Country",
    content: "India has all major climate zones - from the snowy peaks of Ladakh to tropical beaches of Kerala, from deserts of Rajasthan to rainforests of Northeast.",
    category: "Geography",
    icon: "🌍",
    color: "from-green-500 to-emerald-500"
  },
  
  // Regional Specific Facts
  {
    id: 'kerala-spices',
    title: "Kerala: Ancient Spice Capital",
    content: "Kerala's spice trade dates back 3,000 years. Romans, Arabs, and Europeans all came here for black pepper, cardamom, and cinnamon - literally worth their weight in gold!",
    category: "Trade History",
    region: "Kerala",
    icon: "🌶️",
    color: "from-amber-500 to-orange-500"
  },
  {
    id: 'rajasthan-water',
    title: "Rajasthan: Masters of Water Harvesting",
    content: "Rajasthan has over 3,000 ancient stepwells (baoris) that harvested rainwater in the desert. These architectural marvels kept communities alive for centuries.",
    category: "Engineering",
    region: "Rajasthan",
    icon: "💧",
    color: "from-blue-500 to-indigo-500"
  },
  {
    id: 'nagaland-tribes',
    title: "Nagaland: 16 Unique Tribes",
    content: "Nagaland has 16 major tribes, each with distinct languages, customs, and traditional attire. The Hornbill Festival showcases this incredible diversity in one place.",
    category: "Tribal Culture",
    region: "Nagaland",
    icon: "🪶",
    color: "from-teal-500 to-green-500"
  },
  {
    id: 'goa-architecture',
    title: "Goa: Indo-Portuguese Fusion",
    content: "Goa's unique architecture blends Indian and Portuguese styles. Houses have oyster shell windows, azulejo tiles, and courtyards - creating a style found nowhere else.",
    category: "Architecture",
    region: "Goa",
    icon: "🏛️",
    color: "from-rose-500 to-pink-500"
  },
  {
    id: 'assam-tea',
    title: "Assam: World's Largest Tea Region",
    content: "Assam produces 55% of India's tea and 15% of the world's tea. A single tea garden can employ 10,000+ people, making them like small cities.",
    category: "Agriculture",
    region: "Assam",
    icon: "🍃",
    color: "from-green-500 to-lime-500"
  },
  {
    id: 'ladakh-monasteries',
    title: "Ladakh: Monasteries Above Clouds",
    content: "Ladakh has monasteries at altitudes over 4,000m - higher than most mountains in Europe! These gompa preserve 1,000-year-old Buddhist manuscripts and art.",
    category: "Spirituality",
    region: "Ladakh",
    icon: "🏔️",
    color: "from-purple-500 to-indigo-500"
  },
  {
    id: 'tamil-nadu-temples',
    title: "Tamil Nadu: 40,000+ Temples",
    content: "Tamil Nadu has over 40,000 temples, some dating back 2,000 years. The Meenakshi Temple alone has 33,000 sculptures - each telling a different story.",
    category: "Heritage",
    region: "Tamil Nadu",
    icon: "🕉️",
    color: "from-yellow-500 to-orange-500"
  },
  {
    id: 'punjab-agriculture',
    title: "Punjab: India's Food Bowl",
    content: "Punjab, just 1.5% of India's area, produces 20% of the country's wheat and 11% of rice. It feeds 40 crore Indians daily!",
    category: "Agriculture",
    region: "Punjab",
    icon: "🌾",
    color: "from-amber-500 to-yellow-500"
  },
  {
    id: 'west-bengal-literature',
    title: "West Bengal: Literary Powerhouse",
    content: "Bengal has produced 5 Nobel Prize winners and countless literary giants. The state has more bookstores per capita than anywhere else in India.",
    category: "Literature",
    region: "West Bengal",
    icon: "📚",
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 'maharashtra-industry',
    title: "Maharashtra: Industrial Giant",
    content: "Maharashtra contributes 25% of India's industrial output and 23% of GDP. Mumbai alone handles 70% of India's capital market transactions.",
    category: "Economy",
    region: "Maharashtra",
    icon: "🏭",
    color: "from-slate-500 to-gray-600"
  },
  {
    id: 'karnataka-tech',
    title: "Karnataka: India's Silicon Valley",
    content: "Bangalore exports more software than entire countries. Karnataka contributes 38% of India's IT exports and houses offices of 200+ Fortune 500 companies.",
    category: "Technology",
    region: "Karnataka",
    icon: "💻",
    color: "from-blue-500 to-purple-500"
  },
  {
    id: 'andhra-pradesh-spices',
    title: "Andhra Pradesh: Spice Capital",
    content: "Andhra Pradesh produces 75% of India's red chilies and 40% of turmeric. The Guntur chili is so hot, it's used to make pepper spray!",
    category: "Agriculture",
    region: "Andhra Pradesh",
    icon: "🌶️",
    color: "from-red-500 to-orange-500"
  },
  {
    id: 'odisha-crafts',
    title: "Odisha: Handicraft Heaven",
    content: "Odisha has 62 different traditional handicrafts, from Pattachitra paintings to silver filigree work. Each district specializes in unique art forms.",
    category: "Arts & Crafts",
    region: "Odisha",
    icon: "🎨",
    color: "from-pink-500 to-rose-500"
  },
  {
    id: 'himachal-pradesh-apples',
    title: "Himachal Pradesh: Apple Paradise",
    content: "Himachal Pradesh produces 90% of India's apples. The state has over 1 lakh apple orchards, and apple farming supports 5 lakh families.",
    category: "Horticulture",
    region: "Himachal Pradesh",
    icon: "🍎",
    color: "from-red-500 to-pink-500"
  },
  {
    id: 'uttarakhand-yoga',
    title: "Uttarakhand: Yoga Capital of World",
    content: "Rishikesh in Uttarakhand is where yoga originated 5,000 years ago. The Beatles' 1968 visit made it globally famous as the 'Yoga Capital of the World'.",
    category: "Spirituality",
    region: "Uttarakhand",
    icon: "🧘",
    color: "from-teal-500 to-cyan-500"
  },
  {
    id: 'gujarat-business',
    title: "Gujarat: Entrepreneurial Spirit",
    content: "Gujarat has the highest number of entrepreneurs per capita in India. The state contributes 22% of India's exports despite having just 5% of the population.",
    category: "Business",
    region: "Gujarat",
    icon: "💼",
    color: "from-emerald-500 to-green-500"
  },
  {
    id: 'jharkhand-minerals',
    title: "Jharkhand: Mineral Treasure Trove",
    content: "Jharkhand has 40% of India's mineral wealth including 29% of coal reserves. The state produces 100% of India's cooking coal.",
    category: "Natural Resources",
    region: "Jharkhand",
    icon: "⛏️",
    color: "from-gray-500 to-slate-600"
  },
  {
    id: 'chhattisgarh-rice',
    title: "Chhattisgarh: Rice Bowl of India",
    content: "Chhattisgarh produces 15% of India's rice and has 23,000 varieties of rice! The state is called 'Dhan ka Katora' (Rice Bowl).",
    category: "Agriculture",
    region: "Chhattisgarh",
    icon: "🌾",
    color: "from-lime-500 to-green-500"
  },
  {
    id: 'mizoram-literacy',
    title: "Mizoram: Highest Literacy State",
    content: "Mizoram has 91.33% literacy rate, the highest in India. The state also has the lowest crime rate and highest per capita income in Northeast India.",
    category: "Education",
    region: "Mizoram",
    icon: "📖",
    color: "from-blue-500 to-indigo-500"
  },
  {
    id: 'sikkim-organic',
    title: "Sikkim: World's First Organic State",
    content: "Sikkim became the world's first 100% organic state in 2016. All farming is chemical-free, making it a model for sustainable agriculture globally.",
    category: "Environment",
    region: "Sikkim",
    icon: "🌱",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 'tripura-bamboo',
    title: "Tripura: Bamboo State",
    content: "Tripura has the highest bamboo coverage in India - 60% of the state is covered in bamboo forests. It's used for everything from houses to musical instruments.",
    category: "Natural Resources",
    region: "Tripura",
    icon: "🎋",
    color: "from-green-500 to-teal-500"
  },
  {
    id: 'manipur-polo',
    title: "Manipur: Birthplace of Polo",
    content: "Modern polo originated in Manipur, where it was called 'Sagol Kangjei'. British cavalry officers learned the game here and took it to the world.",
    category: "Sports",
    region: "Manipur",
    icon: "🐎",
    color: "from-brown-500 to-amber-500"
  },
  {
    id: 'arunachal-pradesh-tribes',
    title: "Arunachal Pradesh: 26 Tribes, 100+ Dialects",
    content: "Arunachal Pradesh has 26 major tribes speaking over 100 dialects. Each tribe has unique festivals, customs, and traditional knowledge systems.",
    category: "Tribal Diversity",
    region: "Arunachal Pradesh",
    icon: "🏔️",
    color: "from-purple-500 to-blue-500"
  },
  {
    id: 'meghalaya-matriarchy',
    title: "Meghalaya: Matrilineal Society",
    content: "Meghalaya's Khasi tribe follows matrilineal system where property passes from mother to youngest daughter. Women are the head of households.",
    category: "Social System",
    region: "Meghalaya",
    icon: "👩",
    color: "from-pink-500 to-purple-500"
  },
  {
    id: 'telangana-pharma',
    title: "Telangana: Pharma Capital",
    content: "Hyderabad in Telangana is called 'Cyberabad' and 'Genome Valley'. The city produces 40% of India's pharmaceuticals and vaccines.",
    category: "Healthcare",
    region: "Telangana",
    icon: "💊",
    color: "from-cyan-500 to-blue-500"
  },
  {
    id: 'haryana-sports',
    title: "Haryana: Sports Powerhouse",
    content: "Haryana, with just 2% of India's population, contributes 25% of Olympic medals. The state has produced champions in wrestling, boxing, and athletics.",
    category: "Sports",
    region: "Haryana",
    icon: "🏆",
    color: "from-gold-500 to-yellow-500"
  },
  {
    id: 'delhi-history',
    title: "Delhi: 7 Historic Cities",
    content: "Delhi has been continuously inhabited for over 2,500 years. The current city is actually the 7th Delhi, built over ruins of 6 previous cities.",
    category: "History",
    region: "Delhi",
    icon: "🏛️",
    color: "from-amber-500 to-orange-500"
  },
  {
    id: 'chandigarh-planning',
    title: "Chandigarh: Planned City Marvel",
    content: "Chandigarh, designed by Le Corbusier, was India's first planned city post-independence. It's divided into sectors like a human body with head, heart, and limbs.",
    category: "Urban Planning",
    region: "Chandigarh",
    icon: "🏙️",
    color: "from-slate-500 to-gray-600"
  },
  {
    id: 'puducherry-french',
    title: "Puducherry: Little France in India",
    content: "Puducherry still maintains French colonial architecture, street names, and culture. French is still an official language, and you can use Euros in some places!",
    category: "Colonial Heritage",
    region: "Puducherry",
    icon: "🇫🇷",
    color: "from-blue-500 to-red-500"
  },
  {
    id: 'lakshadweep-coral',
    title: "Lakshadweep: Coral Paradise",
    content: "Lakshadweep has India's only coral atolls. The islands are so pristine that only 10 of the 36 islands are inhabited, and tourism is strictly regulated.",
    category: "Marine Ecosystem",
    region: "Lakshadweep",
    icon: "🐠",
    color: "from-cyan-500 to-blue-500"
  },
  {
    id: 'andaman-tribes',
    title: "Andaman: Ancient Tribes",
    content: "Andaman Islands are home to some of the world's oldest tribes like the Sentinelese, who have lived in isolation for 60,000 years - older than Egyptian civilization!",
    category: "Indigenous Culture",
    region: "Andaman and Nicobar Islands",
    icon: "🏝️",
    color: "from-teal-500 to-green-500"
  },
  {
    id: 'daman-diu-portuguese',
    title: "Daman and Diu: Portuguese Legacy",
    content: "Daman and Diu were the last Portuguese territories in India, liberated in 1961. The architecture and cuisine still reflect 450 years of Portuguese influence.",
    category: "Colonial History",
    region: "Daman and Diu",
    icon: "🏰",
    color: "from-orange-500 to-red-500"
  },
  {
    id: 'jammu-kashmir-saffron',
    title: "Kashmir: World's Finest Saffron",
    content: "Kashmir produces the world's finest saffron in Pampore. Just 1 kg of saffron requires 150,000 flowers and sells for more than gold!",
    category: "Agriculture",
    region: "Jammu and Kashmir",
    icon: "🌸",
    color: "from-purple-500 to-pink-500"
  }
];

// Function to get random facts
const getRandomFacts = (count: number = 6): Fact[] => {
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
      'Trade History': Star,
      'Engineering': Lightbulb,
      'Tribal Culture': Users,
      'Architecture': Mountain,
      'Agriculture': Star,
      'Spirituality': Heart,
      'Heritage': Award,
      'Literature': Globe,
      'Economy': Star,
      'Technology': Lightbulb,
      'Arts & Crafts': Heart,
      'Horticulture': Star,
      'Business': Award,
      'Natural Resources': Mountain,
      'Education': Globe,
      'Environment': Heart,
      'Sports': Award,
      'History': Globe,
      'Urban Planning': Mountain,
      'Colonial Heritage': Star,
      'Marine Ecosystem': Heart,
      'Indigenous Culture': Users,
      'Colonial History': Globe,
      'Healthcare': Heart
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