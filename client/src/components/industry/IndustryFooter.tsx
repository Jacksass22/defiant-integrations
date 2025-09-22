import { Link } from 'wouter';

export function IndustryFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <div className="text-xl sm:text-2xl font-serif font-bold mb-4">
              Defiant <span className="text-gray-300">Integrations</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Architecting intelligent transformations that scale.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Industries</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/hvac" className="hover:text-blue-400 transition-colors">HVAC</Link></li>
              <li><Link href="/plumbing" className="hover:text-blue-400 transition-colors">Plumbing</Link></li>
              <li><Link href="/electrical" className="hover:text-blue-400 transition-colors">Electrical</Link></li>
              <li><Link href="/golf-courses" className="hover:text-blue-400 transition-colors">Golf Courses</Link></li>
              <li><Link href="/restaurants-cafes" className="hover:text-blue-400 transition-colors">Restaurants & Cafés</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Capabilities</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/ai-strategy-development" className="hover:text-blue-400 transition-colors">AI Strategy</Link></li>
              <li><Link href="/system-integration" className="hover:text-blue-400 transition-colors">Implementation</Link></li>
              <li><Link href="/change-management" className="hover:text-blue-400 transition-colors">Scaling</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">About Us</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><button className="hover:text-blue-400 transition-colors">Careers</button></li>
              <li><button className="hover:text-blue-400 transition-colors">Contact</button></li>
              <li><button className="hover:text-blue-400 transition-colors">Blog</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><button className="hover:text-blue-400 transition-colors">Subscribe</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Defiant Integrations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}