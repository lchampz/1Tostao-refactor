import React, { useState } from 'react'

import Modal from '../Modal'
import { Title, Input, Label } from './styled'

const ModalAlter = ({ display, cancel, confirm, pass, newPas }) => {
    const [ value, setValue ] = useState({
        pass: pass,
        newPass: newPas,
    })

    return ( 
        <Modal size={'70%'} display={display} cancel={cancel} confirm={confirm}>
            <Title>
                Insira sua nova senha
            </Title>
            <div style={{ width: '50%', height: '100%', marginBottom: '15px'}}>
                <Label>Nova senha</Label>
                <Input onChange={(e) => setValue({...value, pass: e.target.value})} value={value.pass}/>
                <Label>Confirme sua nova senha</Label>
                <Input onChange={(e) => setValue({...value, newPass: e.target.value})} value={value.newPass}/>
            </div>   
        </Modal>
     );
}
 
export default ModalAlter;