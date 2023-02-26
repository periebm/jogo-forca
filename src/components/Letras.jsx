//(conjunto de botões com as letras)
let error_in = 0;

export default function Letras({btn_disable, setDisable, alfabeto,setImg,forca_img,setWordGame, setGameCondition, word_to_discover, split_palavra, game_over}) {
    
    function clicked(letra){
        setDisable([...btn_disable, letra])
        let one_right = false;

        split_palavra.map( (c, i) => {
            if(c === letra){
                word_to_discover[i] = c;
                console.log(i)
                one_right = true;
            }
        })

        if(word_to_discover.filter((c) => c === "_").length === 0){
            setGameCondition("won");
            setDisable(alfabeto);
        }

        if(one_right === false) error_in++;

        setImg(forca_img[error_in]);
        if(error_in >= 6){
            setGameCondition("lost");
            setDisable(alfabeto);
            setImg(forca_img[6]);
            setWordGame(split_palavra);
        }
        console.log(error_in);
    }

    if(game_over=== "won" || game_over=== "lost"){
        error_in = 0;
    }

    return (
        <>
            <div className="alfabeto">
                {alfabeto.map((l) => <button data-test="letter" key={l} onClick={()=> clicked(l)} disabled={btn_disable.includes(l)}>{l.toUpperCase()}</button>)}
            </div>
        </>
    )
}