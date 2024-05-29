"use client"
import {useEffect, useState} from "react";
import {Container, Divider, Grid, TextField} from "@mui/material";
import {useParams} from "next/navigation";
import Typography from "@mui/material/Typography";
import CafeWidget from "@/widgets/CafeWidget/CafeWidget";
import HotelWidget from "@/widgets/HotelWidget/HotelWidget";
import {useGetCityByIdQuery} from "@/entities/getCitiesData/reducer/getCitiesReducer";
import Spinner from "@/shared/spinner/ui/Spinner";

export default function IdPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const {cityId} = useParams() as {cityId:string};
    const {data, isLoading} = useGetCityByIdQuery(cityId);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    if(isLoading) return <Spinner/>
    console.log(data)
    return (
        <>

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
                    {data && (
                        <>
                            <Typography sx={{fontSize: "25px", marginTop: "10px"}} variant="h3">
                                Отели города {data.name}
                            </Typography>
                            <HotelWidget cities={data}/>
                            <Typography sx={{fontSize: "25px", marginTop: "30px"}} variant="h3">
                                Кафешки
                            </Typography>
                            <CafeWidget cities={data}/>
                        </>
                    )}
                </Container>
        </>
    );
}