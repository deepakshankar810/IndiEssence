import React, { useState, useMemo } from 'react';
import { MapPin, Globe, Heart, Star, ArrowRight, Sparkles, Mountain, Building, Users, Calendar, Menu, X, ChevronRight, Search, Compass, Camera, Plane, Coffee, BookOpen, Award, Lightbulb, TreePine, Waves, Sun, Snowflake, Zap } from 'lucide-react';
import { StateData } from './types';
import { statesData } from './data/statesData';
import TouristPlaceDetail from './components/TouristPlaceDetail';
import QuizModal from './components/QuizModal';
import CulturalStoriesModal from './components/CulturalStoriesModal';
import CulinaryModal from './components/CulinaryModal';
import QuickFactsModal from './components/QuickFactsModal';

export default function App() {
  const [selectedState, setSelectedState] = useState<StateData | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<any>(null);
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  
  // Modal states with refresh keys to force re-randomization
  const [quizModalOpen, setQuizModalOpen] = useState(false);
  const [storiesModalOpen, setStoriesModalOpen] = useState(false);
  const [culinaryModalOpen, setCulinaryModalOpen] = useState(false);
  const [quickFactsModalOpen, setQuickFactsModalOpen] = useState(false);
  
  // Refresh keys to force re-randomization
  const [quizRefreshKey, setQuizRefreshKey] = useState(0);
  const [storiesRefreshKey, setStoriesRefreshKey] = useState(0);
  const [culinaryRefreshKey, setCulinaryRefreshKey] = useState(0);
  const [quickFactsRefreshKey, setQuickFactsRefreshKey] = useState(0);

  const handleStateClick = (state: StateData) => {
    setSelectedState(state);
    setSelectedPlace(null);
    setActiveSection('overview');
    setSearchQuery('');
  };

  const handlePlaceClick = (place: any) => {
    setSelectedPlace(place);
  };

  const handleBackToStates = () => {
    setSelectedState(null);
    setSelectedPlace(null);
    setActiveSection('overview');
    setSearchQuery('');
  };

  const handleBackToState = () => {
    setSelectedPlace(null);
  };

  const scrollToStates = () => {
    const statesSection = document.getElementById('states-section');
    if (statesSection) {
      statesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Search functionality
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    const results: Array<{
      type: 'state' | 'place';
      state: StateData;
      place?: any;
      matchType: 'name' | 'dish' | 'festival' | 'description';
    }> = [];

    statesData.forEach(state => {
      // Search in state name
      if (state.name.toLowerCase().includes(query)) {
        results.push({ type: 'state', state, matchType: 'name' });
      }
      
      // Search in dish name
      if (state.dish.name.toLowerCase().includes(query)) {
        results.push({ type: 'state', state, matchType: 'dish' });
      }

      // Search in festivals
      const festivals = Object.values(state.festivals);
      if (festivals.some(festival => festival.toLowerCase().includes(query))) {
        results.push({ type: 'state', state, matchType: 'festival' });
      }

      // Search in tourist places
      state.touristPlaces.forEach(place => {
        if (place.name.toLowerCase().includes(query) || 
            place.description.toLowerCase().includes(query) ||
            place.category.toLowerCase().includes(query)) {
          results.push({ type: 'place', state, place, matchType: 'name' });
        }
      });
    });

    return results.slice(0, 8); // Limit to 8 results
  }, [searchQuery]);

  const handleSearchResultClick = (result: any) => {
    if (result.type === 'state') {
      handleStateClick(result.state);
    } else {
      setSelectedState(result.state);
      setSelectedPlace(result.place);
    }
    setSearchQuery('');
    setSearchFocused(false);
  };

  // Enhanced Surprise Me with proper randomization
  const handleSurpriseMe = () => {
    // Create a shuffled copy of all states to ensure true randomization
    const shuffled = [...statesData].sort(() => Math.random() - 0.5);
    const randomState = shuffled[0];
    handleStateClick(randomState);
  };

  const handleExploreStateFromModal = (stateName: string) => {
    const state = statesData.find(s => s.name === stateName);
    if (state) {
      handleStateClick(state);
    }
  };

  // Enhanced Modal opening functions with refresh
  const handleOpenQuiz = () => {
    setQuizRefreshKey(prev => prev + 1);
    setQuizModalOpen(true);
  };

  const handleOpenStories = () => {
    setStoriesRefreshKey(prev => prev + 1);
    setStoriesModalOpen(true);
  };

  const handleOpenCulinary = () => {
    setCulinaryRefreshKey(prev => prev + 1);
    setCulinaryModalOpen(true);
  };

  const handleOpenQuickFacts = () => {
    setQuickFactsRefreshKey(prev => prev + 1);
    setQuickFactsModalOpen(true);
  };

  if (selectedPlace && selectedState) {
    return (
      <TouristPlaceDetail
        place={selectedPlace}
        stateName={selectedState.name}
        stateColor={selectedState.color}
        onBack={handleBackToState}
      />
    );
  }

  if (selectedState) {
    return <StateDetail state={selectedState} onBack={handleBackToStates} onPlaceClick={handlePlaceClick} activeSection={activeSection} setActiveSection={setActiveSection} />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-sm opacity-75"></div>
                <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  IndiEssence
                </h1>
                <p className="text-xs text-gray-400">Complete India Guide</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={handleOpenQuickFacts}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 flex items-center space-x-2">
                  <Zap className="h-4 w-4" />
                  <span>Quick Facts</span>
                </div>
              </button>
              
              <button 
                onClick={scrollToStates}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-2xl transition-all duration-300">
                  Explore All Regions
                </div>
              </button>
            </div>

            <button 
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/80 backdrop-blur-xl border-t border-white/10">
            <div className="px-6 py-6 space-y-4">
              <button 
                onClick={() => {
                  handleOpenQuickFacts();
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center space-x-2"
              >
                <Zap className="h-4 w-4" />
                <span>Quick Facts</span>
              </button>
              
              <button 
                onClick={() => {
                  scrollToStates();
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold"
              >
                Explore All Regions
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 mb-8">
              <Sparkles className="h-5 w-5 text-yellow-400" />
              <span className="text-gray-200 font-medium">28 States & 8 Union Territories</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent animate-gradient">
                Discover India's
              </span>
              <br />
              <span className="text-white">Incredible Diversity</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Journey through all 28 states and 8 union territories, taste every flavor, hear every language, and experience the real India beyond stereotypes. 
              <span className="text-purple-400 font-semibold"> Complete coverage of India's cultural tapestry from Kashmir to Kanyakumari.</span>
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-20 relative">
              <div className={`relative transition-all duration-300 ${searchFocused ? 'scale-105' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden">
                  <div className="flex items-center p-6">
                    <Search className="h-6 w-6 text-gray-400 mr-4" />
                    <input
                      type="text"
                      placeholder="Search all 36 regions, 180+ places, cuisines, festivals..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setSearchFocused(true)}
                      onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                      className="flex-1 bg-transparent text-white placeholder-gray-400 text-lg focus:outline-none"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="text-gray-400 hover:text-white transition-colors ml-4"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Search Results */}
              {searchQuery && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-4 bg-black/90 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden z-50">
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-gray-400 mb-4">Search Results</h3>
                    <div className="space-y-2">
                      {searchResults.map((result, index) => (
                        <button
                          key={index}
                          onClick={() => handleSearchResultClick(result)}
                          className="w-full text-left p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200 border border-white/10 hover:border-white/20"
                        >
                          <div className="flex items-center space-x-4">
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${result.state.color}`}>
                              {result.type === 'state' ? (
                                <MapPin className="h-4 w-4 text-white" />
                              ) : (
                                <Mountain className="h-4 w-4 text-white" />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2">
                                <span className="text-white font-medium">
                                  {result.type === 'state' ? result.state.name : result.place.name}
                                </span>
                                <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full">
                                  {result.type === 'state' ? 'State' : 'Place'}
                                </span>
                              </div>
                              <p className="text-sm text-gray-400 mt-1">
                                {result.type === 'state' 
                                  ? `Famous for ${result.state.dish.name}` 
                                  : `${result.place.category} in ${result.state.name}`
                                }
                              </p>
                            </div>
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {searchQuery && searchResults.length === 0 && (
                <div className="absolute top-full left-0 right-0 mt-4 bg-black/90 backdrop-blur-xl rounded-2xl border border-white/20 p-6 z-50">
                  <div className="text-center">
                    <Search className="h-8 w-8 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-400">No results found for "{searchQuery}"</p>
                    <p className="text-sm text-gray-500 mt-2">Try searching for states, places, dishes, or festivals</p>
                  </div>
                </div>
              )}
            </div>

            {/* Interactive Experience Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
              {/* Surprise Me */}
              <div 
                onClick={handleSurpriseMe}
                className="group bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-3xl p-10 border border-amber-500/20 hover:border-amber-400/40 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-4 rounded-2xl mr-6">
                    <Compass className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-amber-300 mb-2">Surprise Me</h3>
                    <p className="text-amber-200/80">Random destination discovery</p>
                  </div>
                </div>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  Let serendipity guide you! Discover a random state or union territory with its hidden gems and authentic experiences. Each click brings a new adventure from all 36 regions.
                </p>
                <div className="flex items-center text-amber-300 font-medium group-hover:translate-x-2 transition-transform">
                  <span>Take Me Somewhere</span>
                  <ArrowRight className="h-5 w-5 ml-2" />
                </div>
              </div>

              {/* India Quiz */}
              <div 
                onClick={handleOpenQuiz}
                className="group bg-gradient-to-br from-rose-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-10 border border-rose-500/20 hover:border-rose-400/40 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-rose-400 to-pink-500 p-4 rounded-2xl mr-6">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-rose-300 mb-2">India Knowledge Quiz</h3>
                    <p className="text-rose-200/80">Test your India expertise</p>
                  </div>
                </div>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  Challenge yourself with questions about all 36 states and UTs, their cultures, cuisines, and fascinating trivia. Fresh questions every time!
                </p>
                <div className="flex items-center text-rose-300 font-medium group-hover:translate-x-2 transition-transform">
                  <span>Start Quiz Challenge</span>
                  <ArrowRight className="h-5 w-5 ml-2" />
                </div>
              </div>
            </div>

            {/* Secondary Experience Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
              {/* Cultural Stories */}
              <div 
                onClick={handleOpenStories}
                className="group bg-gradient-to-br from-emerald-500/10 to-green-500/10 backdrop-blur-sm rounded-3xl p-10 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-emerald-400 to-green-500 p-4 rounded-2xl mr-6">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-emerald-300 mb-2">Cultural Chronicles</h3>
                    <p className="text-emerald-200/80">Stories from every region</p>
                  </div>
                </div>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  Dive into untold stories, ancient legends, and living traditions from every corner of India's diverse landscape.
                </p>
                <div className="flex items-center text-emerald-300 font-medium group-hover:translate-x-2 transition-transform">
                  <span>Read Stories</span>
                  <ArrowRight className="h-5 w-5 ml-2" />
                </div>
              </div>

              {/* Food Journey */}
              <div 
                onClick={handleOpenCulinary}
                className="group bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-10 border border-violet-500/20 hover:border-violet-400/40 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-violet-400 to-purple-500 p-4 rounded-2xl mr-6">
                    <Coffee className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-violet-300 mb-2">Culinary Odyssey</h3>
                    <p className="text-violet-200/80">Taste India's diversity</p>
                  </div>
                </div>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  Embark on a gastronomic adventure through regional cuisines, street food legends, and royal recipes.
                </p>
                <div className="flex items-center text-violet-300 font-medium group-hover:translate-x-2 transition-transform">
                  <span>Start Food Journey</span>
                  <ArrowRight className="h-5 w-5 ml-2" />
                </div>
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">36</div>
                <div className="text-gray-300 font-medium">States & UTs</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">180+</div>
                <div className="text-gray-300 font-medium">Destinations</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-3">1000+</div>
                <div className="text-gray-300 font-medium">Languages</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-3">500+</div>
                <div className="text-gray-300 font-medium">Festivals</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* States Section */}
      <section id="states-section" className="relative z-10 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Explore All
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> 36 Regions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From the Himalayas to the Indian Ocean, discover every state and union territory with their unique stories, cuisines, and cultural treasures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {statesData.map((state) => (
              <StateCard key={state.id} state={state} onClick={() => handleStateClick(state)} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/80 backdrop-blur-xl border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-sm opacity-75"></div>
                <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                IndiEssence
              </h3>
            </div>
            
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Celebrating the incredible diversity of India - from the snow-capped Himalayas to the tropical beaches, 
                from ancient traditions to modern innovations. This is India in all its authentic glory, beyond stereotypes and misconceptions.
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-gray-400">
                <span>© 2025 IndiEssence. Made with</span>
                <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                <span>for incredible India.</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals with refresh keys */}
      <QuizModal 
        key={quizRefreshKey}
        isOpen={quizModalOpen} 
        onClose={() => setQuizModalOpen(false)}
        onExploreState={handleExploreStateFromModal}
      />
      
      <CulturalStoriesModal 
        key={storiesRefreshKey}
        isOpen={storiesModalOpen} 
        onClose={() => setStoriesModalOpen(false)}
        onExploreState={handleExploreStateFromModal}
      />
      
      <CulinaryModal 
        key={culinaryRefreshKey}
        isOpen={culinaryModalOpen} 
        onClose={() => setCulinaryModalOpen(false)}
        onExploreState={handleExploreStateFromModal}
      />
      
      <QuickFactsModal 
        key={quickFactsRefreshKey}
        isOpen={quickFactsModalOpen} 
        onClose={() => setQuickFactsModalOpen(false)}
        onExploreState={handleExploreStateFromModal}
      />
    </div>
  );
}

function StateCard({ state, onClick }: { state: StateData; onClick: () => void }) {
  // Get appropriate icon based on state characteristics
  const getStateIcon = (stateName: string) => {
    const name = stateName.toLowerCase();
    if (name.includes('himachal') || name.includes('uttarakhand') || name.includes('sikkim') || name.includes('arunachal')) {
      return Mountain;
    } else if (name.includes('kerala') || name.includes('goa') || name.includes('tamil nadu') || name.includes('odisha')) {
      return Waves;
    } else if (name.includes('rajasthan') || name.includes('gujarat')) {
      return Sun;
    } else if (name.includes('jammu') || name.includes('ladakh')) {
      return Snowflake;
    } else if (name.includes('assam') || name.includes('meghalaya') || name.includes('mizoram')) {
      return TreePine;
    } else {
      return Building;
    }
  };

  const StateIcon = getStateIcon(state.name);

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className={`w-full h-56 bg-gradient-to-br ${state.color} rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center">
          <StateIcon className="h-16 w-16 text-white mx-auto mb-4 opacity-90" />
          <h3 className="text-3xl font-bold text-white">{state.name}</h3>
        </div>
        <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
          <ChevronRight className="h-5 w-5 text-white" />
        </div>
      </div>
      
      <div className="space-y-4">
        {/* General Info */}
        <div className="flex items-center space-x-3">
          <Globe className="h-5 w-5 text-blue-400" />
          <span className="text-gray-300 font-medium">Quick Facts</span>
        </div>
        
        {/* Capital/Key Info */}
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <span className="text-gray-400 text-sm flex-shrink-0 w-20">Capital:</span>
            <span className="text-white font-medium text-right text-sm leading-tight">{state.capital}</span>
          </div>
          <div className="flex items-start justify-between">
            <span className="text-gray-400 text-sm flex-shrink-0 w-20">Language:</span>
            <span className="text-white font-medium text-right text-sm leading-tight">{state.language.language}</span>
          </div>
          <div className="flex items-start justify-between">
            <span className="text-gray-400 text-sm flex-shrink-0 w-20">Famous For:</span>
            <span className="text-purple-300 font-medium text-right text-sm leading-tight max-w-[180px]">{state.famousFor}</span>
          </div>
        </div>

        {/* Tourist Places Count */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex items-center space-x-2">
            <Mountain className="h-4 w-4 text-green-400" />
            <span className="text-gray-300 text-sm">Top Destinations</span>
          </div>
          <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium">
            {state.touristPlaces.length}+ Places
          </span>
        </div>
      </div>
    </div>
  );
}

function StateDetail({ state, onBack, onPlaceClick, activeSection, setActiveSection }: {
  state: StateData;
  onBack: () => void;
  onPlaceClick: (place: any) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}) {
  const sections = [
    { id: 'overview', label: 'Overview', icon: Globe },
    { id: 'heritage', label: 'Heritage', icon: Building },
    { id: 'destinations', label: 'Destinations', icon: Mountain },
    { id: 'traditions', label: 'Traditions', icon: Calendar }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20"></div>
      </div>

      {/* Header */}
      <header className="relative z-50 bg-black/50 backdrop-blur-xl border-b border-white/10 sticky top-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <button
              onClick={onBack}
              className="flex items-center space-x-3 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full transition-all duration-300 border border-white/10 group"
            >
              <ArrowRight className="h-5 w-5 rotate-180 text-white group-hover:-translate-x-1 transition-transform" />
              <span className="text-white font-medium">Back to All Regions</span>
            </button>
            <div className="flex items-center space-x-4">
              <div className={`bg-gradient-to-r ${state.color} p-3 rounded-xl`}>
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">{state.name}</h1>
                <p className="text-sm text-gray-400">IndiEssence Guide</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`py-24 bg-gradient-to-r ${state.color} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              {state.name}
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 max-w-4xl mx-auto">
              Discover the authentic culture, cuisine, and stories that make {state.name} extraordinary
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="relative z-40 bg-black/50 backdrop-blur-xl border-b border-white/10 sticky top-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-3 py-6 px-4 border-b-2 transition-colors whitespace-nowrap ${
                    activeSection === section.id
                      ? 'border-purple-400 text-purple-400'
                      : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{section.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {activeSection === 'overview' && <OverviewSection state={state} />}
          {activeSection === 'heritage' && <HeritageSection state={state} />}
          {activeSection === 'destinations' && <DestinationsSection state={state} onPlaceClick={onPlaceClick} />}
          {activeSection === 'traditions' && <TraditionsSection state={state} />}
        </div>
      </main>
    </div>
  );
}

function OverviewSection({ state }: { state: StateData }) {
  return (
    <div className="space-y-16">
      {/* General Information */}
      <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
        <div className="flex items-center mb-10">
          <div className="relative mr-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl blur-sm opacity-75"></div>
            <div className="relative bg-gradient-to-r from-blue-400 to-cyan-500 p-4 rounded-2xl">
              <Globe className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white">About {state.name}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">Key Information</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-300">Capital:</span>
                <span className="text-white font-medium">{state.capital}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Primary Language:</span>
                <span className="text-white font-medium">{state.language.language}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Famous For:</span>
                <span className="text-blue-300 font-medium">{state.famousFor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Tourist Places:</span>
                <span className="text-green-300 font-medium">{state.touristPlaces.length}+ Destinations</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-purple-400 mb-6">Cultural Essence</h3>
            <p className="text-gray-200 text-lg leading-relaxed">
              {state.culturalEssence}
            </p>
          </div>
        </div>
      </div>

      {/* Signature Dish */}
      <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
        <div className="flex items-center mb-10">
          <div className="relative mr-6">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-500 rounded-2xl blur-sm opacity-75"></div>
            <div className="relative bg-gradient-to-r from-orange-400 to-pink-500 p-4 rounded-2xl">
              <Heart className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white">Signature Cuisine</h2>
        </div>
        <div className="bg-gradient-to-br from-orange-500/10 to-pink-500/10 rounded-2xl p-10 border border-orange-500/20">
          <h3 className="text-3xl font-bold text-orange-400 mb-6">{state.dish.name}</h3>
          <p className="text-gray-200 text-xl leading-relaxed">{state.dish.description}</p>
        </div>
      </div>

      {/* Language */}
      <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
        <div className="flex items-center mb-10">
          <div className="relative mr-6">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur-sm opacity-75"></div>
            <div className="relative bg-gradient-to-r from-green-400 to-emerald-500 p-4 rounded-2xl">
              <Globe className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white">Local Language</h2>
        </div>
        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-10 border border-green-500/20">
          <div className="mb-6">
            <span className="text-green-300 font-medium text-lg">{state.language.language}</span>
          </div>
          <h3 className="text-3xl font-bold text-green-400 mb-4">"{state.language.phrase}"</h3>
          <p className="text-gray-200 text-xl">{state.language.meaning}</p>
        </div>
      </div>

      {/* Stereotype vs Reality */}
      <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
        <div className="flex items-center mb-10">
          <div className="relative mr-6">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur-sm opacity-75"></div>
            <div className="relative bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-2xl">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white">Beyond Perceptions</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl p-10 border border-red-500/20">
            <h3 className="text-2xl font-bold text-red-400 mb-6">Common Perception</h3>
            <p className="text-gray-200 text-lg leading-relaxed">{state.stereotype.myth}</p>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-10 border border-green-500/20">
            <h3 className="text-2xl font-bold text-green-400 mb-6">Amazing Reality</h3>
            <p className="text-gray-200 text-lg leading-relaxed">{state.stereotype.reality}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeritageSection({ state }: { state: StateData }) {
  return (
    <div className="space-y-16">
      <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
        <div className="flex items-center mb-10">
          <div className="relative mr-6">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl blur-sm opacity-75"></div>
            <div className="relative bg-gradient-to-r from-purple-400 to-pink-500 p-4 rounded-2xl">
              <Users className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white">Daily Life & Culture</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-10 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-purple-400 mb-6">Urban Experience</h3>
            <p className="text-gray-200 text-lg leading-relaxed">{state.dayInLife.urban}</p>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl p-10 border border-green-500/20">
            <h3 className="text-2xl font-bold text-green-400 mb-6">Rural Experience</h3>
            <p className="text-gray-200 text-lg leading-relaxed">{state.dayInLife.rural}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DestinationsSection({ state, onPlaceClick }: { state: StateData; onPlaceClick: (place: any) => void }) {
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

  return (
    <div className="space-y-12">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white mb-6">Top Destinations</h2>
        <p className="text-xl text-gray-300">Discover the must-visit places and hidden gems of {state.name}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {state.touristPlaces.map((place) => {
          const CategoryIcon = categoryIcons[place.category];
          return (
            <div
              key={place.id}
              onClick={() => onPlaceClick(place)}
              className="group cursor-pointer bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className={`h-56 bg-gradient-to-br ${categoryColors[place.category]} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute top-6 left-6">
                  <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-white font-medium capitalize">{place.category}</span>
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <ArrowRight className="h-5 w-5 text-white" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <CategoryIcon className="h-20 w-20 text-white/60" />
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{place.name}</h3>
                <p className="text-gray-300 line-clamp-3 mb-6 leading-relaxed">{place.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{place.bestTimeToVisit}</span>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Must Visit</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TraditionsSection({ state }: { state: StateData }) {
  const seasons = [
    { name: 'Spring', festival: state.festivals.spring, color: 'from-pink-500 to-rose-500', icon: '🌸' },
    { name: 'Summer', festival: state.festivals.summer, color: 'from-yellow-500 to-orange-500', icon: '☀️' },
    { name: 'Monsoon', festival: state.festivals.monsoon, color: 'from-blue-500 to-cyan-500', icon: '🌧️' },
    { name: 'Winter', festival: state.festivals.winter, color: 'from-purple-500 to-indigo-500', icon: '❄️' }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white mb-6">Seasonal Celebrations</h2>
        <p className="text-xl text-gray-300">Experience the vibrant festivals throughout the year in {state.name}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {seasons.map((season) => (
          <div key={season.name} className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10">
            <div className={`bg-gradient-to-r ${season.color} rounded-2xl p-8 mb-8`}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-3">{season.name}</h3>
                  <p className="text-white/80 text-lg">Season of Celebration</p>
                </div>
                <div className="text-5xl">{season.icon}</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-2xl p-8 border border-gray-600/20">
              <h4 className="text-2xl font-bold text-white mb-4">{season.festival}</h4>
              <p className="text-gray-300 text-lg leading-relaxed">
                A beautiful celebration that brings communities together during the {season.name.toLowerCase()} season, 
                showcasing the rich cultural heritage of {state.name}.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}