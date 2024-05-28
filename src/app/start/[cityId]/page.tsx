"use client"
import {useEffect, useState} from "react";
import {Container, Divider, Grid, TextField} from "@mui/material";
import {useParams} from "next/navigation";
import {ICity} from "@/RenderComponents/Types/types";
import Spinner from "@/shared/spinner/ui/Spinner";
import Typography from "@mui/material/Typography";
import {$API} from "@/shared";
import CafeWidget from "@/widgets/CafeWidget/CafeWidget";
import HotelWidget from "@/widgets/HotelWidget/HotelWidget";

export default function IdPage() {
    const [cities, setCities] = useState<ICity | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState("");
    const params = useParams();

    useEffect(() => {
        const fetchCity = async () => {
            try {
                setIsLoading(true)
                const res = await fetch(`${$API}/api/country/${params.cityId}`)
                const data = await res.json();
                setCities(data)
                return data
            } catch (e) {
                console.log(e)
            } finally {
                setIsLoading(false)
            }
        }
        fetchCity()
    }, [params.cityId]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };
    return (
        <>
            {isLoading ? (
                <Spinner/>
            ) : (
                <Container sx={{marginTop: "15px"}}>
                    <TextField
                        fullWidth
                        label="Что вы хотите найти?"
                        id="search"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        autoComplete={"off"}
                    />
                    <Divider sx={{marginTop: "10px"}}/>
                    {cities && (
                        <>
                            <Typography sx={{fontSize: "25px", marginTop: "10px"}} variant="h3">
                                Отели города {cities.name}
                            </Typography>
                            <HotelWidget cities={cities}/>
                            <CafeWidget cities={cities}/>
                        </>
                    )}
                </Container>
            )}
        </>
    );
}