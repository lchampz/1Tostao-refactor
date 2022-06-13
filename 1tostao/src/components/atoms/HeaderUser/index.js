import React, { useEffect, useState } from 'react';
import panic from "../../../assets/img/panic.jpg";
import { Banner, Wrapper, Sections, AboutUser, Username, MenuImg, MenuUser, Mensagem, Contratar, UserImg } from './styled'
import profilePic from './../../../assets/img/profile.png'
import { useUserAuth } from '../../../request/hooks/Auth.js';
import { useNavigate} from 'react-router-dom'
import db from '../../../services/Firebase'
import {collection, getDocs, where, query} from 'firebase/firestore';

const HeaderUser = () => {
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const [profile, setProfile] = useState();
    
    const getUsers = async () => {
      const docRef = query(collection(db, "users"), where("uid", "==", user.uid));
      const querySnapshot = await getDocs(docRef);
      querySnapshot.forEach((doc) => {
        setProfile(doc.data());
      })
    }
    
    if(!user){
        navigate("/")
    }else{
      getUsers();
    }

    const handleLogout = async () => {
        try {
          await logOut();
          navigate("/");
        } catch (error) {
          console.log(error.message);
        }
      };

    return ( 
        <>
            <Banner bgImg={panic}/>
            <Wrapper>
            <MenuImg>
                <UserImg src={user && user.photoURL ? user && user.photoURL : profilePic}/> 
            </MenuImg>
            <MenuUser>
                <Username>{profile && profile.username ?profile && profile.username : user && user.displayName}</Username>
                <Mensagem>Enviar mensagem</Mensagem>
                <Contratar>Contratar</Contratar>
            </MenuUser>
            <AboutUser>
              <Sections>Portfólio</Sections>
              <Sections>Sobre</Sections>
            </AboutUser>
            </Wrapper>
               
            <button onClick={handleLogout}>Logout</button>
        </>
     );
}
 
export default HeaderUser;