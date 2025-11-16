import React, { useState, useEffect } from 'react';

export const ImageSlideshow = () => {
    const placeholderImages = [
        '/images/image1.jpg',
        '/images/image2.jpg',
        '/images/image3.jpg'
    ];
    const [images] = useState(placeholderImages);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length > 0) {
            const timer = setInterval(() => {
                setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
            }, 5000); // Change image every 5 seconds
            return () => clearInterval(timer); // Cleanup on unmount
        }
    }, [images.length]);

    if (!images || images.length === 0) {
        return null;
    }

    return (
        <div className="slideshow-container">
            <img src={images[currentIndex]} alt="Cybersecurity theme placeholder" className="slideshow-image" />
        </div>
    );
};
