import React from 'react'
import { useState, useEffect } from "react"

const RealEstate = () => {

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])



    return (

        <>
            <section className="h-screen">
                <div className="relative h-screen w-full overflow-hidden">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-no-repeat"
                        style={{
                            backgroundImage: "url('./src/assets/real-estate.png')",
                            filter: "blur(2px)",
                        }}
                    />

                    {/* Overlay to darken the background slightly */}
                    <div className="absolute inset-0 bg-black/10" />

                    {/* Center MART text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-[#343045] text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight">REAL ESTATE</h1>
                    </div>
                </div>
            </section>



            <section className="container mx-auto px-4 py-12 max-w-7xl">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12 gap-6">
                    <div className="flex items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">REAL ESTATE OPTIONS</h2>
                            <div className="flex items-center">
                                <p className="text-xl md:text-2xl text-gray-700 tracking-wide">EXPLORE</p>
                                <div className="hidden md:block ml-4">
                                    <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M119.061 13.0607C119.646 12.4749 119.646 11.5251 119.061 10.9393L109.515 1.3934C108.929 0.807611 107.979 0.807611 107.393 1.3934C106.808 1.97919 106.808 2.92893 107.393 3.51472L115.879 12L107.393 20.4853C106.808 21.0711 106.808 22.0208 107.393 22.6066C107.979 23.1924 108.929 23.1924 109.515 22.6066L119.061 13.0607ZM0 13.5H118V10.5H0V13.5Z"
                                            fill="#FFD700"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-2xl">
                        <p className="text-gray-700 leading-relaxed">
                            AT DHAMMANJALI INDIA PRIVATE LIMITED, we specialize in crafting thoughtfully designed residential and
                            commercial spaces that blend functionality with aesthetic appeal. Our commitment to quality construction,
                            sustainable practices, and community-centric development ensures that each project not only meets but
                            exceeds expectations. From modern urban residences to versatile commercial properties, we aim to create
                            environments that inspire and endure.
                        </p>
                    </div>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 - Buying a home */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="h-48 relative">
                            <img
                                src="/placeholder.svg?height=400&width=600"
                                alt="Modern house with garage"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-center text-gray-800">Buying a home</h3>
                        </div>
                    </div>

                    {/* Card 2 - Renting a home */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="h-48 relative">
                            <img
                                src="/placeholder.svg?height=400&width=600"
                                alt="Laptop with house model"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-center text-gray-800">Renting a home</h3>
                        </div>
                    </div>

                    {/* Card 3 - Plots/Land */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="h-48 relative">
                            <img
                                src="/placeholder.svg?height=400&width=600"
                                alt="Green field with location pin"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-center text-gray-800">Plots/Land</h3>
                        </div>
                    </div>
                </div>
            </section>



            <section className="w-full bg-[#8cbfe0] min-h-screen flex items-center justify-center py-12 px-4 md:px-8 lg:px-12">
                <div className="max-w-7xl w-full mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800">YOUR DREAM HOME AWAITS</h1>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 mt-2">
                            Find Better Places to Live, Work and Wonder...
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
                        {/* Overlapping Images */}
                        <div className="relative w-full md:w-1/2 h-[400px] md:h-[450px] lg:h-[500px]">
                            <div className="absolute z-10 top-0 left-0 md:left-4 w-[85%] h-[85%] border-8 border-yellow-500 rounded-md overflow-hidden">
                                <img
                                    src="/placeholder.svg?height=500&width=400"
                                    alt="Modern building exterior"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute z-20 bottom-0 right-0 md:right-4 w-[60%] h-[60%] border-8 border-yellow-500 rounded-md overflow-hidden">
                                <img
                                    src="/placeholder.svg?height=500&width=400"
                                    alt="Luxury home exterior"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="w-full md:w-1/2 mt-12 md:mt-0">
                            <p className="text-sm font-medium tracking-wider text-gray-700">BUY A HOME</p>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mt-2">
                                Find, Buy & Own Your Dream Home
                            </h3>
                            <p className="text-gray-700 mt-4">Explore From Apartments, Land, Builder Floors, Villas, And More.</p>
                            <button className="mt-6 bg-gradient-to-r from-[#FF9D00] to-[#F8D982] text-white font-medium py-3 px-8 rounded-full transition-colors">
                                Explore Buying
                            </button>
                        </div>
                    </div>
                </div>
            </section>



            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">HANDPICKED PROJECTS</h2>
                        <div className="flex items-center mt-2">
                            <span className="text-2xl sm:text-3xl text-gray-700">EXPLORE</span>
                            <div className="hidden md:block ml-4">
                                <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M119.061 13.0607C119.646 12.4749 119.646 11.5251 119.061 10.9393L109.515 1.3934C108.929 0.807611 107.979 0.807611 107.393 1.3934C106.808 1.97919 106.808 2.92893 107.393 3.51472L115.879 12L107.393 20.4853C106.808 21.0711 106.808 22.0208 107.393 22.6066C107.979 23.1924 108.929 23.1924 109.515 22.6066L119.061 13.0607ZM0 13.5H118V10.5H0V13.5Z"
                                        fill="#FFD700"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-600 leading-relaxed">
                            At Dhammanjali India Private Limited, we specialize in crafting thoughtfully designed residential and
                            commercial spaces that blend functionality with aesthetic appeal. Our commitment to quality construction,
                            sustainable practices, and community-centric development ensures that each project not only meets but
                            exceeds expectations. From modern urban residences to versatile commercial properties, we aim to create
                            environments that inspire and endure.
                        </p>
                    </div>
                </div>

                {/* Property Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <div className="relative">
                            <img
                                src="/placeholder.svg?height=250&width=400"
                                alt="Riverside Apartments"
                                width={400}
                                height={250}
                                className="w-full h-[200px] object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 text-sm rounded">Featured</div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-gray-800">Riverside Apartments</h3>
                            <p className="text-gray-600 mt-1">3 BHK Apartment, Central District</p>
                            <p className="text-xl font-bold text-gray-800 mt-2">1.2 CR</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <div className="relative">
                            <img
                                src="/placeholder.svg?height=250&width=400"
                                alt="Greenfield Villas"
                                width={400}
                                height={250}
                                className="w-full h-[200px] object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 text-sm rounded">Featured</div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-gray-800">Greenfield Villas</h3>
                            <p className="text-gray-600 mt-1">4 BHK Independent House, East Hills</p>
                            <p className="text-xl font-bold text-gray-800 mt-2">75 lakhs</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <div className="relative">
                            <img
                                src="/placeholder.svg?height=250&width=400"
                                alt="Skyview Heights"
                                width={400}
                                height={250}
                                className="w-full h-[200px] object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 text-sm rounded">Featured</div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-gray-800">Skyview Heights</h3>
                            <p className="text-gray-600 mt-1">2 BHK Apartment, North Square</p>
                            <p className="text-xl font-bold text-gray-800 mt-2">80 lakhs</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RealEstate
