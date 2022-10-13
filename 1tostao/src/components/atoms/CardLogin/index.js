import react, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../../../assets/img/background.jpg";
import Logo from "../../../assets/img/logo.png";
import ImgWrapper from "../ImgWrapper/index.js";
import {
  WrapperInput,
  Botao,
  Container,
  Wrapper,
  Form,
  TextLogin,
} from "./styled";
import GoogleButton from "react-google-button";
import Email from "../../../assets/icons/email.png";
import Lock from "../../../assets/icons/padlock.png";
import InputRegister from "../InputRegister/index.js";
import { useUserAuth } from "../../../request/hooks/Auth.js";

const CardLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn, user, check, profile } = useUserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const Redirect = () => {
      if (user) {
        navigate("/profile");
      }
    };
    Redirect();
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/profile");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/profile");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Container bgImg={bg}>
        <Form onSubmit={handleSubmit}>
          <Wrapper>
            <ImgWrapper
              url={Logo}
              width={"15%"}
              height={"15%"}
              margin={"30px 155px 0px 0px"}
            />
            <TextLogin>Login</TextLogin>
            <WrapperInput>
              <InputRegister
                label={"Email"}
                type="email"
                marginRight="72%"
                placeholder="Email"
                icon={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputRegister
                label={"Senha"}
                type="password"
                marginRight="71%"
                placeholder="Senha"
                icon={Lock}
                onChange={(e) => setPassword(e.target.value)}
              />
            </WrapperInput>
            <Botao onClick={handleSubmit} type="Submit">
              Login
            </Botao>
            <p className="login" onClick={() => navigate(`/register`)}>
              Não tem uma conta? Registre-se
            </p>

            <GoogleButton
              className="g-btn"
              type="dark"
              onClick={handleGoogleSignIn}
            />
          </Wrapper>
        </Form>
      </Container>
    </>
  );
};

export default CardLogin;
