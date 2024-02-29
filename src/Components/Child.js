import React from 'react'

function Child(props) {
  return (
    <div>
      <div>
        {/* <p>Hello {props.name}</p>
        <p>Hello {props.name2}</p>
        <p>Hello {props.name3}</p> */}
        <table border="1px">
          <tr>
            <th>Greeting</th>
            <th>FirstName</th>
            <th>MiddleName</th>
            <th>LastName</th>
          </tr>
          <tr>
            <td>Hello</td>
            <td>{props.name}</td>
            <td>{props.name2}</td>
            <td>{props.name3}</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Child