import React, { useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';
import Link from "next/link";
import { BackgroundContainer, ContentContainer, Overlay, TransitionImage } from "../bgSlider/BackgroundSlider.styles";
import Spinner from "@/shared/spinner/ui/Spinner";

interface BackgroundSliderProps {
    images: string[];
    duration?: number;
}

const BackgroundSlider: React.FC<BackgroundSliderProps> = ({ images, duration = 5 }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [loadedImages, setLoadedImages] = useState<boolean[]>(Array(images.length).fill(false));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, duration * 1000);

        return () => clearInterval(interval);
    }, [images, duration]);

    useEffect(() => {
        images.forEach((image, index) => {
            const img = new window.Image();
            img.src = image;
            img.onload = () => {
                setLoadedImages((prev) => {
                    const newLoadedImages = [...prev];
                    newLoadedImages[index] = true;
                    return newLoadedImages;
                });
            };
        });
    }, [images]);

    const allImagesLoaded = loadedImages.every(Boolean);
    const currentImage = images[currentImageIndex];

    return (
        <BackgroundContainer>
            {!allImagesLoaded ? (
                <Spinner />
            ) : (
                <>
                    <TransitionImage backgroundImage={currentImage} />
                    <Overlay />
                    <ContentContainer>
                        <Typography sx={{ textAlign: "center", fontSize: "2.5rem" }} variant="h2">
                            Добро пожаловать в перенаправление!
                        </Typography>
                        <Link href="/start">
                            <Button variant="contained" sx={{ display: "flex", m: "15px auto" }}>
                                Перейти
                            </Button>
                        </Link>
                    </ContentContainer>
                </>
            )}
        </BackgroundContainer>
    );
};
export default BackgroundSlider