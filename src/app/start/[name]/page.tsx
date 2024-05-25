"use client"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {ICountry} from "@/app/_types/types";
import CountryComponent from "@/RenderComponents/CountryComponent/CountryComponent";

export default function Page() {
    const params = useParams();
    const [countries, setCountries] = useState<ICountry[]>([]);
    const [isLoading, setIsLoading] = useState(false);

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

    return (
        <main>
            {countries.map((country)=>(
                <CountryComponent country={country} key={country._id}/>
            ))}
        </main>
    );
}
