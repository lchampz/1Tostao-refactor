import react, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container, Label, Wrapper } from '../CardRegister/styled.js'
import bg from "../../../assets/img/background.jpg";
import {WrapperInput} from './styled';
import User from "../../../assets/icons/user.png";
import Cpf from "../../../assets/icons/cpf.png";
import Email from "../../../assets/icons/email.png";
import Lock from "../../../assets/icons/padlock.png";
import Whats from "../../../assets/icons/whats.png";
import {CardInfo} from '../Card/styled.js'
import { ButtonCard } from '../Button/styled.js'
import { Input } from '../Input/styled.js'
import {Title} from '../Text/styles/text_style.js'
import InputRegister from '../InputRegister/index.js'

const CardLogin = ({color, textAlign, marginTop, marginBottom, fontSize, height, transition}) => {
    const [data, setData] = useState({
        email:null,
        password:null
    });
 
    const navigate = useNavigate();
    return(
        <>
            <Container bgImg={bg}>
                <Wrapper>
                    <WrapperInput>
                        <InputRegister
                            label={"Email"}
                            marginRight="72%"
                            icon={Email}
                            value={data.user}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                            placeholder="Digite seu email"
                        />
                        <InputRegister
                            label={"Senha"}
                            marginRight="71%"
                            icon={Lock}
                            value={data.pass}
                            type={"password"}
                            onChange={(e) => setData({ ...data, pass: e.target.value })}
                            placeholder="Digite sua senha"
                        />
                    </WrapperInput>
                        <p className='esquecer' onClick={() => navigate(`/`)}>Já tem uma conta? Entrar</p>
                        <Button  >Entrar</Button>
                        <p className='cadastro' onClick={() => navigate(`/register`)}>Não tem uma conta? Cadastre-se agora!</p>
                </Wrapper>
            </Container>
        </>
    );
}

export default CardLogin;