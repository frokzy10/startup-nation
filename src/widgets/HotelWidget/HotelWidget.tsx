import React from 'react';
import cls from "@/app/start/[cityId]/Idpage.module.scss";
import {Container, Grid} from "@mui/material";
import Link from "next/link";
import HotelsComponents from "@/RenderComponents/HotelComponents/HotelsComponents";
import {ICity} from "@/RenderComponents/Types/types";
import {useParams} from "next/navigation";

const HotelWidget = ({cities}:{cities:ICity}) => {
    const params = useParams();
    return (
        <Container className={cls.container}>
            <Grid container spacing={2} sx={{marginTop: "1rem", flexGrow: 1, padding: 0}}>
                {cities.hotels?.map((h, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Link href={`/start/${params.cityId}/${h._id}`}
                              legacyBehavior>
                            <a>
                                <HotelsComponents hotel={h}/>
                            </a>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default HotelWidget;