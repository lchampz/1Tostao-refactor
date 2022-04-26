import React from 'react';
import { Input, WrapperInput } from './styled'
import ImgWrapper from '../ImgWrapper';

const InputWithIcon = ({ icon, placeholder, onChange, display, type }) => {
    return(
        <WrapperInput display={display}>
            <div className="img">
                <ImgWrapper url={icon} width="20px" height="20px" margin={'10px 0px 0px 0px'} cursor="initial"/>
            </div>
            <Input type={type} onChange={onChange} placeholder={placeholder}/>
        </WrapperInput>
    );
}

export default InputWithIcon;