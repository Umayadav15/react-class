import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Navigation from './Navigation'

export default function App() {
  return (
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>

    </Routes>
    </BrowserRouter>
    
      
    
  )
}

// import {useState} from 'react'
// // import Props from './Props'  
// // import List from './List'
// // import Input from './Input'
// // import Vehicle from './Vehicle'
// import UserData from './UserData'
// function App() {
//     const [name, setName]=useState('ReactJS')
//     const [year, setYear]=useState(2013)
//   return(
//     <div>
//       <UserData/>
//       {/* <Vehicle/>
//       <Input/>
//       <List/> */}
//       {/* <p>Myself Mahi</p>
//       <h1>Hello Tirupathi</h1>
//       <p>Name:{name} Year: {year}</p>
//       <Props studentName="Krishna" studentRollNo="01"/>
//       <Props studentName="Pavani" studentRollNo="02"/>
//       <Props studentName="Bhavya" studentRollNo="03"/> */}
      
      
//     </div>
//   )
// }


// export  default App