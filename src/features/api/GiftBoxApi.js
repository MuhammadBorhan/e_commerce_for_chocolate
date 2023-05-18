import apiSlice from "./apiSlice";

const GiftBoxApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllGiftBox: builder.query({
      query: () => ({
        url: "/giftbox",
      }),
      providesTags: ["giftboxs"],
    }),
    removeGiftBox: builder.mutation({
      query: (id) => ({
        url: `/giftbox/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["giftboxs"],
    }),
  }),
});

export const { useGetAllGiftBoxQuery, useRemoveGiftBoxMutation } = GiftBoxApi;
