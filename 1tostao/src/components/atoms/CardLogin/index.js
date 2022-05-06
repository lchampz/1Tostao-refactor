import react, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button  } from '../CardRegister/styled.js'
import bg from "../../../assets/img/background.jpg";
import {WrapperInput, Container, Wrapper} from './styled';
import Email from "../../../assets/icons/email.png";
import Lock from "../../../assets/icons/padlock.png";
import InputRegister from '../InputRegister/index.js'
import {signInWithEmailAndPassword,  getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const CardLogin = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
 
    const navigate = useNavigate();



const login = async () => {
  try {
    const user = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    console.log(user.loginEmail);
  } catch (error) {
    console.log(error.message);
  }
};

const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
    }else{
        console.log("não")
    }
    });
    const logout = async () => {
        if(loginEmail){
            await signOut(auth);
            console.log("Deslogado!")
        }else{
            console.log("Não tem ninguem logado!")
        }
    };





    return(
        <>
            <Container bgImg={bg}>
                <Wrapper>
                    <WrapperInput>
                        <InputRegister
                            onChange={(event) => {setLoginEmail(event.target.value)}}
                            label={"Email"}
                            marginRight="72%"
                            icon={Email}
                            placeholder="Digite seu email"
                        />
                        <InputRegister
                            label={"Senha"}
                            marginRight="71%"
                            icon={Lock}
                            type={"password"}
                            onChange={(event) => {setLoginPassword(event.target.value)}}
                            placeholder="Digite sua senha"
                        />
                    </WrapperInput>
                        <Button onClick={login}>Entrar</Button>
                        <Button onClick={logout}>Deslogar</Button>
                        {/* <Button onClick={checkLogin}>Checar se te alguem logado</Button> */}

                </Wrapper>
            </Container>
        </>
    );
}

export default CardLogin;