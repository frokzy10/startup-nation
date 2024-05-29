"use client"
import React from 'react';
import cls from "@/app/start/[cityId]/Idpage.module.scss";
import {Container, Grid, ImageListItem} from "@mui/material";
import Link from "next/link";
import {ICity} from "@/RenderComponents/Types/types";
import {useParams} from "next/navigation";
import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from "@mui/material/Typography";

interface HotelWidgetProps {
    cities: ICity;
}

const HotelWidget: React.FC<HotelWidgetProps> = ({ cities }) => {
    const params = useParams();
    return (
        <Container className={cls.container}>
            <Grid container spacing={2} sx={{ marginTop: "1rem", flexGrow: 1 }}>
                {cities.hotels?.map((hotel) => (
                    <Grid item xs={12} sm={6} md={4} key={hotel._id}>
                        <Link href={`/start/${params.cityId}/${hotel._id}`} passHref legacyBehavior>
                            <a>
                                <Box className={cls.card} sx={{ padding: 0 }}>
                                    <ImageListItem className={cls.cardImg} key={hotel.image}>
                                        <Image
                                            src={hotel.image}
                                            alt={hotel.name}
                                            layout="fill"
                                            objectFit="cover"
                                            onError={(e) => {
                                                e.currentTarget.src = "path/to/default/image.jpg";
                                            }}
                                        />
                                    </ImageListItem>
                                    <Box className={cls.info}>
                                        <Typography variant="h5">{hotel.name}</Typography>
                                        <Typography variant="body2">Сутка: {hotel.costAnHour}$</Typography>
                                    </Box>
                                </Box>
                            </a>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default HotelWidget;
