import React from 'react'
import styled from 'styled-components';
import logo from "../assets/logo.png"

const Filtros = () => {
    return (
        <Container >
            <img src={logo} style={{width:"140px"}} />
            
        </Container>
      );
}



const Container = styled.div`
    
    position: fixed;
    left: 0;
    top: 0;
    width: 200px;
    height: 100vh;
    background-color: #f1f1f1;
    padding: 20px;
    box-sizing: border-box;

    @media (width <= 1333px) {
        left: -200px;
    }
`

export default Filtros