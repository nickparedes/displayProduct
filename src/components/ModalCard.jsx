import React from 'react';
import logo from "../assets/HWCC2_NEGRO1.jpg"
import styled from 'styled-components';

const ModalCard = ({producto}) => {
  console.log(producto)
  return (
    <Container>
       <Image src={logo} alt={producto.titulo} />
      <Content>
        <Title>{producto.titulo}</Title>
        <Description>{producto.titulo}</Description>
        <Details>
          <Detail>
            <DetailLabel>Tipo:</DetailLabel>
            <DetailValue>{producto.titulo}</DetailValue>
          </Detail>
          <Detail>
            <DetailLabel>Año:</DetailLabel>
            <DetailValue>{producto.titulo}</DetailValue>
          </Detail>
        </Details>
      </Content> 
    </Container>
  );
};

const Container = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
    border-radius: 8px;
    overflow: hidden;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Image = styled.img`
  width: inherit;
  object-fit: cover;
  object-position: center;
`;

const Content = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Description = styled.p`
  color: #4a4a4a;
  margin-bottom: 16px;
`;

const Details = styled.div`
  color: #4a4a4a;
  font-size: 0.875rem;
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

const DetailLabel = styled.span`
  font-weight: bold;
  margin-right: 4px;
`;

const DetailValue = styled.span``;

export default ModalCard;