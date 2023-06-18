import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
<<<<<<< HEAD
    baseUrl: "http://localhost:5003/api/v1",
=======
    baseUrl: "http://localhost:5000/api/v1",
>>>>>>> c8536acc1c1fa8414dece3eae8dcb738c60023ad
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
