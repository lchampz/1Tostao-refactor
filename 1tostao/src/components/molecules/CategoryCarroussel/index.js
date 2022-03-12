
import React from 'react'
import Card from '../../atoms/Card'
import { Wrapper, Arrow } from './styled.js'

import Carousel, { consts } from 'react-elastic-carousel'
const images = require("../../../request/mock/imgs.json")

const CategoryCarroussel = () => {
    
    const arrow = ({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ? '<' : '>'

        return(
            <Arrow onClick={onClick} disabled={isEdge}>
                {pointer}
            </Arrow>
        )
    }

    const breakpoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 4, itemsToScroll: 1 },
    ]

    const renderCards = images.map((img, i) => {
        return(
            <Card key={i} className={'Card'} url={img.url} >{img.id}</Card>     
        )  
    })

    return(
        <Wrapper>
            <Carousel renderArrow={arrow}
                easing="cubic-bezier(1,.15,.55,1.54)"
                tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
                transitionMs={700}
                breakPoints={breakpoints}
                isRTL={true} 
                focusOnSelect={true} 
                itemsToScroll={1} 
                itemsToShow={4}
                enableAutoPlay autoPlaySpeed={2000}
            >
                {renderCards}
            </Carousel>
        </Wrapper>
    )
}

export default CategoryCarroussel