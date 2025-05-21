import { Twitter, Instagram, Youtube } from 'lucide-react';
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full bg-white">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row justify-between items-start">
                    {/* Logo Section */}
                    <div className="mb-8 md:mb-0 w-full md:w-1/4 flex justify-center md:justify-start">
                        <div className="flex flex-col items-center md:items-start">
                            <img
                                src="./src/assets/logo.png"
                                alt="Dhammanjali Group Logo"
                                className="w-40 h-auto mb-2"
                            />
                        </div>
                    </div>

                    {/* Quick Link Section */}
                    <div className="mb-8 md:mb-0 w-full md:w-1/4">
                        <h3 className="text-xl font-medium text-gray-800 mb-4">Quick Link</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-gray-600">Home</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-gray-600">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-gray-600">Business</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-gray-600">Gallary</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-gray-600">Testimonials</a></li>
                        </ul>
                    </div>

                    {/* Get In Touch Section */}
                    <div className="mb-8 md:mb-0 w-full md:w-1/4">
                        <h3 className="text-xl font-medium text-gray-800 mb-4">Get In Touch</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-gray-600">Contact Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-gray-600">Account</a></li>
                        </ul>
                    </div>

                    {/* Subscribe Section */}
                    <div className="w-full md:w-1/4">
                        <h3 className="text-xl font-medium text-gray-800 mb-4">Subscribe</h3>
                        <div className="flex flex-col sm:flex-row mb-4">
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="py-2 px-4 bg-gray-800 text-white w-full sm:rounded-l-lg rounded-t-lg sm:rounded-tr-none"
                            />
                            <button className="bg-yellow-500 text-white py-2 px-4 font-medium sm:rounded-r-lg rounded-b-lg sm:rounded-bl-none">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-gray-400 text-sm">Your email is safe with us,we don't spam.</p>

                        {/* Follow Me Section */}
                        <div className="mt-6">
                            <h3 className="text-xl font-medium text-gray-800 mb-4">Follow Me</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="bg-yellow-100 p-2 rounded-full hover:bg-yellow-200">
                                    <Twitter size={20} className="text-gray-700" />
                                </a>
                                <a href="#" className="bg-yellow-100 p-2 rounded-full hover:bg-yellow-200">
                                    <Instagram size={20} className="text-gray-700" />
                                </a>
                                <a href="#" className="bg-yellow-100 p-2 rounded-full hover:bg-yellow-200">
                                    {/* <Pinterest /> */}
                                    <FaPinterest size={20} className="text-gray-700" />
                                </a>
                                <a href="#" className="bg-yellow-100 p-2 rounded-full hover:bg-yellow-200">
                                    <Youtube size={20} className="text-gray-700" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-gray-200">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-600 text-sm mb-2 md:mb-0">
                            2025 © DHAMMANJALI Group PAGE - BY TARS TECHNOLOGIES - ALL RIGHTS RESERVED
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Privacy Policy</a>
                            <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Report</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;