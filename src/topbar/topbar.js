import React from 'react'
import { Input } from 'semantic-ui-react'
import './topbar.css'
import {BsBellFill} from 'react-icons/all'


function Topbar(props) {
    return (
        <div id='topo'>
            <Input id="pesquisa_tarefa" icon='search' placeholder='Localizar Atividade'/>
            <BsBellFill size={25} color="black"/>
        </div>
    )
}

export default Topbar