import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Modal from './Modal'
import { closeDialog } from '../store/reducers/Utilities/actions'

const DialogModal = ({ closeDialog, title, message, onConfirmClick, onCancelClick }) => {
  const handleDialogClose = () => {
    if (onCancelClick) {
      onCancelClick()
    }

    closeDialog()
  }

  const handleDialogConfirm = () => {
    if (onConfirmClick) {
      onConfirmClick()
    }

    closeDialog()
  }
  
  return (
    <Modal
      height={100}
      onClose={handleDialogClose}
    >
      <h1 className="title">
        {title}
      </h1>
      <p>{message}</p>
      {onConfirmClick ? (
        <>
          <button className="btn" onClick={handleDialogConfirm} style={{ marginRight: '1rem' }}>
            Confirm
          </button>
          <button className="btn outline" onClick={handleDialogClose}>
            Cancel
          </button>
        </>
      ) : (
        <button className="btn" onClick={handleDialogClose}>
          Close
        </button>
      )}
    </Modal>
  )
}

const mapStateToProps = ({ UtilitiesState }) => {
  const { dialog } = UtilitiesState

  return {
    ...dialog
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    closeDialog
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogModal)