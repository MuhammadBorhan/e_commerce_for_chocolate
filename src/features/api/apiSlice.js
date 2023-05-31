import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://andy-chocolate-productions.up.railway.app/api/v1",
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
