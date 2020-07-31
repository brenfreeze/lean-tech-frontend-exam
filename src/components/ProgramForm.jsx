import React from 'react'
import { gql, useMutation } from '@apollo/client'

import Modal from './Modal'
import Input from './Input'

import { ADD_PROGRAM, GET_PROGRAMS } from '../services/queries'

const ProgramForm = ({ ...props }) => {
  const [addProgram] = useMutation(ADD_PROGRAM, {
    refetchQueries: [{
      query: GET_PROGRAMS
    }]
  })

  const onProgramFormSubmit = e => {
    e.preventDefault()

    addProgram({
      variables: {
        operation: e.target.operation.value,
        processId: e.target.processId.value,
        processStep: parseInt(e.target.processStep.value),
        productFamily: e.target.productFamily.value
      }
    })
      .then(() => {
        props.onClose()
      })

  }

  return (
    <Modal { ...props }>
      <h1 className="title">
        Add New Program
      </h1>
      <form
        className="program-form"
        onSubmit={onProgramFormSubmit}
        autoComplete="off"
      >
        <Input
          type="text"
          id="operation"
          name="operation"
          label="Operation"
        />
        <Input
          type="text"
          id="processId"
          name="processId"
          label="Process ID"
        />
        <Input
          type="number"
          id="processStep"
          name="processStep"
          label="Process Step"
        />
        <Input
          type="text"
          id="productFamily"
          name="productFamily"
          label="Product Family"
        />
        <button type="submit" className="submit-btn">
          Save Program
        </button>
      </form>
    </Modal>
  )
}

export default ProgramForm