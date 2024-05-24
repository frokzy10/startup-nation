import React from 'react';
import {FormControl, InputLabel, NativeSelect} from "@mui/material";

interface ICountryChoose {
    option:string,
    setOption: React.Dispatch<React.SetStateAction<string>>
}

const CountryChoose = (props:ICountryChoose) => {
    const {option,setOption} = props;
    return (
        <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Страна
            </InputLabel>
            <NativeSelect
                onChange={(e) => setOption(e.target.value)}
                value={option}
                defaultValue={30}
                inputProps={{
                    name: 'age',
                    id: 'uncontrolled-native',
                }}
            >
                <option value=""></option>
                <option value="kyrgyz">Кыргызстан</option>
                <option value="kazakh">Казахстан</option>
                <option value="kazakh">Россия</option>
            </NativeSelect>
        </FormControl>
    );
};

export default CountryChoose;