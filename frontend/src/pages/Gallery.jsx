import React from 'react';

const Gallery = () => {
    const imageBunches = [
        [
            { width: 640, height: 1138, src: "https://assets.codepen.io/162656/morocco4.jpg" },
            { width: 640, height: 427, src: "https://assets.codepen.io/162656/morocco1.jpg" },
            { width: 640, height: 427, src: "https://assets.codepen.io/162656/morocco3.jpg" },
            { width: 640, height: 427, src: "https://assets.codepen.io/162656/morocco6.jpg" },
            { width: 640, height: 418, src: "https://assets.codepen.io/162656/morocco5.jpg" },
            { width: 640, height: 853, src: "https://assets.codepen.io/162656/morocco2.jpg" },
            { width: 640, height: 314, src: "https://assets.codepen.io/162656/morocco7.jpg" },
            { width: 640, height: 427, src: "https://assets.codepen.io/162656/morocco8.jpg" },
            { width: 640, height: 960, src: "https://assets.codepen.io/162656/morocco9.jpg" },
            { width: 640, height: 427, src: "https://assets.codepen.io/162656/morocco11.jpg" },
            { width: 640, height: 427, src: "https://assets.codepen.io/162656/morocco10.jpg" },
        ],
    ];

    return (
        <>
            <div className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-20">
                        {/* Left column with Gallery text */}
                        <div className="flex flex-col md:w-1/3">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">GALLERY</h2>
                            <div className="flex items-center">
                                <span className="text-xl md:text-2xl tracking-widest text-gray-600">G A L L E R Y</span>
                                {/* Yellow arrow - hidden on mobile */}
                                <div className="hidden md:block ml-4">
                                    <svg width="180" height="24" viewBox="0 0 180 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M179.061 13.0607C179.646 12.4749 179.646 11.5251 179.061 10.9393L169.515 1.3934C168.929 0.807611 167.979 0.807611 167.393 1.3934C166.808 1.97919 166.808 2.92893 167.393 3.51472L175.879 12L167.393 20.4853C166.808 21.0711 166.808 22.0208 167.393 22.6066C167.979 23.1924 168.929 23.1924 169.515 22.6066L179.061 13.0607ZM0 13.5H178V10.5H0V13.5Z"
                                            fill="#FFD700"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Right column with description text */}
                        <div className="md:w-2/3 relative">
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                At DHAMMANJALI INDIA PRIVATE LIMITED, our gallery captures the essence of our journey—showcasing our
                                commitment to quality, community engagement, and innovation. Each image reflects our dedication to
                                excellence and the meaningful connections we've built within the communities we serve. Explore our visual
                                story and witness the milestones that define our brand.
                            </p>

                            {/* Curved design element in bottom right */}
                            <div className="absolute -bottom-12 -right-4 w-40 h-40 md:w-64 md:h-64">
                                <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M199 199C199 89.5893 109.411 0 0 0" stroke="#F0F0F0" strokeWidth="2" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="p-4 m-0 box-border">
                <div className="mt-20 mb-6">

                    {/* Image grid */}
                    <ul className="grid grid-cols-2 gap-2 md:grid-cols-5 md:gap-6 list-none">
                        {imageBunches.map((bunch, bunchIndex) => (
                            React.Children.toArray(bunch.map((image, imageIndex) => {
                                const itemIndex = imageIndex + 1;

                                // Special styles based on position in the grid
                                let className = "";

                                // Mobile-specific special case
                                if (itemIndex % 11 === 9) {
                                    className = "col-span-2 row-span-2";
                                }

                                // Desktop-specific layout classes
                                let mdClassName = "";
                                switch (itemIndex % 11) {
                                    case 1:
                                        mdClassName = "md:col-start-1 md:row-span-2";
                                        break;
                                    case 2:
                                        mdClassName = "md:col-span-2 md:row-span-2";
                                        break;
                                    case 3:
                                        mdClassName = "md:col-start-4 md:row-span-1";
                                        break;
                                    case 4:
                                        mdClassName = "md:col-start-5 md:row-span-1";
                                        break;
                                    case 5:
                                        mdClassName = "md:col-start-4 md:row-span-1";
                                        break;
                                    case 6:
                                        mdClassName = "md:col-start-5 md:row-span-2";
                                        break;
                                    case 7:
                                        mdClassName = "md:col-start-2 md:row-span-1";
                                        break;
                                    case 8:
                                        mdClassName = "md:col-start-1 md:row-span-1";
                                        break;
                                    case 9:
                                        mdClassName = "md:col-span-2 md:row-span-2";
                                        break;
                                    case 10:
                                        mdClassName = "md:col-span-2 md:row-span-1";
                                        break;
                                    case 0: // 11th item
                                        mdClassName = "md:col-start-5 md:row-span-1";
                                        break;
                                    default:
                                        break;
                                }

                                return (
                                    <li className={`h-[30vw] md:h-[12vw] ${className} ${mdClassName}`} style={{ '--n': bunchIndex }}>
                                        <figure className="w-full h-full">
                                            <img
                                                width={image.width}
                                                height={image.height}
                                                src={image.src}
                                                alt="Morocco landscape"
                                                className="w-full h-full object-cover bg-gray-100 shadow-md"
                                            />
                                        </figure>
                                    </li>
                                );
                            }))
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Gallery;