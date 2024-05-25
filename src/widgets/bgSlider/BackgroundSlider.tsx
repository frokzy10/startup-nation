import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';

interface BackgroundSliderProps {
    images: string[];
    duration?: number; // Duration in seconds
}

const BackgroundContainer = styled('div')<{ backgroundImage: string }>(({ backgroundImage }) => ({
    width: '100%',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(${backgroundImage})`,
    transition: 'background-image 1s ease-in-out',
}));

const BackgroundSlider: React.FC<BackgroundSliderProps> = ({ images, duration = 5 }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, duration * 1000);

        return () => clearInterval(interval);
    }, [images, duration]);

    return (
        <BackgroundContainer backgroundImage={images[currentImageIndex]} />
    );
};

export default BackgroundSlider;
