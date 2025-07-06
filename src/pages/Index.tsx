
import { useState } from "react";
import { MessageCircle, Brain, Search, Calendar, Pill, Droplet, User, Moon, ForkKnife, List, Zap, Shield, Cpu, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import FloatingIcons3D from "@/components/FloatingIcons3D";
import MatrixRain from "@/components/MatrixRain";
import GlitchText from "@/components/GlitchText";

const Index = () => {
  const navigate = useNavigate();

  const handleStartChat = () => {
    navigate("/app");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Matrix Rain Background */}
      <MatrixRain />
      
      {/* 3D Floating Icons */}
      <FloatingIcons3D />

      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)`,
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 glass-effect border-b border-cyan-500/20">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center neon-glow">
            <span className="text-black font-bold text-sm">M</span>
          </div>
          <span className="text-2xl font-bold gradient-text">Meddola</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-cyan-300 hover:text-cyan-100 transition-all duration-300 hover:neon-text">Features</a>
          <a href="#disclaimer" className="text-cyan-300 hover:text-cyan-100 transition-all duration-300 hover:neon-text">Disclaimer</a>
          <Button 
            onClick={handleStartChat} 
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-black font-bold px-6 neon-glow hover:animate-glow-pulse transition-all duration-300"
          >
            <Zap className="w-4 h-4 mr-2" />
            Neural Link
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <GlitchText className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            AI NEURAL
          </GlitchText>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            HEALTH MATRIX
          </h1>
          <div className="relative mb-12">
            <h2 className="text-xl md:text-2xl text-cyan-300 leading-relaxed max-w-3xl mx-auto">
              Interface with advanced AI algorithms for 
              <span className="text-purple-400"> quantum health analysis</span>, 
              <span className="text-pink-400"> molecular diagnostics</span>, and 
              <span className="text-green-400"> bio-optimization protocols</span>
            </h2>
          </div>
          <Button 
            onClick={handleStartChat}
            size="lg" 
            className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 text-black font-bold px-12 py-4 text-lg rounded-full neon-glow hover:animate-glow-pulse transition-all duration-300 transform hover:scale-105 animate-float"
          >
            <Brain className="w-6 h-6 mr-3" />
            INITIATE NEURAL LINK
          </Button>
        </div>
      </section>

      {/* Protocol Sequence Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">PROTOCOL SEQUENCE</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-effect neon-border hover:animate-glow-pulse transition-all duration-500 transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 neon-glow animate-float">
                  <MessageCircle className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-xl font-bold text-cyan-300 mb-4">DATA INPUT</h3>
                <p className="text-slate-300">Neural interface accepts biometric data streams via natural language processing</p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect neon-border hover:animate-glow-pulse transition-all duration-500 transform hover:scale-105" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 neon-glow animate-float">
                  <Cpu className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-xl font-bold text-purple-300 mb-4">AI PROCESSING</h3>
                <p className="text-slate-300">Quantum algorithms analyze molecular patterns and genetic markers</p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect neon-border hover:animate-glow-pulse transition-all duration-500 transform hover:scale-105" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 neon-glow animate-float">
                  <Database className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-xl font-bold text-pink-300 mb-4">PROTOCOL GENERATION</h3>
                <p className="text-slate-300">Bio-optimization sequences compiled for maximum health efficiency</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Matrix */}
      <section id="features" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">SYSTEM CAPABILITIES</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Brain, title: "Neural Analysis", desc: "Advanced symptom pattern recognition", color: "from-cyan-500 to-blue-600" },
              { icon: Pill, title: "Molecular Database", desc: "Comprehensive pharmaceutical matrix", color: "from-purple-500 to-pink-600" },
              { icon: Calendar, title: "Bio-Rhythms", desc: "Circadian optimization protocols", color: "from-green-500 to-cyan-600" },
              { icon: Shield, title: "Secure Matrix", desc: "Encrypted health data streams", color: "from-pink-500 to-purple-600" }
            ].map((feature, index) => (
              <Card key={index} className="glass-effect neon-border hover:animate-glow-pulse transition-all duration-500 transform hover:scale-105 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 neon-glow`}>
                    <feature.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="font-bold text-cyan-300 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-400">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Protocol Section */}
      <section id="disclaimer" className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="gradient-text">SECURITY PROTOCOL</span>
          </h2>
          <div className="glass-effect neon-border rounded-2xl p-8">
            <Shield className="w-16 h-16 mx-auto mb-6 text-cyan-400 neon-glow animate-float" />
            <p className="text-lg text-slate-300 leading-relaxed">
              This neural interface provides educational analysis via quantum AI algorithms. 
              For critical system diagnostics, consult certified biological maintenance specialists. 
              All data streams are encrypted and processed in secure matrix protocols.
            </p>
          </div>
        </div>
      </section>

      {/* Final Neural Link Section */}
      <section className="relative z-10 px-6 py-20 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <GlitchText className="text-4xl md:text-5xl font-bold text-white mb-8">
            READY TO SYNC WITH THE MATRIX?
          </GlitchText>
          <Button 
            onClick={handleStartChat}
            size="lg" 
            className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 text-black font-bold px-12 py-4 text-lg rounded-full neon-glow hover:animate-glow-pulse transition-all duration-300 transform hover:scale-110 animate-float"
          >
            <Zap className="w-6 h-6 mr-3" />
            ACTIVATE NEURAL INTERFACE
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
