
import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter]=useState(10);

const addValue = ()=>{
  if (counter >=20) {
    setCounter(counter)

  }
  else
  {
    setCounter(counter + 1);
  }
  // console.log(setCounter);
}

const removeValue = ()=>{

  if (counter <=0 ) {
    setCounter(counter);
  }
  else{
    setCounter(counter -1);
  }
}

  return (
    <>
    <div>
      <div>
        <h1>
        Hello React Counter
        </h1>
      </div>

      <div>
        <h2>
        Counter Value : {counter}
        </h2>
      </div>

    <button onClick={addValue}>Add Value Counter:{counter}</button>
    <br />
    <br />
    <button onClick={removeValue}>Remove Value Counter:{counter}</button>
      
    </div>
    </>
  )
}

export default App
