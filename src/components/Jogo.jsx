//(imagem da forca, botão de iniciar, palavra do jogo)
import forca0 from "../assets/forca0.png";
export default function Jogo({ palavras }) {
    return (
        <>
            <div className="jogo">
                <img className="img" src={forca0} alt="" />
                <div class="right">
                    <button> Escolher Palavra </button>
                    <span className="palavra"> {palavras[Math.floor(Math.random() * palavras.length)]}</span>
                </div>
            </div>
        </>
    )
}