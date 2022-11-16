import React, { useState } from 'react'

import Modal from '../Modal'
import { Title, Input, Label } from './styled'

const ModalAlter = ({ display, cancel, confirm, onChangeEmail, onChangePass, pass, email, labelBntConfirm, disabled=false }) => {

    return ( 
        <Modal disabled={disabled} size={'70%'} display={display} cancel={cancel} confirm={confirm} bgColor={'#252525'} bgColorSecondary={'#FA6D6D'} labelBntConfirm={labelBntConfirm}>
            <Title>
                Confirme suas crendeciais
            </Title>
            <div style={{ width: '50%', height: '100%', marginBottom: '15px'}}>
                <Label>Seu email</Label>
                <Input onChange={onChangeEmail} value={email}/>
                <Label>Sua senha</Label>
                <Input onChange={onChangePass} value={pass}/>
            </div>   
        </Modal>
     );
}
 
export default ModalAlter;