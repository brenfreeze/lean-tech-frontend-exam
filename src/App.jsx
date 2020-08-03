import React, { useState, useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { useQuery } from '@apollo/client'

import List from './components/List'
import ProgramForm from './components/ProgramForm'
import DialogModal from './components/DialogModal'

import { GET_PROGRAMS } from './services/queries'
import { getPrograms } from './store/reducers/Programs/actions'

const App = ({ dialog, programs, getPrograms }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [toUpdate, setToUpdate] = useState({})
  const { loading, error, data } = useQuery(GET_PROGRAMS)

  const toggleModal = () => {
    if (modalOpen) {
      setToUpdate({})
    }
    setModalOpen(!modalOpen)
  }

  useEffect(() => {
    if (!error && !loading) {
      getPrograms(data.programs)
    }
  }, [ error, loading, data ])

  return (
    <div className="container">
      <div className="header">
        <h1 className="header-title">Programs</h1>
      </div>
      <a className="program-list-item add-new" onClick={toggleModal}>
        <h3>
          + Add New Program
        </h3>
      </a>
      <List
        setToUpdate={setToUpdate}
        toggleModal={toggleModal}
        programs={programs}
      />
      {modalOpen && (
        <ProgramForm
          toUpdate={toUpdate}
          setToUpdate={setToUpdate}
          onClose={toggleModal}
        />
      )}
      {dialog.isOpen && (
        <DialogModal />
      )}
    </div>
  )
}

const mapStateToProps = ({ ProgramsState, UtilitiesState }) => {
  const { programs } = ProgramsState
  const { dialog } = UtilitiesState

  return {
    programs,
    dialog
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getPrograms
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)