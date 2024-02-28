import React from 'react'

function Child(props) {
  return (
    <div>
      <div>
        <p>Hello {props.name}</p>
        <p>Hello {props.name2}</p>
      </div>
    </div>
  )
}

export default Child