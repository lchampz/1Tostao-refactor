import React from 'react'

import { 
    Card, 
    Content
} from './styled.js'

const Cards = ({ 
    children, 
    marginTop, 
    color,
    url
}) => {

    return(
        <Card marginTop={marginTop} >
            <Content 
                color={color}
                bgImg={url}
            >
                {children}
            </Content>
        </Card>
    )
}

export default Cards