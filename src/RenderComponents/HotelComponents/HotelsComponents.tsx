import React from 'react';
import {IHotel} from "@/RenderComponents/Types/types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {ImageListItem} from "@mui/material";

const HotelsComponents = ({hotel}: { hotel: IHotel }) => {
    return (
        <Box>
            <Typography>
                {hotel.name}
            </Typography>
            <ImageListItem key={hotel.image}>
                <img
                    src={hotel.image}
                    srcSet={hotel.image}
                    alt={hotel.name}
                    loading="lazy"
                />
            </ImageListItem>
        </Box>
    );
};

export default HotelsComponents;