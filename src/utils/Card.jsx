import React from "react";
import styled from "styled-components";
import img from "D:/Documentos/Proyectos/display-product/src/assets/HWCC2_NEGRO1.jpg"



const Card = ({producto}) => {

  const {url, titulo, cod, descripcion, stock, marca} = producto;
  
  return (
    <Container>
      
        <div className="clash-card barbarian">
          <div className="clash-card__image clash-card__image--barbarian">
            <img
              className="img-product"
              src={img}
              alt="alt"
            />
          </div>
          <a href={url} target="blank" className="clash-card__level clash-card__level--barbarian">
            ver mas imagenes
          </a>
          <div className="clash-card__unit-name">{titulo}</div>
          <div className="clash-card__unit-description">
            {descripcion}
          </div>

          <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
            <div className="one-third">
              <div className="stat">{stock}</div>
              <div className="stat-value">Stock</div>
            </div>

            <div className="one-third">
              <div className="stat">{cod}</div>
              <div className="stat-value">Codigo</div>
            </div>

            <div className="one-third no-border">
              <div className="stat">{marca.slice(0,3)}</div>
              <div className="stat-value">Marca</div>
            </div>
          </div>
        </div>
     
    </Container>
  );
};


const Container = styled.div`

*, *:before, *:after {
  box-sizing: border-box;
}

display: flex;


padding: 1rem 0px;

.clash-card {
  background: white;
  width: 300px;
  display: inline-block;
  margin: auto;
  border-radius: 19px;
  position: relative;
  text-align: center;
  box-shadow: -1px 15px 30px -12px black;
  
}


.clash-card__level {
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 3px;
  margin-top: 3px;
}

.clash-card__level--barbarian {
  color: #EC9B3B;
}


.clash-card__unit-name {
  font-size: 26px;
  color: black;
  font-weight: 900;
  margin-bottom: 5px;
  
}

.clash-card__unit-description {
  padding: 20px;
  margin-bottom: 10px;
  
}

.clash-card__unit-stats--barbarian {
  background: #EC9B3B;
}
.clash-card__unit-stats--barbarian .one-third {
  border-right: 1px solid #BD7C2F;
  
}

.img-product{
    width: 300px;
}



.clash-card__unit-stats {
  color: white;
  font-weight: 700;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
}
.clash-card__unit-stats .one-third {
  width: 33%;
  float: left;
  padding: 20px 15px;
}
.clash-card__unit-stats sup {
  position: absolute;
  bottom: 4px;
  font-size: 45%;
  margin-left: 2px;
}
.clash-card__unit-stats .stat {
  
  font-size: 17px;
  margin-bottom: 10px;
}
.clash-card__unit-stats .stat-value {
  text-transform: uppercase;
  font-weight: 400;
  font-size: 12px;
}
.clash-card__unit-stats .no-border {
  border-right: none;
}

.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}

.slick-prev {
  left: 100px;
  z-index: 999;
}

.slick-next {
  right: 100px;
  z-index: 999;
}
      
`


export default Card;
