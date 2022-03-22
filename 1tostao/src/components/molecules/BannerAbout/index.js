import React from 'react'
import Border from '../../atoms/Border'
import Text from '../../atoms/Text/Text'
import Img from '../../../assets/img/about_us.png'

import { Wrapper, Paragraph, Button } from './styled'

const BannerAbout = () => {

    return(
        <Wrapper>
            <Text color={'rgba(47, 47, 47, 1)'} size={'38px'}>Sobre Nós</Text>
            <Border colorBorder={'rgba(47, 47, 47, 1)'}  width={'195px'} size={'1px'}></Border>
            <Paragraph>
                <p>Somos um grupo de estudantes (5 no total) apaixonados por programação e 
                foi nos proposto o desenvolvimento de um site em formato de um e-commerce.</p>
            </Paragraph>
            <Paragraph>
                <img  style={{ float: 'right' }} src={Img} alt="aboutUs"/>
                <p>Dessa forma criamos o 1Tostão, sejam muito bem-vindos e esperamos que gostem!</p> 
            </Paragraph>
            
            <Button></Button>
        </Wrapper>
    )
}

export default BannerAbout 