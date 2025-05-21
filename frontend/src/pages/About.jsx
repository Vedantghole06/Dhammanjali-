import React from 'react'

const About = () => {

    const categories = [
        {
            title: "Mart",
            image: "/placeholder.svg?height=400&width=600",
        },
        {
            title: "Real estate",
            image: "/placeholder.svg?height=400&width=600",
        },
        {
            title: "Medical Devices",
            image: "/placeholder.svg?height=400&width=600",
        },
        {
            title: "Cafe",
            image: "/placeholder.svg?height=400&width=600",
        },
        {
            title: "Dhammanjali Foundation",
            image: "/placeholder.svg?height=400&width=600",
        },
        {
            title: "Charity",
            image: "/placeholder.svg?height=400&width=600",
        },
    ]

    return (
        <>
            <div className="w-full  flex flex-col items-center justify-center px-4 py-16 ">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black">Growth Through Service</h1>

                    <h2 className="text-xl md:text-2xl lg:text-3xl font-normal mb-10 text-black">
                        Dhammanjali India Private Limited
                    </h2>

                    <p className="text-base md:text-lg text-black mb-12 leading-relaxed max-w-3xl mx-auto">
                        DHAMMANJALI INDIA PRIVATE LIMITED is a leading shopping mart dedicated to offering a wide variety of
                        high-quality products. From home appliances and gift items to kids' products, utensils, stationery, and more,
                        we ensure our customers have access to everything they need in one convenient place. We strive to provide an
                        exceptional shopping experience with competitive prices, making us your trusted partner for all your shopping
                        needs.
                    </p>

                    <button className="bg-gradient-to-r from-[#FF9D00] to-[#F8D982] text-white font-medium py-3 px-12 rounded-xl transition-colors duration-300">
                        Explore
                    </button>
                </div>
            </div>



            <div className="container mx-auto px-4 py-8 max-w-7xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {categories.map((category, index) => (
                        <div key={index} className="relative overflow-hidden rounded-xl h-64 md:h-72">
                            {/* Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={category.image || "/placeholder.svg"}
                                    alt={category.title}
                                    fill
                                    className="object-cover"
                                    priority={index < 3}
                                />
                            </div>

                            {/* Overlay for better text visibility */}
                            <div className="absolute inset-0 bg-black/20"></div>

                            {/* Title */}
                            <h2 className="absolute top-4 left-6 text-white text-2xl md:text-3xl font-bold">{category.title}</h2>

                            {/* Explore Button */}
                            <div className="absolute bottom-4 right-6">
                                <button className="px-6 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/40 hover:bg-white/30 transition-all duration-300 flex items-center">
                                    Explore
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom curve decoration */}
                <div className="w-full h-16 mt-8 relative">
                    <div className="absolute left-0 right-0 h-16 bg-gradient-to-b from-transparent to-gray-100 rounded-[100%] transform translate-y-1/2"></div>
                </div>
            </div>



            <section className="bg-[#81B2D7] py-16 px-8 md:px-16 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    {/* Heading with arrow */}
                    <div className="relative mb-16">
                        <div className="flex flex-col">
                            <h2 className="text-[#333] text-3xl md:text-4xl font-bold tracking-wide">ASPIRATIONS AND</h2>
                            <h2 className="text-[#333] text-3xl md:text-4xl font-normal tracking-wide mt-1">DESIRED</h2>
                        </div>
                        <div className="absolute top-14 left-75 hidden md:block">
                            <svg width="180" height="24" viewBox="0 0 180 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 12H178M178 12L166 1M178 12L166 23" stroke="#F9D949" strokeWidth="2" />
                            </svg>
                        </div>
                    </div>

                    {/* Two column layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                        {/* Vision column */}
                        <div>
                            <h3 className="text-[#333] text-2xl font-medium mb-6">Vision</h3>
                            <p className="text-[#333] text-base leading-relaxed">
                                To become the preferred destination for shoppers seeking quality products at affordable{" "}
                                <span className="font-semibold">prices</span>, while continuously{" "}
                                <span className="font-semibold">innovating</span> and <span className="font-semibold">expanding</span> our
                                offerings to meet evolving customer needs.
                            </p>
                        </div>

                        {/* Mission column */}
                        <div>
                            <h3 className="text-[#333] text-2xl font-medium mb-6">Mission</h3>
                            <p className="text-[#333] text-base leading-relaxed">
                                To provide unparalleled convenience and value to our customers through a diverse range of{" "}
                                <span className="font-semibold">high-quality products</span>,{" "}
                                <span className="font-semibold">exceptional service</span>, and{" "}
                                <span className="font-semibold">continuous innovation</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>



            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
                        {/* Left column - Headings */}
                        <div className="md:col-span-5">
                            <h2 className="text-[#333] text-3xl md:text-4xl font-bold mb-6">OUR VALUE-CREATION APPROACH</h2>
                            <div className="relative">
                                <h3 className="text-[#333] text-2xl md:text-3xl font-normal leading-tight">
                                    Serving Communities
                                    <br />
                                    Enriching Lives
                                </h3>
                                {/* Yellow arrow - hidden on mobile */}
                                <div className="absolute top-6 right-10 transform -translate-y-1/2 hidden md:block">
                                    <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 12H118M118 12L106 1M118 12L106 23" stroke="#F9D949" strokeWidth="2" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Right column - Description */}
                        <div className="md:col-span-7">
                            <p className="text-[#333] text-base leading-relaxed">
                                At DHAMMANJALI INDIA PRIVATE LIMITED, we believe in creating lasting value not just through our products
                                but through meaningful contributions to the communities we serve. Our approach focuses on empowering
                                communities and enriching lives by delivering high-quality products, fostering sustainable practices, and
                                supporting social initiatives that positively impact the society. Every step we take is aimed at improving
                                the lives of individuals, helping communities thrive, and creating a future where everyone can succeed. At
                                DHAMMANJALI INDIA PRIVATE LIMITED, we are committed to conducting our business ethically and with respect
                                for everyone we interact with. Our approach is centered around integrity, accountability, and a strong
                                sense of responsibility towards our customers, partners, and communities. We achieve this by aligning our
                                goals with our six core values, which guide our actions and decisions every day:
                            </p>
                        </div>
                    </div>
                </div>
            </section>




            <section className="relative py-16 px-4 md:px-8 lg:px-16 overflow-hidden mb-10">
                {/* Background curved lines */}
                <div className="absolute inset-0 z-0">
                    <div className="w-full h-full bg-[url('/src/assets/logo.png?height=800&width=1200')] bg-no-repeat bg-cover opacity-10"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Left column with images */}
                        <div className="space-y-4 md:space-y-0 md:relative">
                            {/* Top image with customer loyalty */}
                            <div className="border-4 border-amber-300 p-0 w-full md:w-[90%] h-64 md:h-80">
                                <div className="relative w-full h-full">
                                    <img
                                        src="/placeholder.svg?height=400&width=400"
                                        alt="Customer Loyalty"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Bottom image with stats */}
                            <div className="border-4 border-amber-300 bg-white p-6 w-full md:w-[70%] md:absolute md:bottom-[-60px] md:right-0">
                                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">10,000 +</h3>
                                <p className="text-gray-700">
                                    Happy customers served annually
                                    <br />
                                    Trusted by families across the region
                                </p>
                            </div>
                        </div>

                        {/* Right column with text */}
                        <div className="mt-16 lg:mt-0">
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <h4 className="text-gray-700 text-lg">Customer Commitment</h4>
                                    <div className="ml-4 h-[1px] bg-gray-300 w-24"></div>
                                </div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                                    CUSTOMER
                                    <br />
                                    COMMITMENT
                                </h2>
                                <p className="text-gray-700 mt-4 max-w-lg">
                                    We Prioritize Our Customers' Needs And Work Tirelessly To Exceed Their Expectations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-[#81B2D7] py-16 px-6 md:px-12 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    {/* Header section */}
                    <div className="grid grid-cols- md:grid-cols-12 gap-40 mb-10">
                        {/* Left column - Headings */}
                        <div className="md:col-span-4 relative">
                            <h2 className="text-[#333] text-3xl md:text-4xl font-bold">Our Values &</h2>
                            <h3 className="text-[#333] text-3xl md:text-4xl font-normal mt-1">Behavior</h3>

                            {/* Yellow arrow - hidden on mobile */}
                            <div className="absolute top-16 right-16 transform -translate-y-1/2 hidden md:block">
                                <svg width="150" height="24" viewBox="0 0 150 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 12H148M148 12L136 1M148 12L136 23" stroke="#F9D949" strokeWidth="2" />
                                </svg>
                            </div>
                        </div>

                        {/* Right column - Description */}
                        <div className="md:col-span-8">
                            <p className="text-[#333] text-base md:text-lg">
                                We aim to conduct our businesses ethically and in a manner that is respectful to all.
                            </p>
                            <p className="text-[#333] text-base md:text-lg mt-2">
                                We achieve this by aligning our goals with our six core values.
                            </p>
                        </div>
                    </div>

                    {/* Values icons section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 text-center">
                        {/* Excellence */}
                        <div className="flex flex-col items-center">
                            <div className="w-40 h-40 rounded-full overflow-hidden mb-6">
                                <img
                                    src="/placeholder.svg?height=160&width=160"
                                    alt="Excellence"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h4 className="text-[#333] text-2xl font-semibold">Excellence</h4>
                        </div>

                        {/* Customer Value */}
                        <div className="flex flex-col items-center">
                            <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-[#F9A826]">
                                <img
                                    src="/placeholder.svg?height=160&width=160"
                                    alt="Customer Value"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h4 className="text-[#333] text-2xl font-semibold">Customer Value</h4>
                        </div>

                        {/* Owner Mindset */}
                        <div className="flex flex-col items-center">
                            <div className="w-40 h-40 rounded-full overflow-hidden mb-6">
                                <img
                                    src="/placeholder.svg?height=160&width=160"
                                    alt="Owner Mindset"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h4 className="text-[#333] text-2xl font-semibold">Owner Mindset</h4>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* Left column - Text and button */}
                        <div className="lg:col-span-4">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
                                Awards &<br />
                                Recognition
                            </h2>
                            <p className="text-gray-700 mb-8">
                                <strong>Vous voulez en voir plus ?</strong> Contactez-nous et nous nous ferons un plaisir de partager avec vous quelques
                                unes de nos réalisations.
                            </p>
                            <button className="bg-gradient-to-r from-[#FF9D00] to-[#F8D982]  text-white font-medium py-3 px-8 rounded-full transition-colors duration-300">
                                Know More
                            </button>
                        </div>

                        {/* Right column - Images */}
                        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* First award image */}
                            <div className="rounded-3xl overflow-hidden h-64 md:h-80">
                                <div className="relative w-full h-full">
                                    <img
                                        src="/placeholder.svg?height=400&width=400"
                                        alt="Award ceremony with group"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Second award image */}
                            <div className="rounded-3xl overflow-hidden h-64 md:h-80">
                                <div className="relative w-full h-full">
                                    <img
                                        src="/placeholder.svg?height=400&width=400"
                                        alt="Award recipients with trophy"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
