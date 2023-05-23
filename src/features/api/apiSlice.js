import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
<<<<<<< HEAD
    baseUrl: "http://localhost:4000/api/v1",
=======
    baseUrl: "http://localhost:5002/api/v1",
>>>>>>> 9fe882de56a939a28aad3953fc2b210b31a14746
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
