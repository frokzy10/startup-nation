"use client"
import React, {useState} from 'react';
import {useParams, usePathname} from "next/navigation";
import Spinner from "@/shared/spinner/ui/Spinner";
import Container from "@mui/material/Container";
import Image from "next/image";
import Box from "@mui/material/Box";
import cls from "./Product.module.scss";
import Typography from "@mui/material/Typography";
import BackWidget from "@/widgets/backWidget/ui/BackWidget";
import {useGetProductIdQuery} from "@/entities/getProductData/reducer/productReducer";

const HotelPage = () => {
    const params = useParams();
    const location = usePathname();
    const secondPort = location.split("/")[2];
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);
    const {data: hotel, isLoading} = useGetProductIdQuery({secondPort, productId: params.productId})

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const handleImageError = () => {
        setImageLoaded(true);
    };

    if (isLoading) return <Spinner/>
    return (
        <>
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
        </>
    );
};

export default HotelPage;
