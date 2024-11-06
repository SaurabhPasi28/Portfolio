'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Import the Next.js Image component
import Link from 'next/link'; // Import the Link component from Next.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log(window.innerWidth);
    }
  }, []);

  const handleScroll = () => {
    const sections = ['home', 'about', 'skills', 'education', 'work', 'experience', 'contact'];
    let scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;

        if (scrollPosition >= sectionTop) {
          setActiveSection(section);
        }
      }
    });

    setShowScrollTop(scrollPosition > 60);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between md:justify-evenly p-6 h-16 bg-[#fff] shadow-md transition-all duration-200">
      <Link href="/" className="text-xl font-bold text-gray-800 hover:text-orange-500 flex items-center space-x-2 transition duration-200 ease-in-out">
        <Image className='w-8' src="/logo.png" alt="Logo" width={32} height={32} />
        <span>Saurabh</span>
      </Link>
      <div onClick={toggleMenu} className="text-2xl cursor-pointer md:hidden">
        <FontAwesomeIcon
          icon={isOpen ? faTimes : faBars}
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>
      <nav
        className={`fixed top-16 right-0 h-fit w-fit bg-[#fff] flex items-center justify-center transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full '
        } md:relative md:translate-x-0 md:flex md:w-auto md:h-auto md:top-0`}
      >
        <ul className="flex flex-col p-4 md:flex-row md:space-x-6 md:space-y-0 text-center">
          {['Home', 'About', 'Skills', 'Education', 'Work', 'Experience', 'Contact'].map((section) => (
            <li key={section} className='p-4 px-8 md:p-0'>
              <Link 
                href={`#${section.toLowerCase()}`}
                className={`text-lg font-semibold ${activeSection === section.toLowerCase() ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-800'} hover:text-blue-600 transition duration-200 ease-in-out`}
                onClick={() => setIsOpen(false)}
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-10 right-5 p-3 bg-yellow-500 text-white rounded-full shadow-lg hover:bg-yellow-600 transition-transform duration-300"
        >
          <FontAwesomeIcon icon={faAngleUp} size="lg" />
        </button>
      )}
    </header>
  );
};

export default Header;
