"use client"
import React, {useEffect, useState} from 'react';
import {IHotel} from "@/RenderComponents/Types/types";
import {useParams, usePathname} from "next/navigation";
import {$API} from "@/shared";

const HotelPage = () => {
    const params = useParams();
    const location = usePathname()
    const [hotel,setHotel] = useState<IHotel | null>(null)
    const secondPort = location.split("/")[2];

    useEffect(() => {
        const fetchHotel = async () => {
            const res = await fetch(`${$API}/api/country/${secondPort}/${params.HotelId}`)
            const data = await res.json();
            setHotel(data)
            return data
        }
        fetchHotel()
    }, []);

    return (
        <>
            <div>
                {hotel?.name}
            </div>
        </>
    );
};

export default HotelPage;