"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import MyWork from './MyWork';
import { Inter, Montserrat as montserrat, Macondo } from "next/font/google";
const mocando = Macondo({ 
  subsets: ["latin"], 
  variable: "--font-macando", 
  weight: "400" });

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Ensure that isOpen is initialized to false on the client side
    setIsOpen(false);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

 
  return (

    <header className="text-gray-400 backdrop-filter backdrop-blur-lg top-0 w-full z-10 p-4">
      <div className="container mx-auto flex flex-wrap pt-2 px-10 flex-row md:flex-row justify-between items-center p-3" >
        <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 px-4">
          <Image src="/logo.png" alt="logo" width={150} height={150} className="hover:text-red-400" />
        </a>
        <button onClick={toggleMenu} className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-red-400 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
        <nav className={`md:ml-auto md:flex md:flex-wrap items-center text-base justify-center pr-10 py-5 md:p-0 ${isOpen ? 'block' : 'hidden'}`}>
          <a href="" className="mr-8 font-montserrat text-2xl text-white font-semibold hover:underline hover:transition-all hover:ease-in-out">Home</a>
          <a href="#my-work" className="mr-8 font-montserrat text-2xl text-white font-semibold hover:underline hover:transition-all hover:ease-in-out">Experience</a>
          <a href="#about" className="font-montserrat text-2xl text-white font-semibold hover:underline hover:transition-all hover:ease-in-out mr-8">About</a>
          <a href="https://www.behance.net/nikitahirani" className="font-semibold text-2xl text-white hover:underline hover:transition-all hover:ease-in-out mr-8">Portfolio</a>
        </nav>
      </div>
    </header>

  );
};

export default Header;
