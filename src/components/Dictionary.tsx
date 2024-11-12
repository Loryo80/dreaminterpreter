import { useState } from 'react';
import { Link } from 'react-router-dom';

const symbols = [
  { id: 1, name: 'Water', meaning: 'Symbolizes purity, clarity, and spiritual cleansing in dreams' },
  { id: 2, name: 'Moon', meaning: 'Represents guidance, intuition, and the spiritual journey' },
  { id: 3, name: 'Mountain', meaning: 'Signifies challenges, spiritual ascension, and steadfastness' },
];

export default function Dictionary() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSymbols = symbols.filter(symbol =>
    symbol.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    symbol.meaning.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-gray-200 p-6">
      <div className="max-w-md mx-auto pt-12">
        <Link to="/" className="text-gray-400 mb-8 block">← Back</Link>
        
        <h1 className="text-2xl font-serif mb-8">Dream Symbols</h1>
        
        <input
          type="text"
          className="input-field mb-8"
          placeholder="Search symbols..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="space-y-6">
          {filteredSymbols.map(symbol => (
            <div key={symbol.id} className="dream-card">
              <h3 className="text-xl mb-2">{symbol.name}</h3>
              <p className="text-gray-400">{symbol.meaning}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}