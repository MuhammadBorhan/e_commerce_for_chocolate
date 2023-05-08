import apiSlice from "./apiSlice";

const regionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllRegion: builder.query({
      query: () => ({
        url: "/regions",
      }),
      providesTags: ["regions"],
    }),
  }),
});

export const { useGetAllRegionQuery } = regionApi;
