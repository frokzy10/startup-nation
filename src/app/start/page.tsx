"use client"
import React, {useEffect, useState} from 'react'
import {Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import CountryChoose from "@/widgets/CountryChoose/ui/CountryChoose";
import BackWidget from "@/widgets/backWidget/ui/BackWidget";
import ChooseCity from "@/widgets/ChooseCity/ui/ChooseCity";


const StartPage = () => {
    const [option, setOption] = useState("");

    return (
        <Container sx={{marginTop: "20px"}}>
            <BackWidget/>
            <Typography variant="h5">Выберите страну проживания</Typography>
            <CountryChoose option={option} setOption={setOption}/>
            <ChooseCity/>
        </Container>
    )
}
export default StartPage;