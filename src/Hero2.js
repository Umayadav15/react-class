import React from 'react'

export default function Hero2() {
  return (
    <div>
        {
            Props.map((Hero)=>(
                <div>
                    <p><b>Name:</b>{Hero.name}</p>
                    <p><b>Movie:</b>{Hero.movie}</p>
                    <p><b>Age:</b>{Hero.age}</p>
                    <img src/>
                </div>

            ))
        }
      
    </div>
  )
}
