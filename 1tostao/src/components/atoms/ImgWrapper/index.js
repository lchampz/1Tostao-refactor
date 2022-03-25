import React from 'react';

import { Wrapper } from './styled'

const ImgWrapper = ({ url, alt, width, height}) => {
    return (
        <Wrapper width={width} height={height}>
            <img src={url} alt={alt}/>
        </Wrapper>
    );
}
 
export default ImgWrapper;