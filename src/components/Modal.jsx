import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ children, onClose, width = 450, height = 450 }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content" style={{ width, minHeight: height}}>
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