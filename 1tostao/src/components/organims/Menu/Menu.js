import React, { useState, useEffect } from "react";
import Botao from "../../atoms/BotaoMenu/Botao";
import { useNavigate } from "react-router-dom";
import {
  Header,
  Pages,
  Buttons,
  Container,
  HamburguerMenu,
  MobileMenu,
  PagesMenu,
  Config,
  Theme,
} from "./styledMenu.js";
import logoWhite from "../../../assets/img/logo-white.png";
import blackLogo from "../../../assets/img/blackLogo.png";
import { Links } from "../../atoms/LinkMenu/styledLink.js";
import LinkMenu from "../../atoms/LinkMenu/Link.js";
import { useTheme } from "../../../request/hooks/Theme";
import { useUserAuth } from "../../../request/hooks/Auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faArrowDown,
  faCog,
  faAngleDown,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import SubmenuLogged from "../../atoms/SubmenuLogged";

const Menu = ({ padding }) => {
  const [classMenu, setClassMenu] = useState(false);
  const [config, setConfig] = useState(false);
  const navigate = useNavigate();
  const { theme, setTheme, themes } = useTheme();
  const [scroll, setScroll] = useState(false);
  const [style, setStyle] = useState({
    bg: "#343434",
    color: "#FFFFFF",
  });
  const [logo, setLogo] = useState(logoWhite);
  const { user, profile, logOut, setProfile } = useUserAuth();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  const changeTheme = () => {
    setTheme(theme.name === "white" ? themes[1] : themes[0]);
  };

  useEffect(() => {
    if (theme.name === "white") {
      setStyle({ bg: "#E1E1E1", color: "black" });
      setLogo(blackLogo);
    } else {
      setStyle({ bg: "#343434", color: "#FFFFFF" });
      setLogo(logoWhite);
    }
  }, [theme]);

  document.addEventListener("scroll", () => {
    const content = document.getElementById("section");
    let scrolled = document.scrollingElement.scrollTop;
    let position = content.offsetTop;

    if (scrolled > position + 75) {
      setScroll(true);
    } else if (scrolled > position - 75) {
      setScroll(false);
    }
  });

  const setMobileMenu = () => setClassMenu(!classMenu);

  const toggleConfig = () => {
    setConfig(!config);
  };

  return (
    <>
      <Container
        bg={scroll ? style.bg : "rgb(255, 255, 255, 0)"}
        color={style.color}
        shadow={
          scroll ? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : "rgb(255, 255, 255, 0)"
        }
        id="section"
      >
        <Links onClick={() => navigate(`/`)} linkTop={padding}>
          <img src={logo} className="logo" />
        </Links>

        <Header id="links">
          <Pages onClick={() => navigate(`/`)}>Home</Pages>
          <Pages onClick={() => navigate(`/servicos`)}>Serviços</Pages>
          <Pages onClick={() => navigate(`/about`)}>Sobre nós</Pages>
          {profile?.ADM === true ? (
            <Pages onClick={() => navigate(`/adm`)}>Admin</Pages>
          ) : null}
        </Header>
        <Theme config={config} bg={style.bg} color={style.color}>
          <Pages className="tema" onClick={changeTheme}>
            Tema
          </Pages>
        </Theme>
        <Config config={config}>
          <FontAwesomeIcon
            className="arrowLeft"
            onClick={toggleConfig}
            icon={faAngleLeft}
          />
          <FontAwesomeIcon
            className="arrow"
            onClick={toggleConfig}
            icon={faAngleDown}
          />
          <FontAwesomeIcon
            className="config"
            onClick={toggleConfig}
            icon={faCog}
          />
        </Config>
        <Buttons>
          {user ? (
            <SubmenuLogged
              imgUser={user && user.photoURL ? user && user.photoURL : null}
              instagram={(profile && profile.instagram) || null}
              email={(user && user.email) || null}
              github={(profile && profile.github) || null}
              name={
                user && user.displayName
                  ? user && user.displayName
                  : (profile && profile.username) || null
              }
              twitter={(profile && profile.twitter) || null}
            />
          ) : (
            <>
              <Botao
                border={`1px solid ${style.color}`}
                color={style.color}
                click={() => navigate(`/login`)}
              >
                Login
              </Botao>
              <Botao
                border={`1px solid ${style.color}`}
                color={style.color}
                click={() => navigate(`/register`)}
              >
                Registrar
              </Botao>
            </>
          )}
        </Buttons>
        <HamburguerMenu id="mobile" onClick={setMobileMenu} color={style.color}>
          <FontAwesomeIcon className="icon" icon={faBars} />
        </HamburguerMenu>
      </Container>
      {classMenu === false ? (
        <MobileMenu></MobileMenu>
      ) : (
        <MobileMenu
          style={{ right: "0", transition: "350ms" }}
          bg={style.bg}
          color={style.color}
          id="hamburguer"
        >
          <PagesMenu
            onClick={() => {
              setMobileMenu();
              navigate(`/`);
            }}
          >
            Home
          </PagesMenu>
          <PagesMenu
            onClick={() => {
              setMobileMenu();
              navigate(`/servicos`);
            }}
          >
            Serviços
          </PagesMenu>
          <PagesMenu
            onClick={() => {
              setMobileMenu();
              navigate(`/about`);
            }}
          >
            Sobre nós
          </PagesMenu>
          {user ? (
            <>
              <PagesMenu
                onClick={() => {
                  setMobileMenu();
                  navigate(`/profile`);
                }}
              >
                Perfil
              </PagesMenu>
              <PagesMenu
                onClick={() => {
                  setMobileMenu();
                  navigate(`/support`);
                }}
              >
                Suporte
              </PagesMenu>
              <PagesMenu
                onClick={() => {
                  setMobileMenu();
                  handleLogout();
                }}
              >
                Logout
              </PagesMenu>
            </>
          ) : null}

          {profile?.ADM === true ? (
            <PagesMenu
              onClick={() => {
                setMobileMenu();
                navigate(`/adm`);
              }}
            >
              Admin
            </PagesMenu>
          ) : null}
          {/* <PagesMenu>
            <SubmenuLogged style={{ position: "absolute" }} />
          </PagesMenu> */}
          {user ? (
            <SubmenuLogged />
          ) : (
            <>
              <PagesMenu
                onClick={() => {
                  setMobileMenu();
                  navigate(`/login`);
                }}
              >
                Login
              </PagesMenu>
              <PagesMenu
                onClick={() => {
                  setMobileMenu();
                  navigate(`/register`);
                }}
              >
                Registrar
              </PagesMenu>
            </>
          )}
        </MobileMenu>
      )}
    </>
  );
};

export default Menu;
