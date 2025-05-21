// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <nav className="w-full bg-gray-50 shadow-sm py-4">
//             <div className="container mx-auto px-4 flex justify-between items-center">
//                 {/* Logo */}
//                 <div className="flex items-center">
//                     <img src="./src/assets/logo.png" alt="Dhammanjali Logo" className="h-20 mr-2" />
//                 </div>

//                 {/* Desktop Menu */}
//                 <div className="hidden md:flex items-center space-x-8">
//                     <Link to="/" className="text-gray-800 font-medium hover:text-gray-600">HOME</Link>
//                     <Link to="/about" className="text-gray-800 font-medium hover:text-gray-600">ABOUT</Link>
//                     <div className="relative group">
//                         <button className="flex items-center text-gray-800 font-medium hover:text-gray-600">
//                             BUSINESS
//                             <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                             </svg>
//                         </button>
//                         <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-2 w-48 z-10">
//                             <Link to="/mart" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Mart</Link>
//                             <Link to="/cafe" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Cafe</Link>
//                             <Link to="/real-estate" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Real Estate</Link>
//                             <Link to="/medical" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Medical Devices</Link>
//                             <Link to="/charity" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Charity</Link>
//                         </div>
//                     </div>
//                     <Link to="/gallery" className="text-gray-800 font-medium hover:text-gray-600">GALLERY</Link>
//                     <Link to="/testimonials" className="text-gray-800 font-medium hover:text-gray-600">TESTIMONIALS</Link>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="hidden md:flex items-center space-x-4">
//                     <button className="px-6 py-2 rounded-full border border-gray-800 text-gray-800 font-medium hover:bg-gray-100 transition duration-300">
//                         CONTACT US
//                     </button>
//                     <button className="px-6 py-2 rounded-full bg-yellow-500 text-white font-medium hover:bg-yellow-600 transition duration-300 flex items-center">
//                         <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
//                         </svg>
//                         ACCOUNT
//                     </button>
//                 </div>

//                 {/* Mobile menu button */}
//                 <div className="md:hidden flex items-center">
//                     <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
//                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                             {isMenuOpen ? (
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//                             ) : (
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//                             )}
//                         </svg>
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             {isMenuOpen && (
//                 <div className="md:hidden px-4 pt-2 pb-4">
//                     <Link to="/" className="block py-2 text-gray-800 font-medium hover:text-gray-600">HOME</Link>
//                     <Link to="/about" className="block py-2 text-gray-800 font-medium hover:text-gray-600">ABOUT</Link>
//                     <div className="py-2">
//                         <button onClick={() => { }} className="flex items-center text-gray-800 font-medium hover:text-gray-600">
//                             BUSINESS
//                             <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                             </svg>
//                         </button>
//                         <div className="pl-4 mt-2 space-y-1">
//                             <Link to="/mart" className="block py-1 text-gray-700 hover:text-gray-900">Mart</Link>
//                             <Link to="/cafe" className="block py-1 text-gray-700 hover:text-gray-900">Cafe</Link>
//                             <Link to="/real-estate" className="block py-1 text-gray-700 hover:text-gray-900">Real Estate</Link>
//                             <Link to="/medical" className="block py-1 text-gray-700 hover:text-gray-900">Medical Devices</Link>
//                             <Link to="/charity" className="block py-1 text-gray-700 hover:text-gray-900">Charity</Link>
//                         </div>
//                     </div>
//                     <Link to="/gallery" className="block py-2 text-gray-800 font-medium hover:text-gray-600">GALLERY</Link>
//                     <Link to="/testimonials" className="block py-2 text-gray-800 font-medium hover:text-gray-600">TESTIMONIALS</Link>
//                     <div className="mt-4 space-y-2">
//                         <button className="w-full px-4 py-2 rounded-full border border-gray-800 text-gray-800 font-medium hover:bg-gray-100 transition duration-300">
//                             CONTACT US
//                         </button>
//                         <button className="w-full px-4 py-2 rounded-full bg-yellow-500 text-white font-medium hover:bg-yellow-600 transition duration-300 flex items-center justify-center">
//                             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
//                             </svg>
//                             ACCOUNT
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;

"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { User, ChevronDown, X, Menu } from "lucide-react"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isBusinessOpen, setIsBusinessOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
        if (!isMenuOpen) {
            setIsBusinessOpen(false)
        }
    }

    const toggleBusinessDropdown = () => {
        setIsBusinessOpen(!isBusinessOpen)
    }

    return (
        <nav className="w-full bg-gray-50 shadow-sm py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <Link to="/" className="h-20 w-auto relative">
                        <img
                            src="./src/assets/logo.png"
                            alt="Dhammanjali Logo"
                            width={80}
                            height={80}
                            className="h-20 w-auto object-contain"
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link to="/" className="text-gray-800 font-medium hover:text-gray-600">
                        HOME
                    </Link>
                    <Link to="/about" className="text-gray-800 font-medium hover:text-gray-600">
                        ABOUT
                    </Link>
                    <div className="relative group">
                        <button className="flex items-center text-gray-800 font-medium hover:text-gray-600">
                            BUSINESS
                            <ChevronDown className="ml-1 w-4 h-4" />
                        </button>
                        <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-2 w-48 z-10">
                            <Link to="/mart" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                Mart
                            </Link>
                            <Link to="/cafe" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                Cafe
                            </Link>
                            <Link to="/real-estate" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                Real Estate
                            </Link>
                            <Link to="/medical" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                Medical Devices
                            </Link>
                            <Link to="/charity" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                Charity
                            </Link>
                        </div>
                    </div>
                    <Link to="/gallery" className="text-gray-800 font-medium hover:text-gray-600">
                        GALLERY
                    </Link>
                    <Link to="/testimonials" className="text-gray-800 font-medium hover:text-gray-600">
                        TESTIMONIALS
                    </Link>
                </div>

                {/* Action Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link
                        to="/contact"
                        className="px-6 py-2 rounded-full border border-gray-800 text-gray-800 font-medium hover:bg-gray-100 transition duration-300"
                    >
                        CONTACT US
                    </Link>
                    <Link
                        to="/account"
                        className="px-6 py-2 rounded-full bg-gradient-to-r from-[#FF9D00] to-[#F8D982] text-black font-medium hover:bg-yellow-600 transition duration-300 flex items-center"
                    >
                        <User className="w-5 h-5 mr-2" />
                        ACCOUNT
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden px-4 pt-2 pb-4 bg-white">
                    <Link to="/" className="block py-2 text-gray-800 font-medium hover:text-gray-600">
                        HOME
                    </Link>
                    <Link to="/about" className="block py-2 text-gray-800 font-medium hover:text-gray-600">
                        ABOUT
                    </Link>
                    <div className="py-2">
                        <button
                            onClick={toggleBusinessDropdown}
                            className="flex items-center w-full text-left text-gray-800 font-medium hover:text-gray-600"
                        >
                            BUSINESS
                            <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isBusinessOpen ? "rotate-180" : ""}`} />
                        </button>
                        {isBusinessOpen && (
                            <div className="pl-4 mt-2 space-y-1">
                                <Link to="/mart" className="block py-1 text-gray-700 hover:text-gray-900">
                                    Mart
                                </Link>
                                <Link to="/cafe" className="block py-1 text-gray-700 hover:text-gray-900">
                                    Cafe
                                </Link>
                                <Link to="/real-estate" className="block py-1 text-gray-700 hover:text-gray-900">
                                    Real Estate
                                </Link>
                                <Link to="/medical" className="block py-1 text-gray-700 hover:text-gray-900">
                                    Medical Devices
                                </Link>
                                <Link to="/charity" className="block py-1 text-gray-700 hover:text-gray-900">
                                    Charity
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link to="/gallery" className="block py-2 text-gray-800 font-medium hover:text-gray-600">
                        GALLERY
                    </Link>
                    <Link to="/testimonials" className="block py-2 text-gray-800 font-medium hover:text-gray-600">
                        TESTIMONIALS
                    </Link>
                    <div className="mt-4 space-y-2">
                        <Link
                            to="/contact"
                            className="block w-full px-4 py-2 rounded-full border border-gray-800 text-gray-800 font-medium hover:bg-gray-100 transition duration-300 text-center"
                        >
                            CONTACT US
                        </Link>
                        <Link
                            to="/account"
                            className="block w-full px-4 py-2 rounded-full bg-gradient-to-r from-[#FF9D00] to-[#F8D982] text-white font-medium hover:bg-yellow-600 transition duration-300 flex items-center justify-center"
                        >
                            <User className="w-5 h-5 mr-2" />
                            ACCOUNT
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}
