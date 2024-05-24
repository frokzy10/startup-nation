import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, NativeSelect } from "@mui/material";
import { ICountry, ICity } from "@/app/_types/types";

interface ICityChoose {
    option: string,
    setOption: React.Dispatch<React.SetStateAction<string>>
}

const ChooseCity: React.FC<ICityChoose> = ({ option, setOption }) => {
    const [countries, setCountries] = useState<ICountry[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const res = await fetch("http://localhost:3000/api/country");
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await res.json();
                setCountries(data);
            } catch (err:any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCountries();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Город
            </InputLabel>
            <NativeSelect
                onChange={(e) => setOption(e.target.value)}
                value={option}
                inputProps={{
                    name: 'country',
                    id: 'uncontrolled-native',
                }}
            >
                <option value=""></option>
                {countries.map((country) => (
                    <optgroup key={country._id}>
                        {country.cities.map((city: ICity) => (
                            <option key={city._id} value={city.name}>
                                {city.name}
                            </option>
                        ))}
                    </optgroup>
                ))}
            </NativeSelect>
        </FormControl>
    );
};

export default ChooseCity;
