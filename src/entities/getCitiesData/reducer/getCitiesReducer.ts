import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { $API } from '@/shared';
import { ICity } from '@/RenderComponents/Types/types';

export const citiesApi = createApi({
    reducerPath: 'citiesApi',
    baseQuery: fetchBaseQuery({ baseUrl: $API }),
    endpoints: (builder) => ({
        getCityById: builder.query<ICity, string>({
            query: (cityId) => `/api/country/${cityId}`,
        }),
    }),
});

export const { useGetCityByIdQuery } = citiesApi;
