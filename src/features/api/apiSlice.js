import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
<<<<<<< HEAD
    baseUrl: "http://localhost:4000/api/v1",
=======
    baseUrl: "http://localhost:5001/api/v1",
>>>>>>> 4fc1012eb26d40626514e1bb9d567e1934ff216e
  }),
  tagTypes: ["regions", "login", "product"],
  endpoints: (builder) => ({}),
});

export default apiSlice;
