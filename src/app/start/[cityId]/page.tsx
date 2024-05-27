"use client"
import {useEffect, useState} from "react";
import {Container, Divider, Grid, TextField} from "@mui/material";
import {useParams} from "next/navigation";
import {ICity} from "@/RenderComponents/Types/types";
import HotelsComponents from "@/RenderComponents/HotelComponents/HotelsComponents";
import Spinner from "@/shared/spinner/ui/Spinner";
import Typography from "@mui/material/Typography";
import cls from "./Idpage.module.scss"
import Link from "next/link";
import {$API} from "@/shared";

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
    }, []);

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
                        </>
                    )}
                </Container>
            )}
        </>
    );
}