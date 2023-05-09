import apiSlice from "./apiSlice";

const loginApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => ({
        url: "/users",
      }),
      providesTags: ["logins"],
    }),
    getUser: builder.query({
      query: () => ({
        url: "/me",
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
      providesTags: ["logins"],
    }),
  }),
});

export const { useGetAllUserQuery, useGetUserQuery } = loginApi;
