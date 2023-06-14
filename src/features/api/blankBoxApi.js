import apiSlice from "./apiSlice";

const blankBoxApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlankBox: builder.query({
      query: () => ({
        url: "/blankBox",
      }),
      providesTags: ["blankBox"],
    }),
    removeBlankBox: builder.mutation({
      query: (id) => ({
        url: `/blankBox/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blankBox"],
    }),
  }),
});

export const { useGetAllBlankBoxQuery, useRemoveBlankBoxMutation } =
  blankBoxApi;
