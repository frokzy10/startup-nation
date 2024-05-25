import React, {useEffect, useState} from 'react';
import {FormControl, InputLabel, NativeSelect} from "@mui/material";
import {ICountry, ICity} from "@/app/_types/types";
import Spinner from "@/shared/spinner/ui/Spinner";

interface ICityChoose {
    city: string,
    setCity: React.Dispatch<React.SetStateAction<string>>
}

const ChooseCity = (props: ICityChoose) => {
    const {city, setCity} = props;
    const [countries, setCountries] = useState<ICountry[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const res = await fetch("http://localhost:3000/api/country");
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                setIsLoading(true)
                const data = await res.json();
                setCountries(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchCountries();
    }, []);

    if (isLoading) return <Spinner/>

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Город
            </InputLabel>
            <NativeSelect
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
                        <option key={city._id} value={`${city.name}`}>
                            {city.name}
                        </option>
                    ))
                ))}
            </NativeSelect>
        </FormControl>
    );
};

export default ChooseCity;
