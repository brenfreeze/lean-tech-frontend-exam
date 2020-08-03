import React, { useState } from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useMutation } from '@apollo/client'

import { DELETE_PROGRAM } from '../services/queries'
import { openDialog } from "../store/reducers/Utilities/actions"
import { deleteProgram as deleteProgramFromStore } from "../store/reducers/Programs/actions"

const ListItem = ({
  deleteProgramFromStore,
  openDialog,
  setToUpdate,
  toggleModal,
  id,
  operation,
  __typename,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [deleteProgram] = useMutation(DELETE_PROGRAM)

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

    openDialog({
      title: `Update ${operation}`,
      message: `Are you sure you want to update ${operation}?`,
      onConfirmClick: () => {
        setToUpdate({
          id,
          operation,
          ...rest
        })

        toggleModal()
      }
    })
  }

  const onDeleteClick = e => {
    e.stopPropagation()

    openDialog({
      title: `Delete ${operation}`,
      message: `Are you sure you want to delete ${operation}?`,
      onConfirmClick: () => {
        deleteProgram({
          variables: {
            id
          }
        })
          .then((result) => {
            const { deleteProgram } = result.data

            deleteProgramFromStore(deleteProgram.id)
            openDialog({
              title: `Deleted ${deleteProgram.operation}`,
              message: `Successfully deleted ${deleteProgram.operation}`
            })
          })
      }
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    openDialog,
    deleteProgramFromStore
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(ListItem)
