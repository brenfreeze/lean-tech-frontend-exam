import React from 'react'
import { gql, useMutation } from '@apollo/client'

import Modal from './Modal'
import Input from './Input'

import {
  ADD_PROGRAM,
  UPDATE_PROGRAM,
  GET_PROGRAMS
} from '../services/queries'

const ProgramForm = ({ toUpdate, setToUpdate, ...props }) => {
  const [addProgram] = useMutation(ADD_PROGRAM, {
    refetchQueries: [{
      query: GET_PROGRAMS
    }]
  })

  const [updateProgram] = useMutation(UPDATE_PROGRAM, {
    refetchQueries: [{
      query: GET_PROGRAMS
    }]
  })

  const addProgramSubmit = (e) => {
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

  const updateProgramSubmit = (e) => {
    updateProgram({
      variables: {
        id: toUpdate.id,
        program: {
          operation: e.target.operation.value,
          processId: e.target.processId.value,
          processStep: parseInt(e.target.processStep.value),
          productFamily: e.target.productFamily.value
        }
      }
    })
      .then(() => {
        props.onClose()
      })
  }

  const onProgramFormSubmit = e => {
    e.preventDefault()

    if (Object.keys(toUpdate).length) {
      updateProgramSubmit(e)

      return
    }

    addProgramSubmit(e)
  }

  return (
    <Modal { ...props }>
      <h1 className="title">
        { Object.keys(toUpdate).length ? `Update ${toUpdate.operation}` : 'Add New Program'}
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
          defaultValue={toUpdate?.operation || ''}
        />
        <Input
          type="text"
          id="processId"
          name="processId"
          label="Process ID"
          defaultValue={toUpdate?.processId || ''}
        />
        <Input
          type="number"
          id="processStep"
          name="processStep"
          label="Process Step"
          defaultValue={toUpdate?.processStep || ''}
        />
        <Input
          type="text"
          id="productFamily"
          name="productFamily"
          label="Product Family"
          defaultValue={toUpdate?.productFamily || ''}
        />
        <button type="submit" className="submit-btn">
          Save
        </button>
      </form>
    </Modal>
  )
}

export default ProgramForm