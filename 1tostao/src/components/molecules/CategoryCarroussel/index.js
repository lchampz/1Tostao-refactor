
import React from 'react'
import Card from '../../atoms/Card'
import { Wrapper } from './styled.js'

const images = require("../../../request/mock/imgs.json")


const renderCards = images.map((img, i) => {
    return(<Card className={'Card'} url={img.url} key={i}>{i}</Card>)
})


const CategoryCarroussel = () => {

    return(
        <Wrapper>
            {renderCards}
        </Wrapper>
    )
}

export default CategoryCarroussel