import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [currTask, setCurrTask] = useState("")
  const me = "</sahil>"


  const submitTasks = (e)=>{
      e.preventDefault()
      setCurrTask([...currTask, {title, desc}])
      console.log(currTask);
  }

  
  const deleteTasks = (i)=>{
    let newTasks = [...currTask]
    newTasks.splice(i,1)
    setCurrTask(newTasks)
  }
  let taskRender = <h2 className='font-medium text-center'>No Work Today 🤷🏻‍♂️</h2>
  let s1= "Desc:  "

  if(currTask.length>0){
   taskRender= currTask.map((t,i)=>{ //t -> item, i->index
      return(
        <li key={i} className='flex items-center justify-between space-x-7'>
            <div className="flex items-center justify-between mb-2 w-2/3 grid ">
              <div className="text-xl font-semibold text-wrap whitespace-wrap">
                  {t.title}
                  <div className="font-normal">{s1}{t.desc}</div>
              </div>
          </div>
          <button onClick={()=>{
            deleteTasks(i)
          }} className='font-bold py-2 px-4 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full  dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>Delete</button>
        </li> 
        )})
      }

  return (
    <>
    <div className="flex justify-center items-center">
      <div className="min-h-1/2 flex justify-center pt-8 rounded-xl grid" style={{width: "60rem"}}>
      <div className="flex justify-center -mt-7">
                    <div className="font-medium">made by<a href="https://github.com/sahiwl" className="text-indigo-400 font-semibold" > {me} 🐱‍👤</a>  </div>
                </div>
        
        <div className="rounded-2xl" style={{backgroundColor: "#1B1A55"}}>
          <h1 className='p-5 text-5xl text-slate-300 font-bold text-center dark:hover:text-indigo-300'> <a href='https://github.com/sahiwl/Todo-App'>Todo List</a></h1> 
          
          <form onSubmit={submitTasks} className='grid grid-cols-5'>
            <input type="text" 
            className="text-xl text-gray-900 m-8 px-4 py-2 rounded-2xl focus:outline-none col-span-2 placeholder-gray-950" 
            style={{backgroundColor: '#9290C3'}} 
            placeholder='I want to....' value={title} 
            onChange={(e)=>{
              setTitle(e.target.value)
              }}/>

            <input type="text" 
            className="text-xl focus:outline-none rounded-2xl m-8 px-4 py-2 col-span-2 placeholder-gray-950" placeholder='Enter Description' 
            style={{backgroundColor: '#9290C3'}} 
            value={desc} 
            onChange={(e)=>{
              setDesc(e.target.value)
              }}/>

            <button className='font-bold m-7 text-sm font-medium focus:outline-none rounded-2xl dark:bg-violet-500 dark:hover:bg-violet-700'> Add task</button>
          </form>

          <div className="flex justify-center items-center">
            <div className="text-pretty p-8 rounded-xl mb-3 min-w-96" style={{background: '#9290C3'}}>
                    {taskRender}
            </div>
          </div>
          
        </div>
      </div>
    </div>
        
    </>
  )
}

export default App
