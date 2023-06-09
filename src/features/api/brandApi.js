import apiSlice from "./apiSlice";

const brandApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBrands: builder.query({
      query: () => ({
        url: "/brand",
      }),
      providesTags: ["brands"],
    }),
    removeBrand: builder.mutation({
      query: (id) => ({
        url: `/brand/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["brands"],
    }),
  }),
});

export const { useGetAllBrandsQuery, useRemoveBrandMutation } = brandApi;
