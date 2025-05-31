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



    const cards = [
        {
            image: "/placeholder.svg?height=200&width=200",
            alt: "Solar panels in a field",
            title: "DHAMMANJALI Announces Grand Summer Sale with Up to 50% Off",
        },
        {
            image: "/placeholder.svg?height=200&width=200",
            alt: "Kitchen appliances collection",
            title: "New Kitchen Appliances Collection Now Available at All Stores",
        },
        {
            image: "/placeholder.svg?height=200&width=200",
            alt: "Person doing yoga meditation",
            title: "DHAMMANJALI Partners with Local Artisans to Launch Exclusive Handicraft Collection",
        },
        {
            image: "/placeholder.svg?height=200&width=200",
            alt: "Person wearing VR headset",
            title: "DHAMMANJALI Announces Grand Summer Sale with Up to 50% Off",
        },
    ]



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



            <section className="bg-[#8cbfe0] min-h-screen w-full py-10">
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
                            <div className="w-full relative">
                                <div
                                    className="relative overflow-hidden bg-white shadow-2xl"
                                    style={{
                                        borderRadius: '60% 40% 40% 60% / 60% 30% 70% 40%',
                                        aspectRatio: '1',
                                        maxWidth: '400px',
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
            </section>



            <section className="min-h-screen p-6 md:p-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="flex justify-between items-start mb-8">
                        <div className="flex items-center gap-4">
                            <h1 className="text-3xl font-bold text-gray-800 tracking-wide">ANNOUNCEMENTS</h1>
                            <div className="flex items-center gap-3">
                                <span className="text-xl text-gray-600">LATEST</span>
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

                        {/* Side Text */}
                        <div className="max-w-md text-sm text-gray-600 leading-relaxed">
                            Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin
                            gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet
                            eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus
                            vitae.
                        </div>
                    </div>

                    {/* Main Announcement Card */}
                    <div className="bg-gradient-to-r from-orange-400 to-yellow-400 rounded-3xl p-8 shadow-lg relative">
                        <div className="flex">
                            {/* Left Content */}
                            <div className="flex-1 pr-8">
                                <div className="relative">
                                    {/* Date positioned in top right of card */}
                                    <div className="absolute top-0 right-0 text-black font-medium text-base bg-white px-2 py-2 rounded-lg">
                                        15 MAR, 2025
                                    </div>

                                    <h2 className="text-3xl font-bold text-white leading-tight mb-6 pr-32">
                                        DHAMMANJALI INDIA PRIVATE LIMITED - Your One-Stop Shopping Destination
                                    </h2>

                                    <div className="w-20 h-0.5 bg-white mb-6"></div>

                                    <p className="text-white text-lg leading-relaxed max-w-lg">
                                        Discover our diverse range of high-quality products including home appliances, gift items, kitchen
                                        utensils, stationery, and more. Visit us today for a convenient shopping experience at competitive
                                        prices!
                                    </p>
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="w-96 flex-shrink-0">
                                <div className="rounded-2xl overflow-hidden shadow-xl h-64">
                                    <img
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kL5UpqHWIC6PchncocAG6HzQqoIDg7.png"
                                        alt="Street view with Dhammanjali announcement banner"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="min-h-screen p-4 md:p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="bg-[radial-gradient(circle,_#EDDC9C,_#FF9D00)] rounded-3xl p-6 md:p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300 h-full"
                            >
                                {/* Circular Image Container */}
                                <div className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden mb-6 shadow-lg ring-4 ring-white/20">
                                    <img src={card.image || "/placeholder.svg"} alt={card.alt} className="w-full h-full object-cover" />
                                </div>

                                {/* Foundation Name */}
                                <h2 className="text-white font-bold text-lg md:text-xl mb-2 tracking-wide">DHAMMANJALI</h2>
                                <h3 className="text-white font-semibold text-base md:text-lg mb-4">FOUNDATION</h3>

                                {/* Date */}
                                <p className="text-white/90 text-sm mb-4 font-medium">15 MAR 2025</p>

                                {/* Title/Description */}
                                <div className="flex-1 flex items-center">
                                    <h4 className="text-white font-semibold text-sm md:text-base leading-relaxed">{card.title}</h4>
                                </div>

                                {/* Read More Button */}
                                <button className="bg-gradient-to-br from-[#F8D982] via-[#FF9D00] to-[#F8D982] text-black font-medium py-2 px-4 rounded-full transition-colors duration-200 text-sm md:text-base shadow-md hover:shadow-lg mt-4">
                                    READ MORE
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            <section className="w-full max-w-7xl mx-auto p-4">
                <div className="relative overflow-hidden rounded-full h-64 md:h-40 lg:h-64">
                    {/* Background image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: "url('/agm-background.png')",
                        }}
                    ></div>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/70 via-yellow-300/60 to-green-400/70"></div>

                    {/* Additional overlay for better text readability */}
                    <div className="absolute inset-0 bg-black/10"></div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-between">
                        {/* Date in top right */}
                        <div className="flex justify-end p-6 md:p-8 lg:p-10">
                            <span className="text-white text-sm md:text-base lg:text-lg font-medium">25 Mar 2025</span>
                        </div>

                        {/* Main content - centered vertically */}
                        <div className="flex-1 flex items-center justify-center px-6 md:px-8 lg:px-10 -mt-8 md:-mt-10">
                            <div className="text-center space-y-2 md:space-y-3 lg:space-y-4">
                                <h1 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                                    Key Highlights from AGM –
                                </h1>
                                <p className="text-white/95 text-lg md:text-xl lg:text-2xl xl:text-3xl font-light">
                                    Perspective for Investors
                                </p>
                            </div>
                        </div>

                        {/* Bottom section with chevron */}
                        <div className="flex justify-center pb-6 md:pb-8 lg:pb-10">
                            <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gray-600/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm">
                                <svg
                                    className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}

export default Home
