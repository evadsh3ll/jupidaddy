import {
  Zap,
  Target,
  RotateCcw,
  Link,
  Bell,
  MessageSquare,
  ArrowRight,
  Smartphone,
  Play,
  Shield,
  Cpu,
  Rocket,
  Brain,
  Bot,
  Sparkles,
  TrendingUp,
  Clock,
  DollarSign,
  Users,
  Globe,
  Lock,
  CheckCircle,
} from "lucide-react"
import ASCIIText from "./components/ascii-text"
import FuzzyText from "./components/fuzzy-text"

export default function HomePage() {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Agent Intelligence",
      description: "Advanced AI agents understand your intent and execute trades naturally",
      color: "from-cyan-400 to-blue-500",
      details: "No more memorizing commands. Just tell the AI what you want in plain English and watch it execute your trades with precision."
    },
    {
      icon: <Link className="w-8 h-8" />,
      title: "Phantom Wallet Connect",
      description: "Secure deep linking with military-grade encryption",
      color: "from-purple-400 to-pink-500",
      details: "One-tap wallet connection with Phantom. Your keys stay on your device - we never touch them."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Smart Limit Orders",
      description: "AI-powered trigger pricing with market analysis",
      color: "from-green-400 to-emerald-500",
      details: "Set intelligent limit orders that adapt to market conditions. The AI analyzes trends to optimize your entry and exit points."
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: "Automated Trading",
      description: "Recurring orders and DCA strategies",
      color: "from-yellow-400 to-orange-500",
      details: "Set up automated trading strategies. Dollar-cost average, recurring buys, or complex multi-token strategies - all handled by AI."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Swaps",
      description: "Powered by Jupiter Ultra API for best routes",
      color: "from-red-400 to-pink-500",
      details: "Get the best swap routes instantly. AI agents find optimal paths across all DEXs for maximum efficiency and minimum slippage."
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Smart Price Alerts",
      description: "AI-driven notifications with market insights",
      color: "from-indigo-400 to-purple-500",
      details: "Get intelligent alerts based on price movements, volume spikes, or custom conditions. AI provides context with every notification."
    },
  ]

  const aiCapabilities = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Natural Language Processing",
      description: "Talk to the bot like you're chatting with a friend"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Intent Recognition",
      description: "AI understands context and trading goals"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Market Analysis",
      description: "Real-time insights and trend predictions"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Risk Management",
      description: "AI suggests optimal position sizes and stop losses"
    }
  ]

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Save Time",
      description: "No more typing commands or navigating complex interfaces"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Better Trades",
      description: "AI optimization for better entry/exit points"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Accessible",
      description: "Perfect for both beginners and advanced traders"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Always Available",
      description: "Trade anywhere, anytime - no app downloads needed"
    }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden relative">
      {/* Enhanced Background Logo */}
      <div
        className="fixed inset-0 opacity-10 bg-no-repeat bg-center bg-contain pointer-events-none z-0"
        style={{
          backgroundImage: `url('/jupidaddy-logo.jpg')`,
          backgroundSize: "90%",
          backgroundPosition: "center 30%",
          filter: "brightness(1.2) contrast(1.1) saturate(1.3)",
        }}
      ></div>

      {/* Gradient Overlay for better text readability */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-transparent to-[#0a0a0a]/95 pointer-events-none z-1"></div>

      {/* Content with relative positioning to appear above background */}
      <div className="relative z-10">
        {/* Hero Section with ASCII Title */}
        <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-center space-y-8 sm:space-y-12">
              {/* ASCII JUPIDADDY Title */}
              <div className="relative h-32 sm:h-48 lg:h-64 w-full">
                <ASCIIText
                  text="JUPIDADDY"
                  asciiFontSize={1}
                  textFontSize={200}
                  textColor="#00ff88"
                  planeBaseHeight={6}
                  enableWaves={true}
                />
              </div>

              {/* New Tagline */}
              <div className="space-y-6 max-w-5xl mx-auto">
                <div className="relative">
                  <FuzzyText
                    fontSize="clamp(1.25rem, 3vw, 2.5rem)"
                    fontWeight={600}
                    color="#888"
                    baseIntensity={0.1}
                    hoverIntensity={0.4}
                  >
                    Tired of old Telegram bots with /commands?
                  </FuzzyText>
                </div>
                
                <div className="space-y-4">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
                      Welcome to the future of trading
                    </span>
                  </h1>
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto">
                    Trade on Jupiter with <span className="text-cyan-400 font-semibold">human language</span>, not commands. 
                    <span className="text-purple-400 font-semibold"> AI agents</span> understand your intent and execute trades instantly.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4 sm:pt-8">
                <a
                  href="tg://resolve?domain=jupidaddy_bot"
                  className="group relative inline-flex items-center gap-3 sm:gap-4 px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-cyan-400 via-green-400 to-blue-500 rounded-2xl font-mono font-bold text-lg sm:text-xl text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  <span className="flex items-center gap-2 sm:gap-3">
                    🚀 Launch Bot
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-2" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-green-400 to-blue-500 rounded-2xl blur-xl opacity-30 -z-10 animate-pulse"></div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* AI Agents Section */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-20">
              <h2 className="font-mono text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Powered by AI Agents
                </span>
              </h2>
              <p className="text-gray-400 text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed">
                Advanced artificial intelligence that understands your trading goals and executes with precision
              </p>
            </div>

            {/* AI Capabilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
              {aiCapabilities.map((capability, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                      {capability.icon}
                    </div>
                  </div>
                  <h3 className="font-mono font-bold text-lg text-white mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Benefits Section */}
            <div className="text-center mb-12">
              <h3 className="font-mono text-2xl sm:text-3xl font-bold mb-8 text-white">
                Why AI Agents Matter
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-green-400/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-lg flex items-center justify-center">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="font-mono font-bold text-lg text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section - Redesigned Layout */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-20">
              <h2 className="font-mono text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Features that matter
                </span>
              </h2>
              <p className="text-gray-400 text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed">
                Everything you need to trade like a professional, right inside Telegram
              </p>
            </div>

            {/* Central Hub */}
            <div className="flex justify-center mb-12 sm:mb-16">
              <div className="relative">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full flex items-center justify-center border-2 border-cyan-400/30 backdrop-blur-sm">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                    <Bot className="w-8 h-8 sm:w-10 sm:h-10 text-black" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Feature Cards in Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative transform transition-all duration-500 hover:scale-105"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 overflow-hidden h-full">
                    {/* Animated Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
                    ></div>

                    {/* Floating Icon */}
                    <div className="relative mb-6">
                      <div
                        className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-black transform group-hover:rotate-12 transition-transform duration-300`}
                      >
                        {feature.icon}
                      </div>
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
                      ></div>
                    </div>

                    {/* Content */}
                    <div className="relative space-y-4">
                      <h3 className="font-mono font-bold text-lg sm:text-xl text-white group-hover:text-cyan-300 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 font-sans leading-relaxed group-hover:text-gray-300 transition-colors duration-300 text-sm sm:text-base">
                        {feature.description}
                      </p>
                      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                        {feature.details}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-20">
              <h2 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                  How it works
                </span>
              </h2>
              <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto">
                From idea to execution in seconds
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
              <div className="text-center space-y-6">
                <div className="relative mx-auto w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center border-2 border-cyan-400/30">
                  <MessageSquare className="w-10 h-10 text-cyan-400" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="font-mono font-bold text-xl text-white mb-3">Tell the AI</h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                    "I want to buy 1 SOL when it drops to $80" or "Show me the best route for 100 USDC to JUP"
                  </p>
                </div>
              </div>

              <div className="text-center space-y-6">
                <div className="relative mx-auto w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full flex items-center justify-center border-2 border-purple-400/30">
                  <Brain className="w-10 h-10 text-purple-400" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="font-mono font-bold text-xl text-white mb-3">AI Understands</h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                    AI agents analyze your intent, check market conditions, and find optimal execution strategies
                  </p>
                </div>
              </div>

              <div className="text-center space-y-6">
                <div className="relative mx-auto w-20 h-20 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full flex items-center justify-center border-2 border-green-400/30">
                  <Zap className="w-10 h-10 text-green-400" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="font-mono font-bold text-xl text-white mb-3">Trade Executed</h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Your trade is executed instantly with the best possible route and minimal slippage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Video Section */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                  See it in action
                </span>
              </h2>
              <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto">
                Watch how easy it is to trade directly from Telegram with AI agents
              </p>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-green-400/5 rounded-3xl"></div>
                <div className="relative flex flex-col items-center justify-center space-y-6 sm:space-y-8 py-12 sm:py-20">
                  <div className="relative">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-cyan-400/20 to-green-400/20 rounded-3xl flex items-center justify-center border-2 border-cyan-400/30">
                      <Smartphone className="w-12 h-12 sm:w-16 sm:h-16 text-cyan-400" />
                    </div>
                    <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full flex items-center justify-center animate-bounce">
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 text-black ml-1" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-green-400/10 rounded-3xl animate-pulse"></div>
                  </div>
                  <div className="text-center space-y-4">
                    <h3 className="font-mono text-xl sm:text-2xl font-bold text-white">AI Trading Demo</h3>
                    <p className="text-gray-400 text-base sm:text-lg">Watch AI agents in action</p>
                    <p className="text-sm text-gray-500">Coming soon...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 lg:p-16 border border-gray-700/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-purple-400/10 to-green-400/10"></div>
              <div className="relative space-y-8 sm:space-y-10">
                <div className="space-y-6">
                  <h2 className="font-mono text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                    Connect wallet. <br />
                    <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                      Talk to AI.
                    </span>
                  </h2>
                  <h3 className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold text-green-400">Trade instantly.</h3>
                  <p className="text-gray-400 text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed">
                    No complex interfaces, no endless forms. Just pure AI-powered trading in your pocket.
                  </p>
                </div>

                <div className="pt-4 sm:pt-8">
                  <a
                    href="tg://resolve?domain=jupidaddy_bot"
                    className="group relative inline-flex items-center gap-3 sm:gap-4 px-12 sm:px-16 py-6 sm:py-8 bg-gradient-to-r from-cyan-400 via-green-400 to-blue-500 rounded-2xl font-mono font-bold text-xl sm:text-2xl text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                  >
                    <span className="flex items-center gap-3 sm:gap-4">
                      👇 Launch Bot
                      <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 transition-transform group-hover:translate-x-3" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-green-400 to-blue-500 rounded-2xl blur-2xl opacity-40 -z-10 animate-pulse"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-gray-500">
                <div className="flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  <span>Built on Solana</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  <span>Powered by Jupiter</span>
                </div>
                <div className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  <span>AI Agents</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span>Made with ❤️ by degens</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">© 2025 Jupidaddy. Trade responsibly.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
