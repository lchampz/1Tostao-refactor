import React, { useEffect, useState } from 'react';
import panic from "../../../assets/img/banner2.jpg";
import { Banner, Jobs, About, Wrapper, Sections, AboutUser, Username, MenuImg, MenuUser, Mensagem, Contratar, UserImg } from './styled'
import profilePic from './../../../assets/img/profile.png'
import { useUserAuth } from '../../../request/hooks/Auth.js';
import { useNavigate} from 'react-router-dom'

const HeaderUser = () => {
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
                    <UserImg src={user && user.photoURL ? user && user.photoURL : profilePic}/> 
                </MenuImg>
                <MenuUser>
                    <Username>{user && user.displayName ? user && user.displayName : profile && profile.username}</Username>
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
                   <h1>Sobre</h1>
                </About> }
            </Wrapper>
               
            <button onClick={handleLogout}>Logout</button>
        </>
     );
}
 
export default HeaderUser;