import React from 'react'

import ListItem from './ListItem'

const List = ({ programs, ...props }) => {
  return (
    <ul className="program-list">
      {
        programs.map(program => (
          <ListItem {...program} {...props} />
        ))
      }
    </ul>
  )
}

export default List