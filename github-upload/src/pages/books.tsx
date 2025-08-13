import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';
import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { LeadCaptureModal } from '@/components/lead-capture-modal';
import goodStrategyImage from '@assets/goodbadstrat_1754163555535.jpg';
import innovatorsDilemmaImage from '@assets/image_1754163593061.png';
import teamOfTeamsImage from '@assets/image_1754163624113.png';
import thinkingFastSlowImage from '@assets/image_1754163752802.png';
import zeroToOneImage from '@assets/image_1754163785299.png';
import leanStartupImage from '@assets/image_1754163812492.png';

export default function Books() {
  const [showLeadCaptureModal, setShowLeadCaptureModal] = useState(false);
  
  const bookRecommendations = [
    {
      title: "Good Strategy Bad Strategy",
      author: "Richard Rumelt",
      category: "Strategy",
      description: "Essential reading on what makes strategy truly effective.",
      color: "from-blue-600 to-blue-800",
      coverImage: goodStrategyImage
    },
    {
      title: "The Innovator's Dilemma",
      author: "Clayton M. Christensen",
      category: "Innovation",
      description: "Why great companies fail when faced with disruptive innovation.",
      color: "from-purple-600 to-purple-800",
      coverImage: innovatorsDilemmaImage
    },
    {
      title: "Team of Teams",
      author: "General Stanley McChrystal",
      category: "Leadership",
      description: "How to build agile, networked organizations.",
      color: "from-green-600 to-green-800",
      coverImage: teamOfTeamsImage
    },
    {
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      category: "Decision Making",
      description: "Understanding how we make decisions and judgments.",
      color: "from-orange-600 to-orange-800",
      coverImage: thinkingFastSlowImage
    },
    {
      title: "Zero to One",
      author: "Peter Thiel",
      category: "Entrepreneurship",
      description: "Notes on startups, or how to build the future.",
      color: "from-red-600 to-red-800",
      coverImage: zeroToOneImage
    },
    {
      title: "The Lean Startup",
      author: "Eric Ries",
      category: "Business",
      description: "How to innovate with minimum viable products.",
      color: "from-indigo-600 to-indigo-800",
      coverImage: leanStartupImage
    }
  ];

  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen">
      <Navigation />
      
      <div className="pt-16">
        {/* Header */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white hover:text-gray-200 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Our 2025 Client Book List
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Curated recommendations from industry leaders and transformation pioneers. 
              Each book represents insights that have shaped strategic thinking across our network.
            </p>
          </div>
        </div>

        {/* Introduction */}
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-lg text-gray-700 mb-6">
                Every year, we ask our clients and partners to recommend one book—something that's shaped their thinking, 
                sparked curiosity, or captured their industry's spirit. With partners across so many sectors, 
                our bookshelf becomes a reflection of the diverse minds we work with.
              </p>
              <p className="text-lg text-gray-700">
                This year's list brings together perspectives on strategy, innovation, leadership, and transformation. 
                Each recommendation comes with insights on why it matters now more than ever.
              </p>
            </div>
          </div>
        </div>

        {/* Book Grid */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-12">Featured Recommendations</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bookRecommendations.map((book, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform group-hover:scale-105">
                    {/* Book Cover */}
                    <div className="relative h-80 bg-gray-100 flex items-center justify-center p-6">
                      {book.coverImage ? (
                        <img 
                          src={book.coverImage} 
                          alt={`${book.title} by ${book.author}`}
                          className="w-full h-full object-contain rounded-lg shadow-xl"
                        />
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${book.color} rounded-lg shadow-xl flex flex-col justify-between p-4 text-white relative overflow-hidden`}>
                          {/* Book spine design */}
                          <div className="absolute top-0 left-0 w-1 h-full bg-white/20"></div>
                          <div className="absolute top-0 left-2 w-px h-full bg-white/10"></div>
                          
                          {/* Category badge */}
                          <div className="text-xs font-medium bg-white/20 px-2 py-1 rounded self-start">
                            {book.category}
                          </div>
                          
                          {/* Title section */}
                          <div className="text-center">
                            <div className="font-serif text-lg font-bold leading-tight mb-2">
                              {book.title}
                            </div>
                            <div className="text-sm opacity-90 border-t border-white/30 pt-2">
                              {book.author}
                            </div>
                          </div>
                          
                          {/* Publisher-like elements */}
                          <div className="flex justify-between items-end text-xs opacity-70">
                            <div>Business</div>
                            <div>2025</div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Book Details */}
                    <div className="p-6">
                      <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">{book.title}</h3>
                      <p className="text-sm text-gray-500 mb-3">by {book.author}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{book.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-white mb-6">
              Add Your Voice to the List
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Have a book that transformed your thinking? Share your recommendation and 
              join our community of leaders shaping the future of business.
            </p>
            <button 
              onClick={() => setShowLeadCaptureModal(true)}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Submit Your Recommendation
            </button>
            
            {/* Book covers disclaimer */}
            <div className="mt-12 pt-8 border-t border-gray-700">
              <p className="text-xs text-gray-500 max-w-xl mx-auto">
                Book covers used for editorial recommendations. These titles represent essential reading 
                for business leaders and transformation practitioners.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <LeadCaptureModal
        open={showLeadCaptureModal}
        onOpenChange={setShowLeadCaptureModal}
      />
    </div>
  );
}