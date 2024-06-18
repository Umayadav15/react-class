import React, {useState} from 'react'

export default function List() {
    const [employees, setemployees]=useState([
        {
            name:"uma",
            city:"Hyd",
            age:20
        },
        {
            name:"Pavani",
            city:"Nellore",
            age:16
        },
        {
            name:"Geethu",
            city:"kadapa",
            age:21
        }
    ])
  return (
    <div>
        {
            employees.map((emp)=>(
                <div>
                    <p>Name:{emp.name}</p>
                    <p>City:{emp.city}</p>
                    <p>Age:{emp.age}</p>
                    </div>

            ))
        }
      
    </div>
  )
}
