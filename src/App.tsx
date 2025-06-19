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
} from "lucide-react"
import ASCIIText from "./components/ascii-text"
import FuzzyText from "./components/fuzzy-text"

export default function HomePage() {
  const features = [
    {
      icon: <Link className="w-8 h-8" />,
      title: "Phantom Wallet Connect",
      description: "Deep Link + Encryption",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Limit Orders",
      description: "with Trigger Pricing",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: "Recurring Orders",
      description: "automated trading",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Swaps",
      description: "via Jupiter Ultra API",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Real-time Price Alerts",
      description: "Never miss a move",
      color: "from-red-400 to-pink-500",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Everything inside Telegram",
      description: "no accounts, no BS.",
      color: "from-indigo-400 to-purple-500",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden relative">
      {/* Enhanced Background Logo */}
      <div
        className="fixed inset-0 opacity-15 bg-no-repeat bg-center bg-contain pointer-events-none z-0"
        style={{
          backgroundImage: `url('/jupidaddy-logo.jpg')`,
          backgroundSize: "80%",
          backgroundPosition: "center 30%",
          filter: "brightness(1.2) contrast(1.1) saturate(1.3)",
        }}
      ></div>

      {/* Gradient Overlay for better text readability */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/90 pointer-events-none z-1"></div>

      {/* Content with relative positioning to appear above background */}
      <div className="relative z-10">
        {/* Hero Section with ASCII Title */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-center space-y-12">
              {/* ASCII JUPIDADDY Title */}
              <div className="relative h-48 w-full">
                <ASCIIText
                  text="JUPIDADDY"
                  asciiFontSize={6}
                  textFontSize={120}
                  textColor="#00ff88"
                  planeBaseHeight={6}
                  enableWaves={true}
                />
              </div>

              {/* Fuzzy Subtitle */}
              <div className="relative h-24 flex items-center justify-center">
                <FuzzyText
                  fontSize="clamp(1.5rem, 4vw, 3rem)"
                  fontWeight={600}
                  color="#888"
                  baseIntensity={0.3}
                  hoverIntensity={0.8}
                >
                  Not your old Telegram bot
                </FuzzyText>
              </div>

              {/* Main Description */}
              <div className="space-y-8 max-w-4xl mx-auto">
                <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light leading-relaxed">
                  Powered by <span className="text-cyan-400 font-semibold">NLP</span>,
                  <span className="text-purple-400 font-semibold"> Phantom wallet</span>, and
                  <span className="text-green-400 font-semibold"> Jupiter Ultra</span>. Trade like a pro — instantly.
                </p>

                {/* CTA Button */}
                <div className="pt-8">
                  <a
                    href="tg://resolve?domain=jupidaddy_bot"
                    className="group relative inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-cyan-400 via-green-400 to-blue-500 rounded-2xl font-mono font-bold text-xl text-black transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/25"
                  >
                    <span className="flex items-center gap-3">
                      🚀 Launch Bot
                      <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-green-400 to-blue-500 rounded-2xl blur-xl opacity-30 -z-10 animate-pulse"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Redesigned Layout */}
        <section className="py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-mono text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Features that matter
                </span>
              </h2>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                Everything you need to trade like a professional, right inside Telegram
              </p>
            </div>

            {/* Hexagonal/Organic Layout */}
            <div className="relative">
              {/* Central Hub */}
              <div className="flex justify-center mb-16">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full flex items-center justify-center border-2 border-cyan-400/30 backdrop-blur-sm">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                      <Cpu className="w-10 h-10 text-black" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Feature Cards in Organic Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`group relative transform transition-all duration-500 hover:scale-105 ${
                      index % 2 === 0 ? "lg:translate-y-8" : "lg:-translate-y-8"
                    }`}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 overflow-hidden">
                      {/* Animated Background Gradient */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
                      ></div>

                      {/* Floating Icon */}
                      <div className="relative mb-6">
                        <div
                          className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-black transform group-hover:rotate-12 transition-transform duration-300`}
                        >
                          {feature.icon}
                        </div>
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
                        ></div>
                      </div>

                      {/* Content */}
                      <div className="relative space-y-4">
                        <h3 className="font-mono font-bold text-xl text-white group-hover:text-cyan-300 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 font-sans leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                          {feature.description}
                        </p>
                      </div>

                      {/* Connecting Lines (visible on larger screens) */}
                      <div className="hidden lg:block absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400/30 rounded-tl-lg"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Demo Video Section */}
        <section className="py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-mono text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                  See it in action
                </span>
              </h2>
              <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                Watch how easy it is to trade directly from Telegram
              </p>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-green-400/5 rounded-3xl"></div>
                <div className="relative flex flex-col items-center justify-center space-y-8 py-20">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-green-400/20 rounded-3xl flex items-center justify-center border-2 border-cyan-400/30">
                      <Smartphone className="w-16 h-16 text-cyan-400" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full flex items-center justify-center animate-bounce">
                      <Play className="w-6 h-6 text-black ml-1" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-green-400/10 rounded-3xl animate-pulse"></div>
                  </div>
                  <div className="text-center space-y-4">
                    <h3 className="font-mono text-2xl font-bold text-white">Mobile Demo</h3>
                    <p className="text-gray-400 text-lg">Drop your recorded video here</p>
                    <p className="text-sm text-gray-500">Coming soon...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-3xl p-16 border border-gray-700/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-purple-400/10 to-green-400/10"></div>
              <div className="relative space-y-10">
                <div className="space-y-6">
                  <h2 className="font-mono text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    Connect wallet. <br />
                    <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                      Place a trade.
                    </span>
                  </h2>
                  <h3 className="font-mono text-3xl sm:text-4xl font-bold text-green-400">That's it.</h3>
                  <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                    No complex interfaces, no endless forms. Just pure trading power in your pocket.
                  </p>
                </div>

                <div className="pt-8">
                  <a
                    href="tg://resolve?domain=jupidaddy_bot"
                    className="group relative inline-flex items-center gap-4 px-16 py-8 bg-gradient-to-r from-cyan-400 via-green-400 to-blue-500 rounded-2xl font-mono font-bold text-2xl text-black transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/25"
                  >
                    <span className="flex items-center gap-4">
                      👇 Launch Bot
                      <ArrowRight className="w-8 h-8 transition-transform group-hover:translate-x-3" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-green-400 to-blue-500 rounded-2xl blur-2xl opacity-40 -z-10 animate-pulse"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-8 text-gray-500">
                <div className="flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  <span>Built on Solana</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  <span>Powered by Jupiter</span>
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
