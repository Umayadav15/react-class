import React from 'react'

export default function Props(props) {
    console.log(props)
  return (
    <div>
      <h1>This is UmaSekhar</h1>
      <p>React Functional Component</p>
      <h1>Name is:{props.studentName}<br/> and roll no :{props.studentRollNo}</h1>
    </div>
  )
}
