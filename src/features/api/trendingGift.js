import apiSlice from "./apiSlice";

const trendingGiftApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllTrendGift: builder.query({
      query: () => ({
        url: "/trendgift",
      }),
      providesTags: ["trend"],
    }),
    removeTrendGift: builder.mutation({
      query: (id) => ({
        url: `/trendgift/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["trend"],
    }),
  }),
});

export const { useGetAllTrendGiftQuery, useRemoveTrendGiftMutation } =
  trendingGiftApi;
