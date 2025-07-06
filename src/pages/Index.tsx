
import { useState } from "react";
import { MessageCircle, Heart, Shield, Calendar, Pill, User, Moon, Sun, Zap, ArrowRight, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(true);

  const handleStartChat = () => {
    navigate("/app");
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
      {/* Navigation */}
      <nav className={`flex items-center justify-between px-6 py-4 border-b ${isDark ? 'border-slate-800 bg-slate-900/95' : 'border-slate-200 bg-white/95'} backdrop-blur-sm sticky top-0 z-50`}>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <Heart className="w-5 h-5 text-white" />
          </div>
          <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Meddola</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className={`${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors`}>Features</a>
          <a href="#about" className={`${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors`}>About</a>
          <a href="#security" className={`${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors`}>Security</a>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className={`p-2 ${isDark ? 'hover:bg-slate-800' : 'hover:bg-slate-100'}`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
          <Button 
            onClick={handleStartChat} 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300 mb-8">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Healthcare Assistant
            </span>
          </div>
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Your Personal Health
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Companion</span>
          </h1>
          <p className={`text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Get personalized health insights, track your wellness journey, and receive expert guidance 
            through our advanced AI platform designed for modern healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleStartChat}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Health Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className={`px-8 py-4 text-lg ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-700 hover:bg-slate-50'}`}
            >
              Watch Demo
            </Button>
          </div>
          <div className="mt-12 flex items-center justify-center space-x-8 text-sm text-slate-500">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              HIPAA Compliant
            </div>
            <div className="flex items-center">
              <Shield className="w-4 h-4 text-blue-500 mr-2" />
              Enterprise Security
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-500 mr-2" />
              24/7 Support
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              How It Works
            </h2>
            <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'} max-w-2xl mx-auto`}>
              Simple, secure, and personalized healthcare guidance in three easy steps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className={`${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'} hover:shadow-lg transition-all duration-300`}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Share Your Concerns</h3>
                <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Describe your symptoms or health questions in natural language through our intuitive chat interface
                </p>
              </CardContent>
            </Card>
            
            <Card className={`${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'} hover:shadow-lg transition-all duration-300`}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Get AI Insights</h3>
                <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Our advanced AI analyzes your information and provides personalized health insights and recommendations
                </p>
              </CardContent>
            </Card>
            
            <Card className={`${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'} hover:shadow-lg transition-all duration-300`}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Follow Your Plan</h3>
                <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Receive actionable health plans and track your progress with personalized wellness routines
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={`px-6 py-20 ${isDark ? 'bg-slate-800/30' : 'bg-slate-50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Comprehensive Health Platform
            </h2>
            <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'} max-w-2xl mx-auto`}>
              Everything you need to manage your health and wellness in one secure platform
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Health Analysis", desc: "Advanced symptom assessment and health insights", color: "from-red-500 to-pink-600" },
              { icon: Pill, title: "Medication Guide", desc: "Comprehensive medication information and interactions", color: "from-blue-500 to-cyan-600" },
              { icon: Calendar, title: "Wellness Plans", desc: "Personalized health routines and tracking", color: "from-green-500 to-emerald-600" },
              { icon: Shield, title: "Secure & Private", desc: "HIPAA-compliant data protection and privacy", color: "from-purple-500 to-violet-600" }
            ].map((feature, index) => (
              <Card key={index} className={`${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'} hover:shadow-lg transition-all duration-300 group`}>
                <CardContent className="p-6 text-center">
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{feature.title}</h3>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section id="security" className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl font-bold mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Your Privacy & Security Matter
          </h2>
          <Card className={`${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'} shadow-xl`}>
            <CardContent className="p-8">
              <Shield className="w-16 h-16 mx-auto mb-6 text-blue-600" />
              <p className={`text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Your health information is protected with enterprise-grade security. We comply with HIPAA regulations 
                and use advanced encryption to ensure your data remains private and secure. Our platform is regularly 
                audited and certified to meet the highest healthcare data protection standards.
              </p>
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mb-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>HIPAA Compliant</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-2">
                    <Shield className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>End-to-End Encrypted</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mb-2">
                    <User className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>No Data Sharing</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mb-2">
                    <Star className="w-4 h-4 text-orange-600" />
                  </div>
                  <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>SOC 2 Certified</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`px-6 py-20 ${isDark ? 'bg-gradient-to-r from-blue-900/20 to-purple-900/20' : 'bg-gradient-to-r from-blue-50 to-purple-50'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Ready to Transform Your Health Journey?
          </h2>
          <p className={`text-lg mb-12 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Join thousands of users who trust Meddola for their healthcare needs
          </p>
          <Button 
            onClick={handleStartChat}
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-12 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
