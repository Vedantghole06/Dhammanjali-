import React from 'react'

const Mart = () => {

    const categories = [
        { name: "Grocery & Staples", image: "grocery.jpg" },
        { name: "Mens Wear", image: "mens-wear.jpg" },
        { name: "Footwear", image: "footwear.jpg" },
        { name: "Womans Wear", image: "womans-wear.jpg" },
        { name: "Kids Clothing", image: "kids-clothing.jpg" },
        { name: "Daily Essentials", image: "daily-essentials.jpg" },
        { name: "Fruits & Vegetables", image: "fruits-vegetables.jpg" },
        { name: "Home & Personal", image: "home-personal.jpg" },
        { name: "Luggage", image: "luggage.jpg" },
    ]



    return (
        <>
            <section className="h-screen">
                <div className="relative h-screen w-full overflow-hidden">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-fit bg-cover bg-no-repeat"
                        style={{
                            backgroundImage: "url('./src/assets/mart.png')"
                        }}
                    />

                    {/* Overlay to darken the background slightly */}
                    <div className="absolute inset-0 bg-black/10" />

                    {/* Center MART text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-[#343045] text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight">MART</h1>
                    </div>
                </div>
            </section>


            <section className="min-h-screen py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <div className="flex flex-col">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#2D3748] mb-2">SPECIALITIES</h2>
                        <div className="flex items-center">
                            <h3 className="text-xl md:text-2xl text-[#4A5568] font-light">Our Specialities</h3>
                            <div className="hidden md:block ml-4">
                                <img src="./src/assets/right-arrow.png" alt="Arrow" className="w-35 h-30" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm md:text-base text-[#4A5568] leading-relaxed">
                            Established in 2020 and headquartered in Prayagraj, Uttar Pradesh, Dhammanjali India Private Limited is a
                            private, non-government company engaged in the food and beverages industry. The company focuses on creating
                            lasting value not only through its products but also through meaningful contributions to the communities it
                            serves.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="relative h-48 md:h-56">
                                <img src={`/images/${category.image}`} alt={category.name} className="w-full h-full object-cover" />
                                <div className="absolute bottom-0 left-0 bg-white bg-opacity-80 px-4 py-2 rounded-tr-lg">
                                    <h3 className="font-medium text-[#2D3748]">{category.name}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>



            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
                {/* Header Section */}
                <div className="mb-12 md:mb-16 relative">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                        Serving Every Need, Exceeding Every Expectation
                    </h1>
                    <div className="flex items-center">
                        <p className="text-xl md:text-2xl text-gray-700">Your Premier Partner in Quality Grocery Solutions</p>
                        {/* <img src="/arrow.png" alt="" className="ml-4 w-24 md:w-32 hidden md:block" aria-hidden="true" /> */}
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Retail Grocers */}
                    <div className="bg-[#FFF9E6] p-8 flex flex-col items-center text-center">
                        <div className="w-16 h-16 mb-6">
                            <img src="./src/assets/retail.png" alt="" className="w-full h-full" aria-hidden="true" />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Retail Grocers</h2>
                        <p className="text-gray-600">
                            Empowering Small To Medium-Sized Stores With Reliable, Diverse Product Solutions.
                        </p>
                    </div>

                    {/* Wholesalers */}
                    <div className="bg-[#FFF9E6] p-8 flex flex-col items-center text-center">
                        <div className="w-16 h-16 mb-6">
                            <img src="./src/assets/wholesaler.png" alt="" className="w-full h-full" aria-hidden="true" />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Wholesalers</h2>
                        <p className="text-gray-600">Competitive Pricing And Extensive Product Range For Maximum Market Advantage.</p>
                    </div>

                    {/* Restaurants & Caterers */}
                    <div className="bg-[#FFF9E6] p-8 flex flex-col items-center text-center">
                        <div className="w-16 h-16 mb-6">
                            <img src="./src/assets/restaurant.png" alt="" className="w-full h-full" aria-hidden="true" />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Restaurants & Caterers</h2>
                        <p className="text-gray-600">Premium Quality Ingredients To Elevate Your Culinary Creations.</p>
                    </div>

                    {/* Corporate Clients */}
                    <div className="bg-[#FFF9E6] p-8 flex flex-col items-center text-center md:col-span-1.5">
                        <div className="w-16 h-16 mb-6">
                            <img src="./src/assets/corporate.png" alt="" className="w-full h-full" aria-hidden="true" />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Corporate Clients</h2>
                        <p className="text-gray-600">Tailored Solutions For Cafeterias And Events That Impress Stakeholders.</p>
                    </div>

                    {/* Individual Consumers */}
                    <div className="bg-[#FFF9E6] p-8 flex flex-col items-center text-center md:col-span-1.5">
                        <div className="w-16 h-16 mb-6">
                            <img src="./src/assets/consumers.png" alt="" className="w-full h-full" aria-hidden="true" />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Individual Consumers</h2>
                        <p className="text-gray-600">Access To Trending And Diverse Products That Enhance Your Lifestyle.</p>
                    </div>
                </div>
            </section>


            <section className="w-full bg-[#7ab5e6] py-12 px-4">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-black">
                        OUR UNIQUE SELLING POINTS
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8">
                        {/* First USP */}
                        <div className="flex flex-col items-center">
                            <div className="rounded-full border-4 border-[#ffa500] overflow-hidden w-48 h-48 md:w-40 md:h-40 lg:w-64 lg:h-64 mb-6">
                                <img
                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tKRrbre6PcYHZOO9rDl4zlvhuwkZO6.png"
                                    alt="Cardboard boxes representing wide product range"
                                    className="w-full h-full object-cover"
                                    style={{ objectPosition: "0% 0%" }}
                                />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-black text-center">Wide Product Range</h3>
                        </div>

                        {/* Second USP */}
                        <div className="flex flex-col items-center">
                            <div className="rounded-full border-4 border-[#ffa500] overflow-hidden w-48 h-48 md:w-40 md:h-40 lg:w-64 lg:h-64 mb-6">
                                <img
                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tKRrbre6PcYHZOO9rDl4zlvhuwkZO6.png"
                                    alt="People shaking hands representing diverse customer base"
                                    className="w-full h-full object-cover"
                                    style={{ objectPosition: "50% 0%" }}
                                />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-black text-center">Diverse Customer Base</h3>
                        </div>

                        {/* Third USP */}
                        <div className="flex flex-col items-center">
                            <div className="rounded-full border-4 border-[#ffa500] overflow-hidden w-48 h-48 md:w-40 md:h-40 lg:w-64 lg:h-64 mb-6">
                                <img
                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tKRrbre6PcYHZOO9rDl4zlvhuwkZO6.png"
                                    alt="Hand touching digital interface representing commitment to quality"
                                    className="w-full h-full object-cover"
                                    style={{ objectPosition: "100% 0%" }}
                                />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-black text-center">Commitment To Quality</h3>
                        </div>
                    </div>
                </div>
            </section>


            <section className="w-full py-12 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Feature 1 - Best Price */}
                        <div className="bg-[#fff8dc] p-8 flex flex-col items-center text-center">
                            <div className="w-24 h-24 mb-6">
                                <div className="w-full h-full rounded-full border-4 border-[#ffa500] flex items-center justify-center bg-white">
                                    <img
                                        src="/placeholder.svg?height=40&width=40"
                                        alt="Handshake icon"
                                        className="w-12 h-12 object-contain"
                                        style={{
                                            filter: "invert(65%) sepia(54%) saturate(4223%) hue-rotate(360deg) brightness(102%) contrast(106%)",
                                        }}
                                    />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">Best Price</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Our Products Are Priced
                                <br />
                                With Care And Love
                                <br />
                                Towards YOU.
                            </p>
                        </div>

                        {/* Feature 2 - Quick Delivery */}
                        <div className="bg-[#fff8dc] p-8 flex flex-col items-center text-center">
                            <div className="w-24 h-24 mb-6">
                                <div className="w-full h-full rounded-full border-4 border-[#ffa500] flex items-center justify-center bg-white">
                                    <img
                                        src="/placeholder.svg?height=40&width=40"
                                        alt="Delivery people icon"
                                        className="w-12 h-12 object-contain"
                                        style={{
                                            filter: "invert(65%) sepia(54%) saturate(4223%) hue-rotate(360deg) brightness(102%) contrast(106%)",
                                        }}
                                    />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">Quick Delivery</h3>
                            <p className="text-gray-700 leading-relaxed">
                                We Deliver In Minutes.
                                <br />
                                15 Mins Is All It Takes.
                            </p>
                        </div>

                        {/* Feature 3 - Quality Assort */}
                        <div className="bg-[#fff8dc] p-8 flex flex-col items-center text-center">
                            <div className="w-24 h-24 mb-6">
                                <div className="w-full h-full rounded-full border-4 border-[#ffa500] flex items-center justify-center bg-white">
                                    <img
                                        src="/placeholder.svg?height=40&width=40"
                                        alt="Quality tag icon"
                                        className="w-12 h-12 object-contain"
                                        style={{
                                            filter: "invert(65%) sepia(54%) saturate(4223%) hue-rotate(360deg) brightness(102%) contrast(106%)",
                                        }}
                                    />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">Quality Assort</h3>
                            <p className="text-gray-700 leading-relaxed">
                                We've Got The BEST.
                                <br />
                                Global, Local, You Name
                                <br />
                                It.
                            </p>
                        </div>

                        {/* Feature 4 - Offers And Deals */}
                        <div className="bg-[#fff8dc] p-8 flex flex-col items-center text-center">
                            <div className="w-24 h-24 mb-6">
                                <div className="w-full h-full rounded-full border-4 border-[#ffa500] flex items-center justify-center bg-white">
                                    <img
                                        src="/placeholder.svg?height=40&width=40"
                                        alt="Discount coupon icon"
                                        className="w-12 h-12 object-contain"
                                        style={{
                                            filter: "invert(65%) sepia(54%) saturate(4223%) hue-rotate(360deg) brightness(102%) contrast(106%)",
                                        }}
                                    />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">Offers And Deals</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Shopping Is Fun And
                                <br />
                                Pocket-Friendly With
                                <br />
                                Our Regular Offers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Mart
