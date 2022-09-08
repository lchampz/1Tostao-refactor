import React, { useEffect } from 'react';
import aboutUs from '../../../assets/img/aboutUs.png'
import { useNavigate } from 'react-router-dom';
import graph from '../../../assets/img/graph.png'
import {Container, Title, Img, CenterBorda, Text,Row, Column, Sobre, Borda, Video, Orientation} from './styled'

const About= ( marginB, marginR, marginL, flex) => {


    return ( 
    <>
        <Container>
            <Sobre>
                <Orientation>
                    <div>
                        <About.Title>Sobre Nós</About.Title>
                        <About.Text>Somos um grupo de estudantes que ousamos sonhar alto!</About.Text>
                        <br/>
                        <About.Text>Queríamos desenvolver uma plataforma, que além de abrangente fosse útil para todos os públicos. Essa plataforma não irá apenas atender os consumidores, porém ela irá atender também aqueles que precisam tirar uma graninha extra no final do mês, ou até mesmo aqueles que vieram a perder os seus empregos na pandemia.</About.Text>
                        <br/>
                        <About.Text>Além de dar a oportunidade para se tornar conhecido no mundo dos Freelancers, iremos expor e divulgar seus trabalhos e projetos.</About.Text>
                    </div>
                    <Column >
                       <About.Img src={aboutUs}/> 
                    </Column>
                </Orientation>
            </Sobre>
            <Sobre>
                <Orientation flex="row-reverse">
                   
                <div>
                        <About.Title>Benefícios</About.Title>
                        <About.Text>✅ Como citado anteriormente, iremos realizar toda a divulgação necessária, para seu projeto ser visado. </About.Text>
                        <br/>
                        <About.Text>✅ Não recolhemos taxas a cada trabalho/projeto realizado. Compensando muito mais para o  Freelancer.</About.Text>
                        <br/>
                        <About.Text>✅ Mensalidades fixas</About.Text>
                        <br/>
                        <About.Text>✅ Segurança e sigilo</About.Text>
                </div>
                <Row>
                       <About.Img marginL="0" src={graph}/> 
                </Row>
          
                </Orientation>
            </Sobre>
            <CenterBorda>
                <Borda/>
            </CenterBorda>
            <Video>
                <About.Title marginB="4rem">Confira mais benefícios</About.Title>
            </Video>
        </Container>
    </> 
    );
    
}

About.Title = function AboutTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
  };
About.Text = function AboutText({ children, ...restProps }) {
      return <Text {...restProps}>{children}</Text>;
};
About.Img = function AboutImg({ children, ...restProps }) {
    return <Img {...restProps}>{children}</Img>;
  };

 
export default About;