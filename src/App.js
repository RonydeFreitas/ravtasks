import React, { useEffect, useState } from 'react'
import { Input } from 'semantic-ui-react'
import './App.css'
import Botao from './botao/botao'
import Grupo from './grupo/grupo'
import Topbar from './topbar/topbar'

let estrutura = [{
  titulo: 'Coluna1',
  cards: [
    {descricao: 'card1 coluna1', date: Date.now()}, 
    {descricao: 'card2 coluna1', date: Date.now()},
    {descricao: 'card3 coluna1', date: Date.now()}]
}, 
{titulo: 'Coluna2',
  cards: [
    {descricao: 'card1 coluna2', date: Date.now()}, 
    {descricao: 'card2 coluna2', date: Date.now()}]
}]

function App() {
  
  const [mostra, setMostra] = useState(true)

  const [colunaGrupo, setColunaGrupo] = useState([])

  useEffect(() => {
    estrutura.map(el => {
      console.log("EL:", el)
      setColunaGrupo([...colunaGrupo, <Grupo tit_grupo={el.titulo}/>])
    })
  },[])

  function meteColuna() {
    let tituloGrupo = ""
    document.addEventListener('keyup', function(tecla) {
      if(tecla.key === 'Enter') {
        tituloGrupo = document.querySelector('#inputdiv').value
        estrutura.map(el => {
          setColunaGrupo([...colunaGrupo, <Grupo tit_grupo={el.titulo}/>])
        })
        setTimeout(() => {
          setMostra(true)
        }, 100)
      }
    })
  }


  return (<>
    <Topbar placeholder="Localizar Atividade"/>
      <div id='demais'>
        {colunaGrupo}
        <div id='divbotao'>
          {
            mostra ?
            <Botao nomebotao="Novo Grupo +" onclick={()=>setMostra(false)}/>: 
            <Input onKeyUp={()=>meteColuna()} label={<Botao nomebotao='x' onclick={()=>setMostra(true)}/>} labelPosition='right' id='inputdiv' placeholder='Nome do Grupo...' />
          }
        </div>
      </div>
  </>)
}

export default App