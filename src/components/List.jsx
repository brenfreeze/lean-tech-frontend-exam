import React from 'react'

const List = ({ programs }) => {
  console.log(programs)

  return (
    <ul className="program-list">
      {
        programs.map(program => (
          <li className="program-list-item">
            { program.id }
          </li>
        ))
      }
    </ul>
  )
}

export default List