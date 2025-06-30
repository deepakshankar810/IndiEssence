import React from 'react';
import { MapPin, Heart, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
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
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="text-gray-400 hover:text-white font-medium transition-colors"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent animate-gradient">
                About IndiEssence
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              IndiEssence is a comprehensive guide celebrating the incredible diversity of India. From the snow-capped Himalayas to the tropical beaches, 
              from ancient traditions to modern innovations, we aim to showcase the authentic essence of India's 28 states and 8 union territories.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 mb-16">
            <div className="flex items-center mb-10">
              <div className="relative mr-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl blur-sm opacity-75"></div>
                <div className="relative bg-gradient-to-r from-blue-400 to-cyan-500 p-4 rounded-2xl">
                  <Globe className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-gray-200 text-lg leading-relaxed">
              Our mission is to provide an immersive and authentic exploration of India's cultural tapestry, breaking stereotypes and highlighting the unique stories, cuisines, and traditions of every region. 
              Whether you're a traveler, a culture enthusiast, or simply curious, IndiEssence is your gateway to discovering India beyond the ordinary.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <div className="flex items-center mb-10">
              <div className="relative mr-6">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl blur-sm opacity-75"></div>
                <div className="relative bg-gradient-to-r from-purple-400 to-pink-500 p-4.l rounded-2xl">
                  <Heart className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-white">Contribute</h2>
            </div>
            <p className="text-gray-200 text-lg leading-relaxed mb-6">
              IndiEssence is an open-source project, and we welcome contributions from everyone passionate about showcasing India's diversity. 
              Check out our GitHub repository to contribute, report issues, or explore the codebase.
            </p>
            <a
              href="https://github.com/deepakshankar810/IndiEssence.git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-2xl transition-all duration-300"
            >
              Visit GitHub Repository
            </a>
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
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <span>© 2025 IndiEssence. Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>for incredible India.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;