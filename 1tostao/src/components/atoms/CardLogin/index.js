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
import { auth } from "../../../services/Firebase";

const CardLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(false);
  const [error, setError] = useState("");
  const { logIn, googleSignIn, user, check, profile } = useUserAuth();
  const navigate = useNavigate();

  const Redirect = () => {
    if (!user) {
      return console.log("deslogado");
    }
    navigate("/profile");
  };
  useEffect(() => {
    Redirect();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await logIn(email, password);
      navigate("/profile");
    } catch (err) {
      setError(err.message);
      setMessage(true);
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
        <Form>
          <Wrapper>
            <ImgWrapper
              url={Logo}
              width={"15%"}
              height={"15%"}
              margin={"30px 155px 0px 0px"}
            />
            <TextLogin>Login</TextLogin>
            {message === false ? null : (
              <div
                style={{
                  marginTop: "1rem",
                  width: "300px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <p
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    marginBottom: "-1rem",
                  }}
                >
                  Erro ao fazer login! Email ou senha incorretos!
                </p>
              </div>
            )}
            <form
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
              onSubmit={handleSubmit}
            >
              <WrapperInput>
                <InputRegister
                  label={"Email"}
                  type="email"
                  marginRight="72%"
                  placeholder="Email"
                  icon={Email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputRegister
                  label={"Senha"}
                  type="password"
                  marginRight="71%"
                  placeholder="Senha"
                  icon={Lock}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </WrapperInput>

              <Botao type="Submit">Login</Botao>
            </form>
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
