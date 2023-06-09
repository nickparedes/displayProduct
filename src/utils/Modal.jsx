import React from 'react'
import "./Modal.css"
const Modal = ({children, isOpen, closeModal}) => {


  return (
    <div onClick={closeModal}>
      <article className={`modal  ${isOpen && "is-open"}`} >
              {children}
      </article>
    </div>
  )
}



export default Modal