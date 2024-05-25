"use client"
import { useEffect, useState } from "react";
import CountryComponent from "@/RenderComponents/CountryComponent/CountryComponent";
import {ICountry} from "@/RenderComponents/Types/types";
import {Container, Divider, TextField} from "@mui/material";
import {useSelector} from "react-redux";
import {isAuthSelectors} from "@/entities/isAuth";
import {redirect} from "next/navigation";

export default function Page() {
    const [countries, setCountries] = useState<ICountry[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const isAuth = useSelector(isAuthSelectors.getIsAuth);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const res = await fetch("http://localhost:3000/api/country");
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await res.json();
                setCountries(data);
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchCountries();
    }, []);

    if(!isAuth) return redirect("/start")

    return (
        <Container sx={{marginTop:"15px"}}>
            <TextField fullWidth label="Что вы хотите найти?" id="fullWidth" />
            <Divider sx={{marginTop:"10px"}}/>
            {countries.map((country)=>(
                <CountryComponent country={country} key={country._id.toString()}/>
            ))}
        </Container>
    );
}
