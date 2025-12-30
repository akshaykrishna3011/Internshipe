import React from 'react'

const SkilsList = (props) => {
  return (
    <div>
      <ul>
        {props.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

export default SkilsList
