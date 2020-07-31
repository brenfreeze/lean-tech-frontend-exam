import React from 'react'

const Input = ({ id, label, ...props }) => {
  return (
    <label className="input-container">
      <label htmlFor={id}>
        { label }
      </label>
      <input id={id} {...props} />
    </label>
  )
}

export default Input