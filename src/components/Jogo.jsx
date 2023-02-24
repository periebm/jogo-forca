//(imagem da forca, botão de iniciar, palavra do jogo)
import forca0 from "../assets/forca0.png"

export default function Jogo(){
    return(
        <div className="jogo">
            <img className="img" src={forca0} alt=""/>
            <button> Escolher Palavra </button>
        </div>
    )
}