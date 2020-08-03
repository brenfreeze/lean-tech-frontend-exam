import React from 'react'

import ListItem from './ListItem'

const List = ({ programs, ...props }) => {
  return (
    <ul className="program-list">
      {
        programs.map((program, index) => (
          <ListItem key={index} {...program} {...props} />
        ))
      }
    </ul>
  )
}

export default List