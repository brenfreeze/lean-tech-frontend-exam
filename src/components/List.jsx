import React from 'react'

import ListItem from './ListItem'

const List = ({ programs }) => {
  console.log(programs)

  return (
    <ul className="program-list">
      {
        programs.map(program => (
          <ListItem {...program} />
        ))
      }
    </ul>
  )
}

export default List