'use client';

import React from 'react';
import Sidebar from '@/components/sidebar';

const DashboardPage = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 relative">
        <img
          src="https://storage.googleapis.com/a1aa/image/92765c86-d51f-466b-c485-11b999734eaf.jpg"
          alt="Chicken burger with fries"
          className="w-full h-[300px] md:h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 md:right-20 md:left-auto transform -translate-x-1/2 md:translate-x-0 -translate-y-1/2 bg-white bg-opacity-40 backdrop-blur-sm rounded-lg px-6 md:px-8 py-4 md:py-6 max-w-[90%] md:max-w-xs">
          <h1 className="text-white font-extrabold text-2xl md:text-3xl font-['Roboto'] leading-tight mb-2">
            DineMind
          </h1>
          <p className="text-white text-xs md:text-[10px] font-['Roboto'] font-normal leading-tight">
            AI Powered Food Recommendation System
          </p>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
