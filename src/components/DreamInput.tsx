import React, { useState, useRef, useEffect } from 'react';
import { Message as MessageComponent } from './Message';
import { ChatInput } from './ChatInput';
import { StarField } from './StarField';
import { interpretDream, type Message } from '../services/openai';
import { Link } from 'react-router-dom';

export default function DreamInput() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'السلام عليكم ورحمة الله وبركاته. I am here to help interpret your dreams through Islamic wisdom. Please share your dream, and I will guide you with references from the Quran, Hadith, and the works of renowned scholars.'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
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

    const newMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, newMessage]);
    setInput('');
    setIsLoading(true);
    setError('');

    try {
      const response = await interpretDream([...messages, newMessage]);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (err: any) {
      setError(err.message || 'Failed to get interpretation');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto h-screen flex flex-col bg-black text-white relative">
      <StarField />
      <Link 
        to="/" 
        className="fixed bottom-6 left-6 px-4 py-2 border border-white/10 rounded-full 
                   hover:bg-white/5 transition-colors z-20 text-sm flex items-center gap-2"
      >
        ← Back
      </Link>
      <div className="flex-1 overflow-y-auto p-6 space-y-4 relative z-10">
        {messages.map((msg, idx) => (
          <MessageComponent
            key={idx}
            role={msg.role as 'user' | 'assistant'}
            content={msg.content}
          />
        ))}
        {error && (
          <div className="bg-white/5 border border-white/10 text-white p-4 rounded-lg">
            {error}
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <ChatInput
        value={input}
        onChange={setInput}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </div>
  );
}