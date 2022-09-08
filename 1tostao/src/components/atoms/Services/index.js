import React from 'react';
import {Container, ServiceWrapper, Service,Price, ServicePrice, InfoService, ClientImg, ClientName, ServiceTitle, ServiceImage} from './styled'
import service1 from "../../../assets/img/service1.png";
import service2 from "../../../assets/img/service2.png";
import service3 from "../../../assets/img/service3.png";
import profilePic from './../../../assets/img/profile.png'
import { useUserAuth } from '../../../request/hooks/Auth.js';
const Services = () => {
    const { user, profile } = useUserAuth();
    return ( 
        <Container>
            <ServiceWrapper>
                <Service>
                    <ServiceTitle>Eu vou programar em HTML</ServiceTitle>
                    <div style={{display:"flex", flexDirection:"row", width:"250px", justifyContent:"flex-end"}}>
                        <ServicePrice>
                            <Price>R$20,00</Price>
                        </ServicePrice>
                    </div>
                    <ServiceImage src={service1}/>

                    <InfoService>
                        <ClientImg src={user && user.photoURL ? user && user.photoURL : profilePic}/>
                        <ClientName>{user && user.displayName ? user && user.displayName : profile && profile.username}</ClientName>
                        <p id="avaliacao">3,6</p>
                    </InfoService>
                </Service>
                <Service>
                    <ServiceTitle>Eu vou programar em HTML</ServiceTitle>
                    <div style={{display:"flex", flexDirection:"row", width:"250px", justifyContent:"flex-end"}}>
                        <ServicePrice>
                            <Price>R$20,00</Price>
                        </ServicePrice>
                    </div>
                    <ServiceImage src={service2}/>

                    <InfoService>
                        <ClientImg src={user && user.photoURL ? user && user.photoURL : profilePic}/>
                        <ClientName>{user && user.displayName ? user && user.displayName : profile && profile.username}</ClientName>
                        <p id="avaliacao">3,6</p>
                    </InfoService>
                </Service>
                <Service>
                    <ServiceTitle>Eu vou programar em HTML</ServiceTitle>
                    <div style={{display:"flex", flexDirection:"row", width:"250px", justifyContent:"flex-end"}}>
                        <ServicePrice>
                            <Price>R$20,00</Price>
                        </ServicePrice>
                    </div>
                    <ServiceImage src={service3}/>

                    <InfoService>
                        <ClientImg src={user && user.photoURL ? user && user.photoURL : profilePic}/>
                        <ClientName>{user && user.displayName ? user && user.displayName : profile && profile.username}</ClientName>
                        <p id="avaliacao">3,6</p>
                    </InfoService>
                </Service>
            </ServiceWrapper>
        </Container>
     );
}
 
export default Services;