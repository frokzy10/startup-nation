import React from 'react';
import cls from "@/app/start/[cityId]/Idpage.module.scss";
import {Container, Grid} from "@mui/material";
import Link from "next/link";
import {ICity} from "@/RenderComponents/Types/types";
import {useParams} from "next/navigation";
import CafeRender from "@/RenderComponents/CafeRender/CafeRender";

const CafeWidget = ({cities}: { cities: ICity }) => {
    const params = useParams();
    return (
        <Container className={cls.container}>
            <Grid container spacing={2} sx={{marginTop: "1rem", flexGrow: 1, padding: 0}}>
                {cities.cafes?.map((c, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <CafeRender cafe={c}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default CafeWidget;