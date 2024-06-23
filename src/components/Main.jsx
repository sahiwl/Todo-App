import { useState } from "react";

const Main = () => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [currTask, setCurrTask] = useState("");
  const me = "</sahil>";
  
  
  const submitTasks = (e) => {
    e.preventDefault();
    setCurrTask([...currTask, { title, desc }]);
    setTitle("");
    setDesc("");
  };
  
  const deleteTasks = (i) => {
    let newTasks = [...currTask];
    newTasks.splice(i, 1);
    setCurrTask(newTasks);
  }; 

  let taskRender = (
    <h2 className="font-medium text-center italic">No work today ?</h2>
  );
  
  if (currTask.length > 0) {
    taskRender = currTask.map((t, i) => {
      //t -> item, i->index
      return (
        <li
        key={i}
          className="flex items-center justify-between space-x-7 w-96 space-y-3 text-white/80"
          >
          <div className="flex items-center justify-between mb-2 w-2/3 grid space-x-7">
            <div className="text-lg font-bold text-wrap whitespace-wrap">
              {t.title}
              <div className="text-[15px] text-wrap font-sm">
                {t.desc}
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              deleteTasks(i);
            }}
            className="font-bold py-2 px-4 me-2 mb-1 text-sm  text-gray-900 focus:outline-none bg-white/40 rounded-full  dark:hover:text-white dark:hover:bg-gray-700"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <div className="flex justify-center items-center font-Quicksand">
        <div className="flex justify-center flex-col pt-8 rounded-xl w-full max-w-2xl mx-4 md:w-3/4 lg:w-2/5">
          <div className="flex justify-center -mt-7">
          <div className="font-medium">
              made by
              <a
                href="https://github.com/sahiwl"
                className="text-[#dadada] font-semibold"
              >
                {me} 
              </a>
            </div>
          </div>

          <div className="rounded-lg bg-white/5 p-3">
            <h1 className="font- p-5 text-5xl text-slate-300 font-bold text-center dark:hover:text-indigo-300">
              <a href="https://github.com/sahiwl/Todo-App">Todo List</a>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <input
            type="text"
            className="placeholder:text-gray-300 m-2 text-white focus:border-purple-500 active:border-purple-500 form-input px-4 py-3 rounded-lg bg-white/10 backdrop-3xl focus:outline-none col-span-4 md:col-span-2"
            placeholder="I want to...."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="text"
            className="placeholder:text-gray-300 m-2 text-white focus:border-purple-500 active:border-purple-500 form-input px-4 py-3 rounded-lg bg-white/10 backdrop-3xl focus:outline-none col-span-4 md:col-span-2"
            placeholder="Enter Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />

          <button
            className="font-bold m-2 py-3 px-2 text-sm focus:outline-none rounded-full dark:bg-[#8ccf7e] dark:hover:bg-[#dadada] col-span-4 md:col-span-1 "
            onClick={submitTasks}
          >
            Add task
          </button>
            </div>

            <div className="flex justify-center items-center min-h-[65vh] ">
              <div className="text-pretty lg:p-8 md:p-[5px] mb-3 h-96 space-y-2 rounded-lg overflow-auto font-Quicksand w-full max-w-[30rem]">
                {taskRender}
              </div>
            </div>            
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;