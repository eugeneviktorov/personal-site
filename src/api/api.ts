import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const API_URL = "https://dev.viktorovvv.ru";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: () => ({}),
});
