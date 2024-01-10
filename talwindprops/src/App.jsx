//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'




function App() {
  //const [count, setCount] = useState(0)
  // let myObj ={
  //   username:"Varsha",
  //   age:19
  // }

  // let myArr =[1,2,3];

  return (
    <>
    <div><h1 className='bg-green-400'>TAlwind css</h1></div>
    <Card username="varsha" btn1="photo" btn2="travel" btn3="winter"/>
    {/* <Card id='hello' someObj={myArr}/> */}
    <Card/>
     
    </>
  )
}

export default App
