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
import {IMeals} from "@/RenderComponents/Types/types";

const HotelPage = () => {
    const params = useParams();
    const location = usePathname();
    const secondPort = location.split("/")[2];
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);
    const {data, error, isLoading} = useGetProductIdQuery({secondPort: secondPort, productId: params.productId});

    const handleImageLoad = () => {
        setImageLoaded(true);
    };
    const handleImageError = () => {
        setImageLoaded(true);
    };
    if (isLoading) return <Spinner/>
    console.log(data)
    return (
        <>
            <Container className={cls.hotelWrapper}>
                <BackWidget/>
                <Box className={cls.HotelBox}>
                    <Image
                        className={cls.hotelImg}
                        width={570}
                        height={450}
                        objectFit="cover"
                        src={data?.image || data?.cafeImage ? `${data.image || data?.cafeImage}` : '/placeholder.jpg'}
                        alt={data?.name || 'Placeholder'}
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                    />
                    {!imageLoaded && <Spinner/>}
                    <Box className={cls.leftHotelSide}>
                        <Typography variant="h3">{data?.name || data?.cafeName}</Typography>
                        <Typography className={cls.hotelDescription}
                                    variant="h6">{data?.description || data?.cafeDescription}</Typography>
                        <Typography className={cls.hotelCost} variant="h5">
                            Цена в сутки {data?.costAnHour ? data?.costAnHour : "0"}
                        </Typography>
                        {data?.isCafes && data?.cafeTime && (
                            <Typography sx={{textAlign: "right"}} variant="body1">
                                График работы: {data?.cafeTime}
                            </Typography>
                        )}
                    </Box>
                </Box>
                <Box>
                    {data?.isCafes && (
                        <>
                            <Typography variant="h3">
                                Блюда из ресторана {data?.name}
                            </Typography>
                            {data?.cafeMeals.map((m: IMeals) => (
                                <>
                                    <Box>
                                        <li>
                                            {m.name}
                                        </li>
                                        <Box>
                                            {m.description}
                                        </Box>
                                    </Box>
                                </>
                            ))}
                        </>
                    )}


                </Box>
            </Container>
        </>
    );
};

export default HotelPage;
