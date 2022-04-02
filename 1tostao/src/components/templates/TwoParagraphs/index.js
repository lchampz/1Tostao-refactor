import React from 'react'

import { Wrapper, First, Second } from './styled'

const TwoParagraphs = ({ FirstColumn, SecondColumn, widthSecond, widthFirst }) => {
    return ( 
        <Wrapper>
            <First widthFirst={widthFirst}>
                {FirstColumn}
            </First>
            <Second widthSecond={widthSecond}>
                {SecondColumn}
            </Second>
        </Wrapper>
     );
}
 
export default TwoParagraphs;