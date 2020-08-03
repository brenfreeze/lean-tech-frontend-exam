import React, { useState } from "react"
import { useMutation } from '@apollo/client'

import { DELETE_PROGRAM, GET_PROGRAMS } from '../services/queries'

const ListItem = ({ setToUpdate, toggleModal, id, operation, __typename, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [deleteProgram] = useMutation(DELETE_PROGRAM, {
    refetchQueries: [{
      query: GET_PROGRAMS
    }]
  })

  const restData = Object.keys(rest)
  
  const toggleItem = () => {
    setIsOpen(!isOpen)
  }

  const transformCase = (string) => {
    const result = string.replace(/([A-Z])/g, " $1")
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1)

    return finalResult
  }

  const onUpdateClick = e => {
    e.stopPropagation()

    setToUpdate({
      id,
      operation,
      ...rest
    })

    toggleModal()
  }

  const onDeleteClick = e => {
    e.stopPropagation()

    deleteProgram({
      variables: {
        id
      }
    })
      .then(() => {
        alert('Deleted')
      })
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
            {restData.map((key, index) => (
              <li key={index} className="program-details-item">
                <span>{transformCase(key)}</span>
                <span>{rest[key]}</span>
              </li>
            ))}
          </ul>
          <span className="program-footer">
            <a href="#" onClick={onUpdateClick}>Update</a>
            <a href="#" onClick={onDeleteClick}>Delete</a>
          </span>
        </div>
      )}
    </li>
  )
}

export default ListItem
