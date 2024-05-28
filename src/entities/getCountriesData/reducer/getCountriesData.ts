import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {$API} from "@/shared";
import {ICountry} from "@/RenderComponents/Types/types";


export const countriesApi = createApi({
    reducerPath: "countriesApi",
    baseQuery: fetchBaseQuery({baseUrl: $API}),
    endpoints: (builder) => ({
        getCountries: builder.query<ICountry[], void>({
            query: () => '/api/country',
        }),
    }),
});
export const {useGetCountriesQuery} = countriesApi