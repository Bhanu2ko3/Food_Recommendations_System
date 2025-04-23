'use client';

import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-red-600 w-full md:w-20 flex md:flex-col justify-around md:justify-start items-center py-4 md:py-6 space-y-0 md:space-y-8">
      <div className="text-white text-lg md:text-lg ml-4 font-normal font-['Roboto'] tracking-tight leading-tight">
        DineMind
      </div>
      <nav className="flex md:flex-col items-center space-x-6 md:space-x-0 md:space-y-8 text-white  font-normal font-['Roboto'] tracking-tight leading-tight">
        <a href="#" className="flex flex-col items-center space-y-1">
          <i className="fas fa-home text-lg" />
          <span className="text-[10px] :text-[8px]md">Home</span>
        </a>
        <a href="#" className="flex flex-col items-center space-y-1">
          <i className="fas fa-search text-sm" />
          <span className="text-[10px] md:text-[8px] text-center">Recommendations</span>
        </a>
        <a href="#" className="flex flex-col items-center space-y-1">
          <i className="fas fa-book text-lg" />
          <span className="text-[10px] md:text-[8px]">About</span>
        </a>
        <a href="#" className="flex flex-col items-center space-y-1">
          <i className="fas fa-envelope text-sm" />
          <span className="text-[10px] md:text-[8px] text-center">Contact</span>
        </a>
        <a href="#" className="flex flex-col items-center space-y-1">
          <i className="fas fa-sign-in-alt text-lg" />
          <span className="text-[10px] md:text-[8px] text-center">Login/Signup</span>
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
