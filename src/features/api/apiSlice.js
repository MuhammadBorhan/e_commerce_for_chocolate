import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    // baseUrl: "https://job-box-server-muhammadborhan.vercel.app",
  }),
  tagTypes: ["regions", "brands"],
  endpoints: (builder) => ({}),
});

export default apiSlice;
