import React from 'react'

import { 
    Card, 
    Content,
    Link
} from './styled.js'

const Cards = ({ 
    children, 
    marginTop, 
    color,
    url,
    link
}) => {

    return(
        <Card marginTop={marginTop} >
            <Content 
                color={color}
                bgImg={url}
            >
                <div className="label"><Link href={link}>{children}</Link></div>
            </Content>
        </Card>
    )
}

export default Cards