
import { useState, useRef, useEffect } from "react";
import { Send, Copy, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  hasRoutine?: boolean;
  routineData?: Record<string, string>;
  hasTable?: boolean;
  timestamp: Date;
}

interface ChatInterfaceProps {
  onRoutineGenerated: (routine: Record<string, string>) => void;
  onViewRoutine: () => void;
}

const ChatInterface = ({ onRoutineGenerated, onViewRoutine }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm Meddola, your AI health companion. I can help you understand symptoms, provide medication information, and create personalized health routines. What would you like to know about today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const simulateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('routine') || lowerMessage.includes('plan') || lowerMessage.includes('schedule')) {
      return `Based on your needs, I'll create a personalized daily routine for you:

\`\`\`json
{
  "08:00": "Take 1 pill of Vitamin D with breakfast",
  "09:30": "Hydration Break: Drink a full glass of water",
  "12:00": "Go for a short 15-minute walk",
  "15:00": "Rest in a quiet room, away from screens",
  "18:00": "Light dinner with vegetables and lean protein",
  "22:00": "Prepare for sleep: Read a book, no phone"
}
\`\`\`

This routine is designed to support your overall well-being with proper nutrition, hydration, exercise, and rest.

---

*Disclaimer: This routine is for educational purposes only and should not replace professional medical advice. Please consult with a healthcare provider before making significant changes to your health routine.*`;
    }
    
    if (lowerMessage.includes('headache') || lowerMessage.includes('pain')) {
      return `I understand you're experiencing discomfort. Here are some common causes and remedies for headaches:

| Cause | Description | Remedy |
|-------|-------------|---------|
| Tension | Stress-related muscle tension | Rest, gentle massage, warm compress |
| Dehydration | Insufficient fluid intake | Drink water, electrolyte balance |
| Eyestrain | Screen time, poor lighting | Take breaks, adjust screen brightness |
| Sleep Issues | Poor sleep quality/quantity | Regular sleep schedule, 7-9 hours |

**When to seek medical attention:**
- Severe, sudden onset headache
- Headache with fever, stiff neck, or vision changes
- Persistent headaches that worsen over time

---

*Disclaimer: This information is for educational purposes only. If you have severe or persistent symptoms, please consult a healthcare provider for proper diagnosis and treatment.*`;
    }
    
    if (lowerMessage.includes('medication') || lowerMessage.includes('drug') || lowerMessage.includes('pill')) {
      return `I can help you understand medications better. Here's some general information about common pain relievers:

| Medication | Type | Common Uses | Important Notes |
|------------|------|-------------|-----------------|
| Ibuprofen | NSAID | Pain, inflammation, fever | Take with food, avoid with kidney issues |
| Acetaminophen | Analgesic | Pain, fever | Safe for most people, watch daily limits |
| Aspirin | NSAID | Pain, heart protection | Blood thinning effects, stomach irritation |

**Always remember:**
- Follow dosage instructions carefully
- Check for drug interactions
- Consult pharmacist or doctor with questions

---

*Disclaimer: This is general educational information only. Always consult with a healthcare provider or pharmacist before starting, stopping, or changing any medication.*`;
    }
    
    return `Thank you for your question about "${userMessage}". I'm here to provide helpful health information and guidance. 

Based on what you've shared, I'd recommend:
- Monitoring your symptoms closely
- Staying hydrated and getting adequate rest
- Considering gentle, appropriate remedies
- Seeking professional medical advice if symptoms persist or worsen

Would you like me to create a personalized daily routine to support your health goals, or do you have other questions about symptoms or medications?

---

*Disclaimer: This information is educational and not a substitute for professional medical advice. Please consult a healthcare provider for diagnosis and treatment.*`;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse = simulateAIResponse(inputValue);
      const hasRoutine = aiResponse.includes('```json');
      let routineData: Record<string, string> | undefined;

      if (hasRoutine) {
        try {
          const jsonMatch = aiResponse.match(/```json\n([\s\S]*?)\n```/);
          if (jsonMatch) {
            routineData = JSON.parse(jsonMatch[1]);
            onRoutineGenerated(routineData);
          }
        } catch (error) {
          console.error("Error parsing routine JSON:", error);
        }
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        hasRoutine,
        routineData,
        hasTable: aiResponse.includes('|'),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "The routine has been copied to your clipboard.",
    });
  };

  const formatMessage = (message: Message) => {
    let content = message.text;

    // Handle JSON code blocks
    if (message.hasRoutine && message.routineData) {
      const jsonMatch = content.match(/```json\n([\s\S]*?)\n```/);
      if (jsonMatch) {
        const beforeJson = content.substring(0, content.indexOf('```json'));
        const afterJson = content.substring(content.indexOf('```', content.indexOf('```json') + 1) + 3);
        
        return (
          <div>
            {beforeJson && <div className="mb-4 whitespace-pre-wrap">{beforeJson}</div>}
            <div className="bg-slate-100 rounded-lg p-4 font-mono text-sm mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-600 text-xs">Daily Routine JSON</span>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => copyToClipboard(JSON.stringify(message.routineData, null, 2))}
                  className="h-6 px-2 text-xs"
                >
                  <Copy className="w-3 h-3 mr-1" />
                  Copy
                </Button>
              </div>
              <pre className="text-slate-800 whitespace-pre-wrap overflow-x-auto">
                {JSON.stringify(message.routineData, null, 2)}
              </pre>
            </div>
            <Button
              onClick={onViewRoutine}
              className="bg-coral-500 hover:bg-coral-600 text-white mb-4"
            >
              <Calendar className="w-4 h-4 mr-2" />
              View in Routine Tab
            </Button>
            {afterJson && <div className="whitespace-pre-wrap">{afterJson}</div>}
          </div>
        );
      }
    }

    // Handle tables
    if (message.hasTable) {
      const parts = content.split('\n');
      let tableHTML = '';
      let isInTable = false;
      let beforeTable = '';
      let afterTable = '';
      let tableStartIndex = -1;
      let tableEndIndex = -1;

      parts.forEach((line, index) => {
        if (line.includes('|') && !isInTable) {
          isInTable = true;
          tableStartIndex = index;
        } else if (isInTable && !line.includes('|') && line.trim() !== '') {
          isInTable = false;
          tableEndIndex = index;
        }
      });

      if (tableStartIndex !== -1) {
        beforeTable = parts.slice(0, tableStartIndex).join('\n');
        const tableLines = parts.slice(tableStartIndex, tableEndIndex === -1 ? undefined : tableEndIndex);
        afterTable = tableEndIndex !== -1 ? parts.slice(tableEndIndex).join('\n') : '';

        return (
          <div>
            {beforeTable && <div className="mb-4 whitespace-pre-wrap">{beforeTable}</div>}
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full bg-white rounded-lg shadow-sm border border-slate-200">
                {tableLines.map((line, lineIndex) => {
                  if (line.trim().startsWith('|---') || line.trim() === '') return null;
                  const cells = line.split('|').map(cell => cell.trim()).filter(cell => cell !== '');
                  const isHeader = lineIndex === 0;
                  return (
                    <tr key={lineIndex} className={lineIndex % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                      {cells.map((cell, cellIndex) => 
                        isHeader ? (
                          <th key={cellIndex} className="px-4 py-3 text-left text-sm font-semibold text-slate-700 border-b border-slate-200">
                            {cell}
                          </th>
                        ) : (
                          <td key={cellIndex} className="px-4 py-3 text-sm text-slate-600 border-b border-slate-100">
                            {cell}
                          </td>
                        )
                      )}
                    </tr>
                  );
                })}
              </table>
            </div>
            {afterTable && <div className="whitespace-pre-wrap">{afterTable}</div>}
          </div>
        );
      }
    }

    return <div className="whitespace-pre-wrap">{content}</div>;
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-200 bg-white">
        <h1 className="text-2xl font-bold text-slate-800">Chat with Meddola</h1>
        <p className="text-slate-600 text-sm">Your AI health companion is here to help</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-3xl ${message.isUser ? 'ml-12' : 'mr-12'}`}>
              {!message.isUser && (
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mr-2">
                    <span className="text-white font-bold text-xs">M</span>
                  </div>
                  <span className="text-sm text-slate-500">Meddola</span>
                </div>
              )}
              <Card className={`p-4 ${
                message.isUser 
                  ? 'bg-slate-100 border-slate-200' 
                  : 'bg-teal-50 border-teal-200'
              }`}>
                {formatMessage(message)}
              </Card>
              <div className="text-xs text-slate-400 mt-1">
                {message.timestamp.toLocaleTimeString()}
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="max-w-3xl mr-12">
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-xs">M</span>
                </div>
                <span className="text-sm text-slate-500">Meddola</span>
              </div>
              <Card className="p-4 bg-teal-50 border-teal-200">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                  <span className="text-sm text-slate-600">Meddola is thinking...</span>
                </div>
              </Card>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="px-6 py-4 border-t border-slate-200 bg-white">
        <div className="flex space-x-3">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Describe your symptoms or ask a question..."
            className="flex-1 rounded-full border-slate-300 focus:border-teal-500"
            disabled={isTyping}
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isTyping}
            className="bg-coral-500 hover:bg-coral-600 text-white rounded-full px-6"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
