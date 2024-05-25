import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, NativeSelect } from "@mui/material";
import { ICountry } from "@/app/_types/types";
import Spinner from "@/shared/spinner/ui/Spinner";

interface ICountryChoose {
    country: string,
    setCountry: React.Dispatch<React.SetStateAction<string>>
}

const CountryChoose: React.FC<ICountryChoose> = ({ country, setCountry }) => {
    const [countries, setCountries] = useState<ICountry[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true); // Set initial loading state to true

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
                console.log(err)
            } finally {
                setIsLoading(false);
            }
        };
        fetchCountries();
    }, []);

    if (isLoading) return <Spinner />;

    return (
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
                    <option key={c._id} value={c.country}>
                        {c.country}
                    </option>
                ))}
            </NativeSelect>
        </FormControl>
    );
};

export default CountryChoose;
