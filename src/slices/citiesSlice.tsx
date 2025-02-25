import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
//import * as cities from '../data/cities.json'

const cities = 
[
    {"_id":6541469,"name":"Trento","country":"IT","coord":{"lon":11.12074,"lat":46.070431}},
    {"_id":2643741,"name":"London","country":"GB","coord":{"lon":-0.09184,"lat":51.512791}},
    {"_id":1275339,"name":"Mumbai","country":"IN","coord":{"lon":72.847939,"lat":19.01441}},
    {"_id":2867714,"name":"München","country":"DE","coord":{"lon":11.57549,"lat":48.137428}},
    {"_id":2968815,"name":"Paris","country":"FR","coord":{"lon":2.3486,"lat":48.853401}},
    {"_id":5128638,"name":"New York","country":"US","coord":{"lon":-75.499901,"lat":43.000351}},
    {"_id":6542284,"name":"Venezia","country":"IT","coord":{"lon":12.33092,"lat":45.4389}},
    {"_id":2950159,"name":"Berlin","country":"DE","coord":{"lon":13.41053,"lat":52.524368}},
    {"_id":1795565,"name":"Shenzhen","country":"CN","coord":{"lon":114.068298,"lat":22.54554}},
    {"_id":1871859,"name":"Pyongyang","country":"KP","coord":{"lon":125.754318,"lat":39.033852}},
    {"_id":524901,"name":"Moscow","country":"RU","coord":{"lon":37.615555,"lat":55.75222}},
    {"_id":4409896,"name":"Springfield","country":"US","coord":{"lon":-93.298241,"lat":37.215328}},
    {"_id":5454711,"name":"Albuquerque","country":"US","coord":{"lon":-106.651138,"lat":35.084492}},
    {"_id":4505716,"name":"Baltimore","country":"US","coord":{"lon":-82.600723,"lat":39.845341}},
    {"_id":2147714,"name":"Sydney","country":"AU","coord":{"lon":151.207321,"lat":-33.867851}},
    {"_id":1261481,"name":"New Delhi","country":"IN","coord":{"lon":77.23114,"lat":28.61282}},
    {"_id":1880252,"name":"Singapore","country":"SG","coord":{"lon":103.850067,"lat":1.28967}},
    {"_id":1689431,"name":"San Jose","country":"PH","coord":{"lon":120.9925,"lat":15.79083}},
    {"_id":2964574,"name":"Dublin","country":"IE","coord":{"lon":-6.26719,"lat":53.34399}},
    {"_id":2759794,"name":"Amsterdam","country":"NL","coord":{"lon":4.88969,"lat":52.374031}}
];

export interface FetchedCity {
    name: string,
    coord: {
        lon: number,
        lat: number,
    }
}

export interface CitiesState {
    selectedCities: Array<FetchedCity>
}

const initialState: CitiesState = {
    selectedCities: []
}

//creao la slice contente i reducer delle città, all'interno ho una lista che contiene le città aggiunte dall'utente con nome e coordinate
export const citySlice = createSlice({
  name: 'citylister',
  initialState,
  reducers: {
    addCity: (state, action: PayloadAction<string>) => {
        if(!state.selectedCities.find((e: { name: string }) => e.name === action.payload)){
            const cityFetched = cities.find((e: { name: string })=> e.name === action.payload);
            if(cityFetched){
                const cityToAdd: FetchedCity ={
                    "name": cityFetched.name,
                    "coord": {
                        lon: cityFetched.coord.lon,
                        lat: cityFetched.coord.lat,
                    }
                }
                state.selectedCities.push(cityToAdd)
            } else {
                alert('Città non presente!')
            }
        } else {
            alert('Città già aggiunta!')
        }  
    }, 
    removeCity: (state, action: PayloadAction<string>) => {
        const nameCityToRemove: string = action.payload; 
        if(state.selectedCities.find((e: { name: string }) => e.name === nameCityToRemove)){
            const tempSelectedCities = state.selectedCities.filter((e: { name: string }) => e.name !== nameCityToRemove)
            state.selectedCities = tempSelectedCities;
        } else {
            alert('Città non presente!')
        }   
    },
  },
})

export const { addCity, removeCity } = citySlice.actions

export default citySlice.reducer