// import React from 'react';

const NavigationBar = () => {
    return (
      <nav className="bg-gray-800 text-white p-4" style={{ padding: '20px 0px 0px 100px' }}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">DeCert</div>
          <ul className="flex gap-4" style={{ padding: '10px 100px 0px 0px' }}>
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">About</a></li>
            <li><a href="#" className="hover:text-gray-400">Services</a></li>
          </ul>
          
        </div>
      </nav>
    );
  };
  
  export default NavigationBar;
  