import { useState } from "react";
import "./App.css";
import Main from "./components/Main";

function App() {
  const [count, setCount] = useState(0)
  return(
    <>
    {/* <div className="bg-gradient-to-r from-gray-950 via bg-purple-950 to-violet-950 h-screen"> */}
    <div class="top-container">
    <Main/>
    </div>
    </>
  )
}
export default App
