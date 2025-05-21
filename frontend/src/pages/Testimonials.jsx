import { useState } from "react"

// Sample testimonial data
const testimonials = [
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

const clientFeedback = [
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



export default function Testimonials() {
    const [currentIndexx, setCurrentIndexx] = useState(0)

    const nextTestimonial = () => {
        setCurrentIndexx((prevIndex) => (prevIndex + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndexx((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    }

    const currentTestimonial = testimonials[currentIndexx]


    const [currentIndex, setCurrentIndex] = useState(0)

    const nextReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % clientFeedback.length)
    }

    const prevReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + clientFeedback.length) % clientFeedback.length)
    }

    const currentReview = clientFeedback[currentIndex]



    const [currentIndexxx, setCurrentIndexxx] = useState(0)

    const nextFeedback = () => {
        setCurrentIndexxx((prevIndex) => (prevIndex + 1) % userTestimonials.length)
    }

    const prevFeedback = () => {
        setCurrentIndexxx((prevIndex) => (prevIndex - 1 + userTestimonials.length) % userTestimonials.length)
    }

    const currentFeedback = userTestimonials[currentIndexxx]


    return (
        <>
            <section className="w-full py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
                {/* Curved line decoration */}
                <div className="absolute bottom-0 left-0 right-0 w-full">
                    <svg viewBox="0 0 1200 100" className="w-full h-auto text-gray-100 fill-current">
                        <path d="M0,0 C300,100 900,100 1200,0 L1200,100 L0,100 Z"></path>
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto">
                    {/* Heading section */}
                    <div className="mb-8">
                        <h2 className="text-4xl font-bold text-gray-800 mb-2">TESTIMONIALS</h2>
                        <div className="flex items-center">
                            <h3 className="text-xl tracking-[0.25em] text-gray-600">T E S T I M O N I A L S</h3>
                            <img src="./src/assets/right-arrow.png" className="ml-4 h-25 w-30" alt="" />
                        </div>
                    </div>

                    {/* Content grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Image column */}
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

                        {/* Testimonial column */}
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-gray-800">WHAT PEOPLE ARE SAYING</h3>

                            {/* Testimonial card */}
                            <div className="bg-sky-500 text-white p-6 rounded-lg shadow-lg">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                                        <img
                                            src={currentTestimonial.avatar || "/placeholder.svg"}
                                            alt={currentTestimonial.name}
                                            width={40}
                                            height={40}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h4 className="text-lg font-medium underline">{currentTestimonial.name}</h4>
                                </div>

                                <blockquote className="text-xl mb-6">"{currentTestimonial.quote}"</blockquote>

                                <div className="flex items-center text-sm">
                                    <span>{currentTestimonial.role}</span>
                                    <span className="mx-2">|</span>
                                    <span>{currentTestimonial.name}</span>
                                </div>
                            </div>

                            {/* Navigation buttons */}
                            <div className="flex space-x-4">
                                <button
                                    onClick={prevTestimonial}
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
                                    onClick={nextTestimonial}
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




            <section className="w-full py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
                {/* Curved line decoration */}
                <div className="absolute bottom-0 left-0 right-0 w-full">
                    <svg viewBox="0 0 1200 100" className="w-full h-auto text-gray-100 fill-current">
                        <path d="M0,0 C300,100 900,100 1200,0 L1200,100 L0,100 Z"></path>
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto">

                    {/* Content grid - Swapped order */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Testimonial column - Now on the left */}
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-gray-800">WHAT PEOPLE ARE SAYING</h3>

                            {/* Testimonial card */}
                            <div className="bg-sky-500 text-white p-6 rounded-lg shadow-lg">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                                        <img
                                            src={currentReview.avatar || "/placeholder.svg"}
                                            alt={currentReview.name}
                                            width={40}
                                            height={40}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h4 className="text-lg font-medium underline">{currentReview.name}</h4>
                                </div>

                                <blockquote className="text-xl mb-6">"{currentReview.quote}"</blockquote>

                                <div className="flex items-center text-sm">
                                    <span>{currentReview.role}</span>
                                    <span className="mx-2">|</span>
                                    <span>{currentReview.name}</span>
                                </div>
                            </div>

                            {/* Navigation buttons */}
                            <div className="flex space-x-4">
                                <button
                                    onClick={prevReview}
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
                                    onClick={nextReview}
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

                        {/* Image column - Now on the right */}
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


        </>
    )
}
