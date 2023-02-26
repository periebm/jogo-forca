//(conjunto de botões com as letras)
let error_count = 0;
export default function Letras({btn_disable, setDisable, alfabeto,setImg,forca_img, setGameOver}) {

    function clicked(letra){
        setDisable([...btn_disable, letra])
        console.log(btn_disable);
        error_count++;
        console.log(error_count)
        setImg(forca_img[error_count]);
        if(error_count >= 6){
            setGameOver(true);
            setDisable(alfabeto);
        }
    }

    return (
        <>
            <div className="alfabeto">
                {alfabeto.map((l) => <button data-test="letter" key={l} onClick={()=> clicked(l)} disabled={btn_disable.includes(l)}>{l.toUpperCase()}</button>)}
            </div>
        </>
    )
}