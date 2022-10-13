import React, { useEffect, useState } from "react";
import panic from "../../../assets/img/banner2.jpg";
import twitter from "../../../assets/img/twitter_verde.png";
import instagram from "../../../assets/img/instagram_verde.png";
import email from "../../../assets/img/email_verde.png";
import {
  Banner,
  Jobs,
  About,
  Wrapper,
  Title,
  AboutInfo,
  Reviews,
  TitleAvaliation,
  AboutInfos,
  AboutContact,
  Avaliatons,
  Sections,
  AboutUser,
  Username,
  MenuImg,
  UserAva,
  MenuUser,
  Pagination,
  WrapperAvaliation,
  Mensagem,
  Contratar,
  UserImg,
  Job,
  JobComments,
  JobImage,
  JobLikes,
  JobsFilter,
  JobsWrapper,
} from "./styled";
import profilePic from "./../../../assets/img/profile.png";
import { faStar, faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUserAuth } from "../../../request/hooks/Auth.js";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../../services/CreateGoogleAuth";
import { useService } from "../../../request/hooks/Services";
import Services from "../Services";
import service1 from "../../../assets/img/service2.png";
import ServiceCard from "../ServiceCard";

const HeaderUser = ({
  width,
  position,
  marginL,
  marginMedia,
  marginLMedia,
  marginLe,
  marginT,
  marginB,
}) => {
  const { logOut, user, profile, checkUndefined, check } = useUserAuth();
  const navigate = useNavigate();
  const [tab, setTab] = useState(1);
  const { serviceUser, getServicesUser } = useService();

  useEffect(() => {
    getServicesUser(user?.uid);
  });
  useEffect(() => {
    const Redirect = () => {
      if (!user) {
        navigate("/");
      }
    };
    Redirect();
  });

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  function switchTab(param) {
    switch (param) {
      case 1:
        setTab(1);
        break;

      case 2:
        setTab(2);
        break;
    }
  }

  return (
    <>
      <Banner bgImg={panic} />
      <Wrapper>
        <MenuImg>
          <UserImg
            width={width}
            position={"absolute"}
            marginL={marginL}
            src={profilePic}
          />
        </MenuImg>
        <MenuUser>
          <Username
            marginMedia={marginMedia}
            marginB={marginB}
            marginT={marginT}
            marginLe={marginLe}
          >
            {user && user.displayName
              ? user && user.displayName
              : profile && profile.username}
          </Username>
          <Mensagem>Enviar mensagem</Mensagem>
          {profile ? (
            <Contratar onClick={() => navigate("/profile/registerService")}>
              Cadastrar Serviço
            </Contratar>
          ) : (
            <Contratar>Contratar</Contratar>
          )}
        </MenuUser>
        <AboutUser>
          <Sections
            onClick={() => switchTab(1)}
            style={
              tab === 1
                ? { borderBottom: "1px solid #eee" }
                : { border: "none" }
            }
          >
            Portfólio
          </Sections>
          <Sections
            style={
              tab === 2
                ? { borderBottom: "1px solid #eee" }
                : { border: "none" }
            }
            onClick={() => switchTab(2)}
          >
            Sobre
          </Sections>
        </AboutUser>
        {tab === 1 ? (
          <Jobs>
            <JobsFilter>
              <select className="seletor">
                <option className="option" value="0">
                  Todas Categorias
                </option>
                <option className="option" value="1">
                  Fotografia
                </option>
                <option className="option" value="2">
                  Programação
                </option>
                <option className="option" value="3">
                  Artes
                </option>
                <option className="option" value="4">
                  Edição
                </option>
                <option className="option" value="5">
                  Aulas
                </option>
                <option className="option" value="6">
                  Desenhos
                </option>
                <option className="option" value="7">
                  Narração
                </option>
                <option className="option" value="8">
                  Produção Audio-Visual
                </option>
              </select>
              <select className="seletor">
                <option className="option" value="0">
                  Mais Populares
                </option>
                <option className="option" value="1">
                  Fotografia
                </option>
                <option className="option" value="2">
                  Programação
                </option>
                <option className="option" value="3">
                  Artes
                </option>
                <option className="option" value="4">
                  Edição
                </option>
                <option className="option" value="5">
                  Aulas
                </option>
                <option className="option" value="6">
                  Desenhos
                </option>
                <option className="option" value="7">
                  Narração
                </option>
                <option className="option" value="8">
                  Produção Audio-Visual
                </option>
              </select>
            </JobsFilter>
            <JobsWrapper>
              {serviceUser?.length === 0 ? (
                <div
                  style={{ height: "50vh", color: "#fff", marginTop: "1.6rem" }}
                >
                  <h1>Você ainda não tem serviços!</h1>
                </div>
              ) : (
                serviceUser?.map((item) => {
                  return (
                    <ServiceCard
                      style={{
                        marginBottom: "3rem",
                        marginLeft: "0",
                        color: "#fff",
                        marginRight: "2.2rem",
                      }}
                      idKey={item.id}
                      nome={item.nome}
                      preco={item.preco}
                      img={item.img || service1}
                      autor={item.autor}
                      desc={item.desc}
                      categoria={item.categoria}
                      nota={
                        (item.nota1 ||
                          item.nota2 ||
                          item.nota3 ||
                          item.nota4 ||
                          item.nota5) > 0
                          ? (
                              (item.nota1 * 1 +
                                item.nota2 * 2 +
                                item.nota3 * 3 +
                                item.nota4 * 4 +
                                item.nota5 * 5) /
                              (item.nota1 +
                                item.nota2 +
                                item.nota3 +
                                item.nota4 +
                                item.nota5)
                            ).toFixed(1)
                          : "0 Avaliações"
                      }
                    />
                  );
                })
              )}
            </JobsWrapper>
            <Pagination>
              <ul className="pagination">
                <li>
                  <a href="#">«</a>
                </li>
                <li>
                  <a className="active" href="#">
                    1
                  </a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">5</a>
                </li>
                <li>
                  <a href="#">6</a>
                </li>
                <li>
                  <a href="#">7</a>
                </li>
                <li>
                  <a href="#">»</a>
                </li>
              </ul>
            </Pagination>
          </Jobs>
        ) : (
          <About>
            <AboutInfos>
              <AboutInfo>
                <h1 className="title">
                  Sobre{" "}
                  {user && user.displayName
                    ? user && user.displayName
                    : profile && profile.username}
                </h1>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
                <p className="data">Membro desde: 15 de março de 2022</p>
              </AboutInfo>
              <AboutContact>
                <h1 className="title">Contato</h1>
                <div className="contacts">
                  <div className="redesS">
                    <img className="redes" alt="twitter" src={twitter} />
                    <img className="redes" alt="email" src={email} />
                    <img className="redes" alt="instagram" src={instagram} />
                  </div>
                  <div className="infos">
                    <p className="infoC">
                      {profile && profile.tell
                        ? profile && profile.tell
                        : "(**)*****-****"}
                    </p>
                    <p className="infoC">{user && user.email}</p>
                    <p className="infoC">
                      {user && user.displayName
                        ? user && user.displayName
                        : profile && profile.username}
                    </p>
                  </div>
                </div>
              </AboutContact>
            </AboutInfos>
            <Avaliatons>
              <Title>
                <h1 className="title">Avaliações(139)</h1>
              </Title>
              <Reviews className="esquerda">
                <WrapperAvaliation>
                  <FontAwesomeIcon className="star" icon={faStar} />
                  <FontAwesomeIcon className="star" icon={faStar} />
                  <FontAwesomeIcon className="star" icon={faStar} />
                  <FontAwesomeIcon className="star" icon={faStar} />
                  <FontAwesomeIcon className="star" icon={faStar} />
                  <TitleAvaliation>"Demora e baixa qualidade!"</TitleAvaliation>
                  <UserAva>
                    <UserImg
                      marginLMedia={"0rem"}
                      width={"5rem"}
                      position={"relative"}
                      marginL={"0"}
                      src={profilePic}
                    />
                    <Username
                      marginMedia={"1rem"}
                      marginB={"0"}
                      marginT={"1.5rem"}
                      marginLe={"1rem"}
                    >
                      {user && user.displayName
                        ? user && user.displayName
                        : profile && profile.username}
                    </Username>
                  </UserAva>
                  <p className="data">02 de dezembro de 2022</p>
                </WrapperAvaliation>
              </Reviews>
              <Reviews className="direita">
                <WrapperAvaliation>
                  <FontAwesomeIcon className="star" icon={faStar} />
                  <FontAwesomeIcon className="star" icon={faStar} />
                  <FontAwesomeIcon className="star" icon={faStar} />
                  <FontAwesomeIcon className="star" icon={faStar} />
                  <FontAwesomeIcon className="star" icon={faStar} />
                  <TitleAvaliation>"Demora e baixa qualidade!"</TitleAvaliation>
                  <UserAva>
                    <UserImg
                      marginLMedia={"0rem"}
                      width={"5rem"}
                      position={"relative"}
                      marginL={"0"}
                      src={profilePic}
                    />
                    <Username
                      marginMedia={"1rem"}
                      marginB={"0"}
                      marginT={"1.5rem"}
                      marginLe={"1rem"}
                    >
                      {user && user.displayName
                        ? user && user.displayName
                        : profile && profile.username}
                    </Username>
                  </UserAva>
                  <p className="data">02 de dezembro de 2022</p>
                </WrapperAvaliation>
              </Reviews>
            </Avaliatons>
          </About>
        )}
      </Wrapper>

      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default HeaderUser;
