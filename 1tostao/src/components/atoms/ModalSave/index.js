import React from 'react'

import Modal from '../Modal'
import ImgWrapper from '../ImgWrapper';
import { Title } from './styled'
import warning from '../../../assets/icons/warningIcon.png'

const ModalSave = ({ display, cancel, confirm }) => {
    return ( 
        <Modal display={display} cancel={cancel} confirm={confirm}>
            <ImgWrapper url={warning} height={'70px'} imgHeight={"43%"} margin={"20px 0px 70px 15px"}/>
            <Title>
                Deseja salvar suas alterações?
            </Title>
        </Modal>
     );
}
 
export default ModalSave;