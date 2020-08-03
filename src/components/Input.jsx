import React from 'react'

const Input = ({ id, label, isError, ...props }) => {
  return (
    <label className={`input-container${isError ? ' input-error' : ''}`}>
      <label htmlFor={id}>
        { label }
      </label>
      <input id={id} {...props} />
      {isError && (
        <label className="error-label">
          { isError }
        </label>
      )}
    </label>
  )
}

export default Input