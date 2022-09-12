import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  position: relative;
  width: 100vw;
  height: 25vh;
  background-color: #222222;
  & h2{
    position: relative;
    color: white;
    text-align: center;
    font-size: 4rem;
    line-height: 4rem;
    top: calc(12.5vh - 2rem);
  }
`

export default function Header() {
    return (
      <HeaderContainer>
        <h2>
          Weather Info by Nicola Pasqualini
        </h2>
      </HeaderContainer>
    );
  }
  
  