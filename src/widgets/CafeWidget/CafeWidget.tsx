import React from 'react';
import cls from "@/app/start/[cityId]/Idpage.module.scss";
import {Container, Grid, ImageListItem} from "@mui/material";
import {ICity} from "@/RenderComponents/Types/types";
import Link from "next/link";
import {useParams} from "next/navigation";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const CafeWidget = ({cities}: { cities: ICity }) => {
    const params = useParams();
    return (
        <Container sx={{marginBottom:"20px"}} className={cls.container}>
            <Grid container spacing={2} sx={{marginTop: "1rem", flexGrow: 1, padding: 0}}>
                {cities.cafes?.map((c) => (
                    <Grid item xs={12} sm={6} md={4} key={c._id}>
                        <Link href={`/start/${params.cityId}/${c._id}`}>
                            <Box className={cls.card} sx={{ padding: 0 }}>
                                <ImageListItem className={cls.cardImg} key={c.cafeImage}>
                                    <Image
                                        src={c.cafeImage}
                                        alt={c.cafeName}
                                        layout="fill"
                                        objectFit="cover"
                                        onError={(e) => {
                                            e.currentTarget.src = "path/to/default/image.jpg";
                                        }}
                                    />
                                </ImageListItem>
                                <Box className={cls.info}>
                                    <Typography variant="h5">{c.cafeName}</Typography>
                                    <Typography variant="body2">Рейтинг: {c.cafeRating}</Typography>
                                </Box>
                            </Box>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default CafeWidget;