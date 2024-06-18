import React, {useState} from 'react'

export default function Hero() {
    const [heroName, serHeroName]=useState([
        {
          name:"Mahesh",
          movie:"Murari",
          img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ20VxNZvPdgjm_R42DBH5X7pH4mlo6aVVfkw&s",
          age:45
        },
        {
            name:"Ram",
            movie:"Ready",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJPkkMVCQN6D3LkTCu4obbhGA4bflBmGp5YA&s",
            age:35
        },
        {
            name:"Vijay",
            movie:"Geetha Govindham",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC6zs8B7LqrmqP5n0RL7Oa7V724SuKJcYm0g&s",
            age:34
        }
    ])
  return (
    <div>
      
    </div>
  )
}
