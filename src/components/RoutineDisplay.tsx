import { MessageCircle, Pill, Droplet, User, Moon, ForkKnife, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface RoutineDisplayProps {
  routine: Record<string, string> | null;
  onUpdateInChat: () => void;
}

const RoutineDisplay = ({ routine, onUpdateInChat }: RoutineDisplayProps) => {
  const getIconForActivity = (activity: string) => {
    const lowerActivity = activity.toLowerCase();
    
    if (lowerActivity.includes('pill') || lowerActivity.includes('medication') || lowerActivity.includes('take')) {
      return <Pill className="w-5 h-5 text-teal-600" />;
    }
    if (lowerActivity.includes('water') || lowerActivity.includes('drink') || lowerActivity.includes('hydrat')) {
      return <Droplet className="w-5 h-5 text-blue-500" />;
    }
    if (lowerActivity.includes('walk') || lowerActivity.includes('exercise') || lowerActivity.includes('activity')) {
      return <User className="w-5 h-5 text-green-500" />;
    }
    if (lowerActivity.includes('rest') || lowerActivity.includes('sleep') || lowerActivity.includes('nap')) {
      return <Moon className="w-5 h-5 text-purple-500" />;
    }
    if (lowerActivity.includes('eat') || lowerActivity.includes('meal') || lowerActivity.includes('food') || lowerActivity.includes('breakfast') || lowerActivity.includes('dinner')) {
      return <ForkKnife className="w-5 h-5 text-orange-500" />;
    }
    
    return <List className="w-5 h-5 text-slate-500" />;
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const getCurrentDate = () => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return today.toLocaleDateString('en-US', options);
  };

  if (!routine) {
    return (
      <div className="flex flex-col h-screen bg-white">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 bg-white">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">My Daily Routine</h1>
              <p className="text-slate-600 text-sm">For {getCurrentDate()}</p>
            </div>
            <Button
              onClick={onUpdateInChat}
              variant="outline"
              className="text-teal-600 border-teal-600 hover:bg-teal-50"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Update in Chat
            </Button>
          </div>
        </div>

        {/* Empty State */}
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="text-center max-w-md">
            <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="relative">
                <List className="w-10 h-10 text-slate-400" />
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-coral-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">+</span>
                </div>
              </div>
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              Your Personalized Plan Will Appear Here
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Use the Chat tab to create a daily health routine with Meddola. 
              Once it's made, you'll see your full schedule here.
            </p>
            <Button
              onClick={onUpdateInChat}
              className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-3 rounded-full"
            >
              Create My Routine
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const routineEntries = Object.entries(routine).sort(([timeA], [timeB]) => 
    timeA.localeCompare(timeB)
  );

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-200 bg-white">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">My Daily Routine</h1>
            <p className="text-slate-600 text-sm">For {getCurrentDate()}</p>
          </div>
          <Button
            onClick={onUpdateInChat}
            variant="outline"
            className="text-teal-600 border-teal-600 hover:bg-teal-50"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Update in Chat
          </Button>
        </div>
      </div>

      {/* Timeline */}
      <div className="flex-1 overflow-y-auto px-6 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-slate-200"></div>
            
            {routineEntries.map(([time, activity], index) => (
              <div key={time} className="relative flex items-start mb-8 last:mb-0">
                {/* Time Circle */}
                <div className="flex-shrink-0 w-24 text-right pr-4">
                  <div className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {formatTime(time)}
                  </div>
                </div>
                
                {/* Timeline Node */}
                <div className="absolute left-11 w-3 h-3 bg-teal-600 rounded-full border-2 border-white shadow-sm z-10"></div>
                
                {/* Activity Card */}
                <div className="flex-1 ml-8">
                  <Card className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                          {getIconForActivity(activity)}
                        </div>
                        <div className="flex-1">
                          <p className="text-slate-800 leading-relaxed">{activity}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutineDisplay;
