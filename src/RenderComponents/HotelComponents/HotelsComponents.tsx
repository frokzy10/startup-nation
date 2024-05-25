import React from 'react';
import {IHotel} from "@/app/_types/types";

const HotelsComponents = ({hotel}:{hotel:IHotel}) => {
    return (
        <>
            {hotel.name}
        </>
    );
};

export default HotelsComponents;