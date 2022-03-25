import React from 'react'

import { Wrapper, First, Second } from './styled'

const TwoColumn = ({ FirstColumn, SecondColumn }) => {
    return ( 
        <Wrapper>
            <First>
                {FirstColumn}
            </First>
            <Second>
                {SecondColumn}
            </Second>
        </Wrapper>
     );
}
 
export default TwoColumn;