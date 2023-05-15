import { useState } from "react";
import "./App.css"

const App = () => {
  const [caunt, setCaunt] = useState(0)

  const Click = () => {
    setCaunt(caunt => caunt + 1)
  }

  const Reset = () => {
    setCaunt(caunt => caunt = 0)
  }

  return(
    <div className="App">
      <div className="Main">
        <h1 id="display">{caunt}</h1>
        <button id="btn2" onClick={Reset}></button>
        <button id="btn1" onClick={Click}></button>
      </div>
    </div>
  )
}

export default  App