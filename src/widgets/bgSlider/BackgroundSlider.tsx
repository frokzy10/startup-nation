import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';
import Link from "next/link";
import {useSelector} from "react-redux";
import {isAuthSelectors} from "@/entities/isAuth";
import {Overlay, BackgroundContainer,ContentContainer} from "../bgSlider/BackgroundSlider.styles";

interface BackgroundSliderProps {
    images: string[];
    duration?: number; // Duration in seconds
}

const BackgroundSlider: React.FC<BackgroundSliderProps> = ({ images, duration = 5 }) => {
    const isAuth = useSelector(isAuthSelectors.getIsAuth);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, duration * 1000);

        return () => clearInterval(interval);
    }, [images, duration]);

    return (
        <BackgroundContainer backgroundImage={images[currentImageIndex]}>
            <Overlay />
            <ContentContainer>
                <Typography sx={{textAlign: "center", fontSize: "2.5rem"}} variant="h2">
                    Добро пожаловать в перенаправление!
                </Typography>
                {!isAuth ? (
                    <Link href="/start">
                        <Button variant="contained" sx={{display: "flex", m: "15px auto"}}>
                            Перейти
                        </Button>
                    </Link>
                ) : (
                    <Link href="/start/:name">
                        <Button variant="contained" sx={{display: "flex", m: "15px auto"}}>
                            Перейти
                        </Button>
                    </Link>
                )}
            </ContentContainer>
        </BackgroundContainer>
    );
};

export default BackgroundSlider;
