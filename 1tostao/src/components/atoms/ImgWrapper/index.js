import React from 'react';

import { Wrapper } from './styled'

const ImgWrapper = ({ url, alt, width, height, float, click, cursor}) => {
    return (
        <Wrapper onClick={click} width={width} height={height} float={float} cursor={cursor}>
            <img src={url} alt={alt}/>
        </Wrapper>
    );
}
 
export default ImgWrapper;