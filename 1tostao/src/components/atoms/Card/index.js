import React from 'react'

import { 
    Card, 
    Content
} from './styled.js'

const Cards = ({ 
    children, 
    marginTop, 
    color,
    bgImg
}) => {

    return(
        <Card marginTop={marginTop} >
            <Content 
                color={color}
                bgImg={bgImg}
            >
                {children}
            </Content>
        </Card>
    )
}

export default Cards