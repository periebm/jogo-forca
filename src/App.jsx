import palavras from "./palavras";
import Letras from "./components/Letras"
import Jogo from "./components/Jogo"
import { useState } from "react"

function App() {
  const [split_palavra, setSplit] = useState([]);
  const [btn_disable, setDisable] = useState(true)

  return (
    <div className="general">
      <Jogo palavras={palavras} split_palavra={split_palavra} setSplit={setSplit} setDisable={setDisable} />
      <Letras btn_disable={btn_disable} setDisable={setDisable}/>
    </div>
  )
}

export default App;
