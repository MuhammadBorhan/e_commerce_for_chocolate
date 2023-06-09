import apiSlice from "./apiSlice";

const regionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllRegion: builder.query({
      query: () => ({
        url: "/regions",
      }),
      providesTags: ["regions"],
    }),
    removeRegion: builder.mutation({
      query: (id) => ({
        url: `/region/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["regions"],
    }),
  }),
});

export const { useGetAllRegionQuery, useRemoveRegionMutation } = regionApi;
