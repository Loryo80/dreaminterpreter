import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import DreamInput from './components/DreamInput';
import { StarField } from './components/StarField';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <StarField />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dream-input" element={<DreamInput />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;