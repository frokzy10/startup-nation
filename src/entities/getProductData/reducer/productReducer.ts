import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { $API } from "@/shared";
import { IHotel } from "@/RenderComponents/Types/types";

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: $API }),
    endpoints: (builder) => ({
        getProductId: builder.query<IHotel, { secondPort: string, productId: any }>({
            query: ({ secondPort, productId }) => `/api/country/${secondPort}/${productId}`,
        }),
    }),
});

export const { useGetProductIdQuery } = productApi;
