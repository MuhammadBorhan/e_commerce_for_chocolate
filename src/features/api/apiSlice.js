import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1",
  }),
  tagTypes: ["regions", "logins", "product"],
  endpoints: (builder) => ({}),
});

export default apiSlice;
