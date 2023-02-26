//(imagem da forca, botão de iniciar, palavra do jogo)
import { useState } from "react"

let game_started = false;
let color_game = "";


export default function Jogo({ palavras, split_palavra, setWord, setDisable, image_game, word_to_discover, setWordGame, game_over, setGameCondition,setImg, forca_start_img, setError, error_count}) {
    const [hide, setHide] = useState("hide");

    function startGame() {
        setHide("");

        if(game_over === "lost" || game_over === "won"){
            game_started = false;
            setGameCondition("");
            setImg(forca_start_img);
            word_to_discover = [];
            setWordGame([]);
            split_palavra = []
        }


        if (game_started === false) {
            setError(0);
            split_palavra = (palavras[Math.floor(Math.random() * palavras.length)]).split("");
            console.log(split_palavra);
            setWord(split_palavra);
            setDisable([]);

            for (let i = 0; i < split_palavra.length; i++) { //copia o array
                word_to_discover.push("_");
            }
            setWordGame(word_to_discover);
            console.log(word_to_discover)
            game_started = true;
        }

    }

    if (game_over === "lost"){
        color_game = "red";
    }

    else if (game_over === "won"){
        color_game = "green";
    }

    else color_game = "";


    return (
        <>
            <div className="jogo">
                <img data-test="game-image" className="img" src={image_game} alt="" />
                <div className="right">
                    <button data-test="choose-word" onClick={startGame}> Escolher Palavra </button>
                    <div>
                        <ul data-test="word" className={`palavra ${color_game} ${hide}`}>
                            {word_to_discover.map(p => <li>{p}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}