//(conjunto de botões com as letras)
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function Letras({btn_disable, setDisable}) {
    return (
        <>
            <div className="alfabeto">
                {alfabeto.map((l) => <button data-test="letter" key={l} disabled={btn_disable}>{l.toUpperCase()}</button>)}
            </div>
        </>
    )
}