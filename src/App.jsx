import palavras from "./palavras";
import Letras from "./components/Letras"
import Jogo from "./components/Jogo"


function App() {
  return (
    <div className="general">
      <Jogo />
      <Letras />
    </div>
  )
}

export default App;
