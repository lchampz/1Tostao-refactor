import React from "react";
import { FooterStyled } from "./styledFooter.js";
import { BorderText } from "../../atoms/Border/styled.js";
import face from "../../../assets/icons/facebook.png";
import ig from "../../../assets/icons/instagram.png";
import git from "../../../assets/icons/git.png";
import linkedin from "../../../assets/icons/linkedin.png";
import logo from "../../../assets/img/logo-white.png";
import { useNavigate } from "react-router-dom";

import "./style.css";

const Footer = ({ width, margintop, border, size, color, needMargin }) => {
  const navigate = useNavigate();
  return (
    <>
      {/* FooterStyled is the Footer */}
      <FooterStyled needMargin={needMargin}>
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={logo} id="logo" alt="logo" />
              <p className="desc">
                Para que trabalhar em uma empresa só, se o mundo todo pode ser o
                seu cliente? Para ser 1Tostão basta um clique.
              </p>
              <div>
                <img src={face} className="img" alt="facebook" />
                <a
                  href={"https://www.instagram.com/1tostao_oficial/"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={ig} className="img" alt="instagram" />
                </a>
                <a
                  href={"https://github.com/lchampz/1Tostao-refactor"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={git} className="img" alt="github" />
                </a>
              </div>
            </div>

            <div className="col-info">
              <h1 className="infos">Serviços</h1>
              <ul>
                <li className="li" onClick={() => navigate(`/servicos`)}>
                  Categorias
                </li>
                <li className="li" onClick={() => navigate(`/support`)}>
                  Suporte
                </li>
              </ul>
            </div>

            <div className="col-info">
              <h1 className="infos">Empresa</h1>
              <ul>
                <li onClick={() => navigate("/about")} className="li">
                  Sobre nós
                </li>
                <li className="li" onClick={() => navigate(`/faq`)}>
                  FAQ
                </li>
              </ul>
            </div>
          </div>
          <BorderText borderWidth={width} topBorder={margintop} />

          <div className="row" id="row-rod">
            <div className="col-rod">
              <p className="rodapepo">© 2022 1Tostão</p>
            </div>

            <div className="col-rod-info">
              <p className="rodapepo">Termos de uso</p>
              <p className="rodapepo">Política de privacidade</p>
            </div>
          </div>
        </div>
      </FooterStyled>
    </>
  );
};

export default Footer;
