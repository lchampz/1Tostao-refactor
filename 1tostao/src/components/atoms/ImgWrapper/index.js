import React from 'react';

import { Wrapper } from './styled'

const ImgWrapper = ({ url, alt, width, height, float, click, cursor, margin, transform}) => {
    return (
        <Wrapper onClick={click} width={width} height={height} float={float} cursor={cursor} margin={margin} transform={transform}>
            <img src={url} alt={alt}/>
        </Wrapper>
    );
}
 
export default ImgWrapper;