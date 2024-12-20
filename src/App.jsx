import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Users, Shield, Lightbulb, Target, BarChart } from 'lucide-react';

// Reusable components
const ProgressBar = ({ progress }) => (
  <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
    <div
      className="h-full bg-blue-500 transition-all duration-500 ease-in-out"
      style={{ width: `${progress}%` }}
    />
  </div>
);

const SlideContent = ({ content }) => (
  <div className="transition-all duration-500 ease-in-out">
    {content}
  </div>
);

const CardWithIcon = ({ icon: Icon, title, content, color = "blue" }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
    <div className="flex items-start space-x-4">
      <div className="p-3 bg-blue-100 rounded-lg">
        <Icon className="w-6 h-6 text-blue-500" />
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  </div>
);

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState('right');

  const slides = [
    // Slide 1: Introduction
    {
      title: "Introduction to AMUL Case Study",
      subtitle: "A Story of Rural Innovation",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500/10 to-transparent p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-blue-800">Background and Context</h2>
            <div className="grid grid-cols-2 gap-6">
              <CardWithIcon
                icon={Users}
                title="Cooperative Movement"
                content="AMUL began as a dairy cooperative movement in Gujarat, transforming rural livelihoods"
              />
              <CardWithIcon
                icon={Shield}
                title="Historical Context"
                content="Founded in 1946 to protect milk producers from exploitation by middlemen"
              />
              <CardWithIcon
                icon={TrendingUp}
                title="Evolution"
                content="Grew into GCMMF, India's largest food products organization"
              />
              <CardWithIcon
                icon={Target}
                title="Scale"
                content="Now operates across 28 state federations, serving millions of farmers"
              />
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-blue-800">Three-Tier Structure</h3>
            <div className="relative flex justify-between items-center">
              <div className="absolute w-full h-1 bg-blue-200 top-1/2 transform -translate-y-1/2 z-0" />
              {["Village Societies", "District Unions", "State Federation"].map((item, index) => (
                <div
                  key={index}
                  className="relative z-10 text-center p-4 bg-white rounded-lg shadow-lg w-1/4"
                >
                  <div className="font-medium text-blue-600">{item}</div>
                  <div className="mt-2 text-sm text-gray-500">Level {index + 1}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    // Slide 2: Problem Statement
    {
      title: "Problem Statement",
      subtitle: "Bottom of Pyramid Challenges",
      content: (
        <div className="space-y-6">
          <div className="bg-red-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-6 text-red-800">Critical BoP Issues</h2>
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  title: "Rural Poverty",
                  description: "Lack of sustainable income for dairy farmers",
                  icon: TrendingUp
                },
                {
                  title: "Market Access",
                  description: "Limited access to organized dairy markets",
                  icon: Target
                },
                {
                  title: "Exploitation",
                  description: "Unfair prices and middlemen exploitation",
                  icon: Shield
                },
                {
                  title: "Technical Gap",
                  description: "Lack of veterinary services and knowledge",
                  icon: Lightbulb
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <item.icon className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-gray-600 mt-1">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    // Slide 3: Solution Overview
    {
      title: "Solution Overview",
      subtitle: "Innovative Cooperative Model",
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-6 text-green-800">Innovation Model</h2>
            <div className="grid grid-cols-2 gap-6">
              <CardWithIcon
                icon={Users}
                title="Integrated Structure"
                content="Connected village-level producers directly to market through cooperative network"
              />
              <CardWithIcon
                icon={Shield}
                title="Professional Management"
                content="Combined cooperative ownership with professional management expertise"
              />
              <CardWithIcon
                icon={Target}
                title="Value Chain Control"
                content="Complete oversight from procurement to marketing ensuring quality"
              />
              <CardWithIcon
                icon={Lightbulb}
                title="Support Services"
                content="Comprehensive assistance including veterinary care and training programs"
              />
            </div>
          </div>
        </div>
      )
    },
    // Slide 4: Impact Analysis
    {
      title: "Impact Analysis",
      subtitle: "Multi-dimensional Impact Assessment",
      content: (
        <div className="space-y-6">
          <div className="bg-purple-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-6 text-purple-800">Key Impact Areas</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-purple-700">Social Impact</h3>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Users className="w-5 h-5 text-purple-500 mr-2" />
                      <span>Empowerment of 3.6 million milk producers</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="w-5 h-5 text-purple-500 mr-2" />
                      <span>Women empowerment in dairy cooperatives</span>
                    </li>
                    <li className="flex items-center">
                      <Lightbulb className="w-5 h-5 text-purple-500 mr-2" />
                      <span>Improved rural healthcare access</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-purple-700">Economic Impact</h3>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <TrendingUp className="w-5 h-5 text-purple-500 mr-2" />
                      <span>Regular income for 16.6 million producers</span>
                    </li>
                    <li className="flex items-center">
                      <BarChart className="w-5 h-5 text-purple-500 mr-2" />
                      <span>Fair price mechanism implementation</span>
                    </li>
                    <li className="flex items-center">
                      <Target className="w-5 h-5 text-purple-500 mr-2" />
                      <span>Rural employment generation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 5: Challenges and Solutions
    {
      title: "Challenges and Solutions",
      subtitle: "Overcoming Key Obstacles",
      content: (
        <div className="space-y-6">
          <div className="bg-orange-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-6 text-orange-800">Key Challenges Addressed</h2>
            <div className="grid gap-6">
              {[
                {
                  title: "Quality Control",
                  challenge: "Maintaining consistent milk quality across vast network",
                  solution: "Implemented systematic testing and collection processes",
                  icon: Shield
                },
                {
                  title: "Infrastructure Development",
                  challenge: "Creating efficient cold chain network",
                  solution: "Developed village-level collection centers with cold chain",
                  icon: Target
                },
                {
                  title: "Market Competition",
                  challenge: "Competing with established private players",
                  solution: "Built strong brand and diversified product portfolio",
                  icon: TrendingUp
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <item.icon className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
                      <div className="mt-2 space-y-2">
                        <p className="text-red-600">Challenge: {item.challenge}</p>
                        <p className="text-green-600">Solution: {item.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    // Slide 6: Lessons Learned
    {
      title: "Lessons Learned and Scalability",
      subtitle: "Key Insights and Future Potential",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-6 text-blue-800">Key Takeaways</h2>
            <div className="grid grid-cols-2 gap-6">
              <CardWithIcon
                icon={Users}
                title="Ownership Model"
                content="Professional management with cooperative ownership creates sustainable social enterprise"
              />
              <CardWithIcon
                icon={Target}
                title="Value Integration"
                content="Vertical integration ensures quality control and fair value distribution"
              />
              <CardWithIcon
                icon={Shield}
                title="Support Services"
                content="Comprehensive support services are crucial for maintaining producer loyalty"
              />
              <CardWithIcon
                icon={Lightbulb}
                title="Brand Building"
                content="Strong brand identity essential for market success and sustainability"
              />
            </div>
            
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">Scalability Potential</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  {
                    title: "Sector Adaptation",
                    content: "Model replicable in other agricultural sectors",
                    icon: Target
                  },
                  {
                    title: "Geographic Expansion",
                    content: "Adaptable to different geographical contexts",
                    icon: Users
                  },
                  {
                    title: "Technology Integration",
                    content: "Digital transformation can enhance efficiency",
                    icon: Lightbulb
                  }
                ].map((item, index) => (
                  <div key={index} className="text-center p-4 hover:bg-blue-50 rounded-lg">
                    <item.icon className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setSlideDirection('right');
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideDirection('left');
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">{slides[currentSlide].title}</h1>
        <p className="text-lg text-gray-600 mt-2">{slides[currentSlide].subtitle}</p>
      </div>

      {/* Main content */}
      <div className="relative overflow-hidden">
        <SlideContent content={slides[currentSlide].content} />
      </div>

      {/* Navigation */}
      <div className="mt-8 flex justify-between items-center">
        <button
          onClick={prevSlide}
          className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Previous
        </button>

        {/* Progress indicator */}
        <div className="flex-1 mx-8">
          <ProgressBar progress={(currentSlide / (slides.length - 1)) * 100} />
          <div className="text-center text-sm text-gray-600 mt-2">
            Slide {currentSlide + 1} of {slides.length}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
          disabled={currentSlide === slides.length - 1}
        >
          Next
          <ChevronRight className="w-5 h-5 ml-1" />
        </button>
      </div>
    </div>
  );
};

export default Presentation;