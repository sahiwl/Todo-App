import { useState } from "react";
import "./App.css";
import Main from "./components/Main";

function App() {
  const [count, setCount] = useState(0)
  return(
    <>
    <div className="min-h-[100vh]">
    <Main/>
    </div>
    </>
  )
}
export default App
