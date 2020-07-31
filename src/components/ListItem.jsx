import React, { useState } from "react"

const ListItem = ({ id, operation, __typename, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false)

  const restData = Object.keys(rest)
  
  const toggleItem = () => {
    setIsOpen(!isOpen)
  }

  const transformCase = (string) => {
    const result = string.replace(/([A-Z])/g, " $1")
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1)

    return finalResult
  }

  return (
    <li key={id} className="program-list-item" onClick={toggleItem}>
      <div className="program-list-item-header">
        <span className="program-id">{id}</span>
        <h2 className="program-operation">{operation}</h2>
      </div>

      {isOpen && (
        <div className="program-list-item-content">
          <ul className="program-details">
            {restData.map((key) => (
              <li className="program-details-item">
                <span>{transformCase(key)}</span>
                <span>{rest[key]}</span>
              </li>
            ))}
          </ul>
          <span className="program-footer">
            <a href="#">Edit</a>
            <a href="#">Delete</a>
          </span>
        </div>
      )}
    </li>
  )
}

export default ListItem
