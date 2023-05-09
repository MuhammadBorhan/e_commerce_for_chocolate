import apiSlice from "./apiSlice";

const loginApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
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
  }),
});

export const { useGetUserQuery } = loginApi;
