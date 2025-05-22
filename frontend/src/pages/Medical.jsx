import { useState, useEffect } from "react"
import { Heart, Bed, Database, Shield } from "lucide-react"

const Medical = () => {

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



    const features = [
        {
            icon: Heart,
            title: "Patient Monitoring",
            description: "Real-time vital signs tracking with AI-powered alerts",
        },
        {
            icon: Bed,
            title: "Surgical Precision",
            description: "Advanced tools for minimally invasive procedures",
        },
        {
            icon: Database,
            title: "Data Integration",
            description: "Seamless EHR connectivity and analytics",
        },
        {
            icon: Shield,
            title: "Regulatory Compliant",
            description: "FDA-approved and CE-marked devices",
        },
    ]


    return (
        <>
            <section className="h-screen">
                <div className="relative h-screen w-full overflow-hidden">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-no-repeat"
                        style={{
                            backgroundImage: "url('./src/assets/medical.png')",
                            filter: "blur(3px)",
                        }}
                    />

                    {/* Overlay to darken the background slightly */}
                    <div className="absolute inset-0 bg-black/10" />

                    {/* Center MART text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-[#343045] text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight">MEDICAL DEVICE</h1>
                    </div>
                </div>
            </section>


            <section className="min-h-screen bg-gray-50 flex items-center">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

                        {/* Left side - Image with curved container */}
                        <div className="w-full lg:w-1/2 relative">
                            <div
                                className="relative overflow-hidden bg-white shadow-2xl"
                                style={{
                                    borderRadius: '60% 40% 40% 60% / 60% 30% 70% 40%',
                                    aspectRatio: '1',
                                    maxWidth: '500px',
                                    margin: '0 auto'
                                }}
                            >
                                <div className="absolute inset-0 p-8 lg:p-12 flex items-center justify-center">
                                    <img
                                        src="/api/placeholder/400/400"
                                        alt="MRI Scanner Medical Equipment"
                                        className="w-full h-full object-cover rounded-3xl"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right side - Content */}
                        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 lg:space-y-8">

                            {/* Main Heading */}
                            <div className="space-y-4">
                                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                                    INNOVATIVE MEDICAL
                                    <br />
                                    TECHNOLOGY
                                </h1>

                                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-light text-gray-700 leading-tight">
                                    BETTER HEALTHCARE
                                </h2>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                                Cutting-edge medical devices designed to improve patient outcomes and
                                streamline clinical workflows
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <button className="bg-gradient-to-r from-[#FF9D00] to-[#F8D982] text-black font-semibold px-8 py-3 rounded-full transition-colors duration-200 text-sm lg:text-base">
                                    EXPLORE PRODUCT
                                </button>

                                <button className="border-2 border-[#FF9D00] hover:border-gray-600 text-black hover:text-gray-900 font-semibold px-8 py-3 rounded-full transition-colors duration-200 text-sm lg:text-base">
                                    REQUEST DEMO
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>



            <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                    OUR MEDICAL DEVICES
                                </h1>
                                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                                    Innovative solutions for modern healthcare challenges
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                                    NEUROSENCE PRO
                                </h2>
                                <p className="text-base lg:text-lg text-gray-600">
                                    Neurological monitoring device for critical care
                                </p>

                                {/* Feature Tags */}
                                <div className="flex flex-wrap gap-3">
                                    <span className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-[#FF9D00] to-[#F8D982] text-white">
                                        📊 EEG/EMG
                                    </span>
                                    <span className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-[#FF9D00] to-[#F8D982] text-white">
                                        📈 Real-time analytics
                                    </span>
                                    <span className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-[#FF9D00] to-[#F8D982] text-white">
                                        ☁️ Cloud storage
                                    </span>
                                </div>

                                {/* CTA Button */}
                                <div className="pt-4">
                                    <button className="inline-flex items-center px-8 py-3 border-2 border-[#FF9D00] text-gray-900 font-semibold rounded-full hover:bg-gray-900 hover:text-white transition-colors duration-200">
                                        VIEW DETAILS
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Image Container with Custom Curved Shape */}
                        <div className="w-full  relative">
                            <div
                                className="relative overflow-hidden bg-white shadow-2xl"
                                style={{
                                    borderRadius: '60% 40% 40% 60% / 60% 30% 70% 40%',
                                    aspectRatio: '1',
                                    maxWidth: '500px',
                                    margin: '0 auto'
                                }}
                            >
                                <div className="absolute inset-0 p-8 lg:p-12 flex items-center justify-center">
                                    <img
                                        src="/api/placeholder/400/400"
                                        alt="MRI Scanner Medical Equipment"
                                        className="w-full h-full object-cover rounded-3xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <section className="w-full bg-gray-200 py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                                <div className="mb-4 p-3 rounded-full bg-orange-50">
                                    <feature.icon className="h-8 w-8 text-orange-500" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
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

export default Medical
