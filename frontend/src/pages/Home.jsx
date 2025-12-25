import React from 'react';
import Header from '../components/Header';
import ForTheDay from '../components/ForTheDay';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#e8d1c5]">
      {/* Header */}
        <Header />
      {/* Sections */}
        <ForTheDay />
    </div>
  );
};

export default Home;
