import React from 'react'
import { useQuery, gql } from '@apollo/client'

import List from './components/List'

const GET_PROGRAMS = gql`
  query {
    programs {
      id
      operation
      processId
      processStep
      productFamily
    }
  }
`

const App = () => {
  const { loading, error, data } = useQuery(GET_PROGRAMS)

  return (
    <div className="container">
      <div className="header">
        <h1 className="header-title">Programs</h1>
      </div>

      {
        loading ?
          'loading...' :
          error ?
            'error' :
            <List programs={data.programs} />
      }
    </div>
  )
}

export default App