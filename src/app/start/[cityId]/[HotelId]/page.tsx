"use client"
import React from 'react';
import {IHotel} from "@/RenderComponents/Types/types";
import {useParams} from "next/navigation";

const HotelPage = ({hotel}: { hotel: IHotel }) => {
    const params = useParams();
    return (
        <>
            <div>{params.hotelname}</div>
        </>
    );
};

export default HotelPage;