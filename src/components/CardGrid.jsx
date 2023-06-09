import React from 'react';
import styled from 'styled-components';
import Card from '../utils/Card';
import { db } from '../db';



const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 0 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;


// Componente Grid de Cards
const CardGrid = () => {
 
  return (
    <GridContainer>
      {db.map((db) => (
        
        <Card key = {db.id} producto = {db} />
      ))}
    </GridContainer>
  );
};

export default CardGrid;