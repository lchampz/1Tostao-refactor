import React, { useEffect, useState } from 'react';
import panic from "../../../assets/img/banner2.jpg";
import twitter from "../../../assets/img/twitter_verde.png";
import instagram from "../../../assets/img/instagram_verde.png";
import email from "../../../assets/img/email_verde.png";
import { Banner, Jobs, About, Wrapper, Title, AboutInfo, Reviews, TitleAvaliation, AboutInfos, AboutContact, Avaliatons, Sections, AboutUser, Username, MenuImg, UserAva, MenuUser, WrapperAvaliation, Mensagem, Contratar, UserImg } from './styled'
import profilePic from './../../../assets/img/profile.png'
import {faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUserAuth } from '../../../request/hooks/Auth.js';
import { useNavigate} from 'react-router-dom'

const HeaderUser = ({width, position, marginL, marginMedia, marginLMedia, marginLe, marginT, marginB}) => {
    const { logOut, user, profile } = useUserAuth();
    const navigate = useNavigate();
    const [tab, setTab] = useState(1);
    
    useEffect(() => {
      const Redirect = () => {
        if(!user){
          navigate("/")
      }
      }
      Redirect()
  });

    const handleLogout = async () => {
        try {
          await logOut();
          navigate("/");
        } catch (error) {
          console.log(error.message);
        }
      };

      const switchTab = () => {
        if(tab === 1){
          setTab(2);
        }
      }
      const switchTab2 = () => {
        if(tab === 2){
          setTab(1);
        }
      }

    return ( 
        <>
            <Banner bgImg={panic}/>
              <Wrapper>
                <MenuImg>
                    <UserImg width={width} position={"absolute"} marginL={marginL} src={user && user.photoURL ? user && user.photoURL : profilePic}/> 
                </MenuImg>
                <MenuUser>
                    <Username marginMedia={marginMedia} marginB={marginB} marginT={marginT} marginLe={marginLe}>{user && user.displayName ? user && user.displayName : profile && profile.username}</Username>
                    <Mensagem>Enviar mensagem</Mensagem>
                    <Contratar>Contratar</Contratar>
                </MenuUser>
                <AboutUser>
                  <Sections onClick={switchTab2} style={tab === 1 ? {borderBottom: "1px solid #eee"} : {border:"none"}}>Portfólio</Sections>
                  <Sections  style={tab === 2 ? {borderBottom: "1px solid #eee"} : {border:"none"}} onClick={switchTab}>Sobre</Sections>
                </AboutUser>
                {tab === 1 ? 
                <Jobs>
                   <h1>Portfólio</h1>
                </Jobs> 
                : 
                <About>
                  <AboutInfos>

                      <AboutInfo>
                        <h1 className="title">Sobre {user && user.displayName ? user && user.displayName : profile && profile.username}</h1>
                        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <p className="data">Membro desde: 15 de março de 2022</p>
                      </AboutInfo>
                  <AboutContact>
                    <h1 className="title">Contato</h1>
                    <div className='contacts'>
                      <div className="redesS">
                        <img className="redes" alt="twitter" src={twitter}/>
                        <img className="redes" alt="email" src={email}/>
                        <img className="redes" alt="instagram" src={instagram}/>
                      </div>
                      <div className='infos'>
                          <p className="infoC">{profile && profile.tell ? profile && profile.tell : "(**)*****-****"}</p>
                          <p className="infoC">{user && user.email}</p>
                          <p className="infoC">{user && user.displayName ? user && user.displayName : profile && profile.username}</p>
                      </div>
                    </div>
                  </AboutContact>
                  </AboutInfos>
                  <Avaliatons>
                    <Title>
                     <h1 className='title'>Avaliações(139)</h1>
                    </Title>
                    <Reviews>
                      <WrapperAvaliation>
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <TitleAvaliation>"Demora e baixa qualidade!"</TitleAvaliation>
                          <UserAva>
                              <UserImg marginLMedia={"0rem"} width={'5rem'} position={"relative"} marginL={"0"} src={user && user.photoURL ? user && user.photoURL : profilePic}/>    
                              <Username marginMedia={"1rem"} marginB={"0"} marginT={"1.5rem"} marginLe={"1rem"}>{user && user.displayName ? user && user.displayName : profile && profile.username}</Username>
                          </UserAva>
                          <p className='data'>02 de dezembro de 2022</p>
                      </WrapperAvaliation>
                       {/* apagar */}
                      <WrapperAvaliation>
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <TitleAvaliation>"Demora e baixa qualidade!"</TitleAvaliation>
                          <UserAva>
                              <UserImg marginLMedia={"0rem"} width={'5rem'} position={"relative"} marginL={"0"} src={user && user.photoURL ? user && user.photoURL : profilePic}/>    
                              <Username marginMedia={"1rem"} marginB={"0"} marginT={"1.5rem"} marginLe={"1rem"}>{user && user.displayName ? user && user.displayName : profile && profile.username}</Username>
                          </UserAva>
                          <p className='data'>02 de dezembro de 2022</p>
                      </WrapperAvaliation>
                       {/* apagar */}
                    </Reviews>
                    <Reviews>
                      <WrapperAvaliation>
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <FontAwesomeIcon className="star" icon={faStar} />
                          <TitleAvaliation>"Demora e baixa qualidade!"</TitleAvaliation>
                          <UserAva>
                              <UserImg marginLMedia={"0rem"} width={'5rem'} position={"relative"} marginL={"0"} src={user && user.photoURL ? user && user.photoURL : profilePic}/>    
                              <Username marginMedia={"1rem"} marginB={"0"} marginT={"1.5rem"} marginLe={"1rem"}>{user && user.displayName ? user && user.displayName : profile && profile.username}</Username>
                          </UserAva>
                          <p className='data'>02 de dezembro de 2022</p>
                      </WrapperAvaliation>
                       {/* apagar */}
                      <WrapperAvaliation>
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <FontAwesomeIcon className="star" icon={faStar} />
                          <TitleAvaliation>"Demora e baixa qualidade!"</TitleAvaliation>
                          <UserAva>
                              <UserImg marginLMedia={"0rem"} width={'5rem'} position={"relative"} marginL={"0"} src={user && user.photoURL ? user && user.photoURL : profilePic}/>    
                              <Username marginMedia={"1rem"} marginB={"0"} marginT={"1.5rem"} marginLe={"1rem"}>{user && user.displayName ? user && user.displayName : profile && profile.username}</Username>
                          </UserAva>
                          <p className='data'>02 de dezembro de 2022</p>
                      </WrapperAvaliation>

                      {/* apagar */}
                    </Reviews>
                  </Avaliatons>
                </About> }
            </Wrapper>
               
            <button onClick={handleLogout}>Logout</button>
        </>
     );
}
 
export default HeaderUser;