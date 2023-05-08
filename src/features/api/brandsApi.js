import apiSlice from "./apiSlice";

const brandsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBrand: builder.query({
      query: () => ({
        url: "/brands",
      }),
      providesTags: ["brands"],
    }),
  }),
});

export const { useGetAllBrandQuery } = brandsApi;
