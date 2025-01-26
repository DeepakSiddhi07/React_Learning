import React from 'react'
import ReactDOM from 'react-dom/client'
// eslint-disable-next-line no-unused-vars
import App from './App.jsx'


// function MyApp()
// {
//   return(
//     <div>
//       <h1>
//         hello from my app
//       </h1>
//     </div>
//   )
// }
// const reactElement={
//   type :'a',
//   props:{
//      href:'https://google.com',
//      target:'_blank'

//   },
//   children:'Click me to visit google'
// }
// const anotherElement=(
//   <a href='https://google.com' target='_blank'>visit Google</a>
// )

// eslint-disable-next-line no-unused-vars
const anotheruser = "Golu"
const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'Click me to visit Google',
  anotheruser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
   reactElement
)
