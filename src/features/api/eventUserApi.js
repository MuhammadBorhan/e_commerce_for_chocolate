import apiSlice from "./apiSlice";

const eventUserApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postEventUser: builder.mutation({
      query: (data) => ({
        url: "/eventuser",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["evnusr"],
    }),
    getAllEventUser: builder.query({
      query: () => ({
        url: "/eventuser",
      }),
      providesTags: ["evnusr"],
    }),
  }),
});

export const { usePostEventUserMutation, useGetAllEventUserQuery } =
  eventUserApi;
