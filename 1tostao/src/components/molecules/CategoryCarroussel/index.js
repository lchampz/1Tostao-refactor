import React from 'react'

import Card from '../../atoms/Card'

import { Wrapper } from './styled.js'

const CategoryCarroussel = () => {

    return(
        <Wrapper>
            <Card className={'Card'} bgImg={'https://sportshub.cbsistatic.com/i/r/2019/11/07/04a0f1ab-3a63-408f-aefa-2eebc50ddc65/thumbnail/770x433/b28dcbd21e1c80b8a282bdba6b9340a3/13fb012e-7aff-e911-80cd-fa7ca2e6058b-original.jpg'}>teste</Card>
            <Card className={'Card'}>teste</Card>
            <Card className={'Card'}>teste</Card>
            <Card className={'Card'}>teste</Card>
        </Wrapper>
    )
}

export default CategoryCarroussel