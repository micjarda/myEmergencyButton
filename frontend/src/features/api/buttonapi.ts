import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { IPatient } from "./types/patienttypes";
import type { ICall } from "./types/calltypes";

// Define a service using a base URL and expected endpoints
export const buttonApi: any = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_HOST}/${import.meta.env.VITE_CONTEXT_PATH}/${import.meta.env.VITE_AWID}/`,
  }),
  tagTypes: ["allbuttondata", "allcalldata"],
  endpoints: (builder) => ({
    callList: builder.query<ICall[], string>({
      query: () => ({
        url: `call/list`,
        method: "GET",
      }),
      providesTags: ["allcalldata"],
    }),
    callUpdate: builder.mutation({
      query: (data: any) => ({
        url: `call/update`,
        method: "POST",
        body: data,
      }),
    }),
    callDelete: builder.mutation<void, string>({
      query: (id) => ({
        url: `call/delete/${id}`,
        method: "POST",
      }),
      // invalidatesTags: ["allcalldata"],
    }),
    patientsList: builder.query<IPatient[], string>({
      query: () => ({
        url: `patient/list`,
        method: "GET",
      }),
      providesTags: ["allbuttondata"],
    }),
    deletePatient: builder.mutation<void, string>({
      query: (id) => ({
        url: `patient/delete/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["allbuttondata"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useCallListQuery,
  useCallUpdateMutation,
  useCallDeleteMutation,
  usePatientsListQuery,
  useDeletePatientMutation,
} = buttonApi;
export default buttonApi.reducer;
