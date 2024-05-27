"use client"
import React from "react";
import BackgroundSlider from "@/widgets/bgSlider/BackgroundSlider";

export default function Home() {
    const images = [
        'https://www.hdwallpapers.in/download/russia_moscow_cityscape_4k_hd-3840x2160.jpg',
        'https://sputnik.kg/img/104881/26/1048812689_0:0:3641:2048_1920x0_80_0_0_2f81e7f61349d504927032c511ce78d8.jpg',
        'https://free4kwallpapers.com/uploads/originals/2018/02/09/central-downtown-astana-kazakhstan-wallpaper.jpg',
    ];
    return (
        <>
            <BackgroundSlider images={images} duration={5}/>
        </>
    )
}

