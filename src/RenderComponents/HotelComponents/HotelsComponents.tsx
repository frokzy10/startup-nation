import React from 'react';
import { IHotel } from "@/RenderComponents/Types/types";
import { Grid, ImageListItem } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import cls from "./Hotel.module.scss";

const HotelsComponents = ({ hotel }: { hotel: IHotel }) => {
    return (
        <Grid item xs={12} md={100}>
            <Box className={cls.card} sx={{padding:0}}>
                <ImageListItem className={cls.cardImg} key={hotel.image}>
                    <img
                        src={hotel.image}
                        srcSet={hotel.image}
                        alt={hotel.name}
                        loading="lazy"
                        onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = "path/to/default/image.jpg";
                        }}
                    />
                </ImageListItem>
                <Box className={cls.info}>
                    <Typography variant="h5">{hotel.name}</Typography>
                    <Typography variant="body2">{hotel.costAnHour}</Typography>
                </Box>
            </Box>
        </Grid>
    );
};

export default HotelsComponents;
