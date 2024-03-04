import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  return (
    <>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>Todo List</h1>
      <form>
        <input type="text" className="text-xl border-zinc-800 border-2 m-8 px-4 py-2" id="" placeholder='Enter task' />
        <input type="text" className="text-xl border-zinc-800 border-2 m-8 px-4 py-2" placeholder='Enter Description' />
        <button className='bg-black text-white px-4 py-3 font-bold rounded m-5'> Add task</button>

      </form>
    </>
  )
}

export default App
