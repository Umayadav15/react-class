import React, {useState} from 'react'
import Displayvehicle from './Displayvehicle'


export default function Vehicle() {
    const [vehicleName, setVehicleName]=useState([
        {
            name:"car",
            cost:"20l",
            pic:"https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80",
            brand:"Kiya"
        },
        {
            name:"Bike",
            cost:"3l",
            pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGeiCAiDpfhDS0HmZwlAYQtRwNCeA0n2wAdA&s",
            brand:"FZ"
        },
        {
            name:"Scooty",
            cost:"1.5l",
            pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn7UUs_Sst6wKpWI735XlJCovnvHBN2kB2Ww&s",
            brand:"activa"
        }

    ])
  return (
    <div>
        <Displayvehicle myVehicles={vehicleName}/>
    </div>
  )
}
