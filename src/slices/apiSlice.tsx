import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { OW_APIKEY, OW_BASEURL } from '../data/config'

//creo l'API necessaria a recuperare i dati da openweather
export const citiesApi = createApi({
    reducerPath: 'citiesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: OW_BASEURL,
    }),
    tagTypes: ['City'],
    endpoints: (builder) => ({
        getCity: builder.query<any, { lat: number, lon: number} >({
            query: arg =>{
                const { lat, lon } = arg;
                return `weather?lat=${lat}&lon=${lon}&appid=${OW_APIKEY}`
            }
        })
    }),
});

//esporto la query generata
export const { useGetCityQuery }  = citiesApi
