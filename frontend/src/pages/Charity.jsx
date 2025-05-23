import { useState } from "react"
import DonationForm from "../components/DonationForm"

const Charity = () => {

    const userTestimonials = [
        {
            id: 1,
            name: "Alex Johnson",
            role: "Content Creator",
            quote: "This Gallery Is Amazing! Super Clean And Easy To Navigate.",
            avatar: "/placeholder.svg?height=40&width=40",
        },
        {
            id: 2,
            name: "Sarah Williams",
            role: "Designer",
            quote: "Absolutely love the intuitive interface and beautiful aesthetics!",
            avatar: "/placeholder.svg?height=40&width=40",
        },
        {
            id: 3,
            name: "Michael Chen",
            role: "Photographer",
            quote: "The best platform I've used for showcasing my portfolio work.",
            avatar: "/placeholder.svg?height=40&width=40",
        },
    ]


    const [currentIndexxx, setCurrentIndexxx] = useState(0)

    const nextFeedback = () => {
        setCurrentIndexxx((prevIndex) => (prevIndex + 1) % userTestimonials.length)
    }

    const prevFeedback = () => {
        setCurrentIndexxx((prevIndex) => (prevIndex - 1 + userTestimonials.length) % userTestimonials.length)
    }

    const currentFeedback = userTestimonials[currentIndexxx]


    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen)
    }

    // Close popup when clicking outside
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            setIsPopupOpen(false)
        }
    }

    return (
        <>
            <section className="h-screen">
                <div className="relative h-screen w-full overflow-hidden">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-fit bg-cover bg-no-repeat"
                        style={{
                            backgroundImage: "url('./src/assets/charity.png')",
                            filter: "blur(3px)",
                        }}
                    />

                    {/* Overlay to darken the background slightly */}
                    <div className="absolute inset-0 bg-black/10" />

                    {/* Center MART text and button */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <h1 className="text-[#343045] text-5xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8">CHARITY</h1>

                        {/* Donate Button */}
                        <button
                            onClick={togglePopup}
                            className="bg-gradient-to-r from-[#FF9D00] to-[#F8D982] text-white font-semibold py-3 px-8 md:py-4 md:px-12 lg:py-5 lg:px-16 rounded-lg text-lg md:text-xl lg:text-md transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
                        >
                            Donate
                        </button>
                    </div>
                </div>
            </section>

            {/* Donation Popup */}
            {isPopupOpen && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                    onClick={handleBackdropClick}
                >
                    <div
                        className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-fadeIn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="sticky top-0 flex justify-between items-center p-4 bg-white border-b">
                            <h2 className="text-2xl font-bold text-[#343045]">Make a Donation</h2>
                            <button onClick={togglePopup} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-2">
                            <DonationForm />
                        </div>
                    </div>
                </div>
            )}


            <section className="py-16 px-4 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-800 mb-2">OUR CAUSES</h2>
                        <div className="flex items-center">
                            <h3 className="text-3xl font-normal text-gray-700">DONATE NOW</h3>
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
                        <p className="text-gray-700">
                            AT DHAMMANJALI INDIA PRIVATE LIMITED, we are dedicated to fostering positive change through our charitable
                            endeavors. Our focus lies in uplifting underprivileged communities by providing essential resources,
                            supporting education, and promoting health and well-being. We believe in creating a compassionate society
                            where every individual has the opportunity to thrive.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Education Card */}
                    <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full bg-white border-4 border-amber-400 flex items-center justify-center mb-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 text-amber-400"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4">EDUCATION</h3>
                        <p className="text-gray-600">Providing Quality Education To Underprivileged Children Worldwide.</p>
                    </div>

                    {/* Healthcare Card */}
                    <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full bg-white border-4 border-amber-400 flex items-center justify-center mb-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 text-amber-400"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                                <path d="M12 11h4" />
                                <path d="M12 16h4" />
                                <path d="M8 11v.01" />
                                <path d="M8 16v.01" />
                                <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4">HEALTHCARE</h3>
                        <p className="text-gray-600">Ensuring Access To Essential Medical Services And Treatments.</p>
                    </div>

                    {/* Development Card */}
                    <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full bg-white border-4 border-amber-400 flex items-center justify-center mb-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 text-amber-400"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect x="3" y="3" width="7" height="7" />
                                <rect x="14" y="3" width="7" height="7" />
                                <rect x="14" y="14" width="7" height="7" />
                                <rect x="3" y="14" width="7" height="7" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4">DEVELOPMENT</h3>
                        <p className="text-gray-600">Supporting Sustainable Community Growth And Empowerment.</p>
                    </div>
                </div>
            </section>



            <section className="w-full py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
                {/* Curved line decoration */}
                <div className="absolute bottom-0 left-0 right-0 w-full">
                    <svg viewBox="0 0 1200 100" className="w-full h-auto text-gray-100 fill-current">
                        <path d="M0,0 C300,100 900,100 1200,0 L1200,100 L0,100 Z"></path>
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto">

                    {/* Content grid - Image on left, content on right */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Image column - Now on the left */}
                        <div className="relative">
                            <div className="rounded-lg overflow-hidden shadow-xl">
                                <img
                                    src="/placeholder.svg?height=600&width=800"
                                    alt="Content creator with microphone setup"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>

                        {/* Testimonial column - Now on the right */}
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-gray-800">WHAT PEOPLE ARE SAYING</h3>

                            {/* Testimonial card */}
                            <div className="bg-sky-500 text-white p-6 rounded-lg shadow-lg">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                                        <img
                                            src={currentFeedback.avatar || "/placeholder.svg"}
                                            alt={currentFeedback.name}
                                            width={40}
                                            height={40}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h4 className="text-lg font-medium underline">{currentFeedback.name}</h4>
                                </div>

                                <blockquote className="text-xl mb-6">"{currentFeedback.quote}"</blockquote>

                                <div className="flex items-center text-sm">
                                    <span>{currentFeedback.role}</span>
                                    <span className="mx-2">|</span>
                                    <span>{currentFeedback.name}</span>
                                </div>
                            </div>

                            {/* Navigation buttons */}
                            <div className="flex space-x-4">
                                <button
                                    onClick={prevFeedback}
                                    className="w-12 h-12 flex items-center justify-center bg-white border border-amber-400 text-amber-500 rounded-md hover:bg-amber-50 transition-colors"
                                    aria-label="Previous testimonial"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextFeedback}
                                    className="w-12 h-12 flex items-center justify-center bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors"
                                    aria-label="Next testimonial"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="w-full bg-[#79AAD0] py-6 px-4 flex flex-col items-center justify-center">
                <h2 className="text-center text-black font-medium text-xl md:text-2xl mb-4">
                    "Empowering Lives, One Gift at a Time"
                </h2>
                <button className="bg-gradient-to-r from-[#FF9D00] to-[#F8D982] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
                    DONATE NOW
                </button>
            </section>

        </>
    )
}

export default Charity
