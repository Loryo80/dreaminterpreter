import React from 'react';

interface MessageProps {
  role: 'user' | 'assistant';
  content: string;
}

export function Message({ role, content }: MessageProps) {
  return (
    <div className={`flex ${role === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] rounded-lg p-6 ${
          role === 'user'
            ? 'bg-white/10 text-white border border-white/5'
            : 'bg-black text-white border border-white/10'
        } ${role === 'assistant' ? 'font-serif' : ''}`}
      >
        {content}
      </div>
    </div>
  );
}