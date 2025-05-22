import React from 'react'
import { useState, useEffect } from "react"


const Cafe = () => {

    const [activeIndex, setActiveIndex] = useState(0)

    const testimonials = [
        {
            id: 1,
            rating: 2,
            text: "I wish they had a VPN, I'd be signing up for that too. Apart from that the app is top notch. I had Certo on my last phone, it was the first app I put on this phone when I got it from the store. The scanner and other parts of the app are really easy and simple to use, even for a non-techie like me.",
            author: "Leslie Carrillo",
        },
        {
            id: 2,
            rating: 5,
            text: "Love the ease and efficiency. Awesome app. Very informative and insightful if wanting to know more about your device. The added breach check is a great bonus. Check any email of they've ever been named in a data breach from years ago. Sweet tool. Love it highly recommend.",
            author: "Jennifer Black",
        },
        {
            id: 3,
            rating: 5,
            text: "This app is good if you need to identify certain vulnerabilities on your iPhone. If you have any issues, their customer service was quite helpful and responsive.",
            author: "Phillip Coligan",
        },
        {
            id: 4,
            rating: 2,
            text: "...exactly what it says. Clear to read and understand. This is now the second time I've used it on and would recommend this app.",
            author: "Andy94",
        },
    ]

    // Auto scroll every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1))
        }, 3000)

        return () => clearInterval(interval)
    }, [testimonials.length])

    // Render stars based on rating
    const renderStars = (rating) => {
        const stars = []
        for (let i = 0; i < 5; i++) {
            stars.push(
                <svg
                    key={i}
                    className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>,
            )
        }
        return stars
    }

    // Calculate visible items based on screen size
    const getVisibleItems = () => {
        if (typeof window !== "undefined") {
            if (window.innerWidth < 640) return 1 // Mobile
            if (window.innerWidth < 1024) return 2 // Tablet
            return 3 // Desktop
        }
        return 3 // Default
    }



    return (
        <>
            <section className="h-screen">
                <div className="relative h-screen w-full overflow-hidden">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-fit bg-cover bg-no-repeat"
                        style={{
                            backgroundImage: "url('./src/assets/cafe.png')"
                        }}
                    />

                    {/* Overlay to darken the background slightly */}
                    <div className="absolute inset-0 bg-black/10" />

                    {/* Center MART text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-[#343045] text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight">CAFE</h1>
                    </div>
                </div>
            </section>



            <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold text-gray-800 tracking-tight">SPECIALITIES</h2>
                        <div className="flex items-center">
                            <h3 className="text-2xl text-gray-700 font-light">Our Specialities</h3>
                            <div className="hidden md:block ml-4">
                                <svg width="150" height="24" viewBox="0 0 150 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M149.061 13.0607C149.646 12.4749 149.646 11.5251 149.061 10.9393L139.515 1.3934C138.929 0.807611 137.979 0.807611 137.393 1.3934C136.808 1.97919 136.808 2.92893 137.393 3.51472L145.879 12L137.393 20.4853C136.808 21.0711 136.808 22.0208 137.393 22.6066C137.979 23.1924 138.929 23.1924 139.515 22.6066L149.061 13.0607ZM0 13.5H148V10.5H0V13.5Z"
                                        fill="#F9C74F"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 md:mt-0 max-w-md">
                        <p className="text-gray-600">
                            At Dhammanjali Café, we celebrate the rich tapestry of Indian flavors by offering a thoughtfully curated
                            menu that blends tradition with innovation.
                        </p>
                    </div>
                </div>

                {/* Featured Item */}
                <div className="flex flex-col-reverse md:flex-row items-center">
                    <div className="w-full md:w-1/2 md:pr-16 mt-8 md:mt-0">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">CHOCOLATE CHIP COOKIES</h2>
                        <p className="text-gray-700">Rich, aromatic, and freshly baked daily.</p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gZvLRpLtKI92Rz2G7oGb8JcUTnHGtW.png"
                            alt="Assortment of cake slices on a plate"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>



            <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                {/* Signature Coffee Section */}
                <div className="flex flex-col md:flex-row items-center mb-24">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gZvLRpLtKI92Rz2G7oGb8JcUTnHGtW.png"
                            alt="Signature coffee with latte art and a cookie"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2 md:pl-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">SIGNATURE COFFEE</h2>
                        <p className="text-gray-700">Voted best in town! Freshly ground beans for perfect flavor.</p>
                    </div>
                </div>

                {/* Delicious Pastries Section */}
                <div className="flex flex-col-reverse md:flex-row items-center">
                    <div className="w-full md:w-1/2 md:pr-16 mt-8 md:mt-0">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">DELICIOUS PASTRIES</h2>
                        <p className="text-gray-700">Handmade with love and the finest ingredients.</p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gZvLRpLtKI92Rz2G7oGb8JcUTnHGtW.png"
                            alt="Assortment of cake slices on a plate"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>



            <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                {/* Signature Coffee Section */}
                <div className="flex flex-col md:flex-row items-center mb-24">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gZvLRpLtKI92Rz2G7oGb8JcUTnHGtW.png"
                            alt="Signature coffee with latte art and a cookie"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2 md:pl-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">ICE CREAM</h2>
                        <p className="text-gray-700">A perfect treat to cool down and satisfy your sweet cravings.</p>
                    </div>
                </div>

                {/* Delicious Pastries Section */}
                <div className="flex flex-col-reverse md:flex-row items-center">
                    <div className="w-full md:w-1/2 md:pr-16 mt-8 md:mt-0">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">DELICIOUS PIZZA</h2>
                        <p className="text-gray-700">Each bite is a blend of crispy, cheesy, and flavorful goodness!</p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gZvLRpLtKI92Rz2G7oGb8JcUTnHGtW.png"
                            alt="Assortment of cake slices on a plate"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>


            <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                {/* Signature Coffee Section */}
                <div className="flex flex-col md:flex-row items-center mb-24">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gZvLRpLtKI92Rz2G7oGb8JcUTnHGtW.png"
                            alt="Signature coffee with latte art and a cookie"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2 md:pl-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">SAVORY SNACKS</h2>
                        <p className="text-gray-700">Served with a spicy dip for the perfect taste.</p>
                    </div>
                </div>
            </section>



            <section className="relative w-full max-w-7xl mx-auto px-4 py-8">
                {/* Carousel container */}
                <div className="overflow-hidden">
                    <div
                        className="flex mb-4 transition-transform duration-300 ease-in-out"
                        style={{
                            transform: `translateX(-${activeIndex * (100 / getVisibleItems())}%)`,
                            width: `${(testimonials.length / getVisibleItems()) * 100}%`,
                        }}
                    >
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="px-3" style={{ width: `${100 / testimonials.length}%` }}>
                                <div className="bg-white rounded-3xl shadow-lg p-6 h-full flex flex-col">
                                    <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
                                    <p className="text-gray-700 mb-4 flex-grow">{testimonial.text}</p>
                                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cafe
