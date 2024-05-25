"use client"
import React, {useEffect, useState} from 'react'
import {Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import CountryChoose from "@/widgets/CountryChoose/ui/CountryChoose";
import BackWidget from "@/widgets/backWidget/ui/BackWidget";
import ChooseCity from "@/widgets/ChooseCity/ui/ChooseCity";
import {StylesButton} from "@/app/start/StartPage.styles";
import Box from "@mui/material/Box";
import {useRouter} from "next/navigation";
import {useAppDispatch} from "@/shared";
import {isAuthSelectors, setIsAuth} from "@/entities/isAuth";
import {useSelector} from "react-redux";


const StartPage = () => {
    const [country, setCountry] = useState("");
    const [city, setCity] = useState<string>("");
    const router   = useRouter();
    const dispatch = useAppDispatch();
    const getIs = useSelector(isAuthSelectors.getIsAuth);

    console.log(getIs)
    const handleClick = () => {
        if(!country || !city){
            console.log(false)
            return
        }else{
            router.push(`/start/${city}`)
            return dispatch(setIsAuth(true))
        }
    }
    return (
        <Container sx={{marginTop: "20px"}}>
            <BackWidget/>
            <Typography variant="h5">Выберите страну проживания</Typography>
            <CountryChoose country={country} setCountry={setCountry}/>
            <Typography variant="h5">Выберите город проживания</Typography>
            <ChooseCity city={city} setCity={setCity}/>
            <Box sx={{width: "100%", display: "flex", justifyContent: "flex-end", marginTop: "15px"}}>
                <StylesButton onClick={handleClick} variant="contained">
                    Перейти
                </StylesButton>
            </Box>
        </Container>
    )
}
export default StartPage;