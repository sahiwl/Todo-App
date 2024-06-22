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
    console.log(currTask);
  };

  const deleteTasks = (i) => {
    let newTasks = [...currTask];
    newTasks.splice(i, 1);
    setCurrTask(newTasks);
  };
  let taskRender = (
    <h2 className="font-medium text-center">No Work Today 🤷🏻‍♂️</h2>
  );
  let s1 = "";

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
                {/* {s1} */}
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
      {/* bg-gradient-to-r from-purple-900 via bg-purple-950 to-violet-950 h-screen  */}
      <div className="min-h-[100vh]">
      <div className="flex justify-center items-center font-Quicksand  ">
        <div className=" flex justify-center pt-8 rounded-xl grid h-min-[100vh] " style={{ width: "90rem" }}>
          <div className="flex justify-center -mt-7 ">
            <div className="font-medium">
              made by
              <a
                href="https://github.com/sahiwl"
                className="text-indigo-400 font-semibold"
              >
                {" "}
                {me} 🐱‍👤
              </a>{" "}
            </div>
          </div>

          <div className="rounded-lg backdrop-blur-l bg-white/5  " style={{ width: "50rem" }}>
            <h1 className="font-Quicksand p-5 text-5xl text-slate-300 font-bold text-center dark:hover:text-indigo-300">
              {" "}
              <a href="https://github.com/sahiwl/Todo-App">Todo List</a>
            </h1>

            <div className="grid grid-cols-5  ">
              <input
                type="text"
                className="placeholder:text-gray-300 m-8 text-white focus:border-purple-500 active:border-purple-500 form-input px-4 py-3 rounded-lg col-span-2 bg-white/10 backdrop-3xl focus:outline-none"
                placeholder="I want to...."
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />

              <input
                type="text"
                className="placeholder:text-gray-300 m-8 text-white focus:border-purple-500 active:border-purple-500 focus:outline-none form-input px-4 py-3 rounded-lg col-span-2 bg-white/10 backdrop-3xl text-pretty"
                placeholder="Enter Description"
                style={{ backgroundColor: "", width: "" }}
                value={desc}
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
              />

              <button className="font-bold m-7 py-3 px-2 text-sm  focus:outline-none rounded-full dark:bg-violet-500 dark:hover:bg-violet-700" onClick={submitTasks}>
                {" "}
                Add task
              </button>
            </div>

            <div className="flex justify-center items-center min-h-[65vh] ">
              <div className="text-pretty p-8 mb-3 h-96  rounded-lg overflow-auto font-Quicksand " style={{ width: "30rem" }}>
                {taskRender}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

    </>
  );
}

export default Main;