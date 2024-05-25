import React from 'react';
import {ICountry} from "@/app/_types/types";
import CityComponents from "@/RenderComponents/CityComponents/CityComponents";

const CountryComponent = ({country}: { country: ICountry }) => {
    return (
        <>
            <div>{country.country}</div>
            <div>{country.description}</div>
            <h2>Отели кырг</h2>
            <div>
                {country.cities.map((city, index) => (
                    <>
                        <h2>{city.name}</h2>
                        <CityComponents city={city} key={index}/>
                    </>
                ))}
            </div>
        </>
    );
};

export default CountryComponent;