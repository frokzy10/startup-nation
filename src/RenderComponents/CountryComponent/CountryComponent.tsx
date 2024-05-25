import React from 'react';
import CityComponents from "@/RenderComponents/CityComponents/CityComponents";
import {ICountry} from "@/RenderComponents/Types/types";
import Typography from "@mui/material/Typography";

const CountryComponent = ({country}: { country: ICountry }) => {
    return (
        <>
            <Typography variant="h4" >Отели кырг</Typography>
            <div>
                {country.cities.map((city, index) => (
                    <>
                        <CityComponents city={city} key={index}/>
                    </>
                ))}
            </div>
        </>
    );
};

export default CountryComponent;