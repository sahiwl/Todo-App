import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState("")

  const submitHandler = (e)=>{
      e.preventDefault()
      setMainTask([...mainTask, {title, desc}])
      console.log(mainTask);
  }

  
  const deleteHandler = (i)=>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }
  let renderTask = <h2>No Task Available</h2>

  if(mainTask.length>0){
   renderTask= mainTask.map((t,i)=>{ //t -> item, i->index
      return(
        <li key={i} className='flex items-center justify-between'>
          <div className="flex items-center justify-between mb-5 w-2/3">
          <h4 className="text-xl font-semibold">{t.title}</h4>
          <h5 className='text-xl font-medium'>{t.desc}</h5>
        </div>
      <button onClick={()=>{
        deleteHandler(i)
      }} className='bg-red-200 text-white font-bold'>Delete</button>
        </li> 
        )})
      }

  return (
    <>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>Todo List</h1>

      <form onSubmit={submitHandler}>
        <input type="text" className="text-xl border-zinc-800 border-2 m-8 px-4 py-2" placeholder='Enter task' value={title} onChange={(e)=>{
          setTitle(e.target.value)
          }}/>
        <input type="text" className="text-xl border-zinc-800 border-2 m-8 px-4 py-2" placeholder='Enter Description' value={desc} onChange={(e)=>{
          setDesc(e.target.value)
          }}/>
        <button className='bg-black text-white px-4 py-3 font-bold rounded m-5'> Add task</button>

      </form>
      <hr />
      <div className="p-8 bg-slate-200">
          <ul>
            {renderTask}
          </ul>
      </div>
    </>
  )
}

export default App
