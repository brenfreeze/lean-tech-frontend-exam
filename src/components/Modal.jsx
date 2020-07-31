import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <a className="close-btn" onClick={onClose}>
          &times;
        </a>
      </div>
    </div>,
    document.body
  )
}

export default Modal