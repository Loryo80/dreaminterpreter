import React from 'react';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

export function ChatInput({ value, onChange, onSubmit, isLoading }: ChatInputProps) {
  return (
    <form onSubmit={onSubmit} className="p-6 border-t border-white/10">
      <div className="relative max-w-2xl mx-auto">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Share your dream..."
          className="w-full bg-black/30 border border-white/10 rounded-full px-8 py-4 pr-28
                   focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20
                   transition-colors placeholder-white/50"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !value.trim()}
          className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2
                   bg-white/10 hover:bg-white/20 rounded-full text-white
                   disabled:opacity-50 disabled:cursor-not-allowed
                   transition-colors text-sm font-medium"
        >
          {isLoading ? 'Interpreting...' : 'Send'}
        </button>
      </div>
    </form>
  );
}