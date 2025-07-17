import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';
import { Navigation } from '@/components/navigation';

export default function Books() {
  const bookRecommendations = [
    {
      title: "Good Strategy Bad Strategy",
      author: "Richard Rumelt",
      category: "Strategy",
      description: "Essential reading on what makes strategy truly effective.",
      color: "from-blue-600 to-blue-800"
    },
    {
      title: "The Innovator's Dilemma",
      author: "Clayton M. Christensen",
      category: "Innovation",
      description: "Why great companies fail when faced with disruptive innovation.",
      color: "from-purple-600 to-purple-800"
    },
    {
      title: "Team of Teams",
      author: "General Stanley McChrystal",
      category: "Leadership",
      description: "How to build agile, networked organizations.",
      color: "from-green-600 to-green-800"
    },
    {
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      category: "Decision Making",
      description: "Understanding how we make decisions and judgments.",
      color: "from-orange-600 to-orange-800"
    },
    {
      title: "Zero to One",
      author: "Peter Thiel",
      category: "Entrepreneurship",
      description: "Notes on startups, or how to build the future.",
      color: "from-red-600 to-red-800"
    },
    {
      title: "The Lean Startup",
      author: "Eric Ries",
      category: "Business",
      description: "How to innovate with minimum viable products.",
      color: "from-indigo-600 to-indigo-800"
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
                  <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform group-hover:scale-105">
                    {/* Book Cover */}
                    <div className={`h-64 bg-gradient-to-br ${book.color} flex items-center justify-center`}>
                      <div className="text-center text-white p-6">
                        <div className="text-sm font-medium mb-2 opacity-80">{book.category}</div>
                        <div className="font-serif text-xl font-bold mb-1">{book.title}</div>
                        <div className="text-sm opacity-80">by {book.author}</div>
                      </div>
                    </div>
                    
                    {/* Book Details */}
                    <div className="bg-white p-6">
                      <p className="text-gray-600 text-sm">{book.description}</p>
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
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Submit Your Recommendation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}