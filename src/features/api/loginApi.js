import apiSlice from "./apiSlice";

const loginApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => ({
        url: "/users",
      }),
      providesTags: ["login"],
    }),
    getUser: builder.query({
      query: () => ({
        url: "/me",
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
      providesTags: ["login"],
    }),
    removeUser: builder.mutation({
      query: (id) => ({
        url: `/user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["login"],
    }),
  }),
});

export const { useGetAllUserQuery, useGetUserQuery, useRemoveUserMutation } =
  loginApi;
