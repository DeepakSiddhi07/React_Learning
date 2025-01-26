import './App.css'
import Card from './components/Card'

function App() {
  
  return (
    <>
    <div>
        <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind </h1>  
        <Card username="Golu" btnText="Click me" />
        <Card username="Deepak" btnText="visit me"/>
    </div>
    </>
  )
}

export default App
