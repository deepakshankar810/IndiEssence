import React, { useState, useEffect } from 'react';
import { X, BookOpen, ArrowRight, MapPin, Clock, Users } from 'lucide-react';
import { statesData } from '../data/statesData';

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

// Generate dynamic stories from statesData
const generateDynamicStories = (): Story[] => {
  const stories: Story[] = [];
  
  statesData.forEach(state => {
    // Story about cultural essence
    stories.push({
      id: `culture-${state.id}`,
      title: `The Cultural Heart of ${state.name}`,
      state: state.name,
      category: "Cultural Heritage",
      preview: `Discover the rich cultural tapestry that makes ${state.name} unique...`,
      content: `${state.culturalEssence} The people of ${state.name} have preserved their traditions while embracing modernity, creating a unique cultural landscape that reflects both ancient wisdom and contemporary aspirations. From their traditional greeting "${state.language.phrase}" meaning "${state.language.meaning}" to their famous ${state.dish.name}, every aspect of life here tells a story of cultural continuity and adaptation.`,
      readTime: "4 min read",
      region: getRegion(state.name)
    });

    // Story about daily life
    stories.push({
      id: `life-${state.id}`,
      title: `A Day in the Life: ${state.name}`,
      state: state.name,
      category: "Living Culture",
      preview: `Experience how people live, work, and celebrate in ${state.name}...`,
      content: `In the bustling cities of ${state.name}, ${state.dayInLife.urban} Meanwhile, in the peaceful countryside, ${state.dayInLife.rural} This beautiful contrast between urban dynamism and rural tranquility creates the unique rhythm of life in ${state.name}, where tradition and progress dance together in perfect harmony.`,
      readTime: "5 min read",
      region: getRegion(state.name)
    });

    // Story about breaking stereotypes
    stories.push({
      id: `reality-${state.id}`,
      title: `Beyond Stereotypes: The Real ${state.name}`,
      state: state.name,
      category: "Reality Check",
      preview: `Discover the truth behind common misconceptions about ${state.name}...`,
      content: `Many people think that ${state.stereotype.myth}, but the reality is far more fascinating. ${state.stereotype.reality} This transformation of perception happens to everyone who takes the time to truly explore ${state.name} - they discover a land that defies easy categorization and reveals new wonders at every turn.`,
      readTime: "3 min read",
      region: getRegion(state.name)
    });

    // Story about festivals and traditions
    stories.push({
      id: `festivals-${state.id}`,
      title: `Festivals Through the Seasons in ${state.name}`,
      state: state.name,
      category: "Festivals & Traditions",
      preview: `Journey through the year-round celebrations that bring ${state.name} to life...`,
      content: `The calendar in ${state.name} is marked by vibrant celebrations that reflect the changing seasons and the enduring spirit of its people. Spring brings ${state.festivals.spring}, summer celebrates with ${state.festivals.summer}, the monsoons are welcomed with ${state.festivals.monsoon}, and winter concludes the year with ${state.festivals.winter}. Each festival is not just a celebration but a living tradition that connects generations and strengthens community bonds.`,
      readTime: "4 min read",
      region: getRegion(state.name)
    });

    // Story about tourist places if available
    if (state.touristPlaces.length > 0) {
      const place = state.touristPlaces[0];
      stories.push({
        id: `heritage-${state.id}`,
        title: `${place.name}: A Jewel of ${state.name}`,
        state: state.name,
        category: "Heritage Sites",
        preview: `Explore the fascinating history and significance of ${place.name}...`,
        content: `${place.description} ${place.history} Today, ${place.name} stands as a testament to the rich heritage of ${state.name}, attracting visitors from around the world who come to witness its beauty and learn about its significance. The site represents not just architectural brilliance but also the cultural values and artistic achievements of the people of ${state.name}.`,
        readTime: "6 min read",
        region: getRegion(state.name)
      });
    }
  });

  return stories;
};

// Helper function to determine region
function getRegion(stateName: string): string {
  const northStates = ['Punjab', 'Haryana', 'Himachal Pradesh', 'Uttarakhand', 'Uttar Pradesh', 'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Chandigarh'];
  const southStates = ['Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh', 'Telangana', 'Puducherry'];
  const eastStates = ['West Bengal', 'Odisha', 'Bihar', 'Jharkhand'];
  const westStates = ['Maharashtra', 'Gujarat', 'Rajasthan', 'Goa', 'Madhya Pradesh', 'Chhattisgarh', 'Dadra & Nagar Haveli and Daman & Diu'];
  const northeastStates = ['Assam', 'Arunachal Pradesh', 'Nagaland', 'Manipur', 'Mizoram', 'Tripura', 'Meghalaya', 'Sikkim'];
  const islandStates = ['Andaman & Nicobar Islands', 'Lakshadweep'];

  if (northStates.includes(stateName)) return 'North India';
  if (southStates.includes(stateName)) return 'South India';
  if (eastStates.includes(stateName)) return 'East India';
  if (westStates.includes(stateName)) return 'West India';
  if (northeastStates.includes(stateName)) return 'Northeast India';
  if (islandStates.includes(stateName)) return 'Island Territories';
  return 'India';
}

// Function to get random stories
const getRandomStories = (count: number = 5): Story[] => {
  const allStories = generateDynamicStories();
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