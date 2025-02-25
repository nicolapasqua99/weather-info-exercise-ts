import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { addCity } from './slices/citiesSlice'

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

const CityForm = styled.form`
    flex: auto;
    position: relative;
    width: 100vw;
    max-height: 10vh;
    margin-top: 5vh;
`

const CitySelector = styled.select`
    position absolute;
    width: 40vw;
    height: 5vh;
    left: 30vw;
    top: 2.5vh;
    background-color: white;
    border-radius: .5rem;
    & h2{
      color: white;
      text-align: center;
      font-size: 4rem;
      line-height: 4rem;
      margin-top: calc(12.5vh - 2rem);
    }
    & option{
      color: black;
    }
`

//tramite dispatch questo select chiama il reducer addCity che aggiunge la città alla lista di quelle selezionate
export default function CityAdder() {
    const dispatch = useDispatch()
    return (
        <>
            <CityForm>
                <CitySelector defaultValue={""} onChange={(e) => dispatch(addCity(e.target.value))}>  
                    <option disabled key={ 'default' } value={ "" }>Select a city</option>
                    { 
                        cities.map(city =>
                            <option key={ city.name } value={ city.name }>{ city.name }</option>
                        )
                    }      
                </CitySelector>
            </CityForm>
        </>
    );
  }
  
  