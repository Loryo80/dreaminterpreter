import React, { useState, useRef, useEffect } from 'react';
import { interpretDream } from '../services/openai';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function DreamChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Assalamu alaikum, dear dreamer. May Allah\'s peace and blessings be upon you. To begin interpreting your dream, could you please tell me at what time of day or night you had this dream?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    
    const updatedMessages = [...messages, { role: 'user', content: userMessage }];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      const response = await interpretDream(updatedMessages);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error('Dream interpretation error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-serif mb-2">Islamic Dream Interpretation</h1>
          <div className="w-16 h-0.5 bg-gray-800 mx-auto"></div>
        </div>

        <div className="space-y-8 mb-8">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`
                  max-w-[85%] p-6 rounded-2xl
                  ${message.role === 'assistant' 
                    ? 'bg-gray-900/50 border border-gray-800' 
                    : 'bg-gray-800/50'}
                  ${message.role === 'assistant' ? 'font-serif' : ''}
                `}
              >
                <div className="prose prose-invert max-w-none">
                  <p className="whitespace-pre-wrap leading-relaxed text-gray-100">
                    {message.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[85%] p-6 rounded-2xl bg-gray-900/50 border border-gray-800">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-150"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-300"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your response..."
            className="w-full bg-gray-900/30 border border-gray-800 rounded-full px-8 py-4 pr-28 
                     focus:outline-none focus:border-gray-700 focus:ring-1 focus:ring-gray-700 
                     transition-colors placeholder-gray-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 
                     bg-gray-800 hover:bg-gray-700 rounded-full
                     disabled:opacity-50 disabled:cursor-not-allowed 
                     transition-colors text-sm font-medium"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}