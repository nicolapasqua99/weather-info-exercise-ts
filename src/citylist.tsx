import React from 'react'
import styled from 'styled-components'
import type { RootState } from './app/store'
import { useSelector } from 'react-redux'
import CityCard from './weathercard'

const CityContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    position: relative;
    max-width: 40vw;
    left: 30vw;
    top: 10vh;
`

//questa funzione accede allo store di redux e ottiene la lista delle città, creando un componente <CityCard> per ognuna di esse, passandogli nelle props nome e coordinate della città
export default function CityList() {
    const citiesState = useSelector((state: RootState) => state)
    const citiesSelected = citiesState.cities.selectedCities
    return (
        <CityContainer>
            {
                citiesSelected.map(city =>
                    <CityCard key={city.name} name={city.name} coord={city.coord}/>
                )
            }
        </CityContainer>
    );
}
  
  