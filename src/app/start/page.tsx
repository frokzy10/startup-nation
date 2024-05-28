"use client"
import React, { useState } from 'react';
import { Container, InputLabel, NativeSelect, FormControl, Box, Typography } from "@mui/material";
import BackWidget from "@/widgets/backWidget/ui/BackWidget";
import { StylesButton } from "@/app/start/StartPage.styles";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/shared";
import { ICity, ICountry } from "@/RenderComponents/Types/types";
import { setIsAuth } from "@/entities/isAuth";
import Spinner from "@/shared/spinner/ui/Spinner";
import { useGetCountriesQuery } from "@/entities/getCountriesData/reducer/getCountriesData";

const StartPage = () => {
    const dispatch = useAppDispatch();
    const { data: countries,isLoading } = useGetCountriesQuery();
    const [country, setCountry] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const router = useRouter();

    const handleNavigate = () => {
        dispatch(setIsAuth(true));
        router.push(`/start/${city}`);
    };

    if (isLoading) return <Spinner />;

    return (
        <Container sx={{ marginTop: "20px", marginBottom: "200px" }}>
            <BackWidget />
            <Typography variant="h5">Выберите страну проживания</Typography>
            <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Страна
                </InputLabel>
                <NativeSelect
                    onChange={(e) => setCountry(e.target.value)}
                    value={country}
                    inputProps={{
                        name: 'country',
                        id: 'uncontrolled-native',
                    }}
                >
                    <option value=""></option>
                    {countries?.map((c: ICountry) => (
                        <option key={c._id.toString()} value={c.country}>
                            {c.country}
                        </option>
                    ))}
                </NativeSelect>
            </FormControl>
            <Typography variant="h5">Выберите город проживания</Typography>
            <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Город
                </InputLabel>
                <NativeSelect
                    disabled={!country}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    inputProps={{
                        name: 'city',
                        id: 'uncontrolled-native',
                    }}
                >
                    <option value=""></option>
                    {countries?.find((c: ICountry) => c.country === country)?.cities.map((city: ICity) => (
                        <option key={city._id.toString()} value={city._id}>
                            {city.name}
                        </option>
                    ))}
                </NativeSelect>
            </FormControl>
            <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end", marginTop: "15px" }}>
                <StylesButton onClick={handleNavigate} variant="contained" disabled={!city || !country}>
                    Перейти
                </StylesButton>
            </Box>
        </Container>
    );
};

export default StartPage;
