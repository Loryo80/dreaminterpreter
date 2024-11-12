import React from 'react';

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="max-w-2xl mx-auto bg-red-900/50 text-red-200 rounded-lg p-4">
      <p className="font-serif">{message}</p>
    </div>
  );
}