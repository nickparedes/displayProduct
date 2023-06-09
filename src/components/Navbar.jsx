import React, { useEffect, useState } from "react";
import logo from "../assets/react.svg";
import styled from "styled-components";

import Autocompletado from "../utils/Autocompletado";
import { db } from "../db";



const ProductList = styled.ul`
  list-style: none;
  padding: 0;
`;
const ProductItem = styled.li`
  margin-bottom: 5px;
`;


const Navbar = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [productos] = useState(db);

  console.log(productos);
  const handleSearch = (searchTerm) => {
    const results = productos.filter(
      (product) =>
        product.descripcion&&
        product.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    
  };

  console.log(searchResults)


  useEffect(() => {
    const navbar = document.querySelector("#navbar"),
      w = window;
    let lastScrollTop = 0;
    w.addEventListener("scroll", (e) => {
      let { pageYOffset } = window;
      if (pageYOffset > lastScrollTop) {
        navbar.classList.remove("visible");
      } else if (pageYOffset < lastScrollTop) {
        navbar.classList.add("visible");
      }

      lastScrollTop = pageYOffset <= 0 ? 0 : pageYOffset;
    });
  }, []);


  

  return (
    <Container className="visible" id="navbar">
      <img src={logo} alt="" />
      <Autocompletado/>
           
        <div className="nav-items">
        <a>Categorias</a>
      </div>
    </Container>
  );
};

const Container = styled.nav`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  translate: 0 -72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 0 40px;
  width: 100%;
  height: 72px;
  box-shadow: 0 10px 20px rgb(0 0 0 / 10%);
  box-sizing: border-box;

  background: #6b63ff;
  transition: 0.3s;

  &.visible {
    translate: 0;
  }

  & > img {
    widht: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

export default Navbar;
