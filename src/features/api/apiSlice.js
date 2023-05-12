import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://server-murex-one.vercel.app/api/v1",
  }),
  tagTypes: ["regions", "logins", "product"],
  endpoints: (builder) => ({}),
});

export default apiSlice;
