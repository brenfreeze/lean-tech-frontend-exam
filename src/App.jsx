import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client'

import List from './components/List'
import ProgramForm from './components/ProgramForm'
import { GET_PROGRAMS } from './services/queries'

const App = () => {
  const [ modalOpen, setModalOpen ] = useState(false)
  const { loading, error, data } = useQuery(GET_PROGRAMS)

  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }

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
      {
        loading ?
          'loading...' :
          error ?
            'error' :
            <List programs={data.programs} />
      }
      {
        modalOpen && (
          <ProgramForm onClose={toggleModal} />
        )
      }
    </div>
  )
}

export default App