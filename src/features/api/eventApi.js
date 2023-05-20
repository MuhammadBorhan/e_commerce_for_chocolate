import apiSlice from "./apiSlice";

const eventApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllEvent: builder.query({
      query: () => ({
        url: "/event",
      }),
      providesTags: ["evn"],
    }),
    removeEvent: builder.mutation({
      query: (id) => ({
        url: `/event/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["evn"],
    }),
  }),
});

export const { useGetAllEventQuery, useRemoveEventMutation } = eventApi;
