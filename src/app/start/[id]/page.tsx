"use client"
import {useEffect, useState} from "react";
import {Container, Divider, TextField} from "@mui/material";
import {useParams} from "next/navigation";
import {ICity} from "@/RenderComponents/Types/types";
import HotelsComponents from "@/RenderComponents/HotelComponents/HotelsComponents";

export default function Page() {
    const [cities, setCities] = useState<ICity | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const params = useParams();

    useEffect(() => {
        const fetchCity = async () => {
            try {
                const res = await fetch(`http://localhost:3000/api/country/${params.id}`)
                const data = await res.json();
                setCities(data)
                setIsLoading(true)
                return data
            } catch (e) {
                console.log(e)
            } finally {
                setIsLoading(false)
            }
        }
        fetchCity()
    }, []);

    console.log(cities)

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    return (
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
                    <li>{cities.name}</li>
                    <div>
                        {cities.hotels?.map((h, index) => (
                            <HotelsComponents hotel={h} key={index}/>
                        ))}
                    </div>
                </>
            )}
        </Container>
    );
}
