import palavras from "./palavras";
import Letras from "./components/Letras"
import Jogo from "./components/Jogo"


function App() {
  return (
    <div className="general">
      <Jogo palavras={palavras}/>
      <Letras />
    </div>
  )
}

export default App;
