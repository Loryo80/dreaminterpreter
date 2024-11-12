import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <h1 className="text-3xl font-serif mb-4">السَّلامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكاتُهُ</h1>
        <p className="text-xl mb-8">
          Welcome, seeker of wisdom. Let us explore the meanings of your dreams through the light of the Quran and Sunnah.
        </p>
        <div className="text-sm opacity-75 mb-8">
          "The good dream of a faithful believer is one of forty-six parts of prophecy"
          <br />
          - Sahih al-Bukhari 6987
        </div>
        <Link
          to="/dream-input"
          className="inline-block px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-colors"
        >
          Understand Your Dream
        </Link>
      </div>
    </div>
  );
}

export default Home;