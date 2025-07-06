
import { useState } from "react";
import { MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChatInterface from "@/components/ChatInterface";
import RoutineDisplay from "@/components/RoutineDisplay";

const App = () => {
  const [activeTab, setActiveTab] = useState<'chat' | 'routine'>('chat');
  const [currentRoutine, setCurrentRoutine] = useState<Record<string, string> | null>(null);

  const handleRoutineGenerated = (routine: Record<string, string>) => {
    setCurrentRoutine(routine);
  };

  const handleUpdateInChat = () => {
    setActiveTab('chat');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Left Navigation Rail */}
      <div className="w-16 bg-white border-r border-slate-200 flex flex-col items-center py-6 shadow-sm">
        {/* Logo */}
        <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-8">
          <span className="text-white font-bold text-sm">M</span>
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex flex-col space-y-4">
          <Button
            variant={activeTab === 'chat' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setActiveTab('chat')}
            className={`w-12 h-12 p-0 ${
              activeTab === 'chat' 
                ? 'bg-teal-600 hover:bg-teal-700 text-white' 
                : 'text-slate-600 hover:text-teal-600 hover:bg-teal-50'
            }`}
          >
            <MessageCircle className="w-5 h-5" />
          </Button>
          
          <Button
            variant={activeTab === 'routine' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setActiveTab('routine')}
            className={`w-12 h-12 p-0 ${
              activeTab === 'routine' 
                ? 'bg-teal-600 hover:bg-teal-700 text-white' 
                : 'text-slate-600 hover:text-teal-600 hover:bg-teal-50'
            }`}
          >
            <Calendar className="w-5 h-5" />
          </Button>
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
