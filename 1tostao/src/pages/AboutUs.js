import React from 'react'
import Footer from '../components/organims/Footer/Footer'
import { Container, Linha, Col } from '../components/atoms/Container/styled'
import {Title, Paragrafo} from '../components/atoms/Text/styles/text_style'
import aboutUs from '../assets/img/aboutUs.png'
import graph from '../assets/img/graph.png'

const AboutUs = ({width, height, children, fontSize, textAlign, margin, marginBottom, paddingTop, paddingBottom, maxWidth, display, flex, flexDirection, alignContent, lineHeight}) => {

    return(
        <>
            <Container topContainer={paddingTop="12rem"}>
                <Linha>
                    <Col>
                        <Title children={children="Sobre nós"} sizeText={fontSize="60px"} bottomText={marginBottom="30px"} />
                        <Paragrafo>Somos um grupo de estudantes que ousamos sonhar alto!</Paragrafo>
                        <br />
                        <Paragrafo>
                            Queríamos desenvolver uma plataforma, que além de abrangente
                            fosse útil para todos os públicos.
                            Essa plataforma não irá apenas atender os consumidores, porém ela irá atender
                            também aqueles que precisam tirar uma graninha extra no final do mês,
                            ou até mesmo aqueles que vieram a perder os seus empregos na pandemia
                        </Paragrafo>
                        <br />
                        <Paragrafo>
                            Além de dar a oportunidade para se tornar conhecido no mundo dos
                            Freelancers, iremos expor e divulgar seus trabalhos e projetos.
                        </Paragrafo>
                    </Col>

                    <Col>
                        <img src={aboutUs} alt="img" width="100%" />
                    </Col>
                </Linha>
            </Container>
            
            <Container>
                <Linha>
                    <Col colTop={paddingTop="20px"}>
                        <img src={graph} alt="graph" width="100%" />
                    </Col>
                    <Col colTop={paddingTop="20px"}>
                        <Title children={children="Benefícios"} sizeText={fontSize="60px"} alignText={textAlign="center"} bottomText={marginBottom="30px"} />
                        <Paragrafo linePar={lineHeight="1.4"}>
                        ✅ Como citado anteriormente, iremos realizar toda a divulgação necessária,
                            para seu projeto ser visado. 
                        </Paragrafo>
                        <br />
                        <Paragrafo>
                        ✅ Não recolhemos taxas a cada trabalho/projeto realizado. 
                            Compensando muito mais para o  Freelancer.
                        </Paragrafo>
                        <br />
                        
                    </Col>
                </Linha>
            </Container>

            <Container>
                
                    <Col>
                        <Title children={children="Confira mais benefícios"} sizeText={fontSize="60px"} alignText={textAlign="center"} />
                    </Col>
                
            </Container>

            <Footer />
        </>   
    );
}

export default AboutUs