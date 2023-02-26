//(imagem da forca, botão de iniciar, palavra do jogo)
import { useState } from "react"
import forca0 from "../assets/forca0.png";
let game_started = false;

export default function Jogo({palavras, split_palavra, setSplit, setDisable}) {
    const [hide, setHide] = useState("hide");
    function startGame() {
        setHide("");
        if (game_started === false) {
            split_palavra = (palavras[Math.floor(Math.random() * palavras.length)]).split("");
            console.log(split_palavra);
            setSplit(split_palavra);
            game_started = true;
            console.log(game_started);
            setDisable(false);
        }
    }

    return (
        <>
            <div className="jogo">
                <img data-test="game-image" className="img" src={forca0} alt="" />
                <div className="right">
                    <button data-test="choose-word" onClick={startGame}> Escolher Palavra </button>
                    <div>
                    <ul data-test="word" className={`palavra ${hide}`}> 
                    {split_palavra.map(p => <li>_</li>)}
                    </ul>
                    </div>
                </div>
            </div>
        </>
    )
}