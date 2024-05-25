import React from 'react';
import {ICity} from "@/app/_types/types";
import HotelsComponents from "@/RenderComponents/HotelComponents/HotelsComponents";

const CityComponents = ({city}: { city: ICity }) => {
    return (
        <>
            {city.hotels?.map((h, index) => (
                <>
                    <HotelsComponents hotel={h} key={index}/>
                </>
            ))}
        </>
    );
};

export default CityComponents;