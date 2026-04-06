import React, { useState } from 'react';
import {motion} from 'motion/react';
function Navigation() {
  return (
    <ul className="nav-ul flex gap-6">
      <li className="nav-li">
        <a className="nav-link flex items-center gap-2" href="#home">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link flex items-center gap-2" href="#about">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
          </svg>
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link flex items-center gap-2" href="#work">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          Projects
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link flex items-center gap-2" href="/NAMAN_BACHHAWAT_RESUME.pdf" target="_blank" rel="noopener noreferrer">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          Resume
        </a>
      </li>
    </ul>
  );
}
const Navbar = () => {
  const[isOpen, setIsOpen]=useState(false)
  return <div 
  className='fixed inset-x-0 z-20 w-full backdrop-blur-lg
  bg-primary/40'>
    <div className='mx-auto c-space max-w-7xl'>
      <div className='flex items-center justify-between py-2
      sm:py-2'>
          <a href="/"
          className='text-xl font-bold transition-colors
          text-neutral-400 hover:text-white'>
            Naman Bachhawat
            </a>
          <button
            onClick={()=>setIsOpen(!isOpen)}
            className='flex cursor-pointer text-neutral-400
            hover:text-white focus:outline-none sm:hidden'>
            <img src={isOpen ? 'assets/close.svg':'assets/menu.svg'} className='w-6 h-6'
            alt='toggle' />
          </button>
          <nav className='hidden sm:flex'><Navigation /></nav>
        </div>
    </div>
    {isOpen && (<motion.div className='block overflow-hidden text-right sm:hidden'
    initial={{ opacity: 0, x: -10}}
    animate={{ opacity: 1, x: 0}}
    animated={{ opacity: 1, x: 0}}
    style={{maxHeight: '100vh'}}
    transition={{ duration: 0.6}}>
      <nav className='pb-5'>
        <Navigation />
      </nav>
    </motion.div>
  )}
  </div>
  
}

export default Navbar