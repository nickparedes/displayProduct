import Autosuggest from "react-autosuggest";
import { useState } from "react";
import { db } from "../db";
import styled from "styled-components";


function Autocompletado() {
  const [productos, setProductos] = useState(db);
  const [value, setValue] = useState("");
  const [productoSeleccionado, setProductoSeleccionado] = useState({});

  const onSuggestionsFetchRequested = ({ value }) => {
    setProductos(filtrarProductos(value));
  };

  const filtrarProductos = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    var filtrado = db.filter((producto) => {
      var textoCompleto = producto.titulo + " - " + producto.descripcion;

      if (
        textoCompleto
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(inputValue)
      ) {
        return producto;
      }
    });

    return inputLength === 0 ? [] : filtrado;
  };

  const onSuggestionsClearRequested = () => {
    setProductos([]);
  };

  const getSuggestionValue = (suggestion) => {
    return `${suggestion.titulo} - ${suggestion.descripcion}`;
  };

  const renderSuggestion = (suggestion) => (
    <div
      className="sugerencia"
      onClick={() => seleccionarProducto(suggestion)}
    >
      {`${suggestion.titulo} - ${suggestion.descripcion}`}
    </div>
  );

  const seleccionarProducto = (producto) => {
    setProductoSeleccionado(producto);
  };

  const onChange = (e, { newValue }) => {
    setValue(newValue);
  };

  const inputProps = {
    placeholder: "nombre de producto",
    value,
    onChange,
  };

  const eventEnter = (e) => {
    if (e.key == "Enter") {
      var split = e.target.value.split("-");
      var producto = {
        producto: split[0].trim(),
        pais: split[1].trim(),
      };
      seleccionarProducto(producto);
    }
  };

  return (
    <Container>
      <Autosuggest
        suggestions={productos}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={eventEnter}
      />
      <br />
    
      <button className="material-symbols-outlined" onClick={() => console.log(productoSeleccionado)} >search</button>
    </Container>
  );
}


const Container = styled.div`
.sugerencia{
    padding: 5px;
  }
  
  
 .react-autosuggest__suggestions-container--open {
    display: block;
    position: absolute;
    top: 31px;
    width: 100%;
    border: 1px solid #aaa;
    background-color: #fff;
    font-family: Helvetica, sans-serif;
    font-weight: 300;
    font-size: 16px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    z-index: 2;
    max-height: 300px;
    overflow: auto;
    margin-top: 40px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    ::-webkit-scrollbar {
      width: 8px; /* Ancho de la barra de desplazamiento */
    }
    
    /* Estilo para el riel de la barra de desplazamiento */
    ::-webkit-scrollbar-track {
      background-color: #transparent; /* Color de fondo del riel */
    
    }
    
    /* Estilo para el pulgar de la barra de desplazamiento */
    ::-webkit-scrollbar-thumb {
      background-color: #888; /* Color del pulgar */
      border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    }
    
    /* Estilo cuando se pasa el mouse sobre la barra de desplazamiento */
    ::-webkit-scrollbar-thumb:hover {
      background-color: #555; /* Color del pulgar al pasar el mouse */
    }
  }
   
  .react-autosuggest__suggestions-list{
    list-style: none;
    margin-bottom: 0px;
    padding-left: 0px;
    cursor: pointer;
  }
  
  .react-autosuggest__input{
    width: 500px;
  }
  
  .react-autosuggest__suggestion--highlighted {
    background-color: #ddd;
  } 

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
  margin-top: 22px;
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


export default Autocompletado;
