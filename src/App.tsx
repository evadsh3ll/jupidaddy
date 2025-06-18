import React from 'react';
import { 
  Zap, 
  Target, 
  RotateCcw, 
  Link, 
  Bell, 
  MessageSquare,
  ArrowRight,
  ExternalLink,
  Smartphone,
  Play
} from 'lucide-react';

function App() {
  const features = [
    {
      icon: <Link className="w-8 h-8" />,
      title: "Phantom Wallet Connect",
      description: "Deep Link + Encryption"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Limit Orders",
      description: "with Trigger Pricing"
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: "Recurring Orders",
      description: "automated trading"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Swaps",
      description: "via Jupiter Ultra API"
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Real-time Price Alerts",
      description: "Never miss a move"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Everything inside Telegram",
      description: "no accounts, no BS."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden relative">
      {/* Faded Logo Background */}
      <div 
        className="fixed inset-0 opacity-5 bg-no-repeat bg-center bg-contain pointer-events-none z-0"
        style={{
          backgroundImage: `url('/photo_2025-06-19_04-41-56 copy.jpg')`,
          backgroundSize: '60%',
          backgroundPosition: 'center 40%'
        }}
      ></div>
      
      {/* Content with relative positioning to appear above background */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <div className="space-y-8">
                {/* Aesthetic Logo */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-neon-green via-neon-purple to-neon-blue rounded-2xl flex items-center justify-center transform rotate-12">
                      <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center transform -rotate-12">
                        <span className="text-2xl font-mono font-bold bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">J</span>
                      </div>
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-neon-green rounded-full animate-pulse"></div>
                  </div>
                  <div className="h-12 w-px bg-gradient-to-b from-neon-green to-transparent"></div>
                </div>

                <div className="space-y-6">
                  <h1 className="font-mono text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-neon-green via-neon-purple to-neon-blue bg-clip-text text-transparent animate-gradient">
                      jupidaddy
                    </span>
                  </h1>
                  <h2 className="font-mono text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-200">
                    Not your old trading bot on Telegram.
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-400 font-sans max-w-2xl">
                    Powered by NLP, Phantom wallet, and Jupiter Ultra. Trade like a pro — instantly.
                  </p>
                </div>
                
                {/* Quick CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tg://resolve?domain=jupidaddy_bot"
                    className="group relative px-8 py-4 bg-gradient-to-r from-neon-green to-neon-blue rounded-lg font-mono font-semibold text-black transition-all duration-300 hover:scale-105 animate-pulse-glow"
                  >
                    <span className="flex items-center gap-2">
                      Launch Bot
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                </div>
              </div>
              
              {/* Right Side - Mobile Video Placeholder */}
              <div className="relative">
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-neon-green/50 transition-colors duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 to-neon-purple/10 rounded-2xl"></div>
                  <div className="relative flex flex-col items-center justify-center space-y-6 py-16">
                    <div className="relative">
                      <div className="w-20 h-20 bg-neon-green/20 rounded-2xl flex items-center justify-center border-2 border-neon-green/30">
                        <Smartphone className="w-10 h-10 text-neon-green" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-neon-green rounded-full flex items-center justify-center">
                        <Play className="w-3 h-3 text-black ml-0.5" />
                      </div>
                    </div>
                    <div className="text-center space-y-2">
                      <h3 className="font-mono text-xl font-semibold">Mobile Demo</h3>
                      <p className="text-gray-400">Drop your recorded video here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Aesthetic Layout */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-mono text-3xl sm:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
                  Features that matter
                </span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Everything you need to trade like a professional, right inside Telegram
              </p>
            </div>
            
            {/* Asymmetric Layout */}
            <div className="space-y-8">
              {/* First Row - 2 cards */}
              <div className="grid md:grid-cols-2 gap-8">
                {features.slice(0, 2).map((feature, index) => (
                  <div 
                    key={index}
                    className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700 hover:border-neon-green/50 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-neon-purple/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative space-y-4">
                      <div className="w-16 h-16 bg-neon-green/20 rounded-lg flex items-center justify-center text-neon-green">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-mono font-semibold text-xl mb-2">{feature.title}</h3>
                        <p className="text-gray-400 font-sans">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Second Row - 1 centered card */}
              <div className="flex justify-center">
                <div className="w-full max-w-md">
                  <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700 hover:border-neon-green/50 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-neon-purple/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative space-y-4 text-center">
                      <div className="w-16 h-16 bg-neon-green/20 rounded-lg flex items-center justify-center text-neon-green mx-auto">
                        {features[2].icon}
                      </div>
                      <div>
                        <h3 className="font-mono font-semibold text-xl mb-2">{features[2].title}</h3>
                        <p className="text-gray-400 font-sans">{features[2].description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Third Row - 3 cards */}
              <div className="grid md:grid-cols-3 gap-8">
                {features.slice(3).map((feature, index) => (
                  <div 
                    key={index + 3}
                    className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-neon-green/50 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-neon-purple/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative space-y-4">
                      <div className="w-12 h-12 bg-neon-green/20 rounded-lg flex items-center justify-center text-neon-green">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-mono font-semibold text-lg mb-2">{feature.title}</h3>
                        <p className="text-gray-400 text-sm font-sans">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 border border-gray-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 via-neon-purple/10 to-neon-blue/10"></div>
              <div className="relative space-y-8">
                <div className="space-y-4">
                  <h2 className="font-mono text-3xl sm:text-4xl font-bold">
                    Connect wallet. Place a trade.
                  </h2>
                  <h3 className="font-mono text-2xl sm:text-3xl font-bold text-neon-green">
                    That's it.
                  </h3>
                  <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    No complex interfaces, no endless forms. Just pure trading power in your pocket.
                  </p>
                </div>
                
                <a 
                  href="tg://resolve?domain=jupidaddy_bot"
                  className="group relative inline-block px-12 py-6 bg-gradient-to-r from-neon-green to-neon-blue rounded-xl font-mono font-bold text-lg text-black transition-all duration-300 hover:scale-110 animate-pulse-glow"
                >
                  <span className="flex items-center gap-3">
                    👇 Launch Bot
                    <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-600 text-sm font-sans">
              Built on Solana • Powered by Jupiter • Made with ❤️ by degens
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;