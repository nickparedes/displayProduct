import React from 'react'
import logo from "../assets/react.svg" 
import styled from 'styled-components';
import InputBarra from '../utils/InputBarra';




const Navbar = () => {

    const navbar = document.querySelector("#navbar"),
        w = window;
    let lastScrollTop = 0;

    w.addEventListener("scroll",(e)=>{
        let {pageYOffset} = window;
        if(pageYOffset > lastScrollTop){
            navbar.classList.remove("visible")
        }else if(pageYOffset < lastScrollTop){
            navbar.classList.add("visible")
        }

        lastScrollTop = pageYOffset <=0 ? 0 : pageYOffset;
    })


  return (
    <Container id="navbar">
        <img src={logo} alt="" />
        <InputBarra/>
        <div className='nav-items'>
            <a>Categorias</a>
        </div>
    </Container>
  )
}

const Container = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    translate: 0 -72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 0  40px;
    width: 100%;
    height: 72px;
    box-shadow: 0 10px 20px rgb( 0 0 0 / 10%);
    box-sizing: border-box;

    background: #6b63ff;
    transition: 0.3s;
    

    &.visible{
        translate: 0;
    }


    & > img {
        widht: 50px;
        height: 50px;
        border-radius: 50%;
    }













      
      




`


export default Navbar;