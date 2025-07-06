
import { useState, useEffect } from "react";
import { MessageCircle, Calendar, Moon, Sun, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChatInterface from "@/components/ChatInterface";
import RoutineDisplay from "@/components/RoutineDisplay";

const App = () => {
  const [activeTab, setActiveTab] = useState<'chat' | 'routine'>('chat');
  const [currentRoutine, setCurrentRoutine] = useState<Record<string, string> | null>(null);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Initialize theme based on system preference or saved preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
    
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    if (newTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleRoutineGenerated = (routine: Record<string, string>) => {
    setCurrentRoutine(routine);
  };

  const handleUpdateInChat = () => {
    setActiveTab('chat');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-slate-900' : 'bg-white'} flex`}>
      {/* Left Navigation Rail */}
      <div className={`w-20 ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} border-r flex flex-col items-center py-6 shadow-sm`}>
        {/* Logo */}
        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-8 shadow-lg">
          <Heart className="w-6 h-6 text-white" />
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex flex-col space-y-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setActiveTab('chat')}
            className={`w-14 h-14 p-0 rounded-xl transition-all duration-200 ${
              activeTab === 'chat' 
                ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg' 
                : isDark 
                  ? 'text-slate-400 hover:text-white hover:bg-slate-700' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setActiveTab('routine')}
            className={`w-14 h-14 p-0 rounded-xl transition-all duration-200 ${
              activeTab === 'routine' 
                ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg' 
                : isDark 
                  ? 'text-slate-400 hover:text-white hover:bg-slate-700' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Calendar className="w-6 h-6" />
          </Button>

          {/* Theme Toggle */}
          <div className="pt-4 border-t border-slate-300 dark:border-slate-600">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className={`w-14 h-14 p-0 rounded-xl transition-all duration-200 ${
                isDark 
                  ? 'text-slate-400 hover:text-white hover:bg-slate-700' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 flex flex-col">
        {activeTab === 'chat' ? (
          <ChatInterface 
            onRoutineGenerated={handleRoutineGenerated}
            onViewRoutine={() => setActiveTab('routine')}
          />
        ) : (
          <RoutineDisplay 
            routine={currentRoutine}
            onUpdateInChat={handleUpdateInChat}
          />
        )}
      </div>
    </div>
  );
};

export default App;
