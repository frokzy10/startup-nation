"use client"
import React, { useEffect, useState } from 'react';
import { IHotel } from "@/RenderComponents/Types/types";
import { useParams, usePathname } from "next/navigation";
import { $API } from "@/shared";
import Spinner from "@/shared/spinner/ui/Spinner";
import Container from "@mui/material/Container";
import Image from "next/image";
import Box from "@mui/material/Box";
import cls from "./Product.module.scss";
import Typography from "@mui/material/Typography";
import BackWidget from "@/widgets/backWidget/ui/BackWidget";

const HotelPage = () => {
    const params = useParams();
    const location = usePathname();
    const [hotel, setHotel] = useState<IHotel | null>(null);
    const secondPort = location.split("/")[2];
    const [isLoading, setLoading] = useState<boolean>(false);
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);

    useEffect(() => {
        const fetchHotel = async () => {
            try {
                setLoading(true);
                const res = await fetch(`${$API}/api/country/${secondPort}/${params.productId}`);
                const data = await res.json();
                setHotel(data);
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        };
        fetchHotel();
    }, [secondPort, params.HotelId]);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const handleImageError = () => {
        setImageLoaded(true);
    };

    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : (
                <>
                    <Container className={cls.hotelWrapper}>
                    <BackWidget/>
                        <Box className={cls.HotelBox}>
                            <Image
                                className={cls.hotelImg}
                                width={570}
                                height={450}
                                objectFit="cover"
                                src={hotel?.image ? `${hotel.image}` : '/placeholder.jpg'}
                                alt={hotel?.name || 'Placeholder'}
                                onLoad={handleImageLoad}
                                onError={handleImageError}
                            />
                            {!imageLoaded && <Spinner/>}
                            <Box className={cls.leftHotelSide}>
                                <Typography variant="h3">{hotel?.name}</Typography>
                                <Typography className={cls.hotelDescription}
                                            variant="body1">{hotel?.description}</Typography>
                                <Typography className={cls.hotelCost} variant="h5">Цена в
                                    сутки {hotel?.costAnHour}сом</Typography>
                            </Box>
                        </Box>
                    </Container>
                </>
            )}
        </>
    );
};

export default HotelPage;
