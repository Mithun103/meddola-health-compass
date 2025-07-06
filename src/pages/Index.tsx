
import { useState } from "react";
import { MessageCircle, Brain, Search, Calendar, Pill, Droplet, WalkingFigure, Moon, ForkKnife, Checklist } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleStartChat = () => {
    navigate("/app");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-slate-100">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-coral-100/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-sm border-b border-slate-200/50">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <span className="text-xl font-bold text-slate-800">Meddola</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-slate-600 hover:text-teal-600 transition-colors">Features</a>
          <a href="#disclaimer" className="text-slate-600 hover:text-teal-600 transition-colors">Disclaimer</a>
          <Button onClick={handleStartChat} className="bg-coral-500 hover:bg-coral-600 text-white px-6">
            Chat Now
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Intelligent Health Guidance, 
            <span className="text-teal-600"> Instantly</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Describe your symptoms to get clear insights on potential conditions, medication, 
            and personalized health routines from your AI companion.
          </h2>
          <Button 
            onClick={handleStartChat}
            size="lg" 
            className="bg-coral-500 hover:bg-coral-600 text-white px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Start Your Confidential Chat
          </Button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative z-10 px-6 py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Tell Us How You Feel</h3>
                <p className="text-slate-600">Use simple language to describe your symptoms or ask a question.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="flex">
                    <Brain className="w-6 h-6 text-teal-600" />
                    <Search className="w-6 h-6 text-teal-600 ml-1" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Get AI-Powered Insights</h3>
                <p className="text-slate-600">Receive instant information on potential causes, remedies, and drug info.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="flex">
                    <Checklist className="w-6 h-6 text-teal-600" />
                    <Calendar className="w-6 h-6 text-teal-600 ml-1" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Build Your Health Plan</h3>
                <p className="text-slate-600">Generate and view a personalized daily routine to support your well-being.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section id="features" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-16">
            Comprehensive Health Support
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 hover:bg-white">
              <CardContent className="p-0">
                <Brain className="w-10 h-10 text-teal-600 mb-4" />
                <h3 className="font-bold text-slate-800 mb-2">Symptom Analysis</h3>
                <p className="text-sm text-slate-600">AI-powered assessment of your symptoms and health concerns.</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 hover:bg-white">
              <CardContent className="p-0">
                <Pill className="w-10 h-10 text-teal-600 mb-4" />
                <h3 className="font-bold text-slate-800 mb-2">Drug Information</h3>
                <p className="text-sm text-slate-600">Comprehensive medication details, interactions, and guidance.</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 hover:bg-white">
              <CardContent className="p-0">
                <Calendar className="w-10 h-10 text-teal-600 mb-4" />
                <h3 className="font-bold text-slate-800 mb-2">Personalized Routines</h3>
                <p className="text-sm text-slate-600">Custom daily health plans tailored to your specific needs.</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 hover:bg-white">
              <CardContent className="p-0">
                <Search className="w-10 h-10 text-teal-600 mb-4" />
                <h3 className="font-bold text-slate-800 mb-2">Context-Aware Memory</h3>
                <p className="text-sm text-slate-600">Remembers your health history for more accurate guidance.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust & Transparency Section */}
      <section id="disclaimer" className="relative z-10 px-6 py-20 bg-slate-100/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Knowledgeable & Responsible
          </h2>
          <div className="bg-white/80 rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-slate-700 leading-relaxed">
              Meddola provides educational information powered by advanced AI. 
              It is not a substitute for professional medical advice. 
              Please consult a qualified healthcare provider for a definitive diagnosis and treatment plan.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative z-10 px-6 py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to feel more in control of your health?
          </h2>
          <Button 
            onClick={handleStartChat}
            size="lg" 
            className="bg-coral-500 hover:bg-coral-600 text-white px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Start Your Confidential Chat
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
