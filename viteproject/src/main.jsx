//import React from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'

// function MyApp(){
//     return(
//         <div>
//             <h1>hello varsha!</h1>
//         </div>
//     )
// }

// const anotherElement =(
//     <>
//     <a href= "https://google.com" target=" _blank">visit google</a>
//     <h1 >hello</h1>
//     </>
    
// )
//we cannot write evaluated expression like if wgera inside custom objects 
const username = "varsha";

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target:'_blank'},
    'click me to visit google',
    username
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <MyApp />
    //App()  we can do this also
    // anotherElement
    reactElement
)
