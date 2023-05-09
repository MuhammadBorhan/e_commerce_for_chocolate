import apiSlice from "./apiSlice";

const brandsItemApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBrandItem: builder.query({
      query: () => ({
        url: "/brandsItem",
      }),
      providesTags: ["brandsItem"],
    }),
  }),
});

export const { useGetAllBrandItemQuery } = brandsItemApi;
