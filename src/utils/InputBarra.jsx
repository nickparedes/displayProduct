import React from 'react'
import styled from 'styled-components'
const InputBarra = () => {
  return (
    <Container >
                <input
                    spellcheck="false"
                    type="text"
                    class="search"
                    id="search"
                    name="search"
                    //value="search"
                    //onChange = {(e) =>setSearch(e.target.value)}
                    placeholder="what do you want to buy?"
                />
                <button class="material-symbols-outlined ">search</button>
    </Container>
  )
}

const Container = styled.div`

    position: relative;
    display: none;

  
    @media (width >= 500px) {
        
        display: block;
        
    }
  
   button {
    position: absolute;
    top: 50%;
    right: 1px;
    translate: 0 -50%;
    z-index: 1;
    font-size: 20px;
    width: 60px;
    height: 47px;
    border-radius: 0;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background: rgb(107, 99, 255, 70%);
  }
  
  input {
    flex: 1 1 auto;
    height: 44px;
    width: 25vw;
    padding-left: 16px;
    padding-right: 60px;
    font-size: 16px;
    border: 1px solid #303030;
    border-radius: 22px;
    background: white;
    color: inherit;
    font-family: inherit;
    font-weight: 400;
    outline: none;
  }
  
  @media (width >= 1000px) {
    input {
      width: 580px;
    }
  }
`


export default InputBarra