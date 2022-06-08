import React from 'react';
import bg from "../../../assets/img/background.jpg";
import { Banner, Username, MenuUser, UserImg } from './styled'
import murilo from './../../../assets/img/murilo.png'
import { useUserAuth } from '../../../request/hooks/Auth.js';
import { useNavigate } from 'react-router-dom'
import {db} from '../../../services/Firebase'
import {collection, getDocs} from 'firebase/firestore';

const HeaderUser = () => {
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();

    if(!user){
        navigate("/")
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
            <Banner bgImg={bg}>
                
            </Banner>
            <MenuUser>
                <UserImg src={murilo}/>
                <Username>{user && user.email}</Username>
            </MenuUser>
            <button onClick={handleLogout}>Logout</button>
        </>
     );
}
 
export default HeaderUser;