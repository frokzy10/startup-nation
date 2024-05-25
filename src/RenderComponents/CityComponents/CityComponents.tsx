"use client"
import React from 'react';
import HotelsComponents from "@/RenderComponents/HotelComponents/HotelsComponents";
import {ICity} from "@/RenderComponents/Types/types";
import {ImageList} from "@mui/material";

const CityComponents = ({city}: { city: ICity }) => {
    return (
        <>
            {city.hotels && Object.entries(city.hotels).map(([key, hotel]) => (
                <ImageList sx={{width: 500, height: 450}} cols={3} rowHeight={164}>
                    <HotelsComponents key={key} hotel={hotel}/>
                </ImageList>
            ))}
        </>
    );
};

export default CityComponents;