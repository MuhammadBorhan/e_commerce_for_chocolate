import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
<<<<<<< HEAD
    baseUrl: "http://localhost:4000/api/v1",
=======
    baseUrl: "http://localhost:5002/api/v1",
>>>>>>> abb1fc586a6277af9402ce9bf9d348fbf5b7bffa
  }),
  tagTypes: [
    "regions",
    "login",
    "product",
    "trend",
    "brands",
    "evn",
    "giftboxs",
  ],
  endpoints: (builder) => ({}),
});

export default apiSlice;
