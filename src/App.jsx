import palavras from "./palavras";
import Letras from "./components/Letras"
import Jogo from "./components/Jogo"
import { useState } from "react"
import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const forca_img = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

function App() {
  const [split_palavra, setWord] = useState([]);
  const [word_to_discover, setWordGame] = useState([]);
  const [btn_disable, setDisable] = useState(alfabeto)
  const [image_game, setImg] = useState(forca_img[0]);
  const [game_over, setGameCondition] = useState(false);
  const [error_count, setError] = useState(0);
  return (
    <div className="general">
      <Jogo
        palavras={palavras}
        split_palavra={split_palavra}
        setWord={setWord} setDisable={setDisable}
        game_over={game_over}
        forca_img={forca_img}
        setImg={setImg} 
        forca_start_img ={forca0}
        image_game={image_game}
        alfabeto={alfabeto}
        word_to_discover={word_to_discover}
        setWordGame = {setWordGame}
        setGameCondition={setGameCondition}
        setError = {setError}
        error_count = {error_count}

        />


      <Letras
        btn_disable={btn_disable}
        setDisable={setDisable}
        alfabeto={alfabeto}
        forca_img={forca_img}
        setImg={setImg} 
        setGameCondition={setGameCondition}
        word_to_discover={word_to_discover}
        split_palavra={split_palavra}
        setError = {setError}
        game_over={game_over}
        setWordGame = {setWordGame}
        />

    </div>
  )
}

export default App;
