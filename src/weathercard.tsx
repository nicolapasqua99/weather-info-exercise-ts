import { useDispatch } from "react-redux"
import { useGetCityQuery } from "./slices/apiSlice"
import { FetchedCity, removeCity } from "./slices/citiesSlice"
import { ReactSVG } from 'react-svg'
import styled from "styled-components"

const CityCardContainer = styled.div`
    position relative;
    width: 40vw;
    height: 5vh;
    margin-bottom: 2.5vh;
    border: 1px solid black;
    border-radius: .5rem;
    box-shadow: inset 3px 3px 31px -26px rgba(0,0,0,0.75);
    & h2, & p, & span{
        position: absolute;
        color: black;
        text-align: center;
        font-size: 2rem;
        line-height: 2rem;
        width: fit-content;
    }
    & h2{
        font-weight: 600;
        top: calc(2.5vh - 1rem);
        left: 1.5rem;
    }
    & p{
        top: calc(2.5vh - 1rem);
        left: 25%;
    }
    & div{
        position: absolute;
        top: calc(2.5vh - 1rem);
        height: 2rem;
        width: 2rem;
        cursor: pointer;
        & div{
            top: 0;
            left: 0;
        }
        & svg{
            height: 100%;
            width: 100%;
        }
    }
    & div:nth-of-type(1){
        right: 4rem;
    }
    & div:nth-of-type(2){
         right: 1rem;
    }
    & img{
        position: absolute;
        left: 18%;
        top: 0;
        width: 5vh;
        height: 5vh;
    }
`

const ErrorMessage = styled.p`
    color: #F6A623!IMPORTANT;
`

const ErrorIcon = styled.div`
    position: absolute;
    top: 0;
    width: 5vh;
    height: 5vh;
    &#errorIcon{
        left: 20%;
    }
    &#removeIcon{
        right: 4rem;
    }
    &reloadIcon{
        right: 1rem;
    }
`

//ogni componente riceve nome e coord, il primo lo usa per mostrarlo nell'UI ma anche come argomento di removeCity, mentre le coordinate le usa tramite useGetCityQuery per ottenere
//i dati del meteo, insieme allo stato della richiesta e alla funzione refetch, che quando chiamata permette di aggiornare i dati ottenuti in precedenza
export default function CityCard(props: FetchedCity){
    let cityContent
    const dispatch = useDispatch()
    const {
        data,
        isLoading,
        isSuccess,
        isError,
        refetch
    } = useGetCityQuery(props.coord)

    if(isLoading) {
        cityContent = (
            <>
                <p>Loading...</p>
            </>
        )
    } else if(isSuccess) {
        cityContent = (
            <>
                <h2>{ props.name }</h2>
                <p>{ data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1) }</p>
                <ReactSVG onClick={() => refetch()} src='./icons/reload.svg'/>
                <ReactSVG onClick={() => dispatch(removeCity(props.name))} src='./icons/remove.svg'/>
                <img src={"http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"} alt="Icona meteo" />
            </>
        )
    } else if (isError) {
        cityContent = (
            <>
                <h2>{ props.name }</h2>
                <ErrorIcon id="errorIcon">
                    <ReactSVG src='./icons/error.svg'/>
                </ErrorIcon>
                <ErrorMessage>Unable to load data</ErrorMessage>
                <ErrorIcon id="reloadIcon">
                    <ReactSVG onClick={() => refetch()} src='./icons/reload.svg'/>
                </ErrorIcon>
                <ErrorIcon id="removeIcon">
                    <ReactSVG onClick={() => dispatch(removeCity(props.name))} src='./icons/remove.svg'/>
                </ErrorIcon>
            </>
        )
    }

    return(
        <CityCardContainer>
            { cityContent }
        </CityCardContainer>
    )
}
