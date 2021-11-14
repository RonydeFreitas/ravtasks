import './card.css'

function Card () {
    return(
        <form id="card">
            <fieldset><legend>Nova Atividade</legend>
                <label>Atividade: <input id='nome' type="text" placeholder="Digite a atividade"/></label>
                <label>Lembrete: <input id='data' type="date"/></label>
            </fieldset>
        </form>
    )
}

export default Card