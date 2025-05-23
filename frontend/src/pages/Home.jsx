import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"

const Home = () => {

    const carouselItems = [
        {
            id: 1,
            title: {
                start: "Dive",
                middle: " Into The Depths",
                end: " Of ",
                highlight: "Virtual Reality",
            },
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore nisi tincidunt eget. Lectus mauris eros in vitae .",
            image:
                "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2148&q=80",
        },
        {
            id: 2,
            title: {
                start: "Explore",
                middle: " The Wonders",
                end: " Of ",
                highlight: "Augmented Reality",
            },
            description:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
            image:
                "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        },
        {
            id: 3,
            title: {
                start: "Journey",
                middle: " Through The Realm",
                end: " Of ",
                highlight: "Digital Experiences",
            },
            description:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
            image:
                "https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
        },
    ]


    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 3000)

        return () => clearInterval(interval)
    }, [currentIndex])

    const nextSlide = () => {
        if (isTransitioning) return

        setIsTransitioning(true)
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length)
            setIsTransitioning(false)
        }, 500) // Match this with the CSS transition duration
    }

    // const prevSlide = () => {
    //     if (isTransitioning) return

    //     setIsTransitioning(true)
    //     setTimeout(() => {
    //         setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1))
    //         setIsTransitioning(false)
    //     }, 500) // Match this with the CSS transition duration
    // }



    return (

        <>

            <section className="relative w-full h-screen overflow-hidden">
                {carouselItems.map((item, index) => (
                    <div
                        key={item.id}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out
                ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0 w-full h-full">
                            <img
                                src={item.image || "/placeholder.svg"}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/30"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-20 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="max-w-xl">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                    <span className="text-amber-400">{item.title.start}</span>
                                    <span className="text-indigo-900">{item.title.middle}</span>
                                    <span className="text-indigo-900">{item.title.end}</span>
                                    <span className="text-amber-400">{item.title.highlight}</span>
                                </h1>
                                <p className="text-indigo-900 text-sm md:text-base mb-8 max-w-md">{item.description}</p>
                                <div className="flex flex-wrap gap-4">
                                    <button className="bg-amber-400 hover:bg-amber-500 text-indigo-900 font-bold py-2 px-6 rounded-full transition-colors duration-300">
                                        ABOUT US
                                    </button>
                                    <button className="bg-amber-400 hover:bg-amber-500 text-indigo-900 font-bold py-2 px-6 rounded-full transition-colors duration-300">
                                        OUR STORY
                                    </button>
                                    <button className="text-amber-400 ml-2 flex items-center">
                                        <ArrowRight className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Navigation Dots */}
                {/* <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
                    {carouselItems.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 
              ${index === currentIndex ? "bg-amber-400" : "bg-white/50"}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div> */}
            </section>



            <section className="w-full bg-white py-12 px-4 md:px-8 lg:px-16 xl:px-24 relative overflow-hidden">
                {/* Header Section */}
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-16 md:mb-24">
                        <div className="mb-8 md:mb-0">
                            <h1 className="text-3xl md:text-4xl font-bold text-slate-800">DHAMMANJALI</h1>
                            <div className="flex items-center mt-2">
                                <p className="text-xl text-slate-600 tracking-wide">WE CARE</p>
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
                        <div className="max-w-xl">
                            <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                                DHAMMANJALI INDIA PRIVATE LIMITED is a rapidly growing company and a leader in the retail and wholesale
                                sector, known for its wide-ranging product offerings and commitment to quality.
                            </p>
                        </div>
                    </div>

                    {/* Main Content Section */}
                    <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
                        {/* Wind Turbine Image */}
                        <div className="w-full lg:w-2/5 relative">
                            <div className="w-full relative">
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

                        {/* Content */}
                        <div className="w-full lg:w-3/5">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-1">ENERGY</h2>
                            <h3 className="text-xl md:text-2xl text-slate-600 mb-6">WIND ENERGY</h3>

                            <div className="space-y-4 text-sm md:text-base text-slate-700 leading-relaxed">
                                <p>
                                    Our quest to make India energy-sufficient led us to become one of the largest oil & gas exploration and
                                    production players in India. Our refinery at Jamnagar is the world's largest, integrated,
                                    single-location refining complex. It has transformed India from being a net importer of petroleum
                                    products to a net exporter.
                                </p>
                                <p>
                                    Today, Reliance is moving towards a new Oil-to-Chemicals (O2C) paradigm – the Oil-to- Chemicals (O2C)
                                    strategy to produce the chemical building blocks of a circular economy and integrate it with sustainable
                                    downstream derivatives, useful chemicals, and new materials.
                                </p>
                            </div>

                            <button className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300">
                                READ MORE
                            </button>
                        </div>
                    </div>
                </div>

                {/* Curved Line Decoration */}
                <div className="absolute bottom-0 right-0 w-full h-32 pointer-events-none">
                    <svg
                        viewBox="0 0 1440 200"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute bottom-0 right-0 w-full h-full"
                        preserveAspectRatio="none"
                    >
                        <path d="M0,160 C320,220 720,100 1440,180 L1440,200 L0,200 Z" fill="#F3F4F6" fillOpacity="0.5" />
                    </svg>
                </div>
            </section>




            <section className="w-full bg-white py-12 px-4 md:px-8 lg:px-16 xl:px-24">
                <div className="bg-[#fff9e0] p-4 md:p-8 lg:p-12 rounded-lg max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                        {/* Left Content Section */}
                        <div className="flex flex-col justify-center md:w-1/2">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">DHAMMANJALI Foundation</h2>
                            <p className="text-gray-700 mb-6">
                                As part of our commitment to the community, DHAMMANJALI Foundation focuses on uplifting local communities
                                through various social initiatives. These efforts center around education, skill development, and
                                environmental sustainability. The foundation has made a significant positive impact, touching the lives of
                                thousands of families in the regions where we operate, and continues to drive meaningful change for a
                                brighter future.
                            </p>
                            <div>
                                <button className="bg-[#fdb813] hover:bg-[#e9a912] text-gray-800 font-medium py-2 px-6 rounded-full transition duration-300">
                                    READ MORE
                                </button>
                            </div>
                        </div>

                        {/* Right Image Section */}
                        <div className="md:w-1/2">
                            <div className="rounded-lg overflow-hidden shadow-lg h-full">
                                <img
                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Mq1wMp6nevp5ne7H3tDBmwlKyfZFLw.png"
                                    alt="DHAMMANJALI Announcement billboard on a city street with decorative lights"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <div className="bg-[#8cbfe0] min-h-screen w-full py-10">
                <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-start">
                    {/* Left Column */}
                    <div className="w-full md:w-5/12 pr-0 md:pr-8">
                        <div className="mb-6 flex items-center justify-between">
                            <div>
                                <h1 className="text-[#444] text-4xl font-bold tracking-wide">CORPORATE</h1>
                                <h2 className="text-[#444] text-3xl font-bold tracking-wide mt-1">SUSTAINABILITY</h2>
                            </div>
                            <div className="hidden md:block">
                                <svg width="150" height="24" viewBox="0 0 150 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M149.061 13.0607C149.646 12.4749 149.646 11.5251 149.061 10.9393L139.515 1.3934C138.929 0.807611 137.979 0.807611 137.393 1.3934C136.808 1.97919 136.808 2.92893 137.393 3.51472L145.879 12L137.393 20.4853C136.808 21.0711 136.808 22.0208 137.393 22.6066C137.979 23.1924 138.929 23.1924 139.515 22.6066L149.061 13.0607ZM0 13.5H148V10.5H0V13.5Z"
                                        fill="#F9C74F"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div className="mt-10">
                            <div className="rounded-[40px] overflow-hidden w-full">
                                <img
                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TbuVLDXjZzEWkRSV7y5ZCvbKSmgcIi.png"
                                    alt="Business meeting with data charts"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full md:w-7/12 mt-10 md:mt-0">
                        <div className="mb-10">
                            <div className="flex space-x-8 pb-2">
                                <button className="text-[#444] font-semibold pb-2 border-b-2 border-[#444]">SUSTAINABILITY</button>
                                <button className="text-[#444] font-semibold pb-2">INNOVATION</button>
                                <button className="text-[#444] font-semibold pb-2">OUR IMPACT</button>
                            </div>
                        </div>

                        <div className="text-[#444] space-y-6">
                            <p className="text-base">
                                <span className="font-semibold">Our growth strategy</span> is defined by our business acumen and corporate
                                responsibility. <span className="font-semibold">Our commitment</span> to sustainable value-creation
                                demonstrates the principle that we care for our people and our planet.
                            </p>

                            <p className="text-base">
                                Every step we take is guided by our commitment to preserve the planet for{" "}
                                <span className="font-semibold">future</span> generations. From reducing our carbon footprint to
                                championing eco-friendly practices, we are proud of the strides we've made in building a greener, more
                                sustainable world. By embracing <span className="font-semibold">renewable energy</span>,{" "}
                                <span className="font-semibold">minimizing waste</span>, and{" "}
                                <span className="font-semibold">ensuring responsible sourcing</span>, we're not just contributing to a
                                sustainable future; <span className="font-semibold">we're celebrating it!</span>
                            </p>

                            <div className="pt-12">
                                <button className="bg-[#ffa726] hover:bg-[#ff9800] text-[#444] font-medium py-3 px-8 rounded-full text-sm">
                                    READ MORE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
