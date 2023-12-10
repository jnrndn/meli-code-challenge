import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const url = `${process.env.NEXT_PUBLIC_API_URL}`;
export const itemApi = createApi({
  reducerPath: 'itemApi',
  refetchOnFocus: true,
  tagTypes: ['items', 'item'],
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  endpoints: (builder) => ({
    getItems: builder.query({
      query: (searchQuery) => `item?search=${searchQuery}`,
      providesTags: ['items'],
    }),
    getItemById: builder.query({
      query: (id) => `item/${id}`,
      providesTags: ['item'],
    }),
  }),
});

export const { useGetItemsQuery, useGetItemByIdQuery } = itemApi;
