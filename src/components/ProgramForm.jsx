import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Formik } from 'formik'
import { useMutation } from '@apollo/client'

import Modal from './Modal'
import Input from './Input'

import {
  ADD_PROGRAM,
  UPDATE_PROGRAM
} from '../services/queries'
import validator from '../services/validator'
import { openDialog } from '../store/reducers/Utilities/actions'
import { addProgram as addProgramToStore, } from '../store/reducers/Programs/actions'

const ProgramForm = ({
  addProgramToStore,
  openDialog,
  toUpdate,
  setToUpdate,
  ...props
}) => {
  const [initialFormValues, setInitialFormValues] = useState({
    operation: '',
    processId: '',
    processStep: 0,
    productFamily: ''
  })
  const [addProgram] = useMutation(ADD_PROGRAM)
  const [updateProgram] = useMutation(UPDATE_PROGRAM)
  const isUpdating = Object.keys(toUpdate).length

  useEffect(() => {
    if (isUpdating) {
      setInitialFormValues({
        operation: toUpdate.operation,
        processId: toUpdate.processId,
        processStep: toUpdate.processStep,
        productFamily: toUpdate.productFamily,
      })
    }
  }, [ ])

  const addProgramSubmit = (values) => {
    addProgram({
      variables: {
        ...values
      }
    })
      .then((result) => {
        const { createProgram } = result.data

        addProgramToStore(createProgram)
        openDialog({
          title: `Added ${createProgram.operation}`
        })

        props.onClose()
      })
  }

  const updateProgramSubmit = (values) => {
    updateProgram({
      variables: {
        id: toUpdate.id,
        program: {
          ...values
        }
      }
    })
      .then((result) => {
        const { updateProgram } = result.data

        /*
          Would add an updateProgramFromStore function here,
          but apollo-client already handles the state update.
        */
        openDialog({
          title: `Updated ${updateProgram.operation}`
        })

        props.onClose()
      })
  }

  const onProgramFormSubmit = values => {
    if (isUpdating) {
      updateProgramSubmit(values)

      return
    }

    addProgramSubmit(values)
  }

  return (
    <Modal { ...props }>
      <h1 className="title">
        { isUpdating ? `Update ${toUpdate.operation}` : 'Add New Program'}
      </h1>
      <Formik
        enableReinitialize
        initialValues={initialFormValues}
        onSubmit={onProgramFormSubmit}
        validate={validator}
      >
        {({ errors, touched, values, handleChange, handleSubmit, }) => (
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
                isError={touched.operation && errors.operation}
                onChange={handleChange}
                value={values.operation}
              />
              <Input
                type="text"
                id="processId"
                name="processId"
                label="Process ID *"
                isError={touched.processId && errors.processId}
                onChange={handleChange}
                value={values.processId}
              />
              <Input
                type="number"
                id="processStep"
                name="processStep"
                label="Process Step *"
                isError={touched.processStep && errors.processStep}
                onChange={handleChange}
                value={values.processStep}
              />
              <Input
                type="text"
                id="productFamily"
                name="productFamily"
                label="Product Family *"
                isError={touched.productFamily && errors.productFamily}
                onChange={handleChange}
                value={values.productFamily}
              />
              <button type="submit" className="btn">
                Save
              </button>
            </form>
          )}
      </Formik>
    </Modal>
  )
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    openDialog,
    addProgramToStore,
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(ProgramForm)