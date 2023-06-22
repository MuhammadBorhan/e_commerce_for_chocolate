import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5003/api/v1",
  }),
  tagTypes: [
    "regions",
    "login",
    "product",
    "trend",
    "brands",
    "evn",
    "evnusr",
    "blankBox",
    "giftboxs",
  ],
  endpoints: (builder) => ({}),
});

export default apiSlice;
