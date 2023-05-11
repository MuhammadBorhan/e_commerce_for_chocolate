import apiSlice from "./apiSlice";

const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "/products",
      }),
      providesTags: ["products"],
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
