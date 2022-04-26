import React, { useState, useEffect } from 'react'
import Footer from '../components/organims/Footer/Footer'
import { Container, Linha, Col } from '../components/atoms/Container/styled'
import {Title, Paragrafo} from '../components/atoms/Text/styles/text_style'
import { useTheme } from '../request/hooks/Theme'
import aboutUs from '../assets/img/aboutUs.png'
import graph from '../assets/img/graph.png'

const AboutUs = ({width, height, children, fontSize, textAlign, margin, marginBottom, paddingTop, paddingBottom, maxWidth, display, flex, flexDirection, alignContent, lineHeight, backgroundColor}) => {

    const { theme, setTheme, themes } = useTheme()
    const [ style, setStyle] = useState({
        bg: '#343434',
        color: '#000'
    })

    const changeTheme = () => {
        setTheme(theme.name === 'white' ? themes[1] : themes[0])
    }

    useEffect(() => {
        if(theme.name === 'white') {
            setStyle({ bg: '#e8e8e8', color: 'black' })
        } else {
            setStyle({bg: '#1c1c1c' ,  color: '#FFFFFF' })
        }
    }, [theme])

    return(
        <>
            <Container id="tes" topContainer={paddingTop="12rem"}>
                <Linha linhaCor={style.bg}>
                    <Col>
                        <Title colorText={style.color} children={children="Sobre nós"} sizeText={fontSize="60px"} bottomText={marginBottom="30px"} />
                        <Paragrafo parCor={style.color} >Somos um grupo de estudantes que ousamos sonhar alto!</Paragrafo>
                        <br />
                        <Paragrafo parCor={style.color} >
                            Queríamos desenvolver uma plataforma, que além de abrangente
                            fosse útil para todos os públicos.
                            Essa plataforma não irá apenas atender os consumidores, porém ela irá atender
                            também aqueles que precisam tirar uma graninha extra no final do mês,
                            ou até mesmo aqueles que vieram a perder os seus empregos na pandemia
                        </Paragrafo>
                        <br />
                        <Paragrafo parCor={style.color} >
                            Além de dar a oportunidade para se tornar conhecido no mundo dos
                            Freelancers, iremos expor e divulgar seus trabalhos e projetos.
                        </Paragrafo>
                    </Col>

                    <Col>
                        <img src={aboutUs} alt="imagem ilustrativa sobre uma pessoa segurando uma lupa" width="90%" />
                    </Col>
                </Linha>
            </Container>
            
            <Container>
                <Linha linhaCor={style.bg} >
                    <Col colTop={paddingTop="20px"}>
                        <img src={graph} alt="imagem ilustrativa de uma pessoa mostrando um gráfico" width="100%" />
                    </Col>
                    <Col colTop={paddingTop="20px"}>
                        <Title colorText={style.color} children={children="Benefícios"} sizeText={fontSize="60px"} alignText={textAlign="center"} bottomText={marginBottom="30px"} />
                        <Paragrafo parCor={style.color} linePar={lineHeight="1.4"}>
                        ✅ Como citado anteriormente, iremos realizar toda a divulgação necessária,
                            para seu projeto ser visado. 
                        </Paragrafo>
                        <br />
                        <Paragrafo parCor={style.color} >
                        ✅ Não recolhemos taxas a cada trabalho/projeto realizado. 
                            Compensando muito mais para o  Freelancer.
                        </Paragrafo>
                        <br />
                        
                    </Col>
                </Linha>
            </Container>

            <Container>
                
                    <Col>
                        <Title colorText={style.color} children={children="Confira mais benefícios"} sizeText={fontSize="60px"} alignText={textAlign="center"} />
                    </Col>
                
            </Container>

            <Footer />
        </>   
    );
}

export default AboutUs