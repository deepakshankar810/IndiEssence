import React, { useState, useEffect } from 'react';
import { X, BookOpen, ArrowRight, MapPin, Clock, Users } from 'lucide-react';

interface Story {
  id: string;
  title: string;
  state: string;
  category: string;
  preview: string;
  content: string;
  readTime: string;
  region: string;
}

interface CulturalStoriesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreState: (stateName: string) => void;
}

const allStories: Story[] = [
  {
    id: 'meenakshi-legend',
    title: "The Fish-Eyed Goddess of Madurai",
    state: "Tamil Nadu",
    category: "Temple Legend",
    preview: "Discover how Princess Meenakshi became the patron deity of Madurai...",
    content: "In ancient Madurai, a princess was born with fish-shaped eyes, considered a divine blessing. Princess Meenakshi grew up to be a fierce warrior and just ruler. When she met Lord Shiva in the form of Sundareshwarar, their divine union blessed the city. The magnificent Meenakshi Temple stands as a testament to their eternal love, with its towering gopurams reaching toward the heavens, each sculpture telling stories of devotion and divine grace.",
    readTime: "3 min read",
    region: "South India"
  },
  {
    id: 'golden-temple-langar',
    title: "The World's Largest Kitchen",
    state: "Punjab",
    category: "Living Tradition",
    preview: "Learn about the Golden Temple's langar that serves 100,000+ people daily...",
    content: "Every day at the Golden Temple, an extraordinary act of service unfolds. The community kitchen, or langar, serves free meals to over 100,000 visitors regardless of their religion, caste, or social status. Volunteers from around the world work together - chopping vegetables, rolling rotis, and serving with love. This 500-year-old tradition embodies the Sikh principles of equality, service, and sharing, making it the world's largest free kitchen.",
    readTime: "4 min read",
    region: "North India"
  },
  {
    id: 'backwater-villages',
    title: "Life on Kerala's Liquid Highways",
    state: "Kerala",
    category: "Living Culture",
    preview: "Explore how communities have lived in harmony with water for centuries...",
    content: "In Kerala's backwaters, entire communities have built their lives around water. Families wake up to the gentle lapping of waves against their homes built on stilts. Children learn to swim before they walk, and the daily commute happens by canoe. These waterways serve as highways, connecting villages where ancient traditions of fishing, coir making, and boat building continue. The backwaters aren't just tourist attractions - they're living ecosystems where humans and nature exist in perfect harmony.",
    readTime: "5 min read",
    region: "South India"
  },
  {
    id: 'rajasthan-desert-life',
    title: "Masters of the Desert",
    state: "Rajasthan",
    category: "Desert Culture",
    preview: "How Rajasthani communities thrived in one of the world's harshest environments...",
    content: "For centuries, the people of Rajasthan have turned the harsh Thar Desert into their home through ingenious innovations. They built stepwells (baoris) to harvest every drop of rainwater, created architectural marvels that stay cool in 50°C heat, and developed a cuisine that requires minimal water. The desert communities became master traders, their caravans crossing vast distances, creating a culture of hospitality that welcomes strangers as gods. Their colorful festivals and folk music celebrate life's joys despite the desert's challenges.",
    readTime: "4 min read",
    region: "West India"
  },
  {
    id: 'bengal-adda-culture',
    title: "The Art of Bengali Adda",
    state: "West Bengal",
    category: "Social Tradition",
    preview: "Understanding Bengal's unique culture of intellectual conversations...",
    content: "In Bengal, 'adda' is more than just conversation - it's an art form. Friends gather in tea stalls, park benches, or drawing rooms for hours of passionate discussion about literature, politics, philosophy, and life. These informal gatherings have shaped Bengali intellectual culture for generations. From Nobel laureates to street vendors, everyone participates in adda. It's where ideas are born, friendships are forged, and the Bengali spirit of questioning and creativity flourishes. No topic is off-limits, and every opinion matters.",
    readTime: "3 min read",
    region: "East India"
  },
  {
    id: 'ladakh-monasteries',
    title: "Monasteries in the Clouds",
    state: "Ladakh",
    category: "Spiritual Heritage",
    preview: "Discover the ancient Buddhist monasteries perched high in the Himalayas...",
    content: "In the remote valleys of Ladakh, ancient monasteries cling to cliffsides like eagles' nests. These gompa have preserved Tibetan Buddhist culture for over a thousand years. Monks wake before dawn to the sound of long horns echoing across valleys, their prayers carried by mountain winds. The monasteries are living libraries, housing ancient texts, thangka paintings, and butter sculptures. Here, time moves differently - measured not in hours but in seasons, not in days but in lifetimes of devotion.",
    readTime: "4 min read",
    region: "North India"
  },
  {
    id: 'goa-portuguese-legacy',
    title: "Where East Meets West",
    state: "Goa",
    category: "Colonial Heritage",
    preview: "Explore how 450 years of Portuguese rule shaped Goan culture...",
    content: "Goa is a unique blend where Indian spices meet Portuguese flavors, where Hindu temples stand alongside baroque churches. The Portuguese arrived in 1510 and left an indelible mark on Goan culture. Today, you'll find families with Portuguese surnames speaking Konkani, cooking vindaloo (from 'vinha d'alhos'), and celebrating both Christmas and Ganesh Chaturthi with equal fervor. The architecture tells this story - Indo-Portuguese mansions with oyster shell windows, azulejo tiles, and courtyards that echo with fado and mando music.",
    readTime: "5 min read",
    region: "West India"
  },
  {
    id: 'assam-tea-gardens',
    title: "The Tea Gardens of Assam",
    state: "Assam",
    category: "Living Heritage",
    preview: "Journey through the world's largest tea-growing region...",
    content: "In Assam's rolling hills, generations of tea workers have perfected the art of growing the world's strongest tea. The British established these gardens in the 1800s, bringing workers from across India who created a unique multicultural society. Today, tea gardens are like small towns - with schools, hospitals, and temples. The pluckers, mostly women, move through the bushes with practiced grace, their fingers selecting only the finest 'two leaves and a bud.' Each garden has its own character, its own blend, its own story steeped in tradition.",
    readTime: "4 min read",
    region: "Northeast India"
  },
  {
    id: 'kashmir-houseboats',
    title: "Floating Palaces of Dal Lake",
    state: "Jammu and Kashmir",
    category: "Unique Lifestyle",
    preview: "Experience the unique houseboat culture of Kashmir's Dal Lake...",
    content: "On Dal Lake in Srinagar, entire families have lived on houseboats for generations. These floating homes, called 'doongas,' are masterpieces of Kashmiri craftsmanship - carved walnut wood, hand-knotted carpets, and papier-mâché decorations. The houseboat owners are storytellers, their families having served travelers for over a century. They know every ripple of the lake, every season's mood. Life here follows the lake's rhythm - morning shikara rides to floating vegetable markets, afternoons watching kingfishers dive, evenings with the call to prayer echoing across the water.",
    readTime: "5 min read",
    region: "North India"
  },
  {
    id: 'nagaland-hornbill-festival',
    title: "The Festival of Festivals",
    state: "Nagaland",
    category: "Tribal Culture",
    preview: "Witness Nagaland's spectacular celebration of tribal diversity...",
    content: "Every December, Nagaland comes alive with the Hornbill Festival, where all 16 tribes showcase their unique cultures. Named after the revered hornbill bird, this festival is a kaleidoscope of colors, sounds, and traditions. Each tribe brings their distinct dances, songs, and crafts - from the Ao tribe's harvest songs to the Konyak warriors' traditional attire. The festival grounds become a living museum where ancient headhunting tribes now compete in chili-eating contests and rock concerts blend with folk music. It's where tradition meets modernity in the most spectacular way.",
    readTime: "4 min read",
    region: "Northeast India"
  }
];

// Function to shuffle array and get random selection
const getRandomStories = (count: number = 5): Story[] => {
  const shuffled = [...allStories].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export default function CulturalStoriesModal({ isOpen, onClose, onExploreState }: CulturalStoriesModalProps) {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [displayedStories, setDisplayedStories] = useState<Story[]>([]);

  // Refresh stories every time modal opens
  useEffect(() => {
    if (isOpen) {
      setDisplayedStories(getRandomStories(5));
      setSelectedStory(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleStorySelect = (story: Story) => {
    setSelectedStory(story);
  };

  const handleBack = () => {
    setSelectedStory(null);
  };

  const handleExplore = (stateName: string) => {
    onExploreState(stateName);
    onClose();
    setSelectedStory(null);
  };

  const handleRefreshStories = () => {
    setDisplayedStories(getRandomStories(5));
    setSelectedStory(null);
  };

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
        <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 p-3 rounded-xl">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Cultural Chronicles</h2>
                <p className="text-emerald-100">Stories from every corner of India</p>
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
          {!selectedStory ? (
            /* Story List */
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Choose Your Story</h3>
                  <p className="text-gray-400">Dive into the rich tapestry of Indian culture through these captivating tales</p>
                </div>
                <button
                  onClick={handleRefreshStories}
                  className="bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 px-4 py-2 rounded-xl font-medium transition-colors border border-emerald-500/30"
                >
                  Refresh Stories
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {displayedStories.map((story) => (
                  <div
                    key={story.id}
                    onClick={() => handleStorySelect(story)}
                    className="group bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-2xl p-6 border border-gray-600/20 hover:border-emerald-400/40 transition-all duration-300 cursor-pointer hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm font-medium">
                        {story.category}
                      </span>
                      <span className="text-gray-400 text-sm">{story.region}</span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                      {story.title}
                    </h4>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {story.preview}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{story.state}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{story.readTime}</span>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Story Detail */
            <div>
              <button
                onClick={handleBack}
                className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 mb-6 transition-colors"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
                <span>Back to Stories</span>
              </button>

              <div className="mb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm font-medium">
                    {selectedStory.category}
                  </span>
                  <span className="text-gray-400 text-sm">{selectedStory.region}</span>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">
                  {selectedStory.title}
                </h3>
                
                <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{selectedStory.state}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{selectedStory.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>Cultural Heritage</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-8">
                <p className="text-gray-200 text-lg leading-relaxed">
                  {selectedStory.content}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-gray-400">
                  <p>Want to experience this culture firsthand?</p>
                </div>
                <button
                  onClick={() => handleExplore(selectedStory.state)}
                  className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Explore {selectedStory.state}</span>
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