import { Link } from 'react-router-dom';

const resources = [
  {
    id: 1,
    title: 'Dream Interpretation in Islam',
    description: 'Understanding the spiritual significance of dreams through Islamic teachings'
  },
  {
    id: 2,
    title: 'Prophetic Guidance',
    description: 'Learn about dream interpretation methods from prophetic traditions'
  },
  {
    id: 3,
    title: 'Types of Dreams',
    description: 'Distinguishing between different categories of dreams in Islamic thought'
  }
];

export default function Resources() {
  return (
    <div className="min-h-screen bg-black text-gray-200 p-6">
      <div className="max-w-md mx-auto pt-12">
        <Link to="/" className="text-gray-400 mb-8 block">← Back</Link>
        
        <h1 className="text-2xl font-serif mb-8">Islamic Guidance</h1>
        
        <div className="space-y-6">
          {resources.map(resource => (
            <div key={resource.id} className="dream-card">
              <h3 className="text-xl mb-2">{resource.title}</h3>
              <p className="text-gray-400">{resource.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}