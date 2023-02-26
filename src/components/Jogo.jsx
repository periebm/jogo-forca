//(imagem da forca, botão de iniciar, palavra do jogo)
import { useState } from "react"

let game_started = false;
let word_to_discover = [];


export default function Jogo({palavras, split_palavra, setWord, setDisable,image_game, game_over}) {
    const [hide, setHide] = useState("hide");  
   
    function startGame() {
        setHide("");
        if (game_started === false) {
            split_palavra = (palavras[Math.floor(Math.random() * palavras.length)]).split("");
            console.log(split_palavra);
            setWord(split_palavra);
            setDisable([]);

            for(let i=0; i < split_palavra.length; i++){ //copia o array
                word_to_discover.push("_");
            }

            console.log(word_to_discover)
            game_started = true;
        }
    }


    return (
        <>
            <div className="jogo">
                <img data-test="game-image" className="img" src={image_game} alt="" />
                <div className="right">
                    <button data-test="choose-word" onClick={startGame}> Escolher Palavra </button>
                    <div>
                    <ul data-test="word" className={`palavra ${hide}`}> 
                    {word_to_discover.map(p => <li>{p}</li>)}
                    </ul>
                    </div>
                </div>
            </div>
        </>
    )
}