import React from 'react'
import { Formik } from 'formik'
import { useMutation } from '@apollo/client'

import Modal from './Modal'
import Input from './Input'

import {
  ADD_PROGRAM,
  UPDATE_PROGRAM
} from '../services/queries'
import validator from '../services/validator'

const ProgramForm = ({ toUpdate, setToUpdate, ...props }) => {
  const [addProgram] = useMutation(ADD_PROGRAM)

  const [updateProgram] = useMutation(UPDATE_PROGRAM)

  const addProgramSubmit = (e) => {
    addProgram({
      variables: {
        operation: e.target.operation.value,
        processId: e.target.processId.value,
        processStep: parseInt(e.target.processStep.value),
        productFamily: e.target.productFamily.value
      }
    })
      .then((result) => {
        props.onClose()
      })
  }

  const updateProgramSubmit = (values) => {
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

  const onProgramFormSubmit = values => {
    console.log(values)
  }

  return (
    <Modal { ...props }>
      <h1 className="title">
        { Object.keys(toUpdate).length ? `Update ${toUpdate.operation}` : 'Add New Program'}
      </h1>
      <Formik
        initialValues={{
          operation: '',
          processId: '',
          processStep: 0,
          productFamily: ''
        }}
        onSubmit={onProgramFormSubmit}
        validate={validator}
        isInitialValid
      >
        {({
          errors,
          touched,
          values,
          isValid,
          handleChange,
          handleSubmit
        }) => (
          <form
            className="program-form"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <Input
              type="text"
              id="operation"
              name="operation"
              label="Operation *"
              isError={touched && errors.operation}
              onChange={handleChange}
              values={values.operation}
            />
            <Input
              type="text"
              id="processId"
              name="processId"
              label="Process ID *"
              isError={touched && errors.processId}
              onChange={handleChange}
              values={values.processId}
            />
            <Input
              type="number"
              id="processStep"
              name="processStep"
              label="Process Step *"
              isError={touched && errors.processStep}
              
              onChange={handleChange}
              values={values.processStep}
            />
            <Input
              type="text"
              id="productFamily"
              name="productFamily"
              label="Product Family *"
              isError={touched && errors.productFamily}
              onChange={handleChange}
              values={values.productFamily}
            />
            <button type="submit" className="submit-btn">
              Save
            </button>
          </form>
        )}
      </Formik>
    </Modal>
  )
}

export default ProgramForm