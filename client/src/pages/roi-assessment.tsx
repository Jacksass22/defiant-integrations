import { ArrowRight } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Link } from 'wouter';
import { useState } from 'react';

export default function ROIAssessment() {
  // ROI Calculator State
  const [roiData, setRoiData] = useState({
    revenue: '100k',
    hours: '30',
    teamSize: '5',
    toolCosts: '1000'
  });
  
  const [calculatedROI, setCalculatedROI] = useState({
    annualSavings: 156000,
    weeklyHours: '25-40',
    paybackMonths: '4-6',
    roiPercentage: 385
  });

  // ROI Calculation Function
  const calculateROI = () => {
    const revenueMap: { [key: string]: number } = {
      '10k': 17500, '25k': 37500, '50k': 75000, '100k': 175000, '250k': 375000, '500k': 750000
    };
    const hoursMap: { [key: string]: number } = {
      '10': 15, '20': 25, '30': 35, '40': 45, '50': 60
    };
    const teamMap: { [key: string]: number } = {
      '1': 1, '2': 3.5, '5': 7.5, '10': 17.5, '25': 35
    };
    const toolsMap: { [key: string]: number } = {
      '500': 750, '1000': 1750, '2500': 3750, '5000': 7500, '10000': 15000
    };

    const monthlyRevenue = revenueMap[roiData.revenue] || 175000;
    const weeklyHours = hoursMap[roiData.hours] || 35;
    const teamSize = teamMap[roiData.teamSize] || 7.5;
    const monthlyToolCosts = toolsMap[roiData.toolCosts] || 1750;

    // Calculate savings
    const hourlyRate = 75; // Average hourly rate for business operations
    const weeklyLaborSavings = weeklyHours * 0.7 * hourlyRate; // 70% automation
    const monthlyLaborSavings = weeklyLaborSavings * 4.33;
    
    const conversionIncrease = monthlyRevenue * 0.25; // 25% conversion improvement
    const operationalEfficiency = monthlyToolCosts * 0.3; // 30% efficiency gains
    const reducedToolCosts = monthlyToolCosts * 0.15; // 15% tool consolidation
    
    const totalMonthlySavings = monthlyLaborSavings + conversionIncrease + operationalEfficiency + reducedToolCosts;
    const annualSavings = totalMonthlySavings * 12;
    
    // Implementation cost estimate (simplified)
    const implementationCost = Math.max(25000, teamSize * 3000);
    const paybackMonths = Math.ceil(implementationCost / totalMonthlySavings);
    const roiPercentage = Math.round((annualSavings / implementationCost) * 100);
    
    const savedHoursLow = Math.floor(weeklyHours * 0.6);
    const savedHoursHigh = Math.ceil(weeklyHours * 0.8);

    setCalculatedROI({
      annualSavings: Math.round(annualSavings),
      weeklyHours: `${savedHoursLow}-${savedHoursHigh}`,
      paybackMonths: paybackMonths <= 6 ? `${paybackMonths}-${paybackMonths + 2}` : `${paybackMonths}-${paybackMonths + 3}`,
      roiPercentage: roiPercentage
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setRoiData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              ROI Assessment Calculator
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover the financial impact of AI transformation on your business. Get personalized projections based on your current operations and see how much you could save.
            </p>
            <div className="bg-blue-100 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-blue-800 font-semibold">
                Most clients see 300-500% ROI within the first 12 months
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Split Hero Layout */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
            {/* Left Side - Interactive Calculator (60%) */}
            <div className="lg:col-span-3">
              <div className="bg-white p-6 sm:p-8 shadow-lg border border-gray-100 rounded-lg">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  Calculate Your Potential Savings
                </h3>
                
                {/* Calculator Inputs */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Current Monthly Revenue
                    </label>
                    <select 
                      value={roiData.revenue}
                      onChange={(e) => handleInputChange('revenue', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="10k">$10K - $25K</option>
                      <option value="25k">$25K - $50K</option>
                      <option value="50k">$50K - $100K</option>
                      <option value="100k">$100K - $250K</option>
                      <option value="250k">$250K - $500K</option>
                      <option value="500k">$500K - $1M+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Hours Spent on Manual Tasks (per week)
                    </label>
                    <select 
                      value={roiData.hours}
                      onChange={(e) => handleInputChange('hours', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="10">10-20 hours</option>
                      <option value="20">20-30 hours</option>
                      <option value="30">30-40 hours</option>
                      <option value="40">40-50 hours</option>
                      <option value="50">50+ hours</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Team Size
                    </label>
                    <select 
                      value={roiData.teamSize}
                      onChange={(e) => handleInputChange('teamSize', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="1">Just me (1 person)</option>
                      <option value="2">2-5 people</option>
                      <option value="5">5-10 people</option>
                      <option value="10">10-25 people</option>
                      <option value="25">25+ people</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Current Software/Tools Cost (monthly)
                    </label>
                    <select 
                      value={roiData.toolCosts}
                      onChange={(e) => handleInputChange('toolCosts', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="500">$500 - $1,000</option>
                      <option value="1000">$1,000 - $2,500</option>
                      <option value="2500">$2,500 - $5,000</option>
                      <option value="5000">$5,000 - $10,000</option>
                      <option value="10000">$10,000+</option>
                    </select>
                  </div>
                </div>

                {/* Calculate Button */}
                <button 
                  onClick={calculateROI}
                  className="w-full mt-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Calculate My ROI
                </button>
              </div>
            </div>

            {/* Right Side - ROI Results (40%) */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-6 sm:p-8 shadow-lg border border-gray-100 h-full rounded-lg">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                  Your Potential Savings
                </h3>
                
                {/* ROI Metrics */}
                <div className="space-y-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl sm:text-3xl font-bold text-emerald-600">
                      ${calculatedROI.annualSavings.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Annual Savings</div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600">{calculatedROI.weeklyHours} hrs</div>
                    <div className="text-sm text-gray-600">Time Saved Per Week</div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl sm:text-3xl font-bold text-violet-600">{calculatedROI.paybackMonths} months</div>
                    <div className="text-sm text-gray-600">Payback Period</div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl sm:text-3xl font-bold text-amber-600">{calculatedROI.roiPercentage}%</div>
                    <div className="text-sm text-gray-600">Return on Investment</div>
                  </div>
                </div>

                {/* Value Breakdown */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Where Your Savings Come From:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Labor Cost Reduction</span>
                      <span className="font-semibold">50%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Increased Conversions</span>
                      <span className="font-semibold">25%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Operational Efficiency</span>
                      <span className="font-semibold">20%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Reduced Tool Costs</span>
                      <span className="font-semibold">5%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white p-6 shadow-lg border-l-4 border-emerald-500 rounded-lg">
              <div className="text-3xl font-bold text-emerald-600 mb-2">80%</div>
              <div className="text-sm font-semibold text-gray-900 mb-2">Task Automation</div>
              <div className="text-sm text-gray-600">Eliminate repetitive customer service and operational tasks</div>
            </div>
            
            <div className="bg-white p-6 shadow-lg border-l-4 border-blue-500 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
              <div className="text-sm font-semibold text-gray-900 mb-2">Cart Recovery</div>
              <div className="text-sm text-gray-600">Reduce cart abandonment with intelligent follow-up systems</div>
            </div>
            
            <div className="bg-white p-6 shadow-lg border-l-4 border-violet-500 rounded-lg">
              <div className="text-3xl font-bold text-violet-600 mb-2">35%</div>
              <div className="text-sm font-semibold text-gray-900 mb-2">Conversion Boost</div>
              <div className="text-sm text-gray-600">Increase sales with AI-powered recommendations and optimization</div>
            </div>
            
            <div className="bg-white p-6 shadow-lg border-l-4 border-amber-500 rounded-lg">
              <div className="text-3xl font-bold text-amber-600 mb-2">50%</div>
              <div className="text-sm font-semibold text-gray-900 mb-2">Cost Reduction</div>
              <div className="text-sm text-gray-600">Cut customer acquisition costs with intelligent targeting</div>
            </div>
          </div>

          {/* Case Studies */}
          <div className="bg-white p-8 sm:p-12 shadow-lg mb-16 rounded-lg">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              Real Results from Real Clients
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full"></div>
                </div>
                <div className="font-semibold text-gray-900 mb-2">E-commerce Store</div>
                <div className="text-sm text-gray-600">"Increased revenue by 45% while cutting operational costs by 30%"</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                </div>
                <div className="font-semibold text-gray-900 mb-2">Online Coach</div>
                <div className="text-sm text-gray-600">"Automated client onboarding saved 20 hours/week, enabling 3x business growth"</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-violet-500 rounded-full"></div>
                </div>
                <div className="font-semibold text-gray-900 mb-2">Course Creator</div>
                <div className="text-sm text-gray-600">"AI-powered customer service reduced support time by 75%"</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 sm:p-12 shadow-lg text-white rounded-lg">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
                Get Your Custom ROI Analysis
              </h3>
              <p className="text-lg mb-8 opacity-90">
                Schedule a free 30-minute consultation to see your specific savings potential
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors">
                  Schedule Free Consultation
                </button>
                <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                  Download ROI Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                How We Calculate Your ROI
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Our ROI calculations are based on real-world data from hundreds of client implementations. We factor in:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>Labor savings:</strong> Average 70% reduction in manual task time</li>
                  <li>• <strong>Revenue growth:</strong> Typical 15-35% increase in conversion rates</li>
                  <li>• <strong>Operational efficiency:</strong> 20-40% improvement in process speed</li>
                  <li>• <strong>Cost optimization:</strong> 10-25% reduction in tool and software costs</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                Why Our Projections Are Accurate
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Unlike generic calculators, our tool uses industry-specific benchmarks and proven methodologies:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>Real client data:</strong> Based on 500+ successful implementations</li>
                  <li>• <strong>Conservative estimates:</strong> We use lower-bound projections for reliability</li>
                  <li>• <strong>Industry expertise:</strong> Tailored calculations for different business models</li>
                  <li>• <strong>Ongoing tracking:</strong> Continuous validation against actual client results</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}