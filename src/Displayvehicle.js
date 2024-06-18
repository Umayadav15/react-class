import React, {useState} from 'react'
import './vehicle.css'

export default function Displayvehicle(props) {
  return (
    <div className='vehicle-parent'>
        {
            props.myVehicles.map((vehicle)=>(
                <div className='vehicle'>
                    <p><b>Name:</b>{vehicle.name}</p>
                    <p><b>Cost:</b>{vehicle.cost}</p>
                    <p><b>Brand:</b>{vehicle.brand}</p>
                    <img src={vehicle.pic} alt={vehicle.name} width="15%"/>

                        
                 </div>

            ))

        }
      
    </div>
  )
}
