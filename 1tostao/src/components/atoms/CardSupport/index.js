import React from 'react'
import { Wrapper, Card, Title, WrapperCards, Content } from './styled'
import user from '../../../assets/icons/userIconGreen.png'
import email from '../../../assets/icons/emailIconGreen.png'
import ImgWrapper from '../ImgWrapper'
import { useTheme } from "../../../request/hooks/Theme";
import { useUserAuth } from "../../../request/hooks/Auth";
import { useNavigate } from "react-router-dom";

const CardSupport = () => {
    const { theme } = useTheme();
    const navigate = useNavigate();
    const { user } = useUserAuth()

    return (
        <Wrapper>
            <Title color={theme.colors.fontColor}>Olá! Como podemos te ajudar?</Title>
            <WrapperCards>
                { user ? (
                <Card bgColor={theme.colors.cardSupportBg} onClick={() => navigate(`/support/myaccount`)}>
                    <Content color={theme.colors.fontColor}>
                        <ImgWrapper margin={'0px 0px 35px 0px'} url={user} alt={'userImg'}/>
                        <p>Minha conta</p>
                    </Content>
                </Card>
                ) : null}
                <Card bgColor={theme.colors.cardSupportBg} onClick={() => navigate(`/support/send`)}>
                    <Content color={theme.colors.fontColor}>
                        <ImgWrapper margin={'0px 0px 35px 56px'} url={email} alt={'emailImg'}/>
                        <p>Enviar mensagem aos Devs</p>
                    </Content>
                </Card>
            </WrapperCards>
        </Wrapper>
    );
}
 
export default CardSupport;