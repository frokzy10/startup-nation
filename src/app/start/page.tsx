"use client"
import React, {useEffect, useState} from 'react'
import {Container, InputLabel, NativeSelect} from "@mui/material";
import Typography from "@mui/material/Typography";
import BackWidget from "@/widgets/backWidget/ui/BackWidget";
import {StylesButton} from "@/app/start/StartPage.styles";
import Box from "@mui/material/Box";
import {$API, useAppDispatch} from "@/shared";
import {FormControl} from "@mui/material";
import {ICity, ICountry} from "@/RenderComponents/Types/types";
import {useRouter} from "next/navigation";
import {setIsAuth} from "@/entities/isAuth";
import Spinner from "@/shared/spinner/ui/Spinner";

const StartPage = () => {
    const dispatch = useAppDispatch()
    const [countries, setCountries] = useState<ICountry[]>([]);
    const [country, setCountry] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter()
    useEffect(() => {
        const fetchCity = async () => {
            try {
                const res = await fetch(`${$API}/api/country/66518159395abf6996ebd04e`)
                setIsLoading(true)
                const data = await res.json()
                return data;
            } catch (e) {
                console.log(e)
            } finally {
                setIsLoading(false)
            }
        }
        fetchCity()
    }, []);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const res = await fetch(`${$API}/api/country`);
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                setIsLoading(true)
                const data = await res.json();
                setCountries(data);
            } catch (err: any) {
                console.log(err)
            } finally {
                setIsLoading(false);
            }
        };
        fetchCountries();
    }, []);
    console.log(city)
    if (isLoading) return <Spinner/>;
    const handleNavigate = () => {
        dispatch(setIsAuth(true))
        return router.push(`/start/${city}`)
    }
    return (
        <Container sx={{marginTop: "20px"}}>
            <BackWidget/>
            <Typography variant="h5">Выберите страну проживания</Typography>
            <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Страна
                </InputLabel>
                <NativeSelect
                    onChange={(e) => setCountry(e.target.value)}
                    value={country}
                    defaultValue={30}
                    inputProps={{
                        name: 'age',
                        id: 'uncontrolled-native',
                    }}
                >
                    <option value=""></option>
                    {countries.map((c) => (
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
                        name: 'country',
                        id: 'uncontrolled-native',
                    }}
                >
                    <option value=""></option>
                    {countries.map((country) => (
                        country.cities.map((city: ICity) => (
                            <option key={city._id.toString()} value={`${city._id}`}>
                                {city.name}
                            </option>
                        ))
                    ))}
                </NativeSelect>
            </FormControl>
            <Box sx={{width: "100%", display: "flex", justifyContent: "flex-end", marginTop: "15px"}}>
                <StylesButton onClick={handleNavigate} variant="contained" disabled={!city || !country}>
                    Перейти
                </StylesButton>
            </Box>
        </Container>
    )
}
export default StartPage;