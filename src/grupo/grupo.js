import {React, useState} from 'react'
import Botao from '../botao/botao'
// import Card from '../card/card'
import './grupo.css'
import { Button, Form, Modal } from 'semantic-ui-react'

  
function Grupo (props) {
    
    const [open, setOpen] = useState(false)
    
    return(<>
        <div id="fundo_grupo">
            <div id='tit_grupo'>
                {props.tit_grupo}
            </div>
            
            <div id='area_cards'>

            </div>
            <div>
                <Botao nomebotao="Novo Card +" onclick={() => setOpen(!open)}/> 
            </div>
        </div>
    
    <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size={'mini'}>
        <Modal.Header>Configure a sua tarefa:</Modal.Header>
        <Modal.Content>
            <Form>
                <Form.Field>
                    <label>Tarefa a ser realizada:</label>
                    <textarea id="descricao_tarefa" placeholder='Descreva a Tarefa...'/>  
                </Form.Field>
                <Form.Field>
                    <label>Data limite para realização:</label>
                    <input type="date" placeholder='Prazo para execução...' />
                </Form.Field>
            </Form>
        </Modal.Content>
        <Modal.Actions>
            <Button onClick={() => setOpen(false)}>
                Cancelar
            </Button>
            <Button
                color='violet'
                content="Salvar Tarefa"
                labelPosition='right'
                icon='checkmark'
                onClick={() => setOpen(false)}
                />
        </Modal.Actions>
    </Modal>
    </>)
}

export default Grupo