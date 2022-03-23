import React from 'react'
import Border from '../../atoms/Border'
import Text from '../../atoms/Text/Text'
import Img from '../../../assets/img/about_us.png'

import { Wrapper, Paragraph, Button  } from './styled'

const BannerAbout = ({ titleColor, border, textColor, btnBg, bgCard, btnBgHover }) => {

    return(
        <Wrapper bgCard={bgCard}>
            <Text color={titleColor} size={'38px'}>Sobre Nós</Text>
            <Border colorBorder={border}  width={'195px'} size={'1px'}></Border>
            <Paragraph color={textColor}>
                <p>Somos um grupo de estudantes (5 no total) apaixonados por programação e 
                foi nos proposto o desenvolvimento de um site em formato de um e-commerce.</p>
            </Paragraph>
            <Paragraph color={textColor}>
                <img  style={{ float: 'right' }} src={Img} alt="aboutUs"/>
                <p>Dessa forma criamos o 1Tostão, sejam muito bem-vindos e esperamos que gostem!</p> 
            </Paragraph>
            
            <Button btnBgHover={btnBgHover} btnBg={btnBg} btnColor={textColor} onClick="_empty" ></Button>
        </Wrapper>
    )
}

export default BannerAbout 