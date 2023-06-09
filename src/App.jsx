import { useState } from 'react'
import Navbar from './components/Navbar'
import Card from './utils/Card'
import CardGrid from './components/CardGrid'
import styled from 'styled-components'
import Filtros from './utils/Filtros'



function App() {

  return (
    <div>
      <Navbar/>
      <Container >
        <Filtros/>
        <div></div>
        <ContentContainer>
          
          <CardGrid />
        </ContentContainer>
      </Container>
      
      
    </div>
    
  )
}
const Container = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr; /* Cambio en el valor de la columna derecha */
  background-color: ${({ theme }) => theme.body};
  padding-top: 72px;
  @media (width <= 1333px) {
    grid-template-columns: 0px 1fr;
    
  }
`;

const ContentContainer = styled.div`
  padding: 20px;
  box-sizing: border-box;
  overflow: auto; /* Agregamos una propiedad de desbordamiento para permitir el desplazamiento del contenido */
`;

export default App
